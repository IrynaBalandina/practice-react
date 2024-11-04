import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { usersReducer } from "./users/usersReducer";
import { filterReducer } from "./filter/filterReducer";
import { shopReducer } from "./shop/shopSlice";

const usersConfig = {
  key: "usersKey",
  storage,
  //   whitelist: ["users"], // blacklist: ["showProfilesList"]
};

export const store = configureStore({
  reducer: {
    usersData: persistReducer(usersConfig, usersReducer),
    filter: filterReducer,
    shop: shopReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

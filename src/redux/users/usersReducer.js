import { createSlice } from "@reduxjs/toolkit";



// export const usersReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "users/addUser": {
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//       };
//     }
//     case "users/deleteUser": {
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.payload)
//       };
//     }
//     default:
//       return state;
//   }
// };
// export const addUser = (payload) => {
//   return {
//     type: "users/addUser",
//     payload
//   }
// }
// export const deleteUser = (payload) => {
//   return {
//     type: "users/deleteUser",
//     payload
//   }
// }

const INITIAL_STATE = {

    users: [],

};

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});



export const usersReducer = usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions;

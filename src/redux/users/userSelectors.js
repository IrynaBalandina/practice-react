import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/filterSelectors";

export const selectUsers = (state) => state.usersData.users;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) =>
    users.filter((user) => {
      return (
        user.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        user.email.toLowerCase().includes(filter.toLowerCase().trim()) ||
        user.phone.toLowerCase().includes(filter.toLowerCase().trim())
      );
    })
);
import {UsersState} from "./usersListType";



export const selectUserById = (state: { usersList: UsersState }, userId: number) =>
    state.usersList.entities[userId];

export const selectUsersStatus = (state: { usersList: UsersState }) => state.usersList.status;

import {createSlice} from "@reduxjs/toolkit";
import {UserType} from "@Types/user";

type InitialStateType = {
    user: UserType | null
}

const initialState: InitialStateType = {
    user: null

}

export const userControllerSlice = createSlice({
    name: 'userController',
    initialState,
    reducers: {
        setUserData: (state, {payload}:{payload: UserType})=>{
            state.user = payload

        }
    }
})

export const { actions: userControllerActions, reducer: userControllerReducer } = userControllerSlice;
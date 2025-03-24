import {combineSlices, configureStore} from '@reduxjs/toolkit'
import {userControllerSlice} from "./changeUserController.ts";
import {usersListSlice} from "./users-list/usersListSlice.ts";


const reducers = combineSlices(userControllerSlice, usersListSlice);

export const store = () => {
    return configureStore({
        reducer: reducers,
        middleware: getDefaultMiddleware => getDefaultMiddleware()
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
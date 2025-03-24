import { useDispatch, useSelector, useStore } from 'react-redux'
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {userControllerActions} from "./changeUserController";
import {AppDispatch, AppStore, RootState} from "./store";
import {usersListActions} from "./users-list/usersListSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()



const rootActions = {
    ...userControllerActions,
    ...usersListActions
}

export const useStoreActions = () => {
    const dispatch = useAppDispatch();
    return useMemo(()=>bindActionCreators(rootActions, dispatch), [dispatch])
}

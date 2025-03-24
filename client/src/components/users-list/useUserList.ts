import {useAppDispatch, useAppSelector, useStoreActions} from "@Lib/store/hooks";
import {selectUsersStatus} from "@Lib/store/users-list/usersListSelectors";
import React, {useCallback, useEffect} from "react";
import {loadPage} from "@Lib/store/users-list/usersListSlice";

export const useUserList = () =>{
    const activeUserId = useAppSelector(store=> store.userController.user?.id) || 1;
    const dispatch = useAppDispatch();
    const users = useAppSelector(store=>store.usersList.entities)
    const status = useAppSelector(selectUsersStatus);
    const currentPage = useAppSelector(store => store.usersList.currentPage);
    const {setCurrentPage} = useStoreActions()
    const hasMore = useAppSelector(store => store.usersList.hasMore);

    // При скроле, если есть еще страницы и данные не грузятся => загрузить еще данных
    // const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    //     const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    //     if (scrollHeight - (scrollTop + clientHeight) < 10000 && status !== 'loading' && hasMore) {
    //         dispatch(loadPage(currentPage+1))
    //         setCurrentPage(currentPage+1);
    //     }
    // },[status,hasMore, loadPage,setCurrentPage])

    const loadMoreUsers = () =>{
        if(!hasMore || status === 'loading') return;

        dispatch(loadPage(currentPage+1))
        setCurrentPage(currentPage+1);
    }

    return {
        activeUserId,
        users,
        // handleScroll,
        status,
        loadMoreUsers
    }
}
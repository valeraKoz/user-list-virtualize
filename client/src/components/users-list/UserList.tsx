import './style.css'
import React, {useEffect} from "react";
import {useUserList} from "@Components/users-list/useUserList";
import {UserListItem} from "@Components/users-list/UserListItem";
import { Virtuoso } from 'react-virtuoso'
import {LuLoaderCircle} from "react-icons/lu";
export const UserList = () => {
    const {
        activeUserId,
        users,
        loadMoreUsers
    } = useUserList()

    const userArray = Object.values(users);

    useEffect(() => {
        loadMoreUsers()
    },[])

    return (
            <Virtuoso
                style={{ height: '100%', width: '300px' }}
                data={userArray}
                endReached={loadMoreUsers}
                increaseViewportBy={3000}
                itemContent={(index, user) => (
                    <UserListItem id={user.id} key={user.id} isActive={user.id === activeUserId}/>
                )}
                components={{ Footer }}
            />
    )
}

const Footer = () => (
    <div className='flex justify-center p-3'>
        <LuLoaderCircle className='animate-spin' size={30}/>
    </div>
)


// {userArray.map((user) => (
//     <UserListItem id={user.id} key={user.id} isActive={user.id === activeUserId}/>
// ))}
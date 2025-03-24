import {useAppSelector, useStoreActions} from "@Lib/store/hooks";
import {FaUserAlt} from "react-icons/fa";
import React from "react";
import {selectUserById} from "@Lib/store/users-list/usersListSelectors";

export const UserListItem = (
    {id,isActive}: {id:number,isActive: boolean}
) => {
    const {setUserData} = useStoreActions();
    const user = useAppSelector(state=>selectUserById(state,id));

    return(
        <div onClick={()=>{
            setUserData(user)
        }}
             className={`${isActive ? 'bg-amber-500!':null} flex gap-2 px-5 py-2 cursor-pointer hover:bg-amber-500 odd:bg-gray-500 even:bg-gray-600 min-w-50 items-center `}>
            <FaUserAlt />
            <p>{user.name}</p>
        </div>
    )
}
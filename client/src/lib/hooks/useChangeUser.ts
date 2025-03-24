import {useState} from "react";
import {UserType} from "@Types/user";
import {updateUser} from "@Lib/store/users-list/usersListSlice";
import {useAppDispatch} from "@Lib/store/hooks";


export type ButtonStatus = 'save' | 'loading' | 'update'

export const useChangeUser = () => {
    const [status, setStatus] = useState<ButtonStatus>('update');
    const dispatch = useAppDispatch();

    const handleChangeUser = async (user: Partial<UserType>)=>{
        if(status === 'update'){
            setStatus('save');
        }
        if(status === 'save'){
            setStatus('loading');
            if(user) await dispatch(updateUser(user))
            setStatus('update')

        }
    }

    return {
        status,
        handleChangeUser
    }
}
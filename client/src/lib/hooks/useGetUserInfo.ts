import {useEffect, useState} from "react";
import {UserType} from "@Types/user";
import {useAppSelector, useStoreActions} from "@Lib/store/hooks";
import {fetchUserById} from "@Lib/api/fetchUserById";

export const useGetUserInfo = () => {
    const user = useAppSelector(state => state.userController.user);
    const {setUserData} = useStoreActions();
    const [data,setData] = useState<UserType | null>(null);

    useEffect(() => {
       const fetchData = async ()=>{
           if(user?.id){
               const response = await fetchUserById(user.id);
               setData(response)
           } else{
               const response = await fetchUserById(1)
               setData(response)
               setUserData(response)
           }
       }
       fetchData()
    },[user])
    return {
        ...data
    }
}
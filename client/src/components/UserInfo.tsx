import {FaUserAstronaut} from "react-icons/fa";
import {UpdateUserButton} from "./UpdateUserButton";
import {useChangeUser} from "@Lib/hooks/useChangeUser";
import {useGetUserInfo} from "@Lib/hooks/useGetUserInfo";
import {useEffect, useState} from "react";
import {UserInfoInput} from "./UserInfoInput";
import {UserType} from "@Types/user";


export const UserInfo = () => {
    const {status, handleChangeUser} = useChangeUser()
    const {id,name,department,company,jobTitle} = useGetUserInfo();
    const [newState, setNewState] = useState<Partial<UserType>>({
        id: 0,
        name: "",
        department: "",
        company: "",
        jobTitle: "",
    })

    useEffect(() => {
        if(id || name || department || company || jobTitle){
            setNewState({id, department, company, jobTitle,name})
        }
    },[id,name,department,company,jobTitle])



    return (
        <div className='min-w-[400px] flex flex-col gap-5'>
            <UserInfoInput status={status} value={newState.name!} setValue={setNewState} name={'name'}/>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex gap-6 items-center'>
                    <div>
                        <FaUserAstronaut size={60}/>
                    </div>
                    <div className='flex gap-6'>
                        <div className={'flex flex-col justify-between'}>
                            <p>Должность</p>
                            <p>Отдел</p>
                            <p>Компания</p>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <UserInfoInput status={status} value={newState.jobTitle!} setValue={setNewState} name={'jobTitle'}/>
                            <UserInfoInput status={status} value={newState.department!} setValue={setNewState} name={'department'}/>
                            <UserInfoInput status={status} value={newState.company!} setValue={setNewState} name={'company'}/>
                        </div>
                    </div>
                </div>
                <UpdateUserButton onClick={()=>handleChangeUser(newState)} status={status}/>
            </div>
        </div>
    )
}
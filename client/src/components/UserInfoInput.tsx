import {ButtonStatus} from "@Lib/hooks/useChangeUser";
import {Dispatch, SetStateAction} from "react";
import {UserType} from "@Types/user";

export const UserInfoInput = (
    {status, value, setValue}:{
        status: ButtonStatus;
        value: string;
        setValue: Dispatch<SetStateAction<Partial<UserType>>>;
        name: keyof UserType
    }
)=>{

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setValue((prevState)=>{
            return {
                ...prevState,
                name: e.target.value
            }
        })
    }
    return(
        <>
            {
                status==='update'? <p>{value}</p> : (
                    <input type="text" className={'border pl-3'} value={value} onChange={(e)=>handleChange(e)}/>
                )
            }
        </>
    )
}
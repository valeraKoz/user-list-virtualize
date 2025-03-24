import {UserType} from "@Types/user";
import axios from "axios";

export const updateUser = async (
    data:Partial<UserType>
)=>{
    console.log(data);
    return await axios.post('http://localhost:3000/update-user',data);
}
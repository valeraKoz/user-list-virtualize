import axios from "axios";

export const getUserList = async (
    page:number =1
)=>{
    return await axios.get(`http://localhost:3000/users?page=${page}`)
}
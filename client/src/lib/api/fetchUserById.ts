import axios from "axios";

export const fetchUserById = async (id: number)=> {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    return response.data[0];
}
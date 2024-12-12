import { atom, selector } from "recoil";
import axios from "axios";

const usersState=atom({
    key:'usersState',
    default:selector({
        key:'usersStateSelector',
        get:async ()=>{
            const res=await axios.get('http://localhost:3000/users')
            const users=res.data.users
            return users
        }
    })
})

export default usersState
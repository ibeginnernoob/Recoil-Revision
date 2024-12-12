import axios from "axios";
import { atomFamily, GetRecoilValue, selectorFamily } from "recoil";

const userDetailsState=atomFamily({
    key:'userDetailsState',
    default:selectorFamily({
        key:'userDetailsStateSelector',
        get:(userId)=>{
            return async ({get}:{get:GetRecoilValue})=>{
                const res=await axios.get(`http://localhost:3000/user/${userId}`)

                return res.data.userDetails
            }
        }
    })
})

export default userDetailsState
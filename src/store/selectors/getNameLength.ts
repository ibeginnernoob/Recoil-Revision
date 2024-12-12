import { selectorFamily } from "recoil";
import userDetailsState from "../atoms/userDetails";

const usernameLength=selectorFamily({
    key:'usernameLength',
    get:(userId:number)=>{
        return ({get})=>{
            const user=get(userDetailsState(userId))
            if(!user){
                return null
            }
            return user.name.length
        }
    }
})

export default usernameLength
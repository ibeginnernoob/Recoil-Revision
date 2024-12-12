import { selector } from "recoil";
import textState from "../atoms/count";

const getLength=selector({
    key:'getLength',
    get:({get})=>{
        const text=get(textState)

        return {
            length:text.length
        }
    }
})

export default getLength
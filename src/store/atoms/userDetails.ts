import { atomFamily } from "recoil";

const users=[
    {
        id:1,
        name:'Adheil'
    },
    {
        id:2,
        name:'Rohan'
    }
]

const userDetailsState=atomFamily({
    key:'userDetailsState',
    default:(userId)=>{
        return users.find(user=>{
            return userId===user.id
        })
    }
})

export default userDetailsState
import { useRecoilValue, useSetRecoilState } from "recoil"
import { useState } from "react"
import textState from "./store/atoms/count"
import getLength from "./store/selectors/getLength"
import userDetailsState from "./store/atoms/userDetails"
import usernameLength from "./store/selectors/getNameLength"

function App() {
  const [inputValue,setInputValue]=useState('')
  const setTextValue=useSetRecoilState(textState)
  const {length}=useRecoilValue(getLength)

  const userDetails1=useRecoilValue(userDetailsState(1))
  const userDetails2=useRecoilValue(userDetailsState(2))
  const usernameLength1=useRecoilValue(usernameLength(1))
  const usernameLength2=useRecoilValue(usernameLength(2))

  return (
    <div>
      <input type="text" onChange={(e)=>{
        setInputValue(e.target.value)
      }} />
      {length}
      <button onClick={()=>{
        setTextValue(inputValue)
      }}>Submit</button>

      <br />

      {userDetails1?.name}
      {userDetails2?.name}

      <br />

      {usernameLength1}
      {usernameLength2}
    </div>
  )
}

export default App

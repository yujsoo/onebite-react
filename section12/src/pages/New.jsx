import React from 'react'
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from '../components/Editor'
import { useNavigate } from "react-router-dom"
 
const New = () => {
  const nav = useNavigate();

  return (
    <div>
      <Header title={"새 일기 쓰기"} leftChild={<Button text={"< 뒤로"} onClick={() => nav(-1)}/>}></Header>
      <Editor></Editor>
    </div>
  )
}

export default New

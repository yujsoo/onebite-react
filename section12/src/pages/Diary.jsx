import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { useNavigate } from 'react-router-dom'


const Diary = () => {
  const nav = useNavigate();

  return (
    <div>
      <Header 
        title={"yyyy-mm-dd 기록"} 
        leftChild={<Button text={"< 뒤로"} onClick={() => nav(-1)}/>} 
        rightChild={<Button text={"수정하기"}/>}
      />
      <Viewer/>
    </div>
  )
}

export default Diary

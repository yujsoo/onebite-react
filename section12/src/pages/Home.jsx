import React , { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'

const Home = () => { 
  const [pivoDate, setPivoDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivoDate(
      new Date(pivoDate.getFullYear(), pivoDate.getMonth() + 1)
    );
  }

  const onDecreaseMonth = () => {
    setPivoDate(
      new Date(pivoDate.getFullYear(), pivoDate.getMonth() - 1)
    )
  }

  return (
    <div>
      <Header 
        title={`${pivoDate.getFullYear()}년 ${pivoDate.getMonth() + 1}월`} 
        leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>} 
        rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}/>
      <DiaryList/>
    </div>
  )
}

export default Home

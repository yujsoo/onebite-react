import React , { useContext, useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { DiaryStateContext } from '../App'
import usePageTitle from '../hooks/usePageTitle'

const getMonthlyData = (pivoDate, data) => {
  // 시작시간
  const beginTime = new Date( pivoDate.getFullYear(), pivoDate.getMonth(),1,0,0,0).getTime();
  // 끝시간
  const endTime = new Date(pivoDate.getFullYear(),pivoDate.getMonth() + 1,0,23,59,59).getTime();

  return data.filter((item) => beginTime <= item.createDate && item.createDate <= endTime)
}


const Home = () => { 
  usePageTitle(`감정 일기장`)
  const data = useContext(DiaryStateContext);
  //console.log(data)
  const [pivoDate, setPivoDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivoDate,data);
  
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
      <DiaryList data={monthlyData}/>
    </div>
  )
}

export default Home

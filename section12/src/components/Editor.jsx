import React from 'react'
import './Editor.css'
import EmotionItem from './EmotionItem'
import Button from './Button'
import { useState } from 'react'

const emotionList = [
    {
        emotionId:1,
        emotionName:"완전 좋음"
    },
    {
        emotionId:2,
        emotionName:"좋음"
    },
    {
        emotionId:3,
        emotionName:"그럭저럭"
    },
    {
        emotionId:4,
        emotionName:"나쁨"
    },
    {
        emotionId:5,
        emotionName:"끔찍함"
    }
]

// 데이트 객체를 날짜 -> "2024-02-20" 형태의 문자열로 변환하는 함수
const getStringDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`
    }  
    return `${year}-${month}-${date}`
}


const Editor = () => {
    // 사용자가 입력한 일기 내용
    const [input, setInput] = useState({
        createDate:new Date(),
        emotionId: 3,
        content:""
    });

    const emotionId = 2;

  return (
    <div className='editor'>
        <section className='date-section'>
            <h4>오늘의 날짜</h4>
            <input type="date" name="" id="" value={getStringDate(input.createDate)}/>
        </section>
        <section className='emotion-section'>
            <h4>오늘의 감정</h4>
            <div className='emotion-list-wrapper'>
                {emotionList.map((item) => <EmotionItem key={item.emotionId} {...item} isSelected={item.emotionId === emotionId }/>)}
            </div>
        </section>
        <section className='content-section'>
            <h4>오늘의 일기</h4>
            <textarea placeholder='오늘은 어땠나요?'/>
        </section>
        <section className='button-section'>
            <Button text={"취소하기"}/>
            <Button text={"작성완료"} type={"POSITIVE"}/>
        </section>
    </div>
  )
}

export default Editor
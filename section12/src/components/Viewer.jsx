import React from 'react'
import './Viewer.css'
import { getEmotionImage } from '../util/get-emotion-image'
import { emotionList } from '../util/constant'

const Viewer = () => {
    const emotionId = 1;
    const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));

    return (
        <div className='viewer'>
            <section className='img-section'>
                <h4>오늘의 감정</h4>
                <div className={`emotion-img-wrapper emotion-img-wrapper-${emotionId}`}>
                    <img src={getEmotionImage(emotionId)}/>
                    <div>{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className='content-section'>
                <h4>오늘의 일기</h4>
                <div className='content-wrapper'>
                    <p>....</p>
                </div>
            </section>
        </div>
    )
}

export default Viewer
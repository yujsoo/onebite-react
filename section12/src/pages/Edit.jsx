import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Editor from '../components/Editor'
import Button from '../components/Button'
import { DiaryDispatchContext, DiaryStateContext } from '../App'

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext)
  const data = useContext(DiaryStateContext)
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(()=> {
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id))

    if (!currentDiaryItem) { //currentDiaryItem이 존재하지 않는다 (사용자가 없는 페이지에 들어감)
      window.alert("존재하지 않는 일기입니다.")
      nav('/',{replace:true})
    }
    setCurrentDiaryItem(currentDiaryItem)
  },[params.id,data])

  // 삭제하기 클릭했을 때
  const onClickDelete = () => {
    if (
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")
    ) {
      //인수 전달 -> useParams를 이용
      onDelete(params.id);
      nav("/",{replace:true})
    }
  }

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")){
      onUpdate(
        params.id, 
        input.createDate.getTime(), 
        input.emotionId, 
        input.content
      )
      nav('/', {replace:true})
    }
  }

  return (
    <div>
      <Header 
        title={"일기 수정하기"} 
        leftChild={<Button text={"< 뒤로"} onClick={() => nav(-1)}/>} 
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"}
        onClick={onClickDelete}
        />}
        />
        <Editor initData={currentDiaryItem} onSubmit={onSubmit}></Editor>
    </div>
  )
}

export default Edit
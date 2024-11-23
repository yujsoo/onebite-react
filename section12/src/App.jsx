import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import { useReducer, useRef, createContext } from 'react';

const mokData = [
  {
    id:1,
    createDate:new Date().getTime(),
    emotionId:1,
    content:"1번 일기 내용"
  },
  {
    id:2,
    createDate:new Date().getTime(),
    emotionId:2,
    content:"2번 일기 내용"
  }
]

function reducer(state,action){
  switch(action.type) {
    case 'CREATE' : return [action.data, ...state]
    case 'UPDATE' : return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item )
    case 'DELETE' : return state.filter((item) => String(item.id) != String(action.id))
    default : return state;
  }
}

// 일기 데이터를 공급할 컨텍스트부터 만들기
const DiaryStateContext = createContext();

// 함수 공급할 컨텍스트 만들기
const DiaryDispatchContext = createContext();


function App() {
  // 일기관리 데이터
  const [data, dispatch] = useReducer(reducer,mokData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current++,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type:"UPDATE",
      data:{
        id,
        createDate,
        emotionId,
        content
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type:"DELETE",
      id
      
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate,
          onUpdate,
          onDelete
        }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/new" element={<New></New>}></Route>
            <Route path="/diary/:id" element={<Diary></Diary>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App

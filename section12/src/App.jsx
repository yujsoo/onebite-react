import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import { useReducer } from 'react';

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
  return state;
}

function App() {
  // 일기관리 데이터
  const [data, dispatch] = useReducer(reducer,mokData);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/new" element={<New></New>}></Route>
        <Route path="/diary/:id" element={<Diary></Diary>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  )
}

export default App

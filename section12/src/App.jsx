import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

// 페이지를 나눠주기 위해서는 먼저 각각의 페이지 역할을 하게 될 컴포넌트를 먼저 만들어줘야함. -> 페이지도 컴포넌트로 이루어짐!
// 1. "/" : 모든 일기를 조회하는 home페이지
// 2. "/new" : 새로운 일기를 작성하는 new페이지
// 3. "/diary" : 일기를 상세히 조회하는 diary페이지

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/new" element={<New></New>}></Route>
      <Route path="/diary" element={<Diary></Diary>}></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
      {/*
        * 와일드카드 스위치케이스문의 디폴트 문과 비슷
      위에이 ㅆ는 경로에 일치하지않았을떼 이 경로를 실행
      */}
    </Routes>
  )
}

export default App

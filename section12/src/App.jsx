import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';

import emotion1 from "./assets/emotion1.png";
import emotion2 from "./assets/emotion2.png";
import emotion3 from "./assets/emotion3.png";
import emotion4 from "./assets/emotion4.png";
import emotion5 from "./assets/emotion5.png";

function App() {
  return (
    <>
      <div>
        <img src="./emotion1.png" alt="" />
        <img src="./emotion2.png" alt=""/>
      </div>
      <div>
        <img src={emotion1} alt=""/>
        <img src={emotion2} alt=""/>
        <img src={emotion3} alt=""/>
        <img src={emotion4} alt=""/>
        <img src={emotion5} alt=""/>
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/new" element={<New></New>}></Route>
        <Route path="/diary/:id" element={<Diary></Diary>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  )
}

export default App

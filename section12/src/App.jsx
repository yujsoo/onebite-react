import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import { getEmotionImage } from './util/get-emotion-image';

function App() {
  return (
    <>
      <div>
        <img src={getEmotionImage(1)} alt=""/>
        <img src={getEmotionImage(2)} alt=""/>
        <img src={getEmotionImage(3)} alt=""/>
        <img src={getEmotionImage(4)} alt=""/>
        <img src={getEmotionImage(5)} alt=""/>
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

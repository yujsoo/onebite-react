import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header 
        title={"Header"} 
        leftChild={<Button text={"left"}/>}
        rightChild={<Button text={"right"}/>}
      />
      <Button type="POSITIVE" text={"POSITIVE"}/>
      <Button type="NEGATIVE" text={"NEGATIVE"}/>
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

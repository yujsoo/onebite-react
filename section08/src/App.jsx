import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래하기",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래 연습하기",
    date : new Date().getTime(),
  }
]

function App() {
  const [todo, setTodo] = useState(mockData);
  const idRef = useRef(3);
  
  const onCreate = (contents) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content : contents,
      date : new Date().getTime(),
    }

    setTodo([newTodo,...todo])
  }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todo={todo}/>
    </div>
  )
}

export default App

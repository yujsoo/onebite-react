import './App.css'
import { useState, useRef, useReducer, useCallback, createContext } from 'react'
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

function reducer(state,action){
  switch(action.type){
    case 'CREATE' : return [action.data, ...state]
    case 'UPDATE' : 
      return state.map( (item) => item.id === action.targetId ? {...item, isDone : !item.isDone} : item)
    case 'DELETE' :
      return state.filter( (item) => item.id !== action.targetId )
    default : return state;
  }
}

// createContext()를 이용하여 새로운 컨텍스트 객체 만들어보기 
export const TodoContext = createContext();
// console.log(TodoContext)
// Provider(공급자)의 프로퍼티를 잘 알아두자.

// App 컴포넌트 안에 만들지 않는 이유는?
// 데이터를 하위에 공급만 해주면 될뿐 App 컴포넌트가 리렌더링이 계속 일어날때마다 컨텍스트가 새로 생성될 필요는 없다.

function App() {
  const [todo, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);
  
  const onCreate = useCallback((contents) => {
    dispatch({
      type : "CREATE",
      data : {
          id : idRef.current++,
          isDone : false,
          content : contents,
          date : new Date().getTime(),
      }
    })
  },[])

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type:"UPDATE",
      targetId : targetId
    })
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId : targetId
    })
  },[])

  /*
  // 함수 메모제이션
  // 빈 배열로 전달시, 마운트 될 때 즉 함수를 딱 한 번만 생성하고 그 뒤는 실행 X
  const func = useCallback(() => {

  },[])
  */

  return (
    <div className="App">
      <Header/>
      <TodoContext.Provider value={{todo, onCreate, onUpdate, onDelete}}>
        <Editor/>
        <List/>
      </TodoContext.Provider>
    </div>
  )
}

export default App

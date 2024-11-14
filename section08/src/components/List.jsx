import React, { useState } from 'react'
import './List.css'
import TodoItem from './TodoItem'

const List = ({ todo }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilterData = () => {
    if (search == "") {
      return todo
    }
    return todo.filter( (todo) => todo.content.includes(search) )
  }

  const filterTodo = getFilterData();


  return (
    <div className='list'>
        <h4>Todo List</h4>
        <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={onChangeSearch}/>
        <div className='todo-wrapper'>
            { todo.map((item) => {return <TodoItem key={item.id} {...item}/>}) }
        </div>
    </div>
  )
}

export default List
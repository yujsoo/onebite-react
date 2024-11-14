import React from 'react'
import './List.css'
import TodoItem from './TodoItem'

const List = () => {
  return (
    <div className='list'>
        <h4>Todo List</h4>
        <input type="text" placeholder="검색어를 입력하세요"/>
        <div className='todo-wrapper'>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    </div>
  )
}

export default List
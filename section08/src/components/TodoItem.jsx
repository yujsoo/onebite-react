import React from 'react'
import './TodoItem.css'

const TodoItem = ({ id, isDone, content, date }) => {
  return (
    <div className="todo-item">
        <input type='checkbox' checked={isDone} readOnly/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button>삭제</button>
    </div>
  )
}

export default TodoItem
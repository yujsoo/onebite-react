import React from 'react'
import './Editor.css'

const Editor = () => {
  return (
    <div className='editor'>
        <input type='text' placeholder='새로운 할일을 추가하세요'/>
        <button type='button'>추가</button>
    </div>
  )
}

export default Editor
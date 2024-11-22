import React from 'react'
import './Header.css';

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Header className="Header">
        <div className='header_left'>{leftChild}</div>
        <div className='header_center'>{title}</div>
        <div className='header_right'>{rightChild}</div>
    </Header>
  )
}

export default Header
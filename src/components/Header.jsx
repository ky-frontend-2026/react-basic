import React from 'react'
import Nav from './Nav'
import "./style/Header.css"
const Header = () => {
  return (
    <header>
        <div className="inner">

        <h1>header title</h1>
        <Nav/>
        </div>
    </header>
  )
}

export default Header

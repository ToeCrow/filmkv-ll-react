import React from 'react'
import Logo from '../Logo/Logo'
import Nav from './Nav/Nav'
import Animation from './Animation/Animation'

const Header = () => {
  return (
    <header>
      <div id="header-container">
        <Logo id="logo"/>
        <Nav />
      </div>
      <Animation />
    </header>
  )
}

export default Header
import React from 'react';
import './layout.scss';
import menu from '../chunks/menu'

export default (props) => {
  return (
    <>
      <div id="menu-animation">
        <div id="sculpt" />
      </div>
      <nav id="menu">
        <div id="welcome">
          <div id="profile"></div>
          <h1>Welcome! I'm David.</h1>
          <h2>What would you like to see?</h2>
        </div>
        {menu}
      </nav>
      <div id="content" >
        {props.children}
      </div>
    </>
  )
}
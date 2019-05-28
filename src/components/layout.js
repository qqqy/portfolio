import React from 'react';
import './layout.scss';

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
        <ul>
          <li>Journey</li>
          <li>Journey</li>
          <li>Journey</li>
          <li>Journey</li>
          <li>Journey</li>
        </ul>
      </nav>
      <div id="content" >
        {props.children}
      </div>
    </>
  )
}
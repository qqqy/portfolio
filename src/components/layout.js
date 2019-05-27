import React from 'react';
import './layout.scss';

export default (props) => {
  return (
    <>
      <nav id="menu">
      <div id="sculpt">

      </div>
      </nav>
      <div id="content" >
      {props.children}
      </div>
    </>
  )
}
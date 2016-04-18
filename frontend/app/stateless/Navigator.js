import React from 'react';

const Navigator = (props) => {
  return (
    <div className="home-navigator">
      <div onClick={props.onResetFilter}>
        <h1>{props.name}</h1>
      </div>
      <div>
        <ul>
          <li><a href={props.linkedin}>LinkedIn</a></li>
          <li><a href={props.github}>Github</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigator;

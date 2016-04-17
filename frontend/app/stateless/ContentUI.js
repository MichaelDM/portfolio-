import React from 'react';

const ContentUI = (props) => {
  console.log(props.object);
  return (
    <div>
      <div><img src={props.object.image}/></div>
      <p className="dummy-text">{props.object.title}</p>
      <h1 className="dummy-text">{props.object.content}</h1>
    </div>
  )
}

export default ContentUI;

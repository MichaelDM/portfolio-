import React from 'react';

const GridImageUI = React.createClass({
  render(){
    const returnClass = function(skills) {
      if (typeof(skills) === 'object'){
        return skills.join(' ');
      }
    };
    return (
      <figure className={returnClass(this.props.object.skills)+' gridImage'}>
        <img src={this.props.object.thumbnail} />
      </figure>
    )
  }
})

export default GridImageUI;

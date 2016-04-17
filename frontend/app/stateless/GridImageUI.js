import React from 'react';

const GridImageUI = React.createClass({
  componentDidMount(){
  },
  render(){
    return (
      <figure>
        <img src={this.props.object.thumbnail} />
      </figure>
    )
  }
})

export default GridImageUI;

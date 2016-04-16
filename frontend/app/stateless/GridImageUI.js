import React from 'react';

const GridImageUI = React.createClass({
  componentDidMount(){
    console.log('obj is', this.props.object);
  },
  render(){
    return (
      <figure>
        <img src={this.props.object.thumbnail} alt="img01"/>
      </figure>
    )
  }
})

export default GridImageUI;

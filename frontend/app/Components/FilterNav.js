import React from 'react';

const FilterNav = React.createClass({
  getInitialState(){
    return {
      projects: []
    }
  },
  componentDidMount(){
    this.setState({
      projects: this.props.allProjects
    });
  },
  render(){
    return (
      <h1>hello</h1>
    )
  }
});

export default FilterNav;

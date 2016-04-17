import React from 'react';

const FilterNav = React.createClass({
  getInitialState(){
    return {
      projects: []
    }
  },
  componentDidMount(){
    console.log('props.project is ', this.props.allProjects);
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

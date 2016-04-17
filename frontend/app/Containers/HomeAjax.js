import React from 'react';
import Home from './Home';
import helpers from '../Utils/ajaxHelpers';

const HomeAjax = React.createClass({
  getInitialState(){
    return {
      projects: [
        {title: ''},
        {thumbnail: ''},
        {skills: ''},
        {image: ''},
        {content: ''}
      ]
    }
  },
  //making ajax call to get all projects to pass them down as a prop
  componentDidMount(){
    helpers.projects.getProjects()
    .then(function(response){
      this.setState({
        filteredProjects: response.data,
        projects: response.data
      });
      console.log('state of projects is', this.state.projects);
    }.bind(this));
  },
  render(){
    return <Home allProjects={this.state.projects}/>
  }
});

export default HomeAjax;

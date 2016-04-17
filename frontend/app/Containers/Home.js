import React from 'react';
import HomeUI from '../Components/HomeUI';
import helpers from '../Utils/ajaxHelpers';

const Home = React.createClass({
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
    return <HomeUI allProjects={this.state.projects}/>
  }
});

export default Home;

import React from 'react';
import HomeUI from '../Components/HomeUI';
import helpers from '../Utils/ajaxHelpers';

const Home = React.createClass({
  getInitialState(){
    return {
      projects: [],
    };
  },
  componentDidMount(){
    helpers.projects.getProjects()
    .then(function(response){
      this.setState({
        projects: response.data
      });
      console.log('state of projects is', this.state.projects);
    }.bind(this));
  },
  render(){
    return(
      <HomeUI />
    )
  }
});

export default Home;

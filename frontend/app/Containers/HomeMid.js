import React from 'react';
import HomeUI from '../Components/HomeUI';
import FilterNav from '../Components/FilterNav';

const Home = React.createClass({
  render(){
    return(
      <div className="homeExternal">
        <HomeUI allProjects={this.props.allProjects}/>
      </div>
    )
  }
})

export default Home;

import React from 'react';
import HomeUI from '../Components/HomeUI';
import FilterNav from '../Components/FilterNav';
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
      ],
      uniqueSkills: []
    }
  },
  //making ajax call to get all projects to pass them down as a prop
  componentDidMount(){
    helpers.projects.getProjects()
    .then(response => {
      //getting all skills (with redundancies)
      const allSkills= response.data.map(obj => {
          return obj.skills
      });
      this.setState({
        uniqueSkills: this.createListUniqueSkills(allSkills),
        projects: response.data
      });
    });
  },
  createListUniqueSkills(arr){
    const uniqueSkills = {};
    const uniqueSkillsArr = []
    // console.log('arr is ', arr);
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<arr[i].length; j++){
        if (uniqueSkills[arr[i][j]] === undefined ){
          uniqueSkills[arr[i][j]] = [arr[i][j]];
        }
      }
    }
    for (var skill in uniqueSkills){
      uniqueSkillsArr.push(skill);
    }
    // console.log('usk', uniqueSkills);
    return uniqueSkillsArr;
  },
  render(){
    return (
      <div>
        <FilterNav
          uniqueSkills={this.state.uniqueSkills}
        />
        <HomeUI
          allProjects={this.state.projects}
          classieUpdateCount={this.state.classieUpdateCount}
          />
      </div>
    )
  }
});



export default Home;

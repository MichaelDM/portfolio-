import React from 'react';
import HomeUI from '../Components/HomeUI';
import FilterNav from '../Components/FilterNav';
import Navigator from '../stateless/Navigator';
import helpers from '../Utils/ajaxHelpers';

const Home = React.createClass({
  getInitialState(){
    return {
      projects: '',
      projectsFiltered:[
        {title: ''},
        {thumbnail: ''},
        {skills: ''},
        {image: ''},
        {content: ''}
      ],
      uniqueSkills: [],
      classieUpdateCount: 0,
      name: '',
      linkedin: '',
      github: ''
    }
  },
  //making ajax call to get all projects to pass them down as a prop
  componentDidMount(){
    //getting navigator
    // getting project
    helpers.projects.getProjects()
    .then(response => {
      //getting all skills (with redundancies)
      const allSkills= response.data.map(obj => {
          return obj.skills
      });
      var responseProjects= response.data;
      // getting navigator (because need to setState only once for classie to be updated only once and work)
      helpers.users.getUsers()
      .then(response => {
        this.setState({
          name: response.data[0].name,
          linkedin: response.data[0].linkedin,
          github: response.data[0].github,
          uniqueSkills: this.createListUniqueSkills(allSkills),
          projects: responseProjects,
          projectsFiltered: responseProjects
        });
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
  handleFilter(e){
    const filterKey = e.target.innerText;
    // find all projects with that filter key
    // creating an new of projects with a skill that match the filter key
    const filteredProjects = this.state.projects.filter( project =>{
      // got through each project
      // make sure skills is an array
      if (typeof(project.skills) !== "string"){
        // loop through all the skills
        for (var j=0; j<project.skills.length; j++){
          // return true if one of the skills match with filter key
          if (project.skills[j] === filterKey){
            return true
          }
        }
      }
    });
    // changing the state of the filtered projects to pass on and making sure classie is only loaded once
    this.setState({
      projectsFiltered: filteredProjects,
      classieUpdateCount: this.state.classieUpdateCount + 1
    });
  },
  handleResetFilter(){
    this.setState({
      projectsFiltered: this.state.projects,
      classieUpdateCount: this.state.classieUpdateCount + 1
    });
  },
  render(){
    return (
      <div>
        <Navigator
          name={this.state.name}
          linkedin={this.state.linkedin}
          github={this.state.github}
          onResetFilter={this.handleResetFilter}
        />
        <FilterNav
          uniqueSkills={this.state.uniqueSkills}
          onFilter={this.handleFilter}
        />
        <HomeUI
          allProjects={this.state.projectsFiltered}
          classieUpdateCount={this.state.classieUpdateCount}
          />
      </div>
    )
  }
});



export default Home;

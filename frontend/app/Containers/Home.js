import React from 'react';
import HomeUI from '../Components/HomeUI';
import FilterNav from '../Components/FilterNav';
import helpers from '../Utils/ajaxHelpers';
import Navigator from '../stateless/Navigator';


const Home = React.createClass({
  getInitialState(){
    return {
      projects:[
        {title: ''},
        {thumbnail: ''},
        {skills: ''},
        {image: ''},
        {content: ''}
      ],
      uniqueSkills: [],
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
          projects: responseProjects
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
  handleResetFilter(){
    var allGrids = document.querySelectorAll('.gridImage');
      console.log(allGrids);
      console.log(typeof(allGrids));
      for (var i=0; i<allGrids.length; i++){
        allGrids[i].style.display = 'inline-block';
      }
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
        <FilterNav uniqueSkills={this.state.uniqueSkills}/>
        <HomeUI allProjects={this.state.projects}/>
      </div>
    )
  }
});



export default Home;

import React from 'react';

const SkillList= React.createClass({
  render(){
    const skills = function(arr){
      if (typeof(arr)!== 'object'){
        return '';
      } else {
        arr.map(obj=>{
            return <span>{obj}</span>
        });
      }
    };
    return (
      <li>{skills(this.props.allSkills)}</li>
    )
  }
});

const GridImageUI = React.createClass({
  gitInitialState(){
    return {
      skills: ''
    }
  },
  componentDidUpdate(){

  }
  render(){
    const returnClass = function(skills) {
      if (typeof(skills) === 'object'){
        return skills.join(' ');
      }
    };
    return (
      <figure className={returnClass(this.props.object.skills)+' gridImage'}>
        <span className="imageWrapper">
          <img src={this.props.object.thumbnail} />
        </span>
        <span className="skillListGrid">
          <ul>
            <SkillList allSkills={this.props.object.skills}/>
          </ul>
        </span>
        <div className="projTitle">
          {this.props.object.title}
        </div>
      </figure>
    )
  }
})

export default GridImageUI;

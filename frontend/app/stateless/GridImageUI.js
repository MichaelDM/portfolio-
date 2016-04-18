import React from 'react';

const SkillList= React.createClass ({
  render (){
    // console.log('this props allSkills', this.props.allSkills);
    // console.log(typeof(this.props.allSkills));
    return (
      <ul>
        {this.props.allSkills.map(function(obj){
          return <li key={obj}>{obj}</li>
        })}
      </ul>
      )
    }
});

const GridImageUI = React.createClass({
  getInitialState(){
    return {
      arrLength : 0,
      skillList: ['']
    }
  },
  componentDidUpdate(){
    if (this.props.object.skills.length === this.state.arrLength){
      console.log('skill state same');
    } else {
      this.setState({
        arrLength: this.props.object.skills.length,
        skillList: this.props.object.skills
      });
      console.log('changing skill state');
    }
  },
  render(){
    const returnClass = function(skills) {
      if (typeof(skills) === 'object'){
        return skills.join(' ');
      }
    };
    return (
      <figure className={returnClass(this.props.object.skills)+' gridImage'}>
        <span className="imageWrapper">
          <span className="imageWrapperInternal">
            <img src={this.props.object.thumbnail} />
            <span className="skillListGrid">
                <SkillList allSkills={this.state.skillList}/>
            </span>
          </span>
        </span>
        <div className="projTitle">
          {this.props.object.title}
        </div>
      </figure>
    )
  }
})

export default GridImageUI;

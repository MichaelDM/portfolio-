import React from 'react';

const FilterNav = React.createClass({
  componentDidUpdate(){
    // console.log('when updated', this.props.uniqueSkills);
  },
  render(){
    return (
      <div>
        {this.props.uniqueSkills.map((obj, key)=>{
          return (
            <div className="filterList" key={key} name={obj} onClick={this.props.onFilter}>
              {obj}
            </div>
        )})}
      </div>
    )
  }
});


export default FilterNav;

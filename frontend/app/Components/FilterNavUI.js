import React from 'react';

const FilterNavUI = React.createClass({
  render(){
    return (
      <div>
        {this.props.uniqueSkills.map((obj, key)=>{
          return (
            <div className="filterList"
              key={key}
              name={obj}
              onClick={this.props.onFilter}>
              {obj}
            </div>
        )})}
      </div>
    )
  }
});

export default FilterNavUI;

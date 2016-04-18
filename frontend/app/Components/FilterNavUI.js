import React from 'react';

const FilterNavUI = React.createClass({
  render(){
    return (
      <div className="filterNavExternal">
        <div className="grid-wrap">
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
        </div>
      </div>
    )
  }
});

export default FilterNavUI;

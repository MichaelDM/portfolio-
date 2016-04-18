import React from 'react';
import FilterNavUI from './FilterNavUI';

const FilterNav = React.createClass({
  handleFilter(e){
    var classTarget = e.target.innerText;
    console.log(classTarget);
    var elTargets = document.querySelectorAll('.'+classTarget);
    console.log('elements are ', elTargets);
    var allGrids = document.querySelectorAll('.gridImage');
    console.log(allGrids);

    // loop through DOM elements
    for (var i=0; i<elTargets.length; i++){
      // if DOM element has class
      if (elTargets[i].classList.length){
        // loop through array of class
        for (var j=0; j<elTargets[i].classList.length; j++){
          // if one element in array matches or filter
          if (elTargets[i].classList[j] === e.target.innerText){
            console.log('found');
          }
        }
      }
    }
  },
  render(){
    return (
      <FilterNavUI
        uniqueSkills={this.props.uniqueSkills}
        onFilter={this.handleFilter}
      />
    )
  }
});


export default FilterNav;

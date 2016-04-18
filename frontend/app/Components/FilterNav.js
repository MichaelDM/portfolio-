import React from 'react';
import FilterNavUI from './FilterNavUI';

const FilterNav = React.createClass({
  handleFilter(e){
    // var classTarget = e.target.innerText;
    // console.log(classTarget);
    // var elTargets = document.querySelectorAll('.'+classTarget);
    // console.log('elements are ', elTargets);
    var allGrids = document.querySelectorAll('.gridImage');
    console.log(allGrids);

    // loop through DOM elements
    for (var i=0; i<allGrids.length; i++){
      // if DOM element has class
      if (allGrids[i].classList.length){
        // loop through array of class
        let classResult = false;
        for (var j=0; j<allGrids[i].classList.length; j++){
          // if one element in array matches or filter
          if (allGrids[i].classList[j] === e.target.innerText){
            classResult= true;
          }
        }
        if (classResult){
          allGrids[i].style.display = 'inline-block';
        } else {
          allGrids[i].style.display = 'none';
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

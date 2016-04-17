import React from 'react';
import GridImageUI from '../stateless/GridImageUI';
import codeDrops from '../codeDrops/codeDrops';
import ContentUI from '../stateless/ContentUI';

const HomeUI = React.createClass({
  componentDidUpdate(){
    if (this.props.classieUpdateCount <1){
      codeDrops(window);
    }
  },
  render (){
    return (
      <div >
        <section className="grid3d vertical" id="grid3d">
          <div className="grid-wrap">
            <div className="grid">
              {this.props.allProjects.map(function(obj, key){
                return ( <GridImageUI key={key} object={obj}/> )
              })}
            </div>
          </div>
          <div className="content">
            {this.props.allProjects.map(function(obj, key){
              return ( <ContentUI key={key} object={obj}/> )
              })}
            <span className="loading"></span>
            <span className="icon close-content"></span>
          </div>
        </section>
      </div>
    );
  }
});

export default HomeUI;

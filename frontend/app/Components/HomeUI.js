import React from 'react';
import GridImageUI from '../stateless/GridImageUI';
import codeDrops from '../codeDrops/codeDrops';

const HomeUI = React.createClass({
  componentDidUpdate(){
    codeDrops(window);
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
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">Michael</p>
              <p className="dummy-text">is the best</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
              <p className="dummy-text">The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.</p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">Test Last </p>
            </div>
            <div>
              <div className="dummy-img"></div>
              <p className="dummy-text">Text after last </p>
            </div>
            <span className="loading"></span>
            <span className="icon close-content"></span>
          </div>
        </section>
      </div>
    );
  }
});

export default HomeUI;

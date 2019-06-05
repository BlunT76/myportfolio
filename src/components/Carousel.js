import React from 'react';

function Carousel (props) {
  const { proj } = props;
  return (
    <div className="mb-2 bg-dark">
      <div id="carouselApps" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item carousel-custom active" data-interval="5000">
            {proj && <img src={proj[0].imgurl} className="d-block" alt="..." />}
            <div className="carousel-caption d-none d-md-block">
            {proj &&<h2><span className="badge badge-dark">{proj[0].title}</span></h2>}
            </div>
          </div>
          {/* eslint-disable-next-line array-callback-return */}
          {proj && proj.map((elm, index) => {
            if (index !== 0) {
              return (<div className="carousel-item carousel-custom" data-interval="5000" key={index}>
                <img src={elm.imgurl} className="d-block" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2><span className="badge badge-dark">{elm.title}</span></h2>
                </div>
              </div>)
            }
          })}
        </div>
        <a className="carousel-control-prev" href="#carouselApps" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselApps" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;

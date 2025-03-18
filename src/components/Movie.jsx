import React from "react";
const Movie = (props) => {
  let { img, name, disc } = props;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card my-3">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{disc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;

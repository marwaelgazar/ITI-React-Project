import React, { useState } from "react";
import Slider from "./Slider";
import Movie from "./Movie";
import { v4 as uuid } from "uuid";

const Movies = () => {
  const [moviesArray] = useState([
    { img: "assets/images/1.jpeg", name: "movie", disc: "cartoon" },
    { img: "assets/images/2.jpeg", name: "movie", disc: "cartoon" },
    { img: "assets/images/3.jpeg", name: "movie", disc: "cartoon" },
    { img: "assets/images/4.jpeg", name: "movie", disc: "cartoon" },
  ]);
  return (
    <>
      <div className="container mt-5">
        <Slider></Slider>
        <div className="row">
          {moviesArray.map((m) => (
            <Movie key={uuid()} {...m}></Movie>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="row p-4 bg-dark text-white rounded">
        <div className="col-12 col-lg-5 text-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid shadow-lg rounded-3"
          />
        </div>

        <div className="col-12 col-lg-7">
          <h2 className="text-warning text-center mt-4 mb-3">{movie.title}</h2>

          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-white">
              <strong className="text-info">Original Title:</strong>{" "}
              {movie.original_title}
            </li>
            <li className="list-group-item bg-dark text-white">
              <strong className="text-info">Overview:</strong> {movie.overview}
            </li>
            <li className="list-group-item bg-dark text-white">
              <strong className="text-info">Release Date:</strong>{" "}
              {movie.release_date}
            </li>
            <li className="list-group-item bg-dark text-white">
              <strong className="text-info">Runtime:</strong> {movie.runtime}{" "}
              minutes
            </li>
            <li className="list-group-item bg-dark text-white">
              <strong className="text-info">Genres:</strong>{" "}
              {movie.genres?.map((genre) => (
                <span key={genre.id} className="badge bg-primary me-1">
                  {genre.name}
                </span>
              ))}
            </li>
            <li className="list-group-item bg-dark text-white">
              <strong className="text-info">Language:</strong>{" "}
              <span className="badge bg-danger">
                {movie.original_language.toUpperCase()}
              </span>
            </li>
            <li className="list-group-item bg-dark text-white">
              <strong className="text-info">Rating:</strong>{" "}
              {movie.vote_average} ⭐ ({movie.vote_count} votes)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;

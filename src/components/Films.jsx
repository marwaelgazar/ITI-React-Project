import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";
import { addToFavorites } from "../redux/favoritesSlice";
import Film from "./Film";
import SearchBar from "./SearchBar";

const Films = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const favorites = useSelector((state) => state.favorites);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  if (status === "loading")
    return <h2 className="text-center">Loading movies...</h2>;
  if (status === "failed")
    return <h2 className="text-center text-danger">Error: {error}</h2>;

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="row mt-5">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Film
              key={movie.id}
              movie={movie}
              isFavorite={favorites.some((fav) => fav.id === movie.id)}
              addToFavorites={() => dispatch(addToFavorites(movie))}
            />
          ))
        ) : (
          <h4 className="text-center text-muted">No movies found.</h4>
        )}
      </div>
    </div>
  );
};

export default Films;

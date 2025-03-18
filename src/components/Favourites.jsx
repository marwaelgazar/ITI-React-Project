import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/favoritesSlice";
import { FaTrash } from "react-icons/fa";

const Favourites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Favourite Movies ❤️</h2>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <div
                className="card shadow-lg border-0 position-relative"
                style={{ borderRadius: "12px", overflow: "hidden" }}
              >
                 <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="w-100"
                  alt={movie.title}
                  style={{  objectFit: "cover" }}
                />

                 <button
                  className="btn position-absolute"
                  style={{
                    top: "15px",
                    right: "15px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => dispatch(removeFromFavorites(movie.id))}
                >
                  <FaTrash
                    style={{
                      color: "white",
                      fontSize: "20px",
                      cursor: "pointer",
                      transition: "color 0.3s ease-in-out",
                    }}
                  />
                </button>

                 <div className="card-body text-center">
                  <h5
                    className="card-title mt-2"
                    style={{ color: "#222", fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    {movie.title}
                  </h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center">No favorite movies yet. Add some! 🎬</h4>
        )}
      </div>
    </div>
  );
};

export default Favourites;

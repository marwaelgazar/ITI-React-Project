import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Button, IconButton, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

const Film = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites) || [];

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="col-md-4 mb-4">
      <Card 
        sx={{
          backgroundColor: "#222831",
          borderRadius: 2,
          boxShadow: 3,
          transition: "transform 0.3s, box-shadow 0.3s",
          color: "white",
          position: "relative",
        }}
      >
         <CardMedia
          component="img"
           image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

         <IconButton
          onClick={() =>
            isFavorite
              ? dispatch(removeFromFavorites(movie.id))
              : dispatch(addToFavorites(movie))
          }
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: isFavorite ? "red" : "white",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" }
          }}
        >
          <Favorite />
        </IconButton>

         <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f8f9fa" }}>
            {movie.title}
          </Typography>

          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate(`/film/${movie.id}`)} 
            sx={{ mt: 2 }}
          >
            Show Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Film;

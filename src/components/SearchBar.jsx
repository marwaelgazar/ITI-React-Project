import React, { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);  

    return () => clearTimeout(delaySearch);  
  }, [searchTerm, onSearch]);

  return (
    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <TextField
        label="Search for a movie..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "white",
          borderRadius: 1,
          boxShadow: 1,
        }}
      />
    </Box>
  );
};

export default SearchBar;

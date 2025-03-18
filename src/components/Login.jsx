import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/films");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          textAlign: "center",
          backgroundColor: "#222",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
            margin="normal"
            InputLabelProps={{ style: { color: "#ddd" } }}
            sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#777" } }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            InputLabelProps={{ style: { color: "#ddd" } }}
            sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#777" } }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#1976d2",  
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;

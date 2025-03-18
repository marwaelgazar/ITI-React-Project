import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Invalid email format";
    if (!password) tempErrors.password = "Password is required";
    else if (password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    if (confirmPassword !== password) tempErrors.confirmPassword = "Passwords do not match";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      const userData = { name, email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/login");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#181818",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
          backgroundColor: "#222",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#fff", textAlign: "center" }}>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} error={!!errors.name} helperText={errors.name} margin="normal" InputLabelProps={{ style: { color: "#ddd" } }} sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#777" } }} />
          <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={!!errors.email} helperText={errors.email} margin="normal" InputLabelProps={{ style: { color: "#ddd" } }} sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#777" } }} />
          <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={!!errors.password} helperText={errors.password} margin="normal" InputLabelProps={{ style: { color: "#ddd" } }} sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#777" } }} />
          <TextField fullWidth label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={!!errors.confirmPassword} helperText={errors.confirmPassword} margin="normal" InputLabelProps={{ style: { color: "#ddd" } }} sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#777" } }} />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#1565c0" } }}>
            Register
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2, textAlign: "center", color: "#fff" }}>
          Already have an account?{" "}
          <Link href="/login" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;

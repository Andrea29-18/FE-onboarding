import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email.trim(), password.trim());
    } catch (error) {
      alert("Error al iniciar sesión: " + error);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        m: 0,
        p: 0,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 4,
          width: "90%",
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, borderRadius: 2, py: 1.5 }}
          >
            Ingresar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;

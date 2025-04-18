import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const Register = () => {
  const { register } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    nombre: "",
    documento: "",
    calle: "",
    ciudad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({
        ...userData,
        email: userData.email.trim(),
        password: userData.password.trim(),
      });
    } catch (error) {
      alert("Error al registrarse: " + error);
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
          maxWidth: 450,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Correo electrónico"
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Documento"
            name="documento"
            value={userData.documento}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Calle"
            name="calle"
            value={userData.calle}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Ciudad"
            name="ciudad"
            value={userData.ciudad}
            onChange={handleChange}
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
            Registrarse
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;

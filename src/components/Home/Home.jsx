import { useAuth } from "../../context/AuthContext";
import { Button, Typography, Box, Paper } from "@mui/material";

const Home = () => {
  const { user, logout } = useAuth();

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
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          width: "90%",
          maxWidth: 450,
        }}
      >
        <Typography variant="h4" gutterBottom>
          ¡Bienvenido!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Has iniciado sesión como: <strong>{user?.email}</strong>
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={logout}
          fullWidth
          sx={{ borderRadius: 2, py: 1.5 }}
        >
          Cerrar sesión
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;

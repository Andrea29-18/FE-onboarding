import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    email: user?.email || "",
    documento: user?.documento || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      alert("Perfil actualizado correctamente");
    } catch (error) {
      alert("Error al actualizar: " + error);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, #FFB6C1, #D9A7C7)",
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
          width: "90%",
          maxWidth: 450,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Actualizar Perfil
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            margin="normal"
            sx={{
              mb: 2,
            }}
          />
          <TextField
            fullWidth
            label="Documento"
            value={formData.documento}
            onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
            margin="normal"
            sx={{
              mb: 2,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              borderRadius: 2,
              py: 1.5,
              mt: 2,
            }}
          >
            Guardar cambios
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Profile;

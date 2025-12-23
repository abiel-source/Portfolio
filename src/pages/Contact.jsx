import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "#000", minHeight: "100vh", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ color: "#fff", mb: 2 }}>
          Contact
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {/* put email, LinkedIn, a form, etc */}
        </Typography>
      </Container>
    </Box>
  );
}

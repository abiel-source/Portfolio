import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chrome from "../assets/chrome10.png";
import { Link as RouterLink } from "react-router-dom";


export default function ResponsiveMoon() {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
        bgcolor: "#000",
        pt: { xs: 4, sm: 5 },
        pb: { xs: 6, sm: 7 },
      }}
    >
      <Container maxWidth="lg">
        {/* IMAGE */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "clamp(180px, 55vw, 240px)",
                sm: "clamp(220px, 45vw, 300px)",
              },
              aspectRatio: "1 / 1",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box
              component="img"
              src={Chrome}
              alt="Chrome graphic"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
        </Box>

        {/* TEXT */}
        <Box
          sx={{
            mt: { xs: 3.5, sm: 4 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mx: "auto",
            maxWidth: "60ch",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.28em",
              opacity: 0.7,
              mb: 0.5,
            }}
          >
            AIM FOR THE STARS
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 320,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
              },
              mb: 2,
              textShadow:
                "0 0 28px rgba(97,218,251,0.14), 0 0 54px rgba(70,120,255,0.10)",
            }}
          >
            Land on the Moon.
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            I’m Abiel – a Computing Science (SFU) grad with experience in
            full-stack software development, technical project management,
            product engineering, machine learning, and scientific literature.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              component={RouterLink}
              to="/contact"
              sx={{
                textTransform: "none",
                bgcolor: "#fff",
                color: "#000",
                borderRadius: 999,
                px: 2.5,
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.85)",
                },
              }}
            >
              Contact
            </Button>

            <Button
              component="a"
              href="/files/Abiel_Kim_CV_2026.pdf"
              download="Abiel_Kim_CV_2026.pdf"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.95)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
              }}
            >
              Download CV
            </Button>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}

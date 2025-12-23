import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

export default function FinalHero() {
  return (
    <Box
      id="final"
      sx={{
        bgcolor: "#000",
        py: { xs: 10, md: 14 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(900px 360px at 50% 15%, rgba(97,218,251,0.12), transparent 60%),
            radial-gradient(700px 320px at 15% 75%, rgba(255,70,210,0.10), transparent 62%),
            radial-gradient(700px 320px at 85% 70%, rgba(70,120,255,0.10), transparent 62%)
          `,
          opacity: 0.55,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "80ch",
            mx: "auto",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              display: "block",
              letterSpacing: "0.22em",
              opacity: 0.72,
              mb: 1.25,
            }}
          >
            3 2 1 ... LIFTOFF
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 320,
              letterSpacing: "-0.03em",
              lineHeight: 1.06,
              fontSize: { xs: "2.5rem", sm: "3.4rem", md: "4.2rem", lg: "4.6rem" },
              mb: 2,
              textShadow:
                "0 0 28px rgba(97,218,251,0.14), 0 0 54px rgba(70,120,255,0.10)",
            }}
          >
            Reach New Heights.
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1.05rem", md: "1.12rem" },
              lineHeight: 1.75,
              mx: "auto",
              mb: 3.5,
            }}
          >
            Scalability. Creativity. Ambition.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, flexWrap: "wrap" }}>
            <Button
              component={RouterLink}
              to="/contact"
              // href="#contact"
              sx={{
                textTransform: "none",
                bgcolor: "#fff",
                color: "#000",
                borderRadius: 999,
                px: 2.5,
                fontWeight: 500,
                "&:hover": { bgcolor: "rgba(255,255,255,0.88)" },
              }}
            >
              Contact
            </Button>

            <Button
              href="#projects"
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: 999,
                bgcolor: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.95)",
                px: 3,
                py: 1.1,
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

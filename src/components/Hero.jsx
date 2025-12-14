import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import reactLogo from "../assets/react.svg";

export default function Hero() {
  return (
    <Box id="top" sx={{ bgcolor: "#000" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{
            py: { xs: 6, md: 10 },
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {/* LEFT: TEXT */}
          <Grid item xs={12} md={7} sx={{ minWidth: 0, order: { xs: 2, md: 1 } }}>
            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                // h2 typography (Inter, weight, tracking, lineHeight) now comes from theme.js
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.6rem" },
                overflowWrap: "anywhere",
              }}
            >
              Building clean, data-driven products with React and AI.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "text.secondary",
                fontSize: { xs: "1.05rem", md: "1.1rem" },
                lineHeight: 1.7,
                maxWidth: "60ch",
              }}
            >
              I’m Abiel — a Computing Science (SFU) grad focused on full-stack
              product engineering and machine-learning systems. I ship fast,
              iterate cleanly, and care about UX.
            </Typography>

            <Box sx={{ mt: 3, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                href="#contact"
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
                href="#projects"
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  bgcolor: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.95)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.18)" },
                }}
              >
                View projects
              </Button>
            </Box>
          </Grid>

          {/* RIGHT: IMAGE */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              flexShrink: 0,
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              sx={{
                width: { xs: "fit-content", md: "100%" },
                maxWidth: { xs: 260, sm: 340, md: 400, lg: 400, xl: 400 },
                height: { xs: 260, sm: 340, md: 400, lg: 400, xl: 400 },
                mx: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, sm: 3, md: 4 },
              }}
            >
              <Box
                component="img"
                src={reactLogo}
                alt="React Logo"
                sx={{
                  width: { xs: 220, sm: 280, md: "100%" },
                  height: "100%",
                  objectFit: "contain",
                  display: "block",

                  ml: {
                    xs: "clamp(64px, calc((100vw - 275px) * 0.85), 420px)",
                    sm: "clamp(64px, calc((100vw - 320px) * 0.85), 420px)",
                    md: "14px",
                    lg: 0,
                  },

                  willChange: "transform, filter",
                  animation:
                    "floatY 4.5s ease-in-out infinite, glowPulse 5s ease-in-out infinite",
                  "&:hover": {
                    animation:
                      "floatSpin 6s ease-in-out infinite, glowPulse 3.5s ease-in-out infinite",
                  },

                  "@keyframes floatY": {
                    "0%, 100%": { transform: "translateY(-20px)" },
                    "50%": { transform: "translateY(20px)" },
                  },
                  "@keyframes floatSpin": {
                    "0%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-16px) rotate(180deg)" },
                    "100%": { transform: "translateY(0px) rotate(360deg)" },
                  },
                  "@keyframes glowPulse": {
                    "0%, 100%": {
                      filter:
                        "drop-shadow(0 0 26px rgba(97, 218, 251, 0.45)) drop-shadow(0 0 58px rgba(97, 218, 251, 0.22))",
                    },
                    "50%": {
                      filter:
                        "drop-shadow(0 0 46px rgba(97, 218, 251, 0.75)) drop-shadow(0 0 92px rgba(97, 218, 251, 0.38))",
                    },
                  },
                  "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                    "&:hover": { animation: "none" },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

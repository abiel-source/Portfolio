import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import reactLogo from "../assets/react.svg";
import Chrome from "../assets/chrome10.png";

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

            // hide everything below md (same breakpoint as image)
            display: { xs: "none", md: "flex" },
          }}
        >
          {/* LEFT: TEXT */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              minWidth: 0,
              order: { xs: 2, md: 1 },

              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                alignSelf: { md: "flex-start" },
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
                  overflowWrap: "anywhere",
                  fontWeight: 320,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.06,
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3.4rem",
                    md: "4.2rem",
                    lg: "4.6rem",
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
                  mt: 2,
                  color: "text.secondary",
                  fontSize: { xs: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.7,

                  maxWidth: "60ch",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                I’m Abiel - a Computing Science (SFU) grad with experience in
                full-stack software development, technical project management,
                product engineering, machine learning, and scientific literature.
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  gap: 1.5,
                  flexWrap: "wrap",

                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
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
                  Download CV
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT: IMAGE (hidden on breakpoint) */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              flexShrink: 0,
              order: { xs: 1, md: 2 },

              // workaround: hide on xs/sm when stacking, keep desktop identical
              display: { xs: "none", md: "flex" },

              justifyContent: { md: "flex-end" },
            }}
          >
            <Box
              sx={{
                width: { md: "100%" },
                maxWidth: { md: 400 },
                height: { md: 400 },
                mx: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { md: 4 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { md: "100%" },
                  maxWidth: "100%",
                  height: "100%",
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
                    // transform: "scaleX(-1)",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

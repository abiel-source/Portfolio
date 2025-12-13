import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import portrait from "../assets/sfu_logo.png";

export default function Hero() {
  return (
    <Box id="top" sx={{ bgcolor: "#000" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ py: { xs: 6, md: 10 } }}
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.12em",
              }}
            >
              Portfolio • Software / ML
            </Typography>

            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.4rem" },
              }}
            >
              Building clean, data-driven products with React and AI.
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.70)",
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

              <Button
                href="#contact"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.88)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.06)" },
                }}
              >
                Contact
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 380,
                mx: { xs: 0, md: "auto" },
                borderRadius: 3,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.10)",
                bgcolor: "rgba(255,255,255,0.04)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
                aspectRatio: "1 / 1",
              }}
            >
              <Box
                component="img"
                src={portrait}
                alt="Portrait of Abiel"
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#000",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(600px 180px at 50% 0%, rgba(97,218,251,0.08), transparent 60%)
          `,
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 2.5, sm: 2 },
          }}
        >
          {/* Left */}
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                letterSpacing: "-0.02em",
                fontSize: "1rem",
              }}
            >
              Abiel Kim
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                color: "text.secondary",
                fontSize: "0.95rem",
                maxWidth: "45ch",
                lineHeight: 1.6,
              }}
            >
              Computing Science (AI) · Full-Stack & Machine Learning
            </Typography>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 2.5 },
              alignItems: "center",
            }}
          >
            <Link
              href="#top"
              underline="none"
              sx={{
                fontSize: "0.9rem",
                color: "text.secondary",
                "&:hover": { color: "text.primary" },
              }}
            >
              Back to top
            </Link>

            <Link
              href="https://github.com/abiel-source"
              target="_blank"
              rel="noreferrer"
              underline="none"
              sx={{
                fontSize: "0.9rem",
                color: "text.secondary",
                "&:hover": { color: "text.primary" },
              }}
            >
              GitHub
            </Link>

          </Box>
        </Box>

        <Typography
          sx={{
            mt: { xs: 3, md: 4 },
            textAlign: "center",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          © {year} Abiel Kim. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Education() {
  return (
    <Box
      id="education"
      sx={{
        bgcolor: "#000",
        py: { xs: 8, md: 12 },
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
            radial-gradient(900px 320px at 50% 10%, rgba(97,218,251,0.10), transparent 60%),
            radial-gradient(700px 280px at 20% 70%, rgba(70,120,255,0.08), transparent 60%),
            radial-gradient(700px 280px at 85% 55%, rgba(255,70,210,0.07), transparent 60%)
          `,
          opacity: 0.55,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Eyebrow */}
        <Typography
          variant="overline"
          sx={{
            display: "block",
            textAlign: "center",
            letterSpacing: "0.22em",
            opacity: 0.72,
            mb: 1,
          }}
        >
          EDUCATION
        </Typography>

        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.1rem" },
            mb: 1.25,
          }}
        >
          BSc in Computing Science
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: { xs: "1.05rem", md: "1.1rem" },
            maxWidth: "70ch",
            mx: "auto",
            lineHeight: 1.7,
            mb: { xs: 4, md: 6 },
          }}
        >
          Specialization in Artificial Intelligence — focused on machine learning systems,
          algorithms, and modern software engineering.
        </Typography>

        {/* Credential card */}
        <Box
          sx={{
            mx: "auto",
            maxWidth: 920,
            borderRadius: 4,
            p: { xs: 2.25, sm: 2.75, md: 3 },
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.06),
              0 0 48px rgba(97,218,251,0.14)
            `,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 3 },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
            }}
          >
            {/* Left */}
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 750,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.45rem" },
                }}
              >
                Simon Fraser University (SFU)
              </Typography>

              <Typography
                sx={{
                  mt: 0.75,
                  color: "text.secondary",
                  lineHeight: 1.7,
                  maxWidth: "75ch",
                }}
              >
                Coursework and projects across machine learning, optimization, data structures,
                algorithms, and full-stack product development — with an emphasis on practical
                implementation and clean, scalable design.
              </Typography>
            </Box>

            {/* Right “badge” */}
            <Box
              sx={{
                flexShrink: 0,
                alignSelf: { xs: "stretch", sm: "auto" },
                display: "flex",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  px: 1.5,
                  py: 0.9,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  bgcolor: "rgba(0,0,0,0.35)",
                  boxShadow: "0 0 28px rgba(70,120,255,0.16)",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.22em", opacity: 0.85 }}
                >
                  BSc
                </Typography>
              </Box>

              <Box
                sx={{
                  px: 1.5,
                  py: 0.9,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  bgcolor: "rgba(0,0,0,0.35)",
                  boxShadow: "0 0 28px rgba(255,70,210,0.14)",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: "0.22em", opacity: 0.85 }}
                >
                  AI SPECIALIZATION
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

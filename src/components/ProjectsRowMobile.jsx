import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Chrome1 from "../assets/chrome1.png";
import Chrome2 from "../assets/chrome2.png";
import Chrome5 from "../assets/chrome5.png";
import Chrome6 from "../assets/chrome6.png";
import Chrome9 from "../assets/chrome9.png";

const PROJECTS = [
  {
    id: "bci",
    eyebrow: "BRAIN-COMPUTER",
    title: "EEG Based Interactive Brain Computer Interface",
    href: "https://github.com/abiel-source/EEG-Based-Interactive-Brain-Computer-Interface",
    glow: "rgba(97,218,251,0.22)",
    icon: Chrome1,
  },
  {
    id: "nlp",
    eyebrow: "NLP",
    title:
      "Replication of YouTube User Generated Content Summarization and Topic Extraction Model",
    href: "https://github.com/abiel-source/Replication-of-YouTube-User-Generated-Content-Summarization-and-Topic-Extraction-Model",
    glow: "rgba(70,120,255,0.22)",
    icon: Chrome2,
  },
  {
    id: "biomed",
    eyebrow: "BIOMEDICAL",
    title: "Deep Learning for Ovarian Cancer Subtype Classification OCSC NET",
    href: "https://github.com/abiel-source/Deep-Learning-for-Ovarian-Cancer-Subtype-Classification-OCSC-NET",
    glow: "rgba(70,220,150,0.22)",
    icon: Chrome6,
  },
  {
    id: "testing",
    eyebrow: "TESTING & SECURITY",
    title: "Plagiarism Detection Using Language Recognition Tools",
    href: "https://github.com/abiel-source/Plagiarism-Detection-Using-Language-Recognition-Tools",
    glow: "rgba(235,200,130,0.22)",
    icon: Chrome9,
  },
  {
    id: "simulation",
    eyebrow: "SIMULATION",
    title: "Gravitational N-Body Physics Simulation Engine",
    href: "https://github.com/abiel-source/Gravitational-N-Body-Simulation-Engine",
    glow: "rgba(255,70,210,0.26)",
    icon: Chrome5,
  },
];

const CARD_W = 320;

export default function ProjectsRowMobile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // This component is intended for mobile only
  if (!isMobile) return null;

  return (
    <Box
      id="projects"
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
            radial-gradient(900px 320px at 50% 8%, rgba(97,218,251,0.10), transparent 60%),
            radial-gradient(700px 280px at 15% 55%, rgba(255,70,210,0.08), transparent 60%),
            radial-gradient(700px 280px at 85% 45%, rgba(70,120,255,0.08), transparent 60%)
          `,
          opacity: 0.55,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.1rem" },
            mb: 1.5,
          }}
        >
          Projects
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: { xs: "1.05rem", md: "1.1rem" },
            mb: { xs: 3.5, md: 6 },
            maxWidth: "70ch",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Various demonstrations of Technical Design, Scalable Software, and Applied ML.
        </Typography>

        {/* Mobile horizontal row (simple + stable) */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 1,
            px: 1.5,

            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },

            WebkitOverflowScrolling: "touch",

            // optional: makes horizontal swipe feel great on iOS
            scrollSnapType: "x mandatory",
          }}
        >
          {PROJECTS.map((p) => (
            <Box
              key={p.id}
              component="a"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                flex: `0 0 ${CARD_W}px`,
                scrollSnapAlign: "start",

                borderRadius: 4,
                p: 2.25,
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 2,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.06),
                  0 0 40px ${p.glow}
                `,
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  flexShrink: 0,
                  width: 76,
                  height: 76,
                  borderRadius: 3,
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Box
                  component="img"
                  src={p.icon}
                  alt=""
                  sx={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                    display: "block",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              </Box>

              {/* Text */}
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="overline"
                  sx={{
                    display: "block",
                    letterSpacing: "0.22em",
                    opacity: 0.7,
                    mb: 0.5,
                  }}
                >
                  {p.eyebrow}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 750,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    fontSize: "1.12rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {p.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

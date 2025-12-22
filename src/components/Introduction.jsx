import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Introduction() {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 40 });

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <Box
      id="intro"
      sx={{
        bgcolor: "#000",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle ambient background */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(900px 320px at 50% 10%, rgba(97,218,251,0.10), transparent 60%),
            radial-gradient(700px 280px at 15% 70%, rgba(255,70,210,0.07), transparent 60%),
            radial-gradient(700px 280px at 85% 60%, rgba(70,120,255,0.08), transparent 60%)
          `,
          opacity: 0.55,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
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
          INTRODUCTION
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.1rem" },
            mb: 1.25,
          }}
        >
          What I’ve been building lately
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: { xs: "1.05rem", md: "1.1rem" },
            maxWidth: "78ch",
            mx: "auto",
            lineHeight: 1.7,
            mb: { xs: 4, md: 6 },
          }}
        >
          A brief overview of my activity since graduation — spanning
          applied ML, founder experience, and my most ambitious undertaking yet.
        </Typography>

        {/* Interactive “spotlight” card */}
        <Box
          ref={cardRef}
          onMouseMove={onMove}
          sx={{
            maxWidth: "92ch",
            mx: "auto",
            borderRadius: 4,
            p: { xs: 2.5, sm: 3, md: 3.5 },
            position: "relative",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.06),
              0 0 55px rgba(97,218,251,0.12)
            `,
            overflow: "hidden",
          }}
        >
          {/* spotlight glow that follows cursor */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `radial-gradient(520px 260px at ${pos.x}% ${pos.y}%,
                rgba(97,218,251,0.16),
                rgba(70,120,255,0.10) 38%,
                transparent 70%)`,
              opacity: 0.9,
              transition: "opacity 200ms ease",
            }}
          />

          {/* content */}
          <Box sx={{ position: "relative" }}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: "0.22em",
                opacity: 0.7,
                display: "block",
                mb: 1,
              }}
            >
              SINCE GRADUATION
            </Typography>

            <Typography
              sx={{
                fontWeight: 740,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.7rem" },
                mb: 1.5,
              }}
            >
              I’ve been building ML models, securing client relations, and pushing theoretical limits.
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1.02rem", md: "1.08rem" },
                lineHeight: 1.85,
              }}
            >
              I recently graduated in Computing Science (AI specialization) and have since been focused on building
              production-quality software, deep neural network pipelines, and disrupting preconceived notions of machine learning.
                            
              At MICA Technologies, I serve as an early shareholder and machine learning engineer where I 
              accelerated proprietary deep learning model accuracies to production standards.

              I’ve also developed and proven a novel theory about nonlinear neural network extrapolation
              — the most ambitious and difficult work I’ve ever undertaken.

              Satisfied with my current contributions to MICA and ML literature,
              I’m now looking for high-trust teams where I can ship quickly, go deep
              when needed, and contribute to systems that make an impact.
            </Typography>

            {/* small “pill” footer */}
            <Box
              sx={{
                mt: 2.5,
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              {["Full-stack", "Applied ML", "Theoretical research", "Fast iteration"].map((tag) => (
                <Box
                  key={tag}
                  sx={{
                    px: 1.25,
                    py: 0.6,
                    borderRadius: 999,
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.82)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(0,0,0,0.35)",
                    boxShadow: "0 0 20px rgba(97,218,251,0.08)",
                  }}
                >
                  {tag}
                </Box>
              ))}
            </Box>

            {/* reduced motion */}
            <Box
              sx={{
                "@media (prefers-reduced-motion: reduce)": {
                  "& *": { transition: "none !important" },
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

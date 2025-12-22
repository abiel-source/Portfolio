import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Spotlight() {
  const GOLD = "rgba(235, 200, 130, 0.95)";
  const GOLD_SOFT = "rgba(255, 214, 120, 0.35)";
  const GOLD_HAZE = "rgba(255, 225, 160, 0.18)";

  return (
    <Box
      id="spotlight"
      sx={{
        bgcolor: "#000",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* gold-forward atmosphere */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.7,
          background: `
            radial-gradient(900px 340px at 50% 8%, ${GOLD_HAZE}, transparent 62%),
            radial-gradient(700px 320px at 50% 28%, ${GOLD_SOFT}, transparent 62%),
            radial-gradient(700px 280px at 15% 55%, rgba(70,120,255,0.06), transparent 60%),
            radial-gradient(700px 280px at 85% 55%, rgba(255,70,210,0.05), transparent 60%)
          `,
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Eyebrow */}
        <Typography
          variant="overline"
          sx={{
            display: "inline-block",
            mx: "auto",
            textAlign: "center",
            letterSpacing: "0.26em",
            opacity: 0.9,
            mb: 2,
            px: 1.5,
            py: 0.6,
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.45)",
            boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 0 28px ${GOLD_HAZE}`,
            display: "block",
            width: "fit-content",
          }}
        >
          SPOTLIGHT
        </Typography>

        {/* Title + subtitle */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.1rem" },
            mb: 1.5,
            textShadow: `0 0 28px ${GOLD_HAZE}`,
          }}
        >
          A Special Case of Nonlinear NTK Extrapolation
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: { xs: "1.05rem", md: "1.1rem" },
            mb: { xs: 4, md: 6 },
          }}
        >
          My most ambitious work yet.
        </Typography>

        {/* Theorem “snippet” card */}
        <Box
          sx={{
            mx: "auto",
            maxWidth: 1040,
            borderRadius: 4,
            p: { xs: 2.75, sm: 3.75, md: 4.75 },
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.07),
              0 0 38px ${GOLD_HAZE},
              0 0 72px rgba(235,200,130,0.14),
              0 0 130px rgba(235,200,130,0.10)
            `,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* subtle “spotlight beam” behind the card */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `
                radial-gradient(520px 220px at 50% 0%,
                  rgba(255,225,160,0.22),
                  transparent 70%)
              `,
              opacity: 0.8,
            }}
          />

          <Box sx={{ position: "relative" }}>
            {/* Top row: label + badge */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                mb: 2,
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 680,
                  letterSpacing: "-0.01em",
                  opacity: 0.96,
                }}
              >
                Statements (Excluding Lemmas 1 & 2)
              </Typography>

              <Box
                sx={{
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 999,
                  fontSize: "0.78rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.40)",
                  boxShadow: `0 0 26px ${GOLD_HAZE}`,
                }}
              >
                Featured work
              </Box>
            </Box>

            {/* theorem body */}
            <Box
              sx={{
                borderLeft: `3px solid rgba(235,200,130,0.70)`,
                pl: 2,
                py: 0.5,
                filter: `
                  drop-shadow(0 0 6px rgba(235,200,130,0.24))
                  drop-shadow(0 0 14px rgba(255,225,160,0.12))
                `,
              }}
            >
              <Typography sx={{ color: "rgba(255,255,255,0.90)", lineHeight: 1.75 }}>
                {"REMARK 1. If all n inputs of the training set φ^∞ are located infinitely far from the origin along the same direction, then the asymptotic pseudo-inverse of the NTK gram matrix is a difference between the identity and all-ones matrix:"}
              </Typography>

              <Box
                component="pre"
                sx={{
                  mt: 1.5,
                  mb: 1.5,
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: 3,
                  overflowX: "auto",
                  background: "rgba(0,0,0,0.40)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: `inset 0 0 0 1px rgba(235,200,130,0.08)`,
                  color: "rgba(255,255,255,0.92)",
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: { xs: "0.92rem", sm: "0.98rem" },
                  lineHeight: 1.6,
                  textShadow: "0 0 18px rgba(235,200,130,0.10)",
                }}
              >
                {/* {`(1/δ)𝐈 − (t²κ)/(δ(nκt² + δ))𝐉, where δ → 0, t → ∞, and κ is a constant`} */}
                {"(1/δ)𝐈 − (t²κ)/(δ(nκt² + δ))𝐉, where δ → 0, t → ∞, and κ is a constant."}
              </Box>

              <Typography sx={{ color: "rgba(255,255,255,0.86)", lineHeight: 1.75 }}>
                {"THEOREM 1. An over-parameterized two-layer ReLU MLP fₙₜₖ : ℝᵈ → ℝ that is trained on a labeled set { (𝐱ᵢ^∞, yᵢ^∞) }ᵢ₌₁ⁿ with 𝐱ᵢ^∞ = 𝐱ᵢ − t𝐯_φ for 𝐱ᵢ ∈ 𝒳 and any direction 𝐯_φ in the NTK regime minimizing squared loss will converge to a quadratic extrapolator when evaluated at a point near the origin 𝟎 as t → ∞"}
              </Typography>

            </Box>

            {/* context body text */}
            <Typography
              sx={{
                mt: 3,
                color: "text.secondary",
                lineHeight: 1.8,
              }}
            >
              My manuscript challenges, but not conflicts with, the conventional view that ultra-wide 
              neural networks always extrapolate linearly.

              My work reveals a more nuanced framework of extrapolation by demonstrating the existence
              of special or extreme cases which were previously unknown.

              My contributions alter Google's AI overview on the topic of NTK extrapolation,
              providing greater nuance to the scientific community on neural network extrapolation.
            </Typography>

            {/* CTAs */}
            <Box sx={{ mt: 3, display: "flex", gap: 1.5, flexWrap: "wrap" }}>

              <Button
                href="https://arxiv.org/abs/2512.15749"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  bgcolor: "#fff",
                  color: "#000",
                  px: 2.5,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.85)" },
                }}
              >
                arXiv
              </Button>

              <Button
                href=""
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  bgcolor: "rgba(235,200,130,0.18)",
                  color: "rgba(255,255,255,0.95)",
                  "&:hover": { bgcolor: "rgba(235,200,130,0.26)" },
                }}
              >
                YouTube (coming soon)
              </Button>


            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

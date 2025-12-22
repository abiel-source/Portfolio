import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const EXPERIENCES = [
  {
    id: "mica",
    eyebrow: "ML ENGINEER",
    title: "MICA Technologies",
    timeframe: "2025",
    glow: "rgba(97,218,251,0.18)",
    bullets: [
      "Boosted classification accuracies of large petrographical deep learning models for thin-section grain analysis.",
      "Conducted client requirements elicitation sessions to pinpoint workflow bottlenecks and technical insights.",
    ],
  },
  {
    id: "3ag",
    eyebrow: "FULL-STACK DEVELOPER",
    title: "3AG Systems",
    timeframe: "2022",
    glow: "rgba(70,220,150,0.18)",
    bullets: [
      "Developed production-grade UI modules and integrated business logic for API handlers over the full stack.",
      "Debugged both client-end and server-side tickets to optimize UX and adhere to functional requirements.",
    ],
  },
  {
    id: "arlo",
    eyebrow: "TECHNICAL PM • PRODUCT ENGINEER",
    title: "Arlo Technologies",
    timeframe: "2021 - 2022",
    glow: "rgba(70,120,255,0.18)",
    bullets: [
      "Verified and evaluated firmware builds, and modified/soldered PCB circuits of internal and external products.",
      "Assisted in program oversight, logistics operations, and delegation of tasks in a big tech environment.",
    ],
  },
];

// Early Experience
const EARLY_EXPERIENCE = [
  {
    id: "wyns",
    eyebrow: "Vice President of IT",
    title: "Wish Youth Network Society",
    timeframe: "2017",
    glow: "rgba(255,70,210,0.12)",
    bullets: [
      "Served as the VP of IT where I oversaw digital resources and contributed to full-stack development and maintenance.",
      "Empowered students across Canada to lead various philanthropic missions and funraising events for hospices.",
    ],
  },
  {
    id: "hs-club",
    eyebrow: "Founder • President",
    title: "Carson Programming Club & App Maintenance",
    timeframe: "2015 - 2018",
    glow: "rgba(235,200,130,0.12)",
    bullets: [
      "Founded and led the school's programming club where we maintained and updated the school mobile application.",
      "Recruited dozens of student members, organizing weekly technical and creative meetups.",
    ],
  },
];

function TimelineItem({ x, isLast }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "28px 1fr", sm: "34px 1fr" },
        columnGap: { xs: 1.75, sm: 2.25 },
        alignItems: "start",
      }}
    >
      {/* Left rail + node */}
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
        {/* Node */}
        <Box
          sx={{
            mt: "10px",
            width: 14,
            height: 14,
            borderRadius: 999,
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: `
              0 0 0 6px rgba(255,255,255,0.05),
              0 0 26px ${x.glow},
              0 0 46px ${x.glow}
            `,
          }}
        />
        {/* Rail */}
        {!isLast && (
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: 30,
              bottom: -22,
              width: "2px",
              bgcolor: "rgba(255,255,255,0.10)",
              borderRadius: 999,
              boxShadow: `0 0 18px ${x.glow}`,
            }}
          />
        )}
      </Box>

      {/* Card */}
      <Box
        sx={{
          borderRadius: 4,
          p: { xs: 2.25, sm: 2.75, md: 3 },
          background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.06),
            0 0 48px ${x.glow}
          `,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 2,
            mb: 1,
          }}
        >
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.22em", opacity: 0.75 }}
          >
            {x.eyebrow}
          </Typography>

          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.18em",
              opacity: 0.55,
              whiteSpace: "nowrap",
            }}
          >
            {x.timeframe}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontWeight: 750,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            fontSize: { xs: "1.25rem", sm: "1.35rem", md: "1.45rem" },
            mb: 1.25,
          }}
        >
          {x.title}
        </Typography>

        <Box
          component="ul"
          sx={{
            pl: 2.2,
            m: 0,
            color: "text.secondary",
            lineHeight: 1.75,
            "& li": { mb: 0.6 },
          }}
        >
          {x.bullets.map((b, i) => (
            <li key={i}>
              <Typography component="span" sx={{ color: "text.secondary" }}>
                {b}
              </Typography>
            </li>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function EarlyCard({ x }) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        p: { xs: 2.15, sm: 2.5, md: 2.75 },
        background: "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.05),
          0 0 42px ${x.glow}
        `,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 2,
          mb: 1,
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: "0.22em", opacity: 0.68 }}>
          {x.eyebrow}
        </Typography>
        <Typography
          variant="overline"
          sx={{ letterSpacing: "0.18em", opacity: 0.45, whiteSpace: "nowrap" }}
        >
          {x.timeframe}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontWeight: 720,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          fontSize: { xs: "1.18rem", sm: "1.28rem", md: "1.38rem" },
          mb: 1.15,
        }}
      >
        {x.title}
      </Typography>

      <Box
        component="ul"
        sx={{
          pl: 2.2,
          m: 0,
          color: "text.secondary",
          lineHeight: 1.75,
          "& li": { mb: 0.55 },
        }}
      >
        {x.bullets.map((b, i) => (
          <li key={i}>
            <Typography component="span" sx={{ color: "text.secondary" }}>
              {b}
            </Typography>
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        bgcolor: "#000",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* atmosphere */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            radial-gradient(900px 320px at 50% 10%, rgba(97,218,251,0.10), transparent 60%),
            radial-gradient(700px 280px at 15% 65%, rgba(70,120,255,0.08), transparent 60%),
            radial-gradient(700px 280px at 85% 55%, rgba(255,70,210,0.07), transparent 60%)
          `,
          opacity: 0.55,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Header */}
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
          EXPERIENCE
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.1rem" },
            mb: 1.25,
          }}
        >
          Work Experience
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontSize: { xs: "1.05rem", md: "1.1rem" },
            maxWidth: "75ch",
            mx: "auto",
            lineHeight: 1.7,
            mb: { xs: 4, md: 6 },
          }}
        >
          Roles spanning full-stack software development, applied ML, and early-stage execution —
          building production systems, shipping iteratively, and optimizing for maximum impact.
        </Typography>

        {/* Timeline stack */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2.5, md: 3 } }}>
          {EXPERIENCES.map((x, idx) => (
            <TimelineItem key={x.id} x={x} isLast={idx === EXPERIENCES.length - 1} />
          ))}
        </Box>

        {/* Early Experience */}
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{
              display: "block",
              textAlign: "center",
              letterSpacing: "0.22em",
              opacity: 0.55,
              mb: 1.25,
            }}
          >
            EARLY EXPERIENCE
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              fontSize: { xs: "1.0rem", md: "1.05rem" },
              maxWidth: "78ch",
              mx: "auto",
              lineHeight: 1.7,
              mb: { xs: 3, md: 4 },
              opacity: 0.9,
            }}
          >
            Earlier foundations in leadership and real software ownership — included for context
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {EARLY_EXPERIENCE.map((x) => (
              <EarlyCard key={x.id} x={x} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

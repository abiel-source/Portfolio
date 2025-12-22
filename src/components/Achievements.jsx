import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const UNIVERSITY_ACHIEVEMENTS = [
  {
    id: "honour-1",
    eyebrow: "SIMON FRASER UNIVERSITY",
    title: "Dean’s Honour Roll",
    timeframe: "SPRING 2025",
    glow: "rgba(97,218,251,0.18)",
    detail: "Recognition of Outstanding Academic Excellence: CMPT 201, CMPT 340, CMPT 413, CMPT 419.",
  },
  {
    id: "honour-2",
    eyebrow: "SIMON FRASER UNIVERSITY",
    title: "Dean’s Honour Roll",
    timeframe: "FALL 2024",
    glow: "rgba(70,120,255,0.18)",
    detail: "Recognition of Outstanding Academic Excellence: CMPT 361, CMPT 383, CMPT 473, CMPT 475.",
  },
  {
    id: "honour-3",
    eyebrow: "SIMON FRASER UNIVERSITY",
    title: "Dean’s Honour Roll",
    timeframe: "SPRING 2021",
    glow: "rgba(70,220,150,0.18)",
    detail: "Recognition of Outstanding Academic Excellence: CMPT 105W, CMPT 295, CMPT 354, MACM 201.",
  },
];

const EARLY_ACHIEVEMENTS = [
  {
    id: "debate-1",
    eyebrow: "Canada International Model United Nations",
    title: "2nd Place - International Level",
    timeframe: "2017",
    glow: "rgba(255,70,210,0.12)",
    detail: "Delegate of China on the topic of the Kashmir Border Conflict.",
  },
  {
    id: "debate-2",
    eyebrow: "Vancouver Model United Nations",
    title: "2nd Place - International Level",
    timeframe: "2017",
    glow: "rgba(235,200,130,0.12)",
    detail: "Delegate of the United Arab Emirates on the topic of the World Bank.",
  },
  {
    id: "debate-3",
    eyebrow: "Burnaby Model United Nations",
    title: "2nd Place - Regional Level",
    timeframe: "2017",
    glow: "rgba(70,120,255,0.12)",
    detail: "Delegate of Italy on the topic of the European Union.",
  },
  {
    id: "debate-4",
    eyebrow: "North Vancouver Model United Nations",
    title: "3rd Place - Regional Level",
    timeframe: "2016",
    glow: "rgba(70,220,150,0.12)",
    detail: "Delegate of Japan on the topic of Nuclear Energy and Waste Management.",
  },
  {
    id: "business",
    eyebrow: "miniEnterprize, University of British Columbia",
    title: "Finalist - National Level",
    timeframe: "2017",
    glow: "rgba(97,218,251,0.12)",
    detail: "Finalist in a multi-round business case study and analysis competition.",
  },
  {
    id: "writing",
    eyebrow: "World Scholar's Cup",
    title: "2nd Place - Regional Level",
    timeframe: "2017",
    glow: "rgba(235,200,130,0.12)",
    detail: "Achieved 2nd Place in the individual writing portion of WSC regionals.",
  },
];

function TimelineAchievement({ x, isLast }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "28px 1fr", sm: "34px 1fr" },
        columnGap: { xs: 1.75, sm: 2.25 },
        alignItems: "start",
      }}
    >
      {/* rail + node */}
      <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
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

      {/* card */}
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
          <Typography variant="overline" sx={{ letterSpacing: "0.22em", opacity: 0.75 }}>
            {x.eyebrow}
          </Typography>

          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.18em", opacity: 0.55, whiteSpace: "nowrap" }}
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
            mb: 0.9,
          }}
        >
          {x.title}
        </Typography>

        <Typography sx={{ color: "text.secondary", lineHeight: 1.75 }}>
          {x.detail}
        </Typography>
      </Box>
    </Box>
  );
}

function EarlyAchievementCard({ x }) {
  return (
    <Box
      sx={{
        borderRadius: 4,
        p: { xs: 2.1, sm: 2.4, md: 2.75 },
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
          fontSize: { xs: "1.12rem", sm: "1.22rem", md: "1.32rem" },
          mb: 0.85,
        }}
      >
        {x.title}
      </Typography>

      <Typography sx={{ color: "text.secondary", lineHeight: 1.75 }}>
        {x.detail}
      </Typography>
    </Box>
  );
}

export default function Achievements() {
  return (
    <Box
      id="achievements"
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
            radial-gradient(700px 280px at 15% 65%, rgba(255,70,210,0.07), transparent 60%),
            radial-gradient(700px 280px at 85% 55%, rgba(70,120,255,0.08), transparent 60%)
          `,
          opacity: 0.55,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* header */}
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
          ACHIEVEMENTS
        </Typography>

        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "2.1rem", sm: "2.6rem", md: "3.1rem" },
            mb: 1.25,
          }}
        >
          Awards & Honours
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
          A selection of recognitions spanning academic performance and competitive achievement
        </Typography>

        {/* University timeline */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2.5, md: 3 } }}>
          {UNIVERSITY_ACHIEVEMENTS.map((x, idx) => (
            <TimelineAchievement
              key={x.id}
              x={x}
              isLast={idx === UNIVERSITY_ACHIEVEMENTS.length - 1}
            />
          ))}
        </Box>

        {/* Early achievements */}
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
            EARLIER ACHIEVEMENTS
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
            Earlier competitive recognitions — included for context
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {EARLY_ACHIEVEMENTS.map((x) => (
              <EarlyAchievementCard key={x.id} x={x} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Chrome1 from "../assets/chrome1.png";
import Chrome2 from "../assets/chrome2.png";
import Chrome3 from "../assets/chrome3.png";
import Chrome4 from "../assets/chrome4.png";
import Chrome5 from "../assets/chrome5.png";
import Chrome6 from "../assets/chrome6.png";
import Chrome7 from "../assets/chrome7.png";
import Chrome8 from "../assets/chrome8.png";
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

export default function ProjectsRow() {
  const CARD_WIDTH = { xs: 320, sm: 380, md: 440 };
  const DRAG_THRESHOLD = 6;

  const scrollerRef = useRef(null);

  const stateRef = useRef({
    isDown: false,
    pointerId: null,

    startX: 0,
    startScrollLeft: 0,

    lastX: 0,
    lastT: 0,
    velocity: 0, // px/ms

    moved: false,

    // smoothing / momentum
    targetScroll: 0,
    dragRAF: 0,
    momentumRAF: 0,
  });

  useEffect(() => {
    return () => {
      const s = stateRef.current;
      if (s.dragRAF) cancelAnimationFrame(s.dragRAF);
      if (s.momentumRAF) cancelAnimationFrame(s.momentumRAF);
    };
  }, []);

  const startDragLoop = () => {
    const el = scrollerRef.current;
    const s = stateRef.current;
    if (!el) return;

    const tick = () => {
      const current = el.scrollLeft;
      const next = current + (s.targetScroll - current) * 0.35;
      el.scrollLeft = next;

      if (s.isDown) {
        s.dragRAF = requestAnimationFrame(tick);
      } else {
        s.dragRAF = 0;
      }
    };

    if (!s.dragRAF) s.dragRAF = requestAnimationFrame(tick);
  };

  const startMomentum = () => {
    const el = scrollerRef.current;
    const s = stateRef.current;
    if (!el) return;

    if (s.momentumRAF) cancelAnimationFrame(s.momentumRAF);

    let v = s.velocity; // px/ms
    let last = performance.now();

    const tick = (now) => {
      const dt = now - last;
      last = now;

      el.scrollLeft -= v * dt;

      const frictionPer16ms = 0.92;
      const friction = Math.pow(frictionPer16ms, dt / 16);
      v *= friction;

      if (Math.abs(v) > 0.02) {
        s.momentumRAF = requestAnimationFrame(tick);
      } else {
        s.momentumRAF = 0;
        el.style.cursor = "grab";
      }
    };

    if (Math.abs(v) <= 0.02) {
      el.style.cursor = "grab";
      return;
    }

    s.momentumRAF = requestAnimationFrame(tick);
  };

  // CAPTURE phase: works even when the pointer starts on a card (<a>)
  const onPointerDownCapture = (e) => {
    const el = scrollerRef.current;
    const s = stateRef.current;
    if (!el) return;

    if (e.pointerType === "mouse" && e.button !== 0) return;

    // Do NOT preventDefault here — it can cancel anchor clicks
    // e.preventDefault();

    if (s.momentumRAF) cancelAnimationFrame(s.momentumRAF);
    s.momentumRAF = 0;

    s.isDown = true;
    s.pointerId = e.pointerId;

    // Do NOT capture yet — wait until user actually drags
    // el.setPointerCapture?.(e.pointerId);

    s.startX = e.clientX;
    s.startScrollLeft = el.scrollLeft;

    s.lastX = e.clientX;
    s.lastT = performance.now();
    s.velocity = 0;

    s.moved = false;
    s.targetScroll = el.scrollLeft;

    el.style.cursor = "grabbing";

    startDragLoop();
  };

  const onPointerMoveCapture = (e) => {
    const el = scrollerRef.current;
    const s = stateRef.current;
    if (!el || !s.isDown) return;

    const dx = e.clientX - s.startX;

    // Only enter "drag mode" after threshold (keeps normal link clicks working)
    if (!s.moved && Math.abs(dx) > DRAG_THRESHOLD) {
      s.moved = true;

      // Now that we know it's a drag: prevent default + capture + ???
      e.preventDefault();
      el.setPointerCapture?.(s.pointerId);
    }

    // If we haven't crossed threshold, don't interfere (allows link clicks)
    if (!s.moved) return;

    // prevent browser default behaviors while dragging
    e.preventDefault();

    s.targetScroll = s.startScrollLeft - dx;

    const now = performance.now();
    const dt = now - s.lastT || 1;
    const ddx = e.clientX - s.lastX;

    const instV = ddx / dt; // px/ms
    s.velocity = s.velocity * 0.8 + instV * 0.2;

    s.lastX = e.clientX;
    s.lastT = now;
  };

  const endDragCapture = (e) => {
    const el = scrollerRef.current;
    const s = stateRef.current;
    if (!el || !s.isDown) return;

    s.isDown = false;

    // release only if captured
    try {
      el.releasePointerCapture?.(e.pointerId);
    } catch {
      // nothing
    }

    startMomentum();
  };

  // prevent accidental navigation when the user actually dragged
  const onClickCapture = (e) => {
    const s = stateRef.current;
    if (s.moved) {
      e.preventDefault();
      e.stopPropagation();
      s.moved = false;
    }
  };

  // kill native "drag link" gesture (needed for dragging on cards)
  const onDragStartCapture = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      id="projects"
      sx={{
        display: { xs: "none", md: "block" }, // hide on mobile view
        bgcolor: "#000",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "visible",
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
            mb: { xs: 4, md: 6 },
            maxWidth: "70ch",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Various demonstrations of Technical Design, Scalable Software, and Applied ML.
        </Typography>

        <Box sx={{ overflow: "visible" }}>
          <Box
            ref={scrollerRef}
            onPointerDownCapture={onPointerDownCapture}
            onPointerMoveCapture={onPointerMoveCapture}
            onPointerUpCapture={endDragCapture}
            onPointerCancelCapture={endDragCapture}
            onPointerLeaveCapture={endDragCapture}
            onClickCapture={onClickCapture}
            onDragStartCapture={onDragStartCapture}
            sx={{
              display: "flex",
              gap: { xs: 2, md: 2.5 },
              overflowX: "auto",
              overflowY: "visible",
              py: { xs: 2.5, md: 3 },

              pl: { xs: 2.5, md: 3 },
              width: "100vw",
              maxWidth: "none",
              pr: { xs: 2.5, md: 6 },

              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },

              cursor: "grab",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "pan-y",

              WebkitUserDrag: "none",
            }}
          >
            {PROJECTS.map((p) => (
              <Box
                key={p.id}
                component="a"
                href={p.href}
                target="_blank"
                rel="noreferrer"
                draggable={false}
                sx={{
                  flex: "0 0 auto",
                  width: CARD_WIDTH,
                  aspectRatio: "2.3 / 1",
                  borderRadius: 4,
                  p: { xs: 2.25, md: 2.5 },
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 2, md: 2.5 },
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.10)",
                  overflow: "visible",
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.06),
                    0 0 40px ${p.glow}
                  `,
                  transition: "transform 220ms ease, border-color 220ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: "rgba(255,255,255,0.14)",
                  },
                  "&:focus-visible": {
                    outline: "none",
                    borderColor: "rgba(255,255,255,0.20)",
                    boxShadow: `
                      0 0 0 2px rgba(255,255,255,0.10),
                      0 0 55px ${p.glow}
                    `,
                  },

                  WebkitUserDrag: "none",
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={p.icon}
                    alt={`${p.eyebrow} icon`}
                    draggable={false}
                    sx={{
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                      display: "block",
                      userSelect: "none",
                      WebkitUserDrag: "none",
                      pointerEvents: "none",
                    }}
                  />
                </Box>

                <Box sx={{ minWidth: 0, mt: "-18px" }}>
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
                      lineHeight: 1.05,
                      fontSize: { xs: "1.22rem", sm: "1.38rem", md: "1.52rem" },
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

            <Box
              aria-hidden
              sx={{
                flex: "0 0 auto",
                width: { xs: 160, sm: 190, md: 220 },
                pointerEvents: "none",
                opacity: 0,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

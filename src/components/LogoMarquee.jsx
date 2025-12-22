import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { keyframes } from "@emotion/react";
import React from "react";

import sfuLogo from "../assets/sfu_logo2.png";
import arloLogo from "../assets/arlo_logo.png";
import threeAgLogo from "../assets/3ag_logo.png";
import micaLogo from "../assets/mica_logo.png";
import wynsLogo from "../assets/wyns_logo.png";

const scrollAnimation = keyframes`
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const organizations = [
  {
    id: 1,
    name: "SFU Logo",
    src: sfuLogo,
    glow: "rgba(200, 30, 45, 0.85)",
    href: "https://www.sfu.ca/",
  },
  {
    id: 5,
    name: "WYNS Logo",
    src: wynsLogo,
    glow: "rgba(255, 70, 210, 1)",
    strongGlow: true,
    href: "https://wyns.vercel.app/",
  },
  {
    id: 4,
    name: "Mica Logo",
    src: micaLogo,
    glow: "rgba(235, 200, 130, 0.9)",
    href: "https://mica.technology/",
  },
  {
    id: 2,
    name: "Arlo Logo",
    src: arloLogo,
    glow: "rgba(70, 220, 150, 0.85)",
    href: "https://ca.arlo.com/en-ca/",
  },
  {
    id: 3,
    name: "3AG Logo",
    src: threeAgLogo,
    glow: "rgba(70, 120, 255, 0.9)",
    href: "https://www.3agsystems.com/",
  },
];

const marqueeContent = [...organizations, ...organizations];

export default function LogoMarquee() {
  const itemWidth = 170;
  const totalContentWidth = marqueeContent.length * itemWidth;
  const scrollDuration = 25;

  const glowFilter = (color, strong = false) =>
    strong
      ? `
        drop-shadow(0 0 4px ${color})
        drop-shadow(0 0 10px ${color})
        drop-shadow(0 0 18px ${color})
        drop-shadow(0 0 36px ${color})
        drop-shadow(0 0 60px ${color})
      `
      : `
        drop-shadow(0 0 6px ${color})
        drop-shadow(0 0 14px ${color})
        drop-shadow(0 0 28px ${color})
      `;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#000",
        overflow: { xs: "hidden", md: "visible" },
        width: "100%",
        position: "relative",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* EYEBROW TEXT */}
        <Typography
          variant="overline"
          sx={{
            display: "block",
            textAlign: "center",
            letterSpacing: "0.22em",
            opacity: 0.65,
            mb: { xs: 3, md: 4 },
          }}
        >
          SELECT AFFILIATIONS
        </Typography>

        {/* DESKTOP VIEW */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            columnGap: { md: 4, lg: 5 },
          }}
        >
          {organizations.map((org) => (
            <Box
              key={org.id}
              component="a"
              href={org.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                flex: "0 1 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: 0,
                textDecoration: "none",
                cursor: "pointer",
                outline: "none",
                "&:focus-visible img": {
                  filter: `
                    ${glowFilter(org.glow, org.strongGlow)}
                    drop-shadow(0 0 80px ${org.glow})
                  `,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box
                component="img"
                src={org.src}
                alt={`${org.name} Logo`}
                sx={{
                  height: { md: 44, lg: 50 },
                  width: "auto",
                  maxWidth: "90%",
                  objectFit: "contain",
                  display: "block",
                  filter: glowFilter(org.glow, org.strongGlow),
                  transition: "filter 300ms ease, transform 300ms ease",
                  "&:hover": {
                    filter: `
                      ${glowFilter(org.glow, org.strongGlow)}
                      drop-shadow(0 0 80px ${org.glow})
                    `,
                    transform: "translateY(-2px)",
                  },
                }}
              />
            </Box>
          ))}
        </Box>

        {/* MOBILE VIEW */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            width: `${totalContentWidth}px`,
            animation: `${scrollAnimation} ${scrollDuration}s linear infinite`,
            willChange: "transform",
          }}
        >
          {marqueeContent.map((org, index) => (
            <Box
              key={`${org.id}-${index}`}
              component="a"
              href={org.href}
              target="_blank"
              rel="noreferrer"
              sx={{
                flexShrink: 0,
                width: itemWidth,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Box
                component="img"
                src={org.src}
                alt={`${org.name} Logo`}
                sx={{
                  height: 40,
                  width: "auto",
                  maxWidth: "85%",
                  objectFit: "contain",
                  display: "block",
                  filter: glowFilter(org.glow, org.strongGlow),
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

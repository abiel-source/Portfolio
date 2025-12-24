import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Box from "@mui/material/Box";
import Education from "../components/Education";
import LogoMarquee from "../components/LogoMarquee";
import Spotlight from "../components/Spotlight";
import ProjectsRow from "../components/ProjectsRow";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import FinalHero from "../components/FinalHero";
import Introduction from "../components/Introduction";
import ResponsiveMoon from "../components/ResponsiveMoon";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const id = location.state?.scrollToId;
    if (!id) return;

    // clear router state so it doesn't re-scroll on back/forward
    navigate(location.pathname + location.hash, { replace: true, state: null });

    // scroll after this commit
    queueMicrotask(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 88; // tweak if needed
      const y = window.scrollY + el.getBoundingClientRect().top - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <Box
      sx={{
        bgcolor: "#000",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>
        <ResponsiveMoon />
        <Hero />
        <Introduction />
        <Education />
        <Spotlight />
        <LogoMarquee />
        <Experience />
        <ProjectsRow />
        <Achievements />
        <FinalHero />
      </main>
      <Footer />
    </Box>
  );
}

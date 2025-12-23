import Header from "../components/Header";
import Hero from "../components/Hero";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
  return (
    <Box
      sx={{
        bgcolor: "#000",
        minHeight: "100vh",
        width: "100%",
        // overflowX: "clip",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main>
        <ResponsiveMoon />
        <Hero />
        {/* <LogoMarquee /> */}
        <Introduction />
        <Education />
        {/* <LogoMarquee /> */}
        <Spotlight />
        <LogoMarquee />
        <Experience />
        {/* <LogoMarquee /> */}
        <ProjectsRow />
        <Achievements />
        <FinalHero />
      </main>
      <Footer />
    </Box>
  );
}

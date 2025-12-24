import Header from "../components/Header";

import Box from "@mui/material/Box";

import LogoMarquee from "../components/LogoMarquee";

import Footer from "../components/Footer";
import FinalHero from "../components/FinalHero";

import ContactForm from "../components/ContactForm";

export default function Contact() {
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
        <ContactForm />
        <LogoMarquee />
      </main>
      <Footer />
    </Box>
  );
}

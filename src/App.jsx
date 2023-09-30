import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurTeam from "./components/ourTeam";
import Testimonial from "./components/Testimonial";
import AboutSection from "./components/About";
import CTA from "./components/CTA";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Bawah";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Features />
      <OurTeam />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;

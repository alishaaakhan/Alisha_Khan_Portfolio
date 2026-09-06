import { useIsTouchDevice } from "./hooks/useIsTouchDevice";
import { useReducedMotion } from "./hooks/useReducedMotion";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import InteractiveBackground from "./components/InteractiveBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  const isTouch = useIsTouchDevice();
  const reducedMotion = useReducedMotion();
  const hideNativeCursor = !isTouch && !reducedMotion;

  return (
    <div className={hideNativeCursor ? "md:cursor-none-desktop" : ""}>
      <LoadingScreen />
      <InteractiveBackground />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <Experience />
        <Certificates />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

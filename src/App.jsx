import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

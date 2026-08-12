import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work">
        <MyWork />
      </section>

      <section id="service">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
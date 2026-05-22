import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import About from '../../components/sections/About/About';
import Skills from '../../components/sections/Skills/Skills';
import Projects from '../../components/sections/Projects/Projects';
import Contact from '../../components/sections/Contact/Contact';
import FadeUp from '../../components/ui/FadeUp/FadeUp';

const Home = () => {
  return (
    <main style={{ overflow: 'hidden' }}>
      <FadeUp delay={0.1}>
        <Hero />
      </FadeUp>
      <FadeUp delay={0.2}>
        <About />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Skills />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Projects />
      </FadeUp>
      <FadeUp delay={0.2}>
        <Contact />
      </FadeUp>
    </main>
  );
};

export default Home;

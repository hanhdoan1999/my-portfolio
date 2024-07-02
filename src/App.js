
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import IntroSection from './components/IntroSection/IntroSection';
import AboutSection from './components/AboutSection/AboutSection';
import WhyHireMeSection from './components/WhyHireMeSection/WhyHireMeSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import BlogSection from './components/Container/BlogSection';
import CTASection from './components/CTASection/CTASection';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Container  isOn={darkMode} toggleSwitch={toggleDarkMode}>
        <IntroSection/>
        <WhyHireMeSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <BlogSection/>
        <CTASection/>
      </Container>
    </div>
  );
}

export default App;

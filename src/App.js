import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import IntroSection from './components/IntroSection/IntroSection';
import AboutSection from './components/AboutSection/AboutSection';
import WhyHireMeSection from './components/WhyHireMeSection/WhyHireMeSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import BlogSection from './components/Container/BlogSection';
import CTASection from './components/CTASection/CTASection';

function App() {
  return (
    <div className="App">
      <Container>
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

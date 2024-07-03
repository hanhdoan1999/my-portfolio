
import Container from '../components/Container/Container';
import IntroSection from '../components/IntroSection/IntroSection';
import WhyHireMeSection from '../components/WhyHireMeSection/WhyHireMeSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import BlogSection from '../components/Container/BlogSection';
import CTASection from '../components/CTASection/CTASection';
import { useEffect, useState } from 'react';

function Home() {
  return (
    <>
      <Container>
        <IntroSection/>
        <WhyHireMeSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <BlogSection/>
        <CTASection/>
      </Container>
    </>
  );
}

export default Home;

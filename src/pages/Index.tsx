
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SkillsMarquee from '@/components/SkillsMarquee';
import Projects from '@/components/Projects';
import About from '@/components/About';
import SocialIsland from '@/components/SocialIsland';
import ContactFooter from '@/components/ContactFooter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div data-scroll>
        <SkillsMarquee />
      </div>
      <div data-scroll>
        <Projects />
      </div>
      <div data-scroll>
        <About />
      </div>
      <div data-scroll>
        <ContactFooter />
      </div>
      <SocialIsland />
    </div>
  );
};

export default Index;

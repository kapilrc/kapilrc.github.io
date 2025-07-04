import Navigation from '@/components/navigation';
import HeroSection from '@/components/sections/hero';
import ContactBar from '@/components/sections/contact-bar';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experience';
import CertificationsSection from '@/components/sections/certifications';
import ProfilesSection from '@/components/sections/profiles';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* <ContactBar /> */}
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ProfilesSection />
      <Footer />
    </div>
  );
}

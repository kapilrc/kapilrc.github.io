import { Button } from '@/components/ui/button';
import { FloatingCard } from '@/components/ui/floating-card';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import kapilAvatarPath from '@assets/kapil-avatar_1751540504716.png';
import kapilResume from '@assets/KapilChoudhari_JS_Web_Dev_Tech_Arch.pdf';
import { Card } from '../ui/card';

export default function HeroSection() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card>
            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Frontend
              <span className="text-accent ml-4">Architect</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              14+ years of experience building scalable web applications with React, Next.js, and modern technologies. 
              Leading teams and architecting solutions that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('experience')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View Work
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open(kapilResume, '_blank')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Download Resume
              </Button>
            </div>
          </Card>
          
          <Card className="flex flex-col items-center justify-center py-8">
            <img
              src={kapilAvatarPath}
              alt="Kapil Choudhari"
              className="w-40 h-40 rounded-full object-cover shadow-2xl mb-4"
            />
            <div className="text-center space-y-1">
              <div>📍 Pune, Remote 📧 <a href="mailto:kapilrc@gmail.com" className="text-blue-600 hover:underline">kapilrc@gmail.com</a></div>
              <div>📞 +91 98333 733 53 🌐 <a href='https://www.linkedin.com/in/kapilchoudhari' className="text-blue-600 hover:underline">LinkedIn</a></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

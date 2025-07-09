import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollToSection } = useSmoothScroll();

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 navbar-blur border-b border-border px-3">
      <div className="container mx-auto max-w-6xl py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-primary cursor-pointer" onClick={() => handleNavClick('hero')}>KC</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`hover:text-accent transition-colors ${
                  activeSection === item.id ? 'text-accent' : 'text-text'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={() => handleNavClick('connect')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left hover:text-accent transition-colors ${
                    activeSection === item.id ? 'text-accent' : 'text-text'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  console.log('Contact button clicked');
                  handleNavClick('connect')
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

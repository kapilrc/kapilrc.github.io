import { FloatingCard } from '@/components/ui/floating-card';
import { Button } from '@/components/ui/button';
import { Linkedin, Download } from 'lucide-react';
import { PROFILES } from '@/data';

export default function ProfilesSection() {
  const getIcon = (title: string) => {
    if (title.includes('LinkedIn')) {
      return <Linkedin size={32} className="text-blue-600" />;
    }
    return <Download size={32} className="text-green-600" />;
  };

  const getButtonColor = (title: string) => {
    if (title.includes('LinkedIn')) {
      return 'bg-blue-600 hover:bg-blue-700';
    }
    return 'bg-green-600 hover:bg-green-700';
  };

  return (
    <section id="connect" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 xl:px-6">
        <div className="max-w-4xl mx-auto">
          <FloatingCard className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your next project or explore opportunities? Get in touch.
            </p>
          </FloatingCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROFILES.map((profile, index) => (
              <FloatingCard
                key={profile.title}
                delay={index * 0.1}
                className="bg-card p-8 rounded-xl border border-border text-center"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  {getIcon(profile.title)}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{profile.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {profile.title.includes('LinkedIn') 
                    ? 'Connect with me on LinkedIn to stay updated with my professional journey.'
                    : 'Get a detailed overview of my experience, skills, and achievements.'
                  }
                </p>
                <Button
                  onClick={() => window.open(profile.link, '_blank')}
                  className={`${getButtonColor(profile.title)} text-white`}
                >
                  {profile.title.includes('LinkedIn') ? 'Connect on LinkedIn' : 'Download Resume'}
                </Button>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

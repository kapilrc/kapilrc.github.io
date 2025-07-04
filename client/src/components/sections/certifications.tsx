import { FloatingCard } from '@/components/ui/floating-card';
import { ExternalLink, Award } from 'lucide-react';
import { CERTIFICATIONS } from '@/data';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <FloatingCard className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Certifications</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Continuous learning and professional development through industry-recognized certifications.
            </p>
          </FloatingCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, index) => (
              <FloatingCard
                key={cert.id}
                delay={index * 0.1}
                className="bg-secondary p-6 rounded-xl border border-border"
              >
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="object-contain w-12 h-12"
                    />
                    </div>
                  <div>
                    <h3 className="font-bold text-primary">{cert.issuer}</h3>
                    <p className="text-muted-foreground text-sm">{cert.date}</p>
                  </div>
                </div>
                <h4 className="font-semibold text-primary mb-3 line-clamp-3">{cert.title}</h4>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors text-sm inline-flex items-center"
                >
                  View Certificate
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

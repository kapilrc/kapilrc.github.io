import { FloatingCard } from '@/components/ui/floating-card';
import { Check, ExternalLink } from 'lucide-react';
import { WORK } from '@/data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FloatingCard className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Work Experience</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              My journey as a Frontend Architect, leading teams and building innovative solutions.
            </p>
          </FloatingCard>
          
          <div className="space-y-12">
            {WORK.map((work, workIndex) => (
              <FloatingCard
                key={work.company}
                delay={workIndex * 0.1}
                className="bg-card p-4 xl:p-8 rounded-xl border border-border"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{work.company}</h3>
                    <p className="text-accent font-semibold mb-2">{work.position}</p>
                    <p className="text-muted-foreground">{work.duration}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {work.projects.map((project, projectIndex) => (
                    <div key={project.title} className="border-l-4 border-accent pl-3 xl:pl-6">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-lg text-primary">{project.title}</h4>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                      {project.duration && (
                        <p className="text-muted-foreground mb-4">{project.duration}</p>
                      )}
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <ul className="space-y-2">
                        {project.responsibilites.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <Check className="text-highlight mr-3 mt-1 flex-shrink-0" size={16} />
                            <span 
                              className="text-muted-foreground"
                              dangerouslySetInnerHTML={{ __html: responsibility }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

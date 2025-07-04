import { FloatingCard } from '@/components/ui/floating-card';
import { SkillTag } from '@/components/ui/skill-tag';
import { SKILLS } from '@/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <FloatingCard className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Modern technologies and frameworks I work with to build exceptional web applications.
            </p>
          </FloatingCard>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {SKILLS.map((skill, index) => (
              <SkillTag key={skill} delay={index * 0.05}>
                {skill}
              </SkillTag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

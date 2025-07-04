import { FloatingCard } from '@/components/ui/floating-card';
import { HIGHLIGHTS } from '@/data';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { useState } from 'react';

export default function AboutSection() {

  const INITIAL_COUNT = 5;
  const { scrollToSection } = useSmoothScroll();
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + INITIAL_COUNT, HIGHLIGHTS.length));
  };

  const handleViewLess = () => {
    scrollToSection("about");
    setTimeout(() => {
      setVisibleCount(INITIAL_COUNT);
    },300);
  };
  
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <FloatingCard className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A passionate Frontend Architect with expertise in building scalable, performance-optimized web applications 
              and leading development teams to deliver exceptional user experiences.
            </p>
          </FloatingCard>

          <div className="grid gap-3">
            {HIGHLIGHTS.slice(0, visibleCount).map((highlight, index) => (
              <FloatingCard
                key={index}
                delay={index * 0.1}
                className="bg-card p-3 rounded-xl border border-border"
              >
                <p
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: highlight }}
                />
              </FloatingCard>
            ))}
          </div>
          {HIGHLIGHTS.length > INITIAL_COUNT && (
            <div className="flex justify-center mt-4">
              {visibleCount < HIGHLIGHTS.length ? (
                <button
                  className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition"
                  onClick={handleViewMore}
                >
                  View More
                </button>
              ) : (
                <button
                  className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 transition"
                  onClick={handleViewLess}
                >
                  View Less
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

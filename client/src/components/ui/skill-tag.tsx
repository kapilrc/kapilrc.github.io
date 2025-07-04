import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  children: React.ReactNode;
  delay?: number;
}

export function SkillTag({ children, delay = 0 }: SkillTagProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <span
      ref={elementRef}
      className={cn(
        'skill-tag animate-fade-in bg-muted text-text px-6 py-3 rounded-full font-medium cursor-pointer',
        isIntersecting && 'visible'
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </span>
  );
}

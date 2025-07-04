import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingCard({ children, className, delay = 0 }: FloatingCardProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={cn(
        'animate-fade-in floating-card',
        isIntersecting && 'visible',
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

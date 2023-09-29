import { cn } from '@/lib/utils';

interface HeadingProps {
  children: React.ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export default function Heading({ children, as }: HeadingProps) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl',
        as === 'h1' && 'text-3xl lg:text-4xl',
        as === 'h2' && 'text-2xl lg:text-3xl',
        as === 'h3' && 'text-xl lg:text-2xl',
        as === 'h4' && 'text-lg lg:text-xl',
        as === 'h5' && 'text-lg lg:text-xl',
        as === 'h6' && 'text-base lg:text-lg',
      )}
    >
      {children}
    </h1>
  );
}

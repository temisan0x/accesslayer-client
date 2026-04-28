import { cn } from '@/lib/utils';

interface CreatorHeroBannerProps {
  heroUrl?: string | null;
  className?: string;
}

const CreatorHeroBanner: React.FC<CreatorHeroBannerProps> = ({
  heroUrl,
  className,
}) => {
  return (
    <div
      role="img"
      aria-label="Creator hero banner"
      className={cn(
        'h-40 w-full rounded-2xl bg-cover bg-center md:h-56',
        className
      )}
      style={
        heroUrl
          ? { backgroundImage: `url(${heroUrl})` }
          : { background: 'var(--creator-hero-fallback)' }
      }
    />
  );
};

export default CreatorHeroBanner;
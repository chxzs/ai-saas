import { LandingContent } from '@/components/landing-content';
import { LandingHero } from '@/components/landing-hero';
import { LandingNavbar } from '@/components/landing-navbar';

export default function LandingPage(): React.ReactNode {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}

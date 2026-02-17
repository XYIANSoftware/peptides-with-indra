import type { Metadata } from 'next';
import { AppLayout } from '@/components';
import {
  HomeHeroSection,
  TrustStripSection,
  FeaturedProductsSection,
  BenefitsSection,
  TestimonialsSection,
  FAQPreviewSection,
  CTABandSection,
} from '@/components/pages/home';
import { SITE_DESCRIPTION } from '@/constants';

export const metadata: Metadata = {
  title: 'Home',
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <AppLayout>
      <HomeHeroSection />
      <TrustStripSection />
      <FeaturedProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQPreviewSection />
      <CTABandSection />
    </AppLayout>
  );
}

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

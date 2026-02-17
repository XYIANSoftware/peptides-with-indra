import type { Metadata } from 'next';
import { SITE_TITLE } from '@/constants';

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Frequently asked questions about ${SITE_TITLE}—peptides, products, shipping, injection guidance, and how to choose.`,
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

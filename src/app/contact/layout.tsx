import type { Metadata } from 'next';
import { SITE_TITLE } from '@/constants';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${SITE_TITLE}. Questions about products, shipping, or how to get started—we read every message and respond.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

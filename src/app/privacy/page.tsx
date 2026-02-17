import type { Metadata } from 'next';
import { AppLayout } from '@/components';
import {
  SITE_TITLE,
  PRIVACY_SECTIONS,
  PRIVACY_LAST_UPDATED,
} from '@/constants';
import styles from './privacy.module.scss';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `Privacy policy for ${SITE_TITLE}. How we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <AppLayout>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>Privacy policy</h1>
        <p className={styles.updated}>Last updated: {PRIVACY_LAST_UPDATED}</p>
        {PRIVACY_SECTIONS.map((section, i) => (
          <section key={i}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.paragraphs.map((para, j) => (
              <p key={j} className={styles.para}>
                {para}
              </p>
            ))}
          </section>
        ))}
      </article>
    </AppLayout>
  );
}

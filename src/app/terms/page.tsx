import type { Metadata } from 'next';
import { AppLayout } from '@/components';
import { SITE_TITLE, TERMS_SECTIONS, TERMS_LAST_UPDATED } from '@/constants';
import styles from './terms.module.scss';

export const metadata: Metadata = {
  title: 'Terms of use',
  description: `Terms of use for ${SITE_TITLE}. Product and site use, orders, and contact.`,
};

export default function TermsPage() {
  return (
    <AppLayout>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>Terms of use</h1>
        <p className={styles.updated}>Last updated: {TERMS_LAST_UPDATED}</p>
        {TERMS_SECTIONS.map((section, i) => (
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

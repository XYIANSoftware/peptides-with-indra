import type { Metadata } from 'next';
import { Card } from 'primereact/card';
import { AppLayout } from '@/components';
import { BrochureDownloadButton } from '@/components/ui';
import { ABOUT_INTRO, SITE_DESCRIPTION, SITE_TITLE } from '@/constants';
import styles from './about.module.scss';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${SITE_TITLE}. ${SITE_DESCRIPTION}`,
};

export default function AboutPage() {
  return (
    <AppLayout>
      <article className={styles.wrapper}>
        <h1 className={styles.title}>{ABOUT_INTRO.headline}</h1>
        <p className={styles.lead}>{ABOUT_INTRO.lead}</p>
        {ABOUT_INTRO.paragraphs.map((para, i) => (
          <p key={i} className={styles.para}>
            {para}
          </p>
        ))}
        <Card className={styles.brochureCard}>
          <p className={styles.brochureText}>
            Our product brochure is the full catalog. Download it for detailed
            information on our peptides, protocols, and wellness offerings.
          </p>
          <BrochureDownloadButton outlined={false} />
        </Card>
      </article>
    </AppLayout>
  );
}

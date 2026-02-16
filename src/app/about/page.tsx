import { AppLayout } from '@/components';
import { ABOUT_INTRO } from '@/constants';
import styles from './about.module.scss';

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
      </article>
    </AppLayout>
  );
}

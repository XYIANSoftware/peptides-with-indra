import Link from 'next/link';
import { Button } from 'primereact/button';
import { BrochureDownloadButton } from '@/components/ui';
import { HERO } from '@/constants';
import styles from './HomeSections.module.scss';

export function HomeHeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroContent}>
        <h1 id="hero-heading" className={styles.heroHeadline}>
          {HERO.headline}
        </h1>
        <p className={styles.heroStatement}>{HERO.valueStatement}</p>
        <div className={styles.heroCtas}>
          <Link href="/products">
            <Button label={HERO.ctaPrimary} className="p-button-lg" />
          </Link>
          <Link href="/about">
            <Button label={HERO.ctaSecondary} outlined className="p-button-lg" />
          </Link>
          <BrochureDownloadButton className={styles.heroBrochureBtn} />
        </div>
      </div>
    </section>
  );
}

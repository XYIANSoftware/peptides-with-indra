import Link from 'next/link';
import { Button } from 'primereact/button';
import { CTA_BAND } from '@/constants';
import styles from './HomeSections.module.scss';

export function CTABandSection() {
  return (
    <section className={styles.ctaBand} aria-labelledby="cta-band-heading">
      <h2 id="cta-band-heading" className={styles.ctaBandHeadline}>
        {CTA_BAND.headline}
      </h2>
      <p className={styles.ctaBandSubline}>{CTA_BAND.subline}</p>
      <Link href={CTA_BAND.buttonHref}>
        <Button label={CTA_BAND.buttonLabel} className="p-button-lg" />
      </Link>
    </section>
  );
}

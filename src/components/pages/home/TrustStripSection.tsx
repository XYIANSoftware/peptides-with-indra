import { TRUST_STRIP } from '@/constants';
import styles from './HomeSections.module.scss';

export function TrustStripSection() {
  return (
    <section className={styles.trustStrip} aria-label="Trust and quality">
      <div className={styles.trustGrid}>
        {TRUST_STRIP.map((item) => (
          <div key={item.title} className={styles.trustItem}>
            <span className={`pi ${item.icon} ${styles.trustIcon}`} aria-hidden />
            <h3 className={styles.trustTitle}>{item.title}</h3>
            <p className={styles.trustDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

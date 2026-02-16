import { BENEFITS } from '@/constants';
import styles from './HomeSections.module.scss';

export function BenefitsSection() {
  return (
    <section className={styles.sectionAlt} aria-labelledby="benefits-heading">
      <h2 id="benefits-heading" className={styles.sectionTitle}>
        Why choose us
      </h2>
      <div className={styles.benefitsGrid}>
        {BENEFITS.map((item) => (
          <div key={item.title} className={styles.benefitItem}>
            <span className={`pi ${item.icon} ${styles.benefitIcon}`} aria-hidden />
            <h3 className={styles.benefitTitle}>{item.title}</h3>
            <p className={styles.benefitDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

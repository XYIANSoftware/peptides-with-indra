import { TESTIMONIALS } from '@/constants';
import styles from './HomeSections.module.scss';

export function TestimonialsSection() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className={styles.sectionTitle}>
        What people say
      </h2>
      <div className={styles.testimonialsGrid}>
        {TESTIMONIALS.map((t, i) => (
          <blockquote key={i} className={styles.testimonial}>
            <p className={styles.testimonialQuote}>{t.quote}</p>
            <cite className={styles.testimonialAuthor}>{t.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

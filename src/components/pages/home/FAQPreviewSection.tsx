'use client';

import Link from 'next/link';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { FAQ_PREVIEW_ITEMS } from '@/constants';
import styles from './HomeSections.module.scss';

export function FAQPreviewSection() {
  return (
    <section className={styles.section} aria-labelledby="faq-preview-heading">
      <h2 id="faq-preview-heading" className={styles.sectionTitle}>
        Common questions
      </h2>
      <Accordion multiple className={styles.faqAccordion}>
        {FAQ_PREVIEW_ITEMS.map((item) => (
          <AccordionTab key={item.id} header={item.question}>
            <p className={styles.faqAnswer}>{item.answer}</p>
          </AccordionTab>
        ))}
      </Accordion>
      <div className={styles.sectionCta}>
        <Link href="/faq">
          <Button label="View all FAQ" outlined />
        </Link>
      </div>
    </section>
  );
}

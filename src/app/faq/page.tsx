'use client';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { AppLayout } from '@/components';
import { FAQ_ITEMS } from '@/constants';
import styles from './faq.module.scss';

export default function FAQPage() {
  return (
    <AppLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Frequently asked questions</h1>
        <p className={styles.intro}>
          Quick answers to common questions. If you don’t see yours here, get in
          touch—we’re happy to help.
        </p>
        <Accordion multiple className={styles.accordion}>
          {FAQ_ITEMS.map((item) => (
            <AccordionTab key={item.id} header={item.question}>
              <p className={styles.answer}>{item.answer}</p>
            </AccordionTab>
          ))}
        </Accordion>
      </div>
    </AppLayout>
  );
}

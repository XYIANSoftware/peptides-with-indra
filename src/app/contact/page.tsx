'use client';

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { AppLayout } from '@/components';
import { CONTACT_COPY } from '@/constants';
import styles from './contact.module.scss';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <AppLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{CONTACT_COPY.headline}</h1>
        <p className={styles.intro}>{CONTACT_COPY.intro}</p>

        {submitted ? (
          <Message severity="success" className={styles.message}>
            {CONTACT_COPY.successMessage}
          </Message>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                Name
              </label>
              <InputText
                id="contact-name"
                name="name"
                className="w-full"
                required
                placeholder="Your name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                Email
              </label>
              <InputText
                id="contact-email"
                name="email"
                type="email"
                className="w-full"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                Message
              </label>
              <InputTextarea
                id="contact-message"
                name="message"
                className="w-full"
                rows={5}
                required
                placeholder="Your question or message..."
              />
            </div>
            <Button type="submit" label="Send message" className="p-button-lg" />
          </form>
        )}
      </div>
    </AppLayout>
  );
}

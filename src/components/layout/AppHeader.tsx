'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { BrochureDownloadButton } from '@/components/ui';
import { useTheme } from '@/providers';
import { THEMES } from '@/constants';
import { NAV_LINKS, CTA_LABEL, CTA_HREF, SITE_TITLE } from '@/constants';
import styles from './AppHeader.module.scss';

export function AppHeader() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label={`${SITE_TITLE} home`}>
            {SITE_TITLE}
          </Link>

          <nav className={styles.navDesktop} aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={styles.navLink}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.themeSwitcher}>
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={theme === t.id ? styles.themeBtnActive : styles.themeBtn}
                  onClick={() => setTheme(t.id)}
                  title={`Switch to ${t.label}`}
                  aria-label={`Switch to ${t.label}`}
                  aria-pressed={theme === t.id}
                >
                  {t.id === 'socal-wellness-light' ? (
                    <span className="pi pi-sun" aria-hidden />
                  ) : (
                    <span className="pi pi-moon" aria-hidden />
                  )}
                </button>
              ))}
            </div>
            <div className={styles.ctaDesktop}>
              <BrochureDownloadButton className={styles.brochureDesktop} />
              <Link href={CTA_HREF}>
                <Button label={CTA_LABEL} />
              </Link>
            </div>
            <Button
              icon="pi pi-bars"
              rounded
              text
              className={styles.menuBtn}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            />
          </div>
        </div>
      </header>

      <Sidebar
        visible={mobileMenuOpen}
        onHide={closeMobileMenu}
        position="right"
        className={styles.sidebar}
        showCloseIcon
      >
        <nav className={styles.navMobile} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.navLinkMobile}
              onClick={closeMobileMenu}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className={styles.themeSection}>
          <span className={styles.themeLabel}>Theme</span>
          <div className={styles.themeSwitcher}>
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={theme === t.id ? styles.themeBtnActive : styles.themeBtn}
                onClick={() => {
                  setTheme(t.id);
                  closeMobileMenu();
                }}
                aria-label={`Switch to ${t.label}`}
                aria-pressed={theme === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.ctaMobile}>
          <BrochureDownloadButton className="w-full" />
          <Link href={CTA_HREF} onClick={closeMobileMenu}>
            <Button label={CTA_LABEL} className="w-full" />
          </Link>
        </div>
      </Sidebar>
    </>
  );
}

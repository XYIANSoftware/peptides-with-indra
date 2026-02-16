import Link from 'next/link';
import { NAV_LINKS, SITE_TITLE } from '@/constants';
import styles from './AppFooter.module.scss';

const CURRENT_YEAR = new Date().getFullYear();

export function AppFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              {SITE_TITLE}
            </Link>
            <p className={styles.tagline}>
              Quality peptides, clear information, and a commitment to what actually works.
            </p>
          </div>
          <nav className={styles.links} aria-label="Footer navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.link}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {CURRENT_YEAR} {SITE_TITLE}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

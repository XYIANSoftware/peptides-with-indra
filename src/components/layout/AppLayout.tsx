import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import styles from './AppLayout.module.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

const MAIN_CONTENT_ID = 'main-content';

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.wrapper} data-app-layout>
      <a
        href={`#${MAIN_CONTENT_ID}`}
        className={styles.skipLink}
      >
        Skip to main content
      </a>
      <AppHeader />
      <main id={MAIN_CONTENT_ID} className={styles.main} data-app-main>{children}</main>
      <AppFooter />
    </div>
  );
}

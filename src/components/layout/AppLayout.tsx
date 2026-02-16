import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import styles from './AppLayout.module.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.wrapper} data-app-layout>
      <AppHeader />
      <main className={styles.main} data-app-main>{children}</main>
      <AppFooter />
    </div>
  );
}

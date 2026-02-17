'use client';

import { BROCHURE_LABEL, BROCHURE_PDF_PATH } from '@/constants';
import styles from './BrochureDownloadButton.module.scss';

type BrochureDownloadButtonProps = {
  outlined?: boolean;
  className?: string;
};

export function BrochureDownloadButton({
  outlined = true,
  className,
}: BrochureDownloadButtonProps) {
  return (
    <a
      href={BROCHURE_PDF_PATH}
      target="_blank"
      rel="noopener noreferrer"
      className={[styles.btn, outlined ? styles.outlined : styles.filled, className]
        .filter(Boolean)
        .join(' ')}
      aria-label={`${BROCHURE_LABEL} (opens PDF in new tab)`}
    >
      <span className="pi pi-download" aria-hidden />
      {BROCHURE_LABEL}
    </a>
  );
}

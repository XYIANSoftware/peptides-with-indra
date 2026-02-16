'use client';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import styles from './TagInfoDialog.module.scss';

export interface TagInfoDialogProps {
  visible: boolean;
  onHide: () => void;
  title: string;
  description: string;
}

/**
 * Reusable dialog for tag/spec chip info. Title and description from props.
 */
export function TagInfoDialog({
  visible,
  onHide,
  title,
  description,
}: TagInfoDialogProps) {
  const footer = (
    <Button label="Got it" onClick={onHide} className="p-button-sm" />
  );

  return (
    <Dialog
      header={title}
      visible={visible}
      onHide={onHide}
      footer={footer}
      dismissableMask
      aria-describedby="tag-info-dialog-desc"
    >
      <p id="tag-info-dialog-desc" className={styles.desc}>
        {description}
      </p>
    </Dialog>
  );
}

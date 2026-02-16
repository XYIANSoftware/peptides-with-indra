'use client';

import { useCallback, useState } from 'react';
import { Tag } from 'primereact/tag';
import { getTagDialogInfo } from '@/constants';
import { TagInfoDialog } from './TagInfoDialog';
import styles from './ProductTag.module.scss';

interface ProductTagProps {
  /** Chip label shown on the tag (e.g. "Recovery", "5 mg"). */
  label: string;
}

/**
 * Renders a tag that matches product spec chips. If dialog info exists for this label,
 * the tag is clickable with subtle hover/active styles and opens TagInfoDialog.
 * Otherwise renders a plain Tag (same look, not clickable).
 */
export function ProductTag({ label }: ProductTagProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const info = getTagDialogInfo(label);

  const openDialog = useCallback(() => {
    if (info) setDialogOpen(true);
  }, [info]);

  const closeDialog = useCallback(() => setDialogOpen(false), []);

  if (!info) {
    return <Tag value={label} className="p-tag-sm" />;
  }

  return (
    <>
      <button
        type="button"
        className={`p-tag p-tag-sm ${styles.clickableTag}`}
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-label={`Learn more about ${label}`}
      >
        {label}
      </button>
      <TagInfoDialog
        visible={dialogOpen}
        onHide={closeDialog}
        title={info.dialogTitle}
        description={info.dialogDescription}
      />
    </>
  );
}

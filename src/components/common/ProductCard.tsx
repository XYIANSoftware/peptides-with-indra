import Link from 'next/link';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import type { ProductCardItem } from '@/types';

export interface ProductCardProps {
  item: ProductCardItem;
  /** Optional classNames from parent's CSS module (card, body, title, desc, chips). */
  classNames?: {
    card?: string;
    body?: string;
    title?: string;
    desc?: string;
    chips?: string;
  };
  /** Heading level for product name (e.g. h3 when inside a section that uses h2). Default h2. */
  titleTag?: 'h2' | 'h3';
}

export function ProductCard({ item, classNames = {}, titleTag: TitleTag = 'h2' }: ProductCardProps) {
  const { name, shortDescription, specChips, linkHref, linkLabel } = item;
  return (
    <Card className={classNames.card}>
      <div className={classNames.body}>
        <TitleTag className={classNames.title}>{name}</TitleTag>
        <p className={classNames.desc}>{shortDescription}</p>
        <div className={classNames.chips}>
          {specChips.map((chip) => (
            <Tag key={chip} value={chip} className="p-tag-sm" />
          ))}
        </div>
        <Link href={linkHref}>
          <Button label={linkLabel} className="p-button-sm" />
        </Link>
      </div>
    </Card>
  );
}

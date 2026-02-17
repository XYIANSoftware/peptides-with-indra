import type { Metadata } from 'next';
import { AppLayout, ProductCard } from '@/components';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  getProductsByCategory,
  SITE_TITLE,
} from '@/constants';
import type { ProductCardItem } from '@/types';
import styles from './products.module.scss';

export const metadata: Metadata = {
  title: 'Products',
  description: `Browse ${SITE_TITLE} peptide products by category—anti-aging, skin & beauty, weight loss, recovery, and more. Clear info and protocols.`,
};

function toCardItem(p: (typeof PRODUCTS)[0]): ProductCardItem {
  return {
    id: p.id,
    name: p.name,
    shortDescription: p.shortDescription,
    specChips: p.specChips,
    linkHref: `/products/${p.slug}`,
    linkLabel: 'View details',
  };
}

export default function ProductsPage() {
  return (
    <AppLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Products</h1>
        <p className={styles.intro}>
          Our peptide lineup is chosen for quality and transparency. Each
          product comes with clear information so you know what you&apos;re
          getting. Grouped by category from our brochure.
        </p>
        {PRODUCT_CATEGORIES.map((category) => {
          const items = getProductsByCategory(category);
          if (items.length === 0) return null;
          return (
            <section
              key={category}
              className={styles.categorySection}
              aria-labelledby={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <h2
                id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
                className={styles.categoryTitle}
              >
                {category}
              </h2>
              <div className={styles.grid}>
                {items.map((p) => (
                  <ProductCard
                    key={p.id}
                    item={toCardItem(p)}
                    classNames={{
                      card: styles.card,
                      body: styles.cardBody,
                      title: styles.cardTitle,
                      desc: styles.cardDesc,
                      chips: styles.chips,
                    }}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </AppLayout>
  );
}

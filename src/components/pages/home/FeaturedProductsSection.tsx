import Link from 'next/link';
import { Button } from 'primereact/button';
import { ProductCard } from '@/components';
import { FEATURED_PRODUCTS_PREVIEW } from '@/constants';
import type { ProductCardItem } from '@/types';
import styles from './HomeSections.module.scss';

const featuredCardItems: ProductCardItem[] = FEATURED_PRODUCTS_PREVIEW.map((p) => ({
  id: p.id,
  name: p.name,
  shortDescription: p.shortDescription,
  specChips: p.specChips,
  linkHref: p.href,
  linkLabel: 'View product',
}));

export function FeaturedProductsSection() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <h2 id="featured-heading" className={styles.sectionTitle}>
        Featured products
      </h2>
      <div className={styles.productGrid}>
        {featuredCardItems.map((item) => (
<ProductCard
              key={item.id}
              item={item}
              titleTag="h3"
              classNames={{
              card: styles.productCard,
              body: styles.productCardBody,
              title: styles.productName,
              desc: styles.productDesc,
              chips: styles.productChips,
            }}
          />
        ))}
      </div>
      <div className={styles.sectionCta}>
        <Link href="/products">
          <Button label="Shop all products" />
        </Link>
      </div>
    </section>
  );
}

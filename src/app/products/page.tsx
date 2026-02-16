import { AppLayout, ProductCard } from '@/components';
import { PRODUCTS } from '@/constants';
import type { ProductCardItem } from '@/types';
import styles from './products.module.scss';

const productCardItems: ProductCardItem[] = PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  shortDescription: p.shortDescription,
  specChips: p.specChips,
  linkHref: `/products/${p.slug}`,
  linkLabel: 'View details',
}));

export default function ProductsPage() {
  return (
    <AppLayout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Products</h1>
        <p className={styles.intro}>
          Our peptide lineup is chosen for quality and transparency. Each product
          comes with clear information so you know what you&apos;re getting.
        </p>
        <div className={styles.grid}>
          {productCardItems.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
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
      </div>
    </AppLayout>
  );
}

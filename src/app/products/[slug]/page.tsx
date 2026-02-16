import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { ProductTag } from '@/components/ui';
import { TabView, TabPanel } from 'primereact/tabview';
import { AppLayout } from '@/components';
import { getProductBySlug } from '@/constants';
import styles from '../product-detail.module.scss';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <AppLayout>
      <div className={styles.wrapper}>
        <div className={styles.twoCol}>
          <div className={styles.imageCol}>
            <div className={styles.imagePlaceholder}>
              <span className="pi pi-image" aria-hidden />
              <span>Product image</span>
            </div>
          </div>
          <div className={styles.infoCol}>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.longDesc}>{product.longDescription}</p>
            <div className={styles.chips}>
              {product.specChips.map((chip) => (
                <ProductTag key={chip} label={chip} />
              ))}
            </div>
            <Link href="/contact">
              <Button label="Inquire or order" className="p-button-lg" />
            </Link>
            <TabView className={styles.tabs}>
              <TabPanel header="Details">
                <p className={styles.tabContent}>{product.details}</p>
              </TabPanel>
              <TabPanel header="Specs">
                <p className={styles.tabContent}>{product.specs}</p>
              </TabPanel>
              <TabPanel header="Shipping">
                <p className={styles.tabContent}>{product.shipping}</p>
              </TabPanel>
            </TabView>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { ProductTag } from '@/components/ui';
import { TabView, TabPanel } from 'primereact/tabview';
import { AppLayout } from '@/components';
import { getProductBySlug, SITE_TITLE } from '@/constants';
import styles from '../product-detail.module.scss';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product)
    return { title: 'Product not found' };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${SITE_TITLE}`,
      description: product.shortDescription,
    },
  };
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
              {(product.dosage ||
                product.administration ||
                product.sideEffects ||
                product.additionalBenefits) && (
                <TabPanel header="Protocol">
                  <div className={styles.protocolContent}>
                    {product.dosage && (
                      <section>
                        <h3 className={styles.protocolHeading}>Dosage</h3>
                        <p className={styles.tabContent}>{product.dosage}</p>
                      </section>
                    )}
                    {product.administration && (
                      <section>
                        <h3 className={styles.protocolHeading}>
                          Administration
                        </h3>
                        <p className={styles.tabContent}>
                          {product.administration}
                        </p>
                      </section>
                    )}
                    {product.sideEffects && (
                      <section>
                        <h3 className={styles.protocolHeading}>
                          Side effects
                        </h3>
                        <p className={styles.tabContent}>
                          {product.sideEffects}
                        </p>
                      </section>
                    )}
                    {product.additionalBenefits && (
                      <section>
                        <h3 className={styles.protocolHeading}>
                          Additional benefits
                        </h3>
                        <p className={styles.tabContent}>
                          {product.additionalBenefits}
                        </p>
                      </section>
                    )}
                  </div>
                </TabPanel>
              )}
              <TabPanel header="Specs">
                <p className={styles.tabContent}>{product.specs}</p>
              </TabPanel>
              <TabPanel header="Shipping">
                <p className={styles.tabContent}>{product.shipping}</p>
              </TabPanel>
            </TabView>
            <p className={styles.disclaimer}>
              The information provided is for educational purposes only and is
              not intended to diagnose, treat, cure, or prevent any disease.
              Results may vary based on personal factors and adherence to
              protocol.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

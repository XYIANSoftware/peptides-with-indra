import type { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'bpc-157',
    slug: 'bpc-157',
    name: 'BPC-157',
    shortDescription: 'Support for recovery and tissue repair.',
    longDescription:
      'BPC-157 is a peptide fragment that has been studied for its potential to support recovery and tissue repair. We offer it in a form that’s easy to use and clearly labeled.',
    specChips: ['Recovery', 'Research-backed', '5 mg'],
    details:
      'BPC-157 is a body protection compound that has been researched for its role in supporting gut health, tissue repair, and recovery. Our product is produced under strict quality controls and labeled with clear dosing guidance. Always consult your healthcare provider before use.',
    specs:
      'Form: Lyophilized peptide. Purity: ≥98%. Storage: Keep refrigerated before reconstitution; use within the stated period after reconstitution. See product label for full details.',
    shipping:
      'We ship within 1–2 business days. Domestic orders typically arrive in 3–5 business days. Packaging is discreet. Refrigerate upon receipt if required by the product.',
  },
  {
    id: 'tb-500',
    slug: 'tb-500',
    name: 'TB-500',
    shortDescription: 'Peptide fragment to support mobility and healing.',
    longDescription:
      'TB-500 is a synthetic fragment of thymosin beta-4, studied for its potential role in supporting mobility, recovery, and healing. We provide it with clear documentation.',
    specChips: ['Mobility', 'Recovery', '5 mg'],
    details:
      'TB-500 has been researched for its potential to support tissue repair and mobility. Our product is manufactured with attention to purity and consistency. This is for research and educational use; consult a healthcare provider for personal health decisions.',
    specs:
      'Form: Lyophilized peptide. Purity: ≥98%. Storage: Refrigerate before reconstitution; follow label instructions after reconstitution.',
    shipping:
      'Standard shipping: 3–5 business days. Expedited options available at checkout. Discreet packaging. Temperature-sensitive items are packed accordingly.',
  },
  {
    id: 'epithalon',
    slug: 'epithalon',
    name: 'Epithalon',
    shortDescription: 'Short peptide studied for cellular health and longevity.',
    longDescription:
      'Epithalon is a short peptide that has been studied in the context of cellular health and longevity. We offer it with full transparency about sourcing and use.',
    specChips: ['Longevity', 'Cellular', '10 mg'],
    details:
      'Epithalon (epithalamin) has been researched for its potential effects on cellular aging and telomere length. Our product meets our quality standards and is clearly labeled. Use only as directed and in consultation with a qualified professional.',
    specs:
      'Form: Lyophilized peptide. Purity: ≥98%. Storage: Keep refrigerated; see label for reconstitution and use-by guidance.',
    shipping:
      'Ships in 1–2 business days. Domestic delivery in 3–5 business days. Discreet packaging. Refrigeration as needed per product.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

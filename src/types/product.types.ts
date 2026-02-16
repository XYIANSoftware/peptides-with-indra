export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  specChips: string[];
  details: string;
  specs: string;
  shipping: string;
}

/** Minimal shape for product card display (list/grid). */
export interface ProductCardItem {
  id: string;
  name: string;
  shortDescription: string;
  specChips: string[];
  linkHref: string;
  linkLabel: string;
}

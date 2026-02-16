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

/** One tag's dialog copy (label shown on tag, title + description in dialog). */
export interface TagDialogInfo {
  id: string;
  label: string;
  dialogTitle: string;
  dialogDescription: string;
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

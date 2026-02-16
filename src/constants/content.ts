// Placeholder content — tone: confident, clear, human, trustworthy.

export const HERO = {
  headline: 'Peptides With Indra',
  valueStatement: 'Science-backed peptides, explained simply. Quality you can trust, from a brand that cares about what goes into your body.',
  ctaPrimary: 'Shop Products',
  ctaSecondary: 'Learn More',
};

export const TRUST_STRIP = [
  {
    icon: 'pi pi-check-circle',
    title: 'Quality assured',
    description: 'Every product is sourced and tested to meet our standards.',
  },
  {
    icon: 'pi pi-eye',
    title: 'Full transparency',
    description: 'Clear labeling and honest information so you know exactly what you\'re getting.',
  },
  {
    icon: 'pi pi-shield',
    title: 'Safe & compliant',
    description: 'We follow best practices for safety and regulatory compliance.',
  },
  {
    icon: 'pi pi-heart',
    title: 'Human support',
    description: 'Real people ready to answer your questions.',
  },
];

export const FEATURED_PRODUCTS_PREVIEW = [
  {
    id: 'bpc-157',
    name: 'BPC-157',
    shortDescription: 'Support for recovery and tissue repair.',
    specChips: ['Recovery', 'Research-backed'],
    href: '/products/bpc-157',
  },
  {
    id: 'tb-500',
    name: 'TB-500',
    shortDescription: 'Peptide fragment to support mobility and healing.',
    specChips: ['Mobility', 'Recovery'],
    href: '/products/tb-500',
  },
  {
    id: 'epithalon',
    name: 'Epithalon',
    shortDescription: 'Short peptide studied for cellular health and longevity.',
    specChips: ['Longevity', 'Cellular'],
    href: '/products/epithalon',
  },
];

export const BENEFITS = [
  {
    icon: 'pi pi-book',
    title: 'Clear information',
    description: 'We explain what each peptide does in plain language—no jargon without explanation.',
  },
  {
    icon: 'pi pi-box',
    title: 'Thoughtful formulation',
    description: 'Products designed with purity and consistency in mind.',
  },
  {
    icon: 'pi pi-users',
    title: 'Community & support',
    description: 'Join others who care about evidence-based wellness.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Finally, a brand that explains things clearly and doesn’t overpromise. I feel confident in what I’m taking.',
    author: '— M., California',
  },
  {
    quote: 'The quality is noticeable, and the team actually responds when I have questions. That matters.',
    author: '— J., Texas',
  },
];

export const FAQ_PREVIEW_ITEMS = [
  {
    id: 'what-are-peptides',
    question: 'What are peptides?',
    answer: 'Peptides are short chains of amino acids. They can support various body functions. We focus on well-researched options and explain each one clearly.',
  },
  {
    id: 'how-choose-product',
    question: 'How do I choose a product?',
    answer: 'Start with your goals—recovery, mobility, general wellness—and read our product pages. We list what each peptide is for and how it’s used.',
  },
  {
    id: 'shipping-discreet',
    question: 'Is shipping discreet?',
    answer: 'Yes. We ship in plain packaging and protect your privacy.',
  },
  {
    id: 'contact-questions',
    question: 'Can I contact you with questions?',
    answer: 'Absolutely. Use our Contact page or email. We respond to every message.',
  },
];

/** Full FAQ for the dedicated FAQ page (preview items plus more). */
export const FAQ_ITEMS = [
  ...FAQ_PREVIEW_ITEMS,
  {
    id: 'return-policy',
    question: 'What is your return policy?',
    answer:
      'We want you to be satisfied. If something isn’t right, contact us within 30 days and we’ll work with you to resolve it. See our full policy on the Contact page or in your order confirmation.',
  },
  {
    id: 'international-shipping',
    question: 'Do you ship internationally?',
    answer:
      'Currently we ship to the US. We’re evaluating international options and will update the site when that changes.',
  },
];

export const CTA_BAND = {
  headline: 'Ready to explore?',
  subline: 'Browse our products and find the right fit for your wellness goals.',
  buttonLabel: 'Shop Products',
  buttonHref: '/products',
};

export const ABOUT_INTRO = {
  headline: 'About Peptides With Indra',
  lead: 'We started Peptides With Indra because we were tired of the same old story: vague claims, confusing labels, and brands that didn’t seem to care about the person behind the order.',
  paragraphs: [
    'Our mission is simple: offer quality peptides with clear, honest information. We believe you deserve to know what you’re taking, why it might help, and what the research actually says—in language that makes sense.',
    'We’re not here to sell you a miracle. We’re here to provide options that are well-researched, transparently made, and backed by a team that answers your questions.',
    'Whether you’re new to peptides or you’ve been exploring for a while, we want to be a resource you can trust. Thank you for being here.',
  ],
};

export const CONTACT_COPY = {
  headline: 'Get in touch',
  intro: 'Have a question about our products, shipping, or how to get started? We read every message and respond as quickly as we can.',
  successMessage: 'Thanks for reaching out. We’ll get back to you soon.',
};

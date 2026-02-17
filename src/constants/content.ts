// Placeholder content — tone: confident, clear, human, trustworthy.

export const HERO = {
  headline: 'Goddess Wellness',
  valueStatement:
    'The company behind the brochure. Clear information and easy access—for everyday use, recovery, and injury-specific support. Professional peptides, your way.',
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
    shortDescription: 'Tissue healing, inflammation reduction, and accelerated regeneration.',
    specChips: ['Recovery', 'Research-backed', 'Skin & Beauty'],
    href: '/products/bpc-157',
  },
  {
    id: 'tb-500',
    name: 'TB-500',
    shortDescription: 'Supports tissue repair, cell migration, and angiogenesis.',
    specChips: ['Recovery', 'Mobility', 'Skin & Beauty'],
    href: '/products/tb-500',
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin',
    shortDescription: 'Stimulates natural HGH; supports lean muscle, bone density, and vitality.',
    specChips: ['Anti-Aging', 'Recovery', 'Hormone'],
    href: '/products/sermorelin',
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
    answer:
      'Start with your goals—recovery, anti-aging, skin & beauty, weight loss, or mobility—and browse our products by category. Each product page has details, protocol (dosage, administration), and specs. We list what each peptide is for and how it’s used.',
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
  {
    id: 'injection-recommendations',
    question: 'How should I administer injectable products?',
    answer:
      'Unless specified as intramuscular, injectables are typically recommended in the abdominal area, about 3 inches away from the belly button. Rotate injection sites. You can always add product, but you can’t take it out—so start slowly. Never give another person an injection unless you are a licensed medical professional. There are many YouTube videos on injection areas and technique if this is new to you.',
  },
  {
    id: 'storage-keep-cold',
    question: 'Do products need to be kept cold?',
    answer:
      'Yes. Injectable and many peptide products must be kept refrigerated before and after reconstitution. Follow the product label for storage and use-by guidance. When your order arrives, refrigerate promptly if required.',
  },
  {
    id: 'where-products-made',
    question: 'Where are your products made?',
    answer:
      'Our products are brought to you through ProAthlete.US. Most injectable products are made locally in a compounding lab owned and operated by doctors based in Orange County, CA, and are held to high quality standards. Many products are higher in volume than typically found on the market to provide the best value.',
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

/** Products page intro and additional products/pricing (from our brochure). */
export const PRODUCTS_PAGE = {
  intro:
    'This catalog matches our product brochure—same categories and descriptions. Each product includes clear protocol information. Contact us for pricing and availability.',
  /** From brochure p.11 – Additional Products and Pricing. */
  additionalHeading: 'Additional products and pricing',
  additionalIntro: 'Glow packages, equipment, and supplies. Call for pricing where noted.',
  items: [
    {
      name: 'Glow',
      description: 'BPC-157, TB-500, and GHK-Cu.',
    },
    {
      name: 'Glow Plus',
      description: 'BPC-157, TB-500, GHK-Cu, and Glutathione.',
    },
    {
      name: 'Glow Plus Skinny',
      description: 'BPC-157, TB-500, GHK-Cu, Glutathione, and Tirzepatide.',
    },
    {
      name: 'The Total Glow Package',
      description: 'BPC-157, TB-500, GHK-Cu, Glutathione, Tirzepatide, and Sermorelin.',
    },
    {
      name: 'Grounding Blanket',
      description: 'Call for pricing; varies for commercial vs. personal use.',
    },
    {
      name: 'Frequency Machine',
      description: 'Call for pricing; varies for commercial vs. personal use.',
    },
    {
      name: 'Syringes',
      description: 'One 100-count box; $36 US Dollars.',
    },
    {
      name: 'Ice Packs & Shipping Envelopes',
      description: 'Can be purchased online at Uline.com.',
    },
  ],
  pricingNote: 'Contact us for pricing and availability on individual peptides and packages.',
};

export const ABOUT_INTRO = {
  headline: 'About Goddess Wellness',
  lead: 'Goddess Wellness is the company behind the product brochure. We offer professional peptides and wellness products with clear information and easy access—for everyday use, recovery, and injury-specific support.',
  paragraphs: [
    'This site brings our brochure catalog online so you can browse products, read protocols, and get in touch. Our mission is simple: give you easy access to quality peptides and clear, honest information. You deserve to know what you’re taking, why it might help, and what the research says—in plain language.',
    'Our products are brought to you through ProAthlete.US. Most injectable products are made locally in a compounding lab owned and operated by doctors based in Orange County, CA, and are held to high quality standards. We’re not here to sell you a miracle—we’re here to offer well-researched options, transparent information, and a team that answers your questions.',
    'Whether you’re new to peptides or you’ve been using them for a while, we want to be a resource you can trust. Thank you for being here.',
  ],
};

export const CONTACT_COPY = {
  headline: 'Get in touch',
  intro: 'Have a question about our products, shipping, or how to get started? We read every message and respond as quickly as we can.',
  successMessage: 'Thanks for reaching out. We’ll get back to you soon.',
};

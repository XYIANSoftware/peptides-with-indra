import type { Product } from '@/types';

/** Brochure categories for grouping (GoddessWellnessF.pdf). */
export const PRODUCT_CATEGORIES = [
  'Anti-Aging / Hormone & Cellular Regeneration',
  'Skin, Hair & Beauty Enhancement',
  'Weight Loss & Metabolic Health',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

const SHIPPING_STANDARD =
  'We ship within 1–2 business days. Domestic orders typically arrive in 3–5 business days. Packaging is discreet. Refrigerate upon receipt if required. Temperature-sensitive items are packed accordingly.';
const DISCLAIMER =
  'The information provided is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Results may vary based on personal factors and adherence to protocol.';

export const PRODUCTS: Product[] = [
  // —— Anti-Aging / Hormone & Cellular Regeneration ——
  {
    id: 'sermorelin',
    slug: 'sermorelin',
    name: 'Sermorelin',
    category: 'Anti-Aging / Hormone & Cellular Regeneration',
    shortDescription:
      'Stimulates the pituitary to produce HGH naturally; supports lean muscle, bone density, and metabolic health.',
    longDescription:
      'Stimulates the pituitary to produce HGH naturally, supporting lean muscle, bone density, cardiovascular function, and metabolic health. Helps counteract age-related HGH decline; benefits include faster recovery, immune support, and overall vitality. Wellness benefits: youthful skin, increased energy, improved mood, better sleep, restored vibrancy.',
    specChips: ['Anti-Aging', 'Recovery', 'Hormone'],
    details:
      'Sermorelin is a growth hormone–releasing peptide that has been researched for its role in supporting natural HGH production and healthy aging. Our product is produced under strict quality controls. Always consult your healthcare provider before use.',
    specs:
      'Form: Injectable. Storage: Keep refrigerated before use; follow label for reconstitution and use-by. See product label for full details.',
    shipping: SHIPPING_STANDARD,
    dosage:
      'Under 200 lbs: 25 units (insulin syringe) nightly, 2 hrs after last meal. Over 200 lbs: 30 units (insulin syringe) nightly, 2 hrs after last meal. Vial typically contains ~40 doses; dosage remains stable.',
    administration:
      'Subcutaneous injection into belly fat. Rotate sites nightly. Unless specified as intramuscular, application is recommended in the abdominal area 3 inches away from the belly button.',
    sideEffects:
      'Generally well tolerated. Occasionally mild site irritation, flushing, or headaches.',
    additionalBenefits:
      'Accelerated wound/surgical recovery; increased libido and sexual performance; cognitive support (clarity); thicker hair and nails.',
  },
  {
    id: 'ipamorelin',
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    category: 'Anti-Aging / Hormone & Cellular Regeneration',
    shortDescription:
      'Growth hormone–releasing peptide that increases HGH without significantly affecting cortisol or prolactin.',
    longDescription:
      'Growth hormone–releasing peptide that increases HGH without significantly affecting cortisol or prolactin. Supports muscle growth, recovery, and fat metabolism. Wellness: increased energy, deeper sleep, improved skin tone, enhanced recovery, anti-aging effects.',
    specChips: ['Anti-Aging', 'Recovery', 'Research-backed'],
    details:
      'Ipamorelin has been studied for its potential to support natural HGH release and body composition. Our product is manufactured with attention to purity and consistency. For research and educational use; consult a healthcare provider for personal health decisions.',
    specs:
      'Form: Oral tablet (standard) or injectable per protocol. Storage: Follow label instructions. Keep cold if applicable.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Standard: One daily tablet (morning).',
    administration: 'Oral tablet.',
    sideEffects: 'Generally well tolerated. Occasional flushing or headache.',
    additionalBenefits:
      'Increased lean muscle mass & strength; enhanced performance & recovery; thicker hair and healthier skin; improved mental clarity and mood; support for healthy aging.',
  },
  {
    id: 'cjc-1295-ipamorelin',
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 + Ipamorelin',
    category: 'Anti-Aging / Hormone & Cellular Regeneration',
    shortDescription:
      'Synergistic combo extending GH release for muscle growth, fat reduction, and tissue repair.',
    longDescription:
      'Synergistic combo extending GH release for muscle growth, fat reduction, and tissue repair. Benefits include improved sleep, mood, skin elasticity, and vitality.',
    specChips: ['Anti-Aging', 'Recovery', 'Hormone'],
    details:
      'CJC-1295 with Ipamorelin has been researched for sustained growth hormone release and body composition support. Our product meets our quality standards and is clearly labeled. Use only as directed and in consultation with a qualified professional.',
    specs:
      'Form: Lyophilized or prepared injectable. Storage: Keep refrigerated; see label for reconstitution and use-by guidance.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Standard: 1–2 mg, once or twice weekly. Duration: 8–12 weeks; results noticeable in 3–6 months.',
    administration: 'Subcutaneous injection.',
    sideEffects: 'Mild site irritation or fatigue; rarely nausea or headache.',
    additionalBenefits:
      'Enhanced collagen & skin elasticity; increased muscle mass, reduced fat; improved recovery post-exercise or injury.',
  },
  {
    id: 'nad-plus',
    slug: 'nad-plus',
    name: 'NAD+',
    category: 'Anti-Aging / Hormone & Cellular Regeneration',
    shortDescription:
      'Essential for mitochondrial function, DNA repair, energy metabolism, and cellular resilience.',
    longDescription:
      'Essential for mitochondrial function, DNA repair, energy metabolism, and cellular resilience. Supports healthy aging, cognition, and metabolic efficiency. Wellness: mental clarity, elevated mood, better sleep, stamina, energy.',
    specChips: ['Anti-Aging', 'Cellular', 'Research-backed'],
    details:
      'NAD+ is a coenzyme vital for cellular energy and repair. Our product is produced under strict quality controls. Always consult your healthcare provider before use.',
    specs:
      'Form: Injectable. Storage: Keep refrigerated; follow label instructions.',
    shipping: SHIPPING_STANDARD,
    dosage:
      'Loading: 5 days NMN tablets to activate pathways. Week 1: 3 injections (every other day), 50 units (insulin syringe). Week 2: 2 injections, spaced apart.',
    administration: 'Subcutaneous injection.',
    sideEffects: 'Mild flushing, fatigue, or nausea early on, typically resolving.',
    additionalBenefits:
      'DNA repair & rejuvenation; circadian rhythm balance; athletic recovery & performance; reduced inflammation & oxidative stress.',
  },
  {
    id: 'nmn',
    slug: 'nmn',
    name: 'NMN (Nicotinamide Mononucleotide)',
    category: 'Anti-Aging / Hormone & Cellular Regeneration',
    shortDescription:
      'Precursor to NAD+; vital for cellular energy, DNA repair, and metabolism.',
    longDescription:
      'Precursor to NAD+, vital for cellular energy, DNA repair, and metabolism. Supports mitochondrial and cellular health.',
    specChips: ['Anti-Aging', 'Cellular', 'Longevity'],
    details:
      'NMN has been studied for its role in supporting NAD+ levels and healthy aging. Our product meets our quality standards. Use only as directed and in consultation with a qualified professional.',
    specs:
      'Form: Oral supplement. Storage: Store as directed on label.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Standard: Daily oral tablet.',
    administration: 'Oral supplement.',
    sideEffects: 'Generally well tolerated; occasional digestive discomfort.',
    additionalBenefits:
      'Better cardiovascular & brain function; supports insulin sensitivity & weight control; protects against age-related decline; fertility support potential.',
  },
  {
    id: 'testosterone',
    slug: 'testosterone',
    name: 'Testosterone',
    category: 'Anti-Aging / Hormone & Cellular Regeneration',
    shortDescription:
      'Supports muscle mass, bone density, red blood cells, libido, and mood.',
    longDescription:
      'Supports muscle mass, bone density, red blood cells, libido, and mood. In women, balances energy, focus, and strength. Enhances confidence and vitality.',
    specChips: ['Hormone', 'Anti-Aging'],
    details:
      'Testosterone support is individualized and may involve injections, transdermal cream, or pellets. Requires medical supervision. Our compounding lab provides high-quality options as prescribed.',
    specs:
      'Form: Injection, transdermal cream, or pellets per prescription. Storage: As directed.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Individualized; typically, injections, transdermal cream, or pellets.',
    administration:
      'Subcutaneous/intramuscular injection, or transdermal (as prescribed).',
    sideEffects:
      'Possible acne, fluid retention, hair changes, mood shifts. Requires medical supervision.',
    additionalBenefits:
      'Enhanced libido & sexual function; better muscle tone & fat distribution; improved cognition & motivation; aging & vitality support.',
  },
  // —— Skin, Hair & Beauty Enhancement ——
  {
    id: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-Cu (Copper Peptide)',
    category: 'Skin, Hair & Beauty Enhancement',
    shortDescription:
      'Naturally occurring copper peptide for tissue remodeling, collagen synthesis, and cellular repair.',
    longDescription:
      'Naturally occurring copper peptide involved in tissue remodeling, collagen synthesis, and cellular repair. Regulates inflammation and stimulates fibroblasts, improving skin structure and healing. Wellness/beauty: firmer skin, better elasticity, fewer fine lines, radiant complexion.',
    specChips: ['Skin & Beauty', 'Recovery', 'Research-backed'],
    details:
      'GHK-Cu has been researched for skin and tissue health. Our product is manufactured with attention to purity. For educational use; consult a healthcare or skincare professional.',
    specs:
      'Form: Topical skincare or injectable per protocol. Storage: As directed on label.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Typically, topical or via injection depending on protocol.',
    administration: 'Topical skincare; or subcutaneous injection.',
    sideEffects: 'Mild redness or irritation possible.',
    additionalBenefits:
      'Healing, hair growth, pigmentation reduction, texture improvement.',
  },
  {
    id: 'tb-500',
    slug: 'tb-500',
    name: 'TB-500 (Thymosin Beta-4)',
    category: 'Skin, Hair & Beauty Enhancement',
    shortDescription:
      'Synthetic thymosin beta-4; supports tissue repair, cell migration, and angiogenesis.',
    longDescription:
      'Synthetic version of thymosin beta-4; supports tissue repair, cell migration, and angiogenesis. Wellness/beauty: accelerated healing, reduced inflammation, improved skin regeneration, enhanced muscle recovery.',
    specChips: ['Recovery', 'Mobility', 'Skin & Beauty'],
    details:
      'TB-500 has been researched for its potential to support tissue repair and mobility. Our product is manufactured with attention to purity and consistency. This is for research and educational use; consult a healthcare provider for personal health decisions.',
    specs:
      'Form: Lyophilized peptide. Purity: ≥98%. Storage: Refrigerate before reconstitution; follow label instructions after reconstitution.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Varies; typically, short-term cycles.',
    administration: 'Subcutaneous injection.',
    sideEffects: 'Mild redness or temporary fatigue possible.',
    additionalBenefits:
      'Injury recovery, skin repair, hair/tissue strength, anti-inflammatory.',
  },
  {
    id: 'bpc-157',
    slug: 'bpc-157',
    name: 'BPC-157',
    category: 'Skin, Hair & Beauty Enhancement',
    shortDescription:
      'Renowned for tissue healing, inflammation reduction, and accelerated regeneration.',
    longDescription:
      'Renowned for tissue healing, inflammation reduction, and accelerated regeneration; promotes angiogenesis and collagen formation. Wellness/beauty: faster wound healing, improved joint health, stronger skin resilience and glow.',
    specChips: ['Recovery', 'Research-backed', 'Skin & Beauty'],
    details:
      'BPC-157 is a body protection compound that has been researched for its role in supporting gut health, tissue repair, and recovery. Our product is produced under strict quality controls and labeled with clear dosing guidance. Always consult your healthcare provider before use.',
    specs:
      'Form: Lyophilized peptide. Purity: ≥98%. Storage: Keep refrigerated before reconstitution; use within the stated period after reconstitution. See product label for full details.',
    shipping: SHIPPING_STANDARD,
    dosage:
      '50 units of an insulin syringe for 2–6 days in injured tissue or subcutaneous.',
    administration: 'Targeted injection into injured tissue or subcutaneous.',
    sideEffects: 'Extremely well tolerated; rare mild site irritation.',
    additionalBenefits:
      'Accelerated injury recovery; support for gut healing, reduced inflammation; enhanced muscle strength and endurance; improved immune function.',
  },
  {
    id: 'glutathione',
    slug: 'glutathione',
    name: 'Glutathione',
    category: 'Skin, Hair & Beauty Enhancement',
    shortDescription:
      'Powerful antioxidant for skin brightening, anti-aging, and cellular defense.',
    longDescription:
      'Powerful antioxidant that protects cells from oxidative stress; supports liver detoxification. Broadly used for skin brightening, anti-aging, and cellular defense. Wellness/beauty: brighter skin, less hyperpigmentation, evens out skin tone, improved immunity, detox support.',
    specChips: ['Skin & Beauty', 'Cellular'],
    details:
      'Glutathione has been studied for antioxidant and detox support. Our product meets our quality standards. Use only as directed and in consultation with a qualified professional.',
    specs:
      'Form: Injectable. Storage: Keep refrigerated; follow label instructions.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Weekly shots of 50–75 units of an insulin syringe.',
    administration: 'Intramuscular injection (thigh, buttock, or outer arm).',
    sideEffects: 'Generally very well tolerated; rare mild soreness at injection site.',
    additionalBenefits:
      'Lightens dark spots; evens tone; may reduce age spots and sun damage signs; supports liver function and detox; protects against oxidative stress.',
  },
  {
    id: 'methylene-blue',
    slug: 'methylene-blue',
    name: 'Methylene Blue',
    category: 'Skin, Hair & Beauty Enhancement',
    shortDescription:
      'Mitochondrial enhancer used in aesthetics for cellular longevity and delaying visible aging.',
    longDescription:
      'Historically antimicrobial and a mitochondrial enhancer; used in aesthetics for cellular longevity and delaying visible aging. Wellness/beauty: improved skin texture, enhanced wound healing, environmental protection.',
    specChips: ['Skin & Beauty', 'Cellular'],
    details:
      'Methylene blue is used in controlled protocols under professional supervision. Not for daily unsupervised use. Our information is for educational purposes only.',
    specs:
      'Form: Topical or injection under professional supervision. Storage: As directed.',
    shipping: SHIPPING_STANDARD,
    dosage:
      'Varies; often topical in low concentrations or in controlled protocols. Not for daily unsupervised use.',
    administration: 'Topical or injection under professional supervision.',
    sideEffects: 'May cause temporary skin staining; overuse can irritate.',
    additionalBenefits:
      'Supports mitochondrial function and cellular repair; antimicrobial properties for skin health; UV protection and accelerated healing; may improve fine lines and overall skin vitality.',
  },
  {
    id: 'stem-cell-therapy',
    slug: 'stem-cell-therapy',
    name: 'Stem Cell Therapy',
    category: 'Skin, Hair & Beauty Enhancement',
    shortDescription:
      'Uses the body’s regenerative cells to repair tissue, reduce inflammation, and stimulate healing.',
    longDescription:
      'Uses the body’s regenerative cells to repair tissue, reduce inflammation, and stimulate healing. Clinically used for arthritis, tissue regeneration, autoimmune conditions, and advanced recovery. Wellness/beauty: improved skin rejuvenation, reduced joint pain, enhanced vitality.',
    specChips: ['Recovery', 'Skin & Beauty'],
    details:
      'Stem cell therapy involves individualized protocols by a licensed practitioner. Our information is for educational purposes only. Always work with a qualified provider.',
    specs:
      'Form: Injection or infusion under medical supervision. Storage: As directed by provider.',
    shipping: SHIPPING_STANDARD,
    dosage: 'Individualized protocols by a licensed practitioner.',
    administration: 'Injection or infusion under medical supervision.',
    sideEffects: 'Generally minimal; occasional mild soreness at injection sites.',
    additionalBenefits:
      'Tissue regeneration and accelerated healing; joint lubrication and reduced inflammation; no rejection risk with autologous cells; potential improvement in skin quality and elasticity.',
  },
  // —— Weight Loss & Metabolic Health ——
  {
    id: 'tirzepatide',
    slug: 'tirzepatide',
    name: 'Tirzepatide',
    category: 'Weight Loss & Metabolic Health',
    shortDescription:
      'Increases satiety and supports weight loss, reduced heart disease risk, and fat reduction.',
    longDescription:
      'Increases satiety and memory by acting on the brain to enhance feelings of fullness, reducing overall food intake. Also decreases neuroinflammation. Benefits include weight loss, reduced heart disease risk, and fat reduction.',
    specChips: ['Weight Loss', 'Research-backed'],
    details:
      'Tirzepatide has been studied for weight management and metabolic health. Our product is provided with clear dosing guidance. Always consult your healthcare provider before use. Results may vary.',
    specs:
      'Form: Injectable. Storage: Keep refrigerated; follow label for use-by.',
    shipping: SHIPPING_STANDARD,
    dosage:
      'Under 200 lbs: 10 mg — 25 units (insulin syringe) the first week. Over 200 lbs maintenance: 15 mg — 25 units the first week. Adjust strength over following weeks by increasing 25 units each time.',
    administration:
      'Subcutaneous injection into belly fat, ~3 inches away from the navel. Any time of day.',
    sideEffects:
      'Mild nausea is the most common. Reduce dosage and titrate more gradually if nausea occurs.',
    additionalBenefits: undefined,
  },
  {
    id: 'semaglutide',
    slug: 'semaglutide',
    name: 'Semaglutide',
    category: 'Weight Loss & Metabolic Health',
    shortDescription:
      'Regulates glucose, promotes weight loss, and normalizes lipid profiles.',
    longDescription:
      'Regulates glucose levels, promotes weight loss, and normalizes lipid profiles. May support kidney health and reduce inflammation. Early research suggests potential benefits for dementia, pancreatitis, and PCOS.',
    specChips: ['Weight Loss', 'Research-backed'],
    details:
      'Semaglutide has been researched for weight management and metabolic health. Our product meets our quality standards and is clearly labeled. Use only as directed and in consultation with a qualified professional.',
    specs:
      'Form: Injectable. Storage: Keep refrigerated; follow label instructions.',
    shipping: SHIPPING_STANDARD,
    dosage:
      'Under 200 lbs maintenance: 2.5 mg — 25 units (insulin syringe) the first week. Over 200 lbs maintenance: 15 mg — 25 units the first week. Adjust strength over following weeks by increasing 25 units each time.',
    administration:
      'Subcutaneous injection into belly fat. Any time of day.',
    sideEffects:
      'Mild nausea is the most common. Reduce dosage and titrate more gradually if nausea occurs.',
    additionalBenefits: undefined,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: Product['category']
): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

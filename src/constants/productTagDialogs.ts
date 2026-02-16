/**
 * Tag dialog content for product spec chips (Recovery, 5 mg, Mobility, etc.).
 * Brand-new constants file (requested name: PRODUCTS.ts; use this name on case-insensitive FS to avoid clashing with products.ts).
 * Hard-coded for fast lookups and easy edits.
 */
import type { TagDialogInfo } from '@/types';

export const TAG_DIALOG_LIST: TagDialogInfo[] = [
  {
    id: 'recovery',
    label: 'Recovery',
    dialogTitle: 'Recovery',
    dialogDescription:
      'Peptides studied for recovery may support tissue repair and healing by helping with collagen production, reducing inflammation, and supporting cell regeneration. Many people are interested in them for post-injury or post-workout recovery. Always use under appropriate guidance.',
  },
  {
    id: 'research-backed',
    label: 'Research-backed',
    dialogTitle: 'Research-backed',
    dialogDescription:
      'This product is associated with peer-reviewed or published research. We highlight that so you can look into the evidence yourself. "Research-backed" does not mean FDA-approved for treatment—it means there is scientific literature you can review.',
  },
  {
    id: '5-mg',
    label: '5 mg',
    dialogTitle: 'Why different sizes?',
    dialogDescription:
      'Peptides are often sold in set amounts (e.g. 5 mg, 10 mg) per vial. The size reflects the amount of peptide per container and can affect how many doses you get and how you dose. Smaller sizes (e.g. 5 mg) are common for trying a peptide or for lower-dose protocols; larger sizes may be used for longer or higher-dose regimens. Always follow label and professional guidance.',
  },
  {
    id: 'mobility',
    label: 'Mobility',
    dialogTitle: 'Mobility',
    dialogDescription:
      'Some peptides have been studied for their potential to support joint health, tendon remodeling, and overall mobility. By supporting tissue repair and reducing inflammation, they may play a role in how people approach joint and movement concerns. Use only as directed and in line with your care provider\'s advice.',
  },
  {
    id: 'longevity',
    label: 'Longevity',
    dialogTitle: 'Longevity',
    dialogDescription:
      'Longevity-related peptides are studied in the context of cellular aging and healthy aging. Research in this area is still evolving. We offer products that meet our quality standards and encourage you to review the science and consult a qualified professional before use.',
  },
  {
    id: 'cellular',
    label: 'Cellular',
    dialogTitle: 'Cellular',
    dialogDescription:
      'Cellular health refers to how well cells function and maintain themselves. Some peptides are studied for their potential effects on cellular repair, stress response, or aging at the cellular level. This is an active area of research; use only with appropriate guidance.',
  },
  {
    id: '10-mg',
    label: '10 mg',
    dialogTitle: 'Why different sizes?',
    dialogDescription:
      'Peptides are often sold in set amounts (e.g. 5 mg, 10 mg) per vial. The size reflects the amount of peptide per container and can affect how many doses you get and how you dose. Larger sizes (e.g. 10 mg) may be used for longer or higher-dose protocols. Always follow label and professional guidance.',
  },
];

const TAG_DIALOG_BY_LABEL = new Map<string, TagDialogInfo>(
  TAG_DIALOG_LIST.map((t) => [t.label, t])
);

export function getTagDialogInfo(label: string): TagDialogInfo | undefined {
  return TAG_DIALOG_BY_LABEL.get(label);
}

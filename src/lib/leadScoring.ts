import { LeadFormData } from '@/types/lead';

export function calculateLeadScore(data: Partial<LeadFormData>): number {
  let score = 0;

  // Budget (40 points max)
  if (data.budget === 'Over $1M') score += 40;
  else if (data.budget === '$500k-$1M') score += 32;
  else if (data.budget === '$250k-$500k') score += 22;
  else if (data.budget === '$100k-$250k') score += 12;
  else if (data.budget === 'Prefer to discuss') score += 20;

  // Timeline (30 points max)
  if (data.timeline === 'Within 3 months') score += 30;
  else if (data.timeline === '3-6 months') score += 20;
  else if (data.timeline === '6-12 months') score += 10;

  // Property ownership (20 points)
  if (data.property_status === 'I own the property') score += 20;
  else if (data.property_status === 'Currently in escrow') score += 15;

  // Design ready (10 points)
  if (data.design_status === 'Plans ready') score += 10;
  else if (data.design_status === 'Have sketches') score += 6;

  return Math.min(100, score);
}

export function getLeadTier(score: number): 'A' | 'B' | 'C' {
  if (score >= 70) return 'A';
  if (score >= 40) return 'B';
  return 'C';
}

export function generateTags(data: Partial<LeadFormData>): string[] {
  const tags: string[] = [];
  if (data.project_type) tags.push(data.project_type);
  if (['$500k-$1M', 'Over $1M'].includes(data.budget || '')) tags.push('High Value');
  if (data.timeline === 'Within 3 months') tags.push('Hot Lead');
  if (data.architect_involved === 'Yes') tags.push('Architect Involved');
  if (data.design_status === 'Need design help') tags.push('Design Opportunity');
  if (data.project_type === 'ADU') tags.push('ADU Sequence');
  if (data.referral_source === 'Referral') tags.push('Referral Lead');
  const city = data.project_address?.split(',')[1]?.trim();
  if (city) tags.push(city);
  return tags;
}

export interface LeadFormData {
  full_name: string;
  email: string;
  phone: string;
  project_address: string;
  project_type: 'Full Remodel' | 'Kitchen & Bath' | 'ADU' | 'Addition' | 'Outdoor Living' | 'Other';
  budget: 'Under $100k' | '$100k-$250k' | '$250k-$500k' | '$500k-$1M' | 'Over $1M' | 'Prefer to discuss';
  timeline: 'Within 3 months' | '3-6 months' | '6-12 months' | 'Just exploring';
  design_status: 'Plans ready' | 'Have sketches' | 'Need design help' | 'Starting from scratch';
  property_status: 'I own the property' | 'Currently in escrow' | 'Looking to purchase';
  architect_involved: 'Yes' | 'No' | 'Planning to';
  referral_source: 'Referral' | 'Google' | 'Instagram' | 'Nextdoor' | 'Yelp' | 'Saw your work' | 'Other';
  notes?: string;
  lead_score?: number;
  lead_tier?: 'A' | 'B' | 'C';
  tags?: string[];
}

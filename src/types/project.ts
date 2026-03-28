export type ProjectType = 'Full Remodel' | 'Kitchen & Bath' | 'ADU' | 'Outdoor';

export interface Project {
  id: string;
  slug: string;
  clientName: string;
  address: string;
  city: string;
  type: ProjectType;
  description: string;
  sqft?: number;
  year: number;
  heroImage: string;
  gallery: string[];
  featured: boolean;
}

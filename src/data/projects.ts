import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'bagatello-mill-valley',
    clientName: 'Nick Bagatello',
    address: '209 Marion Ave',
    city: 'Mill Valley',
    type: 'Full Remodel',
    description: 'A complete transformation of a classic Marin residence with a 2,200 sq ft addition. Every detail conceived and executed to the highest standard — expanding not just the footprint, but the possibility of the home itself.',
    sqft: 2200,
    year: 2025,
    heroImage: '/images/gallery/bagatellos/bagatellos-01.jpg',
    gallery: [
      '/images/gallery/bagatellos/bagatellos-01.jpg',
      '/images/gallery/bagatellos/bagatellos-02.jpg',
      '/images/gallery/bagatellos/bagatellos-03.jpg',
      '/images/gallery/bagatellos/bagatellos-04.jpg',
      '/images/gallery/bagatellos/bagatellos-05.jpg',
      '/images/gallery/bagatellos/bagatellos-06.jpg',
      '/images/gallery/bagatellos/bagatellos-07.jpg',
      '/images/gallery/bagatellos/bagatellos-08.jpg',
      '/images/gallery/bagatellos/bagatellos-09.jpg',
      '/images/gallery/bagatellos/bagatellos-10.jpg',
      '/images/gallery/bagatellos/bagatellos-11.jpg',
    ],
    featured: true,
  },
];

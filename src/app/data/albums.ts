export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  images: string[];
}

export const ALBUMS: Album[] = [
  {
    id: 'models',
    title: 'Models',
    description: 'Editorial and fashion-style model shoots.',
    cover: '/assets/albums/models/cover.jpg',
    images: [
      '/assets/albums/models/1.jpg',
      '/assets/albums/models/2.jpg',
      // Add more
    ],
  },
  {
    id: 'family',
    title: 'Family',
    description: 'Heartwarming moments of family bonding.',
    cover: '/assets/albums/family/cover.jpg',
    images: [],
  },
  {
    id: 'kids',
    title: 'Kids',
    description: 'Candid smiles and playful innocence.',
    cover: '/assets/albums/kids/cover.jpg',
    images: [
      '/assets/photos/photo3.jpg',
      '/assets/photos/photo4.jpg',
    ],
  },
  {
    id: 'landscape',
    title: 'Landscape',
    description: 'Landscapes, skies, and all things outdoors.',
    cover: '/assets/albums/nature/cover.jpg',
    images: [],
  },
];

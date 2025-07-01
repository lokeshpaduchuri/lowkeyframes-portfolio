export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
  coverIndex?: number;
  images: string[];
}

export const ALBUMS: Album[] = [
  {
    id: 'models',
    title: 'Models',
    description: 'Editorial and fashion-style model shoots.',
    cover: '/assets/albums/models/cover.jpg',
    images: [],
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
    images: [],
  },
  {
    id: 'landscape',
    title: 'Landscape',
    description: 'Landscapes, skies, and all things outdoors.',
    cover: '/assets/albums/nature/cover.jpg',
    images: [],
  },
  {
    id: 'nature',
    title: 'Nature',
    description: 'Forests, rivers, and wildlife adventures.',
    cover: '/assets/albums/nature/cover.jpg',
    images: [],
  },
];

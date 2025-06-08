export interface Album {
  id: string;
  title: string;
  cover: string; // cover image URL
  images: string[]; // array of image URLs
}

export const ALBUMS: Album[] = [
  {
    id: 'family',
    title: 'Family Portraits',
    cover: '/assets/albums/family/cover.jpg',
    images: [
      '/assets/photos/photo1.jpg',
      '/assets/photos/photo2.jpg',
    ],
  },
  {
    id: 'kids',
    title: 'Kids Photography',
    cover: '/assets/albums/kids/cover.jpg',
    images: [
      '../assets/photos/photo3.jpg',
      '/assets/photos/photo4.jpg',
    ],
  },
  // Add more albums...
];

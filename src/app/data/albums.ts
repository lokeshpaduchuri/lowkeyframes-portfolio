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
    id: 'twined-hearts',
    title: 'Twined Hearts',
    description: 'Family portraits capturing parents and kids in joyful moments.',
    cover: '/assets/albums/twined-hearts/cover.jpg',
    images: []
  },
  {
    id: 'little-moments',
    title: 'Little Moments',
    description: "Children's portraits and milestone celebrations.",
    cover: '/assets/albums/little-moments/cover.jpg',
    images: []
  },
  {
    id: 'baby-bliss',
    title: 'Baby Bliss',
    description: 'Newborn and toddler sessions with soft, cozy setups.',
    cover: '/assets/albums/baby-bliss/cover.jpg',
    images: []
  },
  {
    id: 'street-muse',
    title: 'Street Muse',
    description: 'Urban editorials with bold, styled character.',
    cover: '/assets/albums/street-muse/cover.jpg',
    images: []
  },
  {
    id: 'form-flow',
    title: 'Form & Flow',
    description: 'Motion-led portraits with drapes, gestures, and light.',
    cover: '/assets/albums/form-flow/cover.jpg',
    images: []
  },
  {
    id: 'creative-portraits',
    title: 'Creative Portraits',
    description: 'Concept-led shoots with mood, story, and flair.',
    cover: '/assets/albums/creative-portraits/cover.jpg',
    images: []
  },
  {
    id: 'styled-by-me',
    title: 'Styled by Me',
    description: 'Where I serve as both stylist and photographer.',
    cover: '/assets/albums/styled-by-me/cover.jpg',
    images: []
  },
  {
    id: 'love-vows',
    title: 'Love & Vows',
    description: 'Engagements, proposals, and wedding celebrations.',
    cover: '/assets/albums/love-vows/cover.jpg',
    images: []
  },
  {
    id: 'cheers-cheers',
    title: 'Cheers & Cheers',
    description: 'Parties and private events filled with joy.',
    cover: '/assets/albums/cheers-cheers/cover.jpg',
    images: []
  },
  {
    id: 'community-chronicles',
    title: 'Community Chronicles',
    description: 'Highlights from Trinity Falls and neighborhood events.',
    cover: '/assets/albums/community-chronicles/cover.jpg',
    images: []
  },
  {
    id: 'wanderlens',
    title: 'Wanderlens',
    description: 'Scenic shots from road trips and nature outings.',
    cover: '/assets/albums/wanderlens/cover.jpg',
    images: []
  },
  {
    id: 'sky-stories',
    title: 'Sky Stories',
    description: 'Drone-based aerial storytelling.',
    cover: '/assets/albums/sky-stories/cover.jpg',
    images: []
  }
];

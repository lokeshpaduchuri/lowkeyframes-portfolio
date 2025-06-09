export interface Project {
  title: string;
  image: string;
  description: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Portfolio Website',
    image: '/assets/projects/portfolio.jpg',
    description: 'A personal portfolio site built with Angular 17, Tailwind CSS, and hosted on AWS.',
    link: 'https://lokeshpaduchuri.com'
  },
  {
    title: 'Photography Showcase',
    image: '/assets/projects/photography.jpg',
    description: 'A dynamic gallery system for displaying categorized albums like family, kids, and nature.',
    link: '/photography'
  },
  {
    title: 'Creative UI Animations',
    image: '/assets/projects/animations.jpg',
    description: 'Reusable Angular animation library designed for page transitions and interactions.'
  },
  {
    title: 'Mobile-first Design System',
    image: '/assets/projects/design-system.jpg',
    description: 'A scalable design system using Tailwind and SCSS for startup MVPs.'
  }
];

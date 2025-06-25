export interface Experience {
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'TechCorp',
    role: 'Frontend Developer',
    description: 'Built responsive Angular apps for e-commerce clients.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5.svg'
    ]
  },
  {
    company: 'CloudNet',
    role: 'Full Stack Engineer',
    description: 'Developed Node.js APIs and deployed services on AWS.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker.svg'
    ]
  },
  {
    company: 'DesignStudio',
    role: 'UI/UX Consultant',
    description: 'Created mobile-first design systems with Tailwind.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma.svg'
    ]
  }
];

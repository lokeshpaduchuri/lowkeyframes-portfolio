export interface Experience {
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: 'Independent Health',
    role: 'Web Architect',
    description: 'As Web Architects, we shape the mobile platform so members enjoy a smooth and secure digital health experience.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript.svg'
    ]
  },
  {
    company: 'Independent Health',
    role: 'Lead Web Developer',
    description: 'We upgraded the member app from AngularJS and Cordova to Angular and Ionic Capacitor, keeping everyone connected on the go.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cordova/cordova-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic.svg'
    ]
  },
  {
    company: 'Independent Health',
    role: 'Senior Web Developer',
    description: 'We built the mobile app that lets users register and access their insurance features from both app stores.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
    ]
  },
  {
    company: 'Atlas Air',
    role: 'Senior Web Developer',
    description: 'Crafted the Crew Connect console so schedulers can wake crews and chat in real time using Firebase and Android devices.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript.svg'
    ]
  },
  {
    company: '605 LLC',
    role: 'Web Developer',
    description: 'Developed the Audience Application that builds optimized ad proposals for local businesses across TV networks.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs.svg'
    ]
  },
  {
    company: 'Paychex',
    role: 'Web Developer',
    description: 'Migrated the Payroll Application from Flex to Angular with an editable check grid and smooth submission flow.',
    technologies: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5.svg'
    ]
  }
];

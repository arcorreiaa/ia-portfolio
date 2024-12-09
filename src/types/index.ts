export interface Project {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  type: 'web' | 'app';
  image: string;
  demo: string;
  technologies: string[];
  links?: {
    playStore?: string;
    appStore?: string;
    website?: string;
    github?: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
}

export type Language = 'en' | 'pt';
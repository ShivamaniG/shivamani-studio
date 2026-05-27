export interface Project {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  repoLink?: string;
  demoLink?: string;
  publishStatus?: string; // e.g. "Research published at CISIS 2025" or "Google Hackathon Finalist"
  isPublication?: boolean;
  publicationMetadata?: {
    doi: string;
    publisher: string;
    authors: string;
    journal: string;
    abstract: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  status: 'Verified' | 'Active' | 'In Progress';
}

export interface Achievement {
  title: string;
  description: string;
  extra?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  createdAt: string;
}

/**
 * Site-wide configuration — the single source of truth for identity,
 * contact details, and links. Update this file when anything changes.
 */
export const site = {
  name: 'Samuel Mitiku Eshetu',
  shortName: 'Samuel M.',
  role: 'Full-Stack Developer & AI Engineer',
  specialization: 'React · Node.js · Python · Machine Learning',
  location: 'Addis Ababa, Ethiopia',
  email: 'samuelmitiku393@gmail.com',
  phone: '+251 912 181 590',
  careerGoal: 'Self-employment — building my own software and AI products',
  availability: 'Available immediately',
  url: 'https://samuelmitiku.netlify.app',
  resume: '/Samuel-Mitiku-CV.pdf',
  github: 'https://github.com/samuelmitiku393',
  linkedin: 'https://www.linkedin.com/in/samuel-m-eshetu-475b98237/',
};

export const socialLinks = [
  { platform: 'github', url: site.github, label: 'GitHub profile' },
  { platform: 'linkedin', url: site.linkedin, label: 'LinkedIn profile' },
  { platform: 'email', url: `mailto:${site.email}`, label: 'Send email' },
];

/** Spoken languages, strongest first. */
export const languages = [
  { name: 'Amharic', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Afaan Oromoo', level: 'Intermediate' },
];

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { socialLinks } from '../../data/site';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

/** Row of social links driven by src/data/site.js. */
export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.platform];
        if (!Icon) return null;
        return (
          <li key={link.platform}>
            <a
              href={link.url}
              target={link.platform === 'email' ? undefined : '_blank'}
              rel={link.platform === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              title={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-700 text-paper-dim transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

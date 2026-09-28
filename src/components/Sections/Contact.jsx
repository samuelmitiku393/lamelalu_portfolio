import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import Reveal from '../Shared/Reveal';
import Section from '../Shared/Section';
import SocialLinks from '../UI/SocialLinks';
import { site } from '../../data/site';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdbjpvj';

const initialValues = { name: '', email: '', message: '' };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please tell me your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email.';
    if (values.message.trim().length < 10) next.message = 'A few more words would help — at least 10 characters.';
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: values.name, email: values.email, message: values.message }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      index={5}
      title="Contact"
      lead="Hiring, a project, or a question — email is fastest, and the form lands in the same inbox."
    >
      <div className="grid gap-12 md:grid-cols-[1fr_24rem] lg:gap-16">
        <Reveal>
          {status === 'success' ? (
            <div
              role="status"
              className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-8"
            >
              <h3 className="text-lg font-semibold text-emerald-300">Message sent</h3>
              <p className="mt-2 text-paper-dim">
                Thanks — I'll get back to you at the email you provided, usually within a day or two.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-4 text-sm font-medium text-accent hover:text-accent-dim"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Contact form">
              <Field
                label="Name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="you@example.com"
              />
              <Field
                label="Message"
                name="message"
                type="textarea"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="What are you working on?"
                rows={5}
              />

              {status === 'error' && (
                <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
                  Something went wrong sending the message. Email me directly at{' '}
                  <a className="underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>{' '}
                  instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-ink-950 transition-colors hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiSend aria-hidden="true" />
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </Reveal>

        {/* Direct channels — recruiters often prefer these over forms. */}
        <Reveal delay={120} className="space-y-6">
          <div className="rounded-xl border border-ink-700 bg-ink-850 p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper-faint">Direct</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="text-paper transition-colors hover:text-accent">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-paper transition-colors hover:text-accent">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-paper-faint">Elsewhere</h3>
            <SocialLinks className="mt-4" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, name, type, value, onChange, error, placeholder, autoComplete, rows }) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const common = {
    id,
    name,
    value,
    onChange,
    placeholder,
    autoComplete,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    className:
      'w-full rounded-lg border border-ink-600 bg-ink-850 px-4 py-3 text-paper placeholder:text-paper-faint focus:border-accent focus:outline-none',
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-paper">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea {...common} rows={rows} />
      ) : (
        <input {...common} type={type} />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

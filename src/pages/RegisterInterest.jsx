import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { FORMSPREE_ENDPOINT } from '../config/formspree';

const WHAT_HAPPENS_NEXT = [
  { step: 1, text: 'We receive your registration and send a confirmation by email.' },
  { step: 2, text: 'You will be contacted ahead of launch with your early access details and the pre-launch offer.' },
  { step: 3, text: 'When the Exec App opens to early users, you will be among the first to access it.' },
];

export function RegisterInterest() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    jobTitle: '',
    company: '',
    consentContact: false,
    consentUpdates: false,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consentContact) {
      setError('You must confirm that OpEx6 may contact you about your registration.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          jobTitle: form.jobTitle,
          company: form.company,
          consentContact: form.consentContact,
          consentUpdates: form.consentUpdates,
          _timestamp: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Thank you — OpEx6</title>
        </Helmet>
        <Section>
          <div className="max-w-xl mx-auto text-center py-12">
            <h1 className="text-2xl font-bold text-text-primary mb-4">Thank you.</h1>
            <p className="text-text-secondary">
              You are on the list. We will be in touch ahead of launch with your early access details.
            </p>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Register Your Interest — OpEx6 | Exec App Early Access</title>
        <meta name="description" content="Register your interest in the OpEx6 Exec App. Be among the first to access it when it opens to early users. Pre-launch offer: 100 credits for £50." />
      </Helmet>

      {/* Section 8.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Register Your Interest in the Exec App
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Be among the first to access OpEx6's Exec App when it opens to early users. Register your interest now to secure your place on the early access list.
          </p>
          <div className="bg-highlight/10 border border-highlight/30 rounded-xl p-5 text-text-primary">
            <p className="font-medium mb-1">Early Access Offer</p>
            <p className="text-sm text-text-secondary">
              Early registrants will be eligible for 100 credits for £50 when the Exec App opens. This is a pre-launch registration — no payment is taken now. Subject to final launch terms.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8.2 — Register Interest Form */}
      <Section className="bg-secondary/50">
        <div className="max-w-xl mx-auto">
          <p className="text-text-secondary text-sm mb-6">
            Your information is handled in accordance with our{' '}
            <Link to="/privacy-notice" className="text-accent hover:underline">Privacy Notice</Link>.
            We will only contact you about your interest registration unless you opt in to product updates.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              required
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Your full name"
            />
            <Input
              label="Work Email"
              type="email"
              required
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="you@company.com"
            />
            <Input
              label="Job Title"
              required
              value={form.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              placeholder="e.g. Operations Director"
            />
            <Input
              label="Company Name"
              required
              value={form.company}
              onChange={(e) => handleChange('company', e.target.value)}
              placeholder="Your company"
            />

            <div className="space-y-4">
              <Checkbox
                id="consentContact"
                label="I confirm that OpEx6 may contact me about the product interest I am registering through this form."
                checked={form.consentContact}
                onChange={(v) => handleChange('consentContact', v)}
                required
              />
              <Checkbox
                id="consentUpdates"
                label="I would like to receive product updates and launch communications by email."
                checked={form.consentUpdates}
                onChange={(v) => handleChange('consentUpdates', v)}
              />
            </div>

            {error && <p className="text-danger text-sm">{error}</p>}

            <Button type="submit" disabled={loading} className="w-full justify-center">
              {loading ? 'Sending…' : 'Register My Interest'}
            </Button>
          </form>

          <p className="text-sm text-text-secondary mt-6">
            By registering, you confirm you have read our{' '}
            <Link to="/privacy-notice" className="text-accent hover:underline">Privacy Notice</Link>
            {' '}and{' '}
            <Link to="/cookie-notice" className="text-accent hover:underline">Cookie Notice</Link>.
          </p>
        </div>
      </Section>

      {/* Section 8.3 — What Happens Next */}
      <Section>
        <h2 className="text-2xl font-bold text-text-primary mb-8">What happens next</h2>
        <div className="max-w-2xl space-y-6">
          {WHAT_HAPPENS_NEXT.map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center">
                {item.step}
              </div>
              <p className="text-text-secondary pt-1.5">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

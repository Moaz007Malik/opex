import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { FORMSPREE_ENDPOINT } from '../config/formspree';

const SUPPORT_CATEGORIES = [
  {
    title: 'Getting Started',
    description: 'Questions about registering interest and what happens next before launch.',
    to: '/register-interest',
  },
  {
    title: 'The Exec App',
    description: 'Questions about product capabilities, KPI categories, and dashboard structure.',
    to: '/exec-app',
  },
  {
    title: 'Integrations',
    description: 'Questions about how the Exec App is designed to connect to ERP, MES, and other data systems.',
    to: '/how-it-works',
  },
  {
    title: 'Pricing & Credits',
    description: 'Questions about the credit model, the early access offer, and the pricing tiers.',
    to: '/pricing',
  },
];

export function Support() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _subject: `Support: ${form.subject}`,
          source: 'support_contact',
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSent(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Support — OpEx6 | How Can We Help?</title>
        <meta name="description" content="Find answers to common questions or get in touch with the OpEx6 team. Support for the Exec App, integrations, and pricing." />
      </Helmet>

      {/* Section 9.1 — Hero */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            How Can We Help?
          </h1>
          <p className="text-lg text-text-secondary">
            Find answers to common questions or get in touch with the OpEx6 team directly.
          </p>
        </div>
      </section>

      {/* Section 9.2 — Support Categories (4 cards) */}
      <Section className="bg-secondary/50">
        <div className="grid md:grid-cols-2 gap-6">
          {SUPPORT_CATEGORIES.map((cat, i) => (
            <Link key={i} to={cat.to} className="block">
              <Card className="h-full hover:border-accent transition-colors">
                <h2 className="font-semibold text-lg text-text-primary mb-2">{cat.title}</h2>
                <p className="text-text-secondary text-sm">{cat.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Section 9.3 — Contact Form */}
      <Section>
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Get in touch</h2>
          <p className="text-text-secondary text-sm mb-6">
            Or email us directly at{' '}
            <a href="mailto:sales@opex6.com" className="text-accent hover:underline">sales@opex6.com</a>
          </p>

          {sent ? (
            <div className="bg-success/10 border border-success/30 rounded-xl p-5 text-text-primary">
              <p className="font-medium">Message sent.</p>
              <p className="text-sm text-text-secondary mt-1">We aim to respond within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Name"
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Your name"
              />
              <Input
                label="Email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="you@company.com"
              />
              <Input
                label="Subject"
                required
                value={form.subject}
                onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                placeholder="What is your enquiry about?"
              />
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Your message"
                  rows={5}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-text-primary placeholder-slate-500 focus:outline-none focus:border-accent transition-colors resize-y"
                />
              </div>
              {error && <p className="text-danger text-sm">{error}</p>}
              <Button type="submit" disabled={loading} className="w-full justify-center">
                {loading ? 'Sending…' : 'Send Message'}
              </Button>
              <p className="text-text-secondary text-sm">
                We aim to respond to all enquiries within 1 business day.
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}

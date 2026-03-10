import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { FORMSPREE_ENDPOINT } from '../config/formspree';

export function Contact() {
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
          _subject: `Contact: ${form.subject}`,
          source: 'contact_page',
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
        <title>Contact — OpEx6 | Get in Touch</title>
        <meta name="description" content="Contact OpEx6. Questions about the platform, requirements, or enterprise pricing. We aim to respond within 1 business day." />
      </Helmet>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-text-secondary mb-4">
            Whether you have a question about the platform, want to discuss your requirements, or are interested in enterprise pricing — we would like to hear from you.
          </p>
          <p className="text-text-secondary text-sm">
            Email us at{' '}
            <a href="mailto:sales@opex6.com" className="text-accent hover:underline">sales@opex6.com</a>
          </p>
        </div>
      </section>

      <Section className="bg-secondary/50">
        <div className="max-w-xl">
          {sent ? (
            <div className="bg-success/10 border border-success/30 rounded-xl p-5 text-text-primary">
              <p className="font-medium">Message sent.</p>
              <p className="text-sm text-text-secondary mt-1">We aim to respond to all enquiries within 1 business day.</p>
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
                {loading ? 'Sending…' : 'Submit'}
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

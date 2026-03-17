import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Support — OpEx6 | How Can We Help?</title>
        <meta
          name="description"
          content="Find answers to common questions or get in touch with the OpEx6 team. Support for the Exec App, integrations, and pricing."
        />
      </Helmet>

      {/* HERO */}
      <motion.section
      className="py-32 bg-background border-b border-border"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            Support
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            How Can We Help?
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions or get in touch with the OpEx6 team directly.
          </p>

        </div>
      </motion.section>



      {/* SUPPORT CATEGORIES */}
      <Section>

        <h2 className="text-2xl font-bold text-text-primary mb-8">
          Browse support topics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {SUPPORT_CATEGORIES.map((cat, i) => (

            <Link key={i} to={cat.to} className="block">

              <Card className="h-full border border-border rounded-xl p-6 bg-card-bg hover:shadow-md hover:border-accent transition-all">

                <h3 className="font-semibold text-text-primary mb-2">
                  {cat.title}
                </h3>

                <p className="text-text-secondary text-sm">
                  {cat.description}
                </p>

              </Card>

            </Link>

          ))}

        </div>

      </Section>



      {/* CONTACT SECTION */}
      <Section className="bg-secondary">

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Still need help?
            </h2>

            <p className="text-text-secondary mb-6">
              If you cannot find the answer you are looking for, send us a message and our team will respond as soon as possible.
            </p>

            <p className="text-text-secondary text-sm">
              Or email us directly at{' '}
              <a
                href="mailto:sales@opex6.com"
                className="text-accent hover:underline"
              >
                sales@opex6.com
              </a>
            </p>

          </div>



          {/* RIGHT SIDE FORM */}
          <div>

            {sent ? (

              <div className="bg-success/10 border border-success/40 rounded-xl p-6">

                <p className="font-medium text-text-primary">
                  Message sent.
                </p>

                <p className="text-sm text-text-secondary mt-1">
                  We aim to respond within 1 business day.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-5 border border-border rounded-xl p-8 bg-card-bg"
              >

                <Input
                  label="Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your name"
                />

                <Input
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="you@company.com"
                />

                <Input
                  label="Subject"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, subject: e.target.value }))
                  }
                  placeholder="What is your enquiry about?"
                />

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Message
                  </label>

                  <textarea
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Your message"
                    rows={5}
                    className="w-full border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-secondary bg-background focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 transition-colors resize-y"
                  />
                </div>

                {error && (
                  <p className="text-danger text-sm">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full justify-center"
                >
                  {loading ? 'Sending…' : 'Send Message'}
                </Button>

                <p className="text-text-secondary text-sm">
                  We aim to respond to all enquiries within 1 business day.
                </p>

              </form>

            )}

          </div>

        </div>

      </Section>

    </>
  );
}
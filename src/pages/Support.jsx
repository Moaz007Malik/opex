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



      {/* CONTACT SECTION — styled to match Contact page */}
      <Section className="bg-secondary">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT SIDE — info cards */}
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-semibold mb-3">
              Still need help?
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-4">
              Contact the OpEx6 team.
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              If you can&apos;t find the answer you&apos;re looking for in the resources above, send us a message and we&apos;ll come back with a structured response.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card-bg/50 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold mb-2">
                  Email
                </p>
                <a
                  href="mailto:sales@opex6.com"
                  className="text-text-primary font-semibold hover:underline underline-offset-4"
                >
                  sales@opex6.com
                </a>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  We aim to respond within 1 business day.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card-bg/50 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-text-secondary font-semibold mb-2">
                  Helpful context
                </p>
                <ul className="text-sm text-text-secondary space-y-1 leading-relaxed">
                  <li>• Which page or feature you&apos;re asking about</li>
                  <li>• Any error messages or behaviour seen</li>
                  <li>• How urgent the issue is</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — premium form card */}
          <div className="lg:col-span-7 lg:pl-4">
            <div className="relative bg-card-bg border border-border rounded-2xl p-7 sm:p-8 shadow-xl overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent/80 via-accent/30 to-transparent" />

              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold mb-2">
                  Submit a support request
                </p>
                <p className="text-base text-text-secondary leading-relaxed">
                  Share a brief description of what you&apos;re trying to do and what&apos;s not working as expected.
                </p>
              </div>

              {sent ? (
                <div className="bg-success/10 border border-success/40 rounded-xl p-6 text-text-primary">
                  <p className="font-medium text-lg">Message sent.</p>
                  <p className="text-base text-text-secondary mt-2">
                    We aim to respond to all enquiries within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
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
                  </div>

                  <Input
                    label="Subject"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, subject: e.target.value }))
                    }
                    placeholder="What is this about?"
                  />

                  <div>
                    <label className="block text-sm font-medium tracking-[0.1em] uppercase text-text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Describe what you are trying to do and what you are seeing, including any relevant pages or KPI areas."
                      rows={6}
                      className="w-full border border-border rounded-xl px-4 py-3 bg-background/40 text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 transition-colors resize-y leading-relaxed"
                    />
                  </div>

                  {error && (
                    <div className="rounded-xl border border-danger/40 bg-danger/10 p-4">
                      <p className="text-danger text-sm font-medium">{error}</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full justify-center py-3"
                    >
                      {loading ? 'Sending…' : 'Send support request'}
                    </Button>
                    <p className="text-text-secondary text-sm mt-3 text-center">
                      We aim to respond within 1 business day.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </Section>

    </>
  );
}
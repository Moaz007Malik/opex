import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
        <meta
          name="description"
          content="Contact OpEx6. Questions about the platform, requirements, or enterprise pricing. We aim to respond within 1 business day."
        />
      </Helmet>

      {/* HERO */}
      <motion.section
        className="relative py-24 lg:py-28 bg-background overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Premium background accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(148,163,184,0.18),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-semibold mb-4">
              Contact
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5 text-text-primary leading-tight">
              Talk to OpEx6.
            </h1>

            <p className="text-lg text-text-secondary mb-4">
              Questions about the Exec App, KPI framework, or enterprise pricing? Share what you're trying to solve and we’ll come back with a structured response.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 mt-6">
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
                  What to include
                </p>
                <ul className="text-sm text-text-secondary space-y-1 leading-relaxed">
                  <li>• Sites / lines to cover</li>
                  <li>• KPI areas you care about</li>
                  <li>• Current reporting pain points</li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src="/images/contact.png"
                className="w-full h-auto mix-blend-color-dodge"
                alt="Team collaborating over data dashboards"
              />

              {/* Blur/fade edges so image feels integrated */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_55%,rgba(15,23,42,0.65)_100%)]" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-background/95 via-background/55 to-transparent backdrop-blur-md" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-background/95 via-background/55 to-transparent backdrop-blur-md" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-background/70 to-transparent backdrop-blur-md" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-background/70 to-transparent backdrop-blur-md" />
            </div>

          </div>

          {/* FORM CARD */}
          <div className="lg:col-span-7 lg:pl-4">
            <div className="relative bg-card-bg border border-border rounded-2xl p-7 sm:p-8 shadow-xl overflow-hidden">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-accent/80 via-accent/30 to-transparent" />

              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.22em] text-text-secondary font-semibold mb-2">
                  Send a message
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary leading-tight">
                  We’ll reply with next steps.
                </h2>
                <p className="text-base text-text-secondary mt-3 leading-relaxed">
                  Tell us what you’re comparing (Power BI/Tableau/spreadsheets), the KPI areas you care about, and the reporting cadence you need.
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
                    placeholder="Share your context (sites, KPI areas, what you use today, and what 'good' looks like)."
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
                    {loading ? 'Sending…' : 'Send message'}
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
      </motion.section>

      {/* SECOND CTA (removed: email is integrated above) */}
    </>
  );
}
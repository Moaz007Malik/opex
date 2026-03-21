import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useForm } from '@formspree/react';
import { FORMSPREE_FORM_ID } from '../config/formspree';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState('');
  const [formState, handleFormSubmit] = useForm(FORMSPREE_FORM_ID);

  const onSubmit = (e) => {
    setError('');
    return handleFormSubmit(e);
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
        <div className="relative max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

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

            {formState.succeeded ? (
              <div className="bg-success/10 border border-success/40 rounded-xl p-6 text-text-primary">
                <p className="font-medium text-lg">Message sent.</p>
                <p className="text-base text-text-secondary mt-2">
                  We aim to respond to all enquiries within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="_subject"
                  value={`Contact: ${form.subject}`}
                />
                <input type="hidden" name="source" value="contact_page" />
                <input
                  type="hidden"
                  name="_timestamp"
                  value={new Date().toISOString()}
                />
                <div className="grid sm:grid-cols-2 gap-5">

                <Input
                  label="Name"
                  required
                  name="name"
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
                  name="email"
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
                  name="subject"
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
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Share your context (sites, KPI areas, what you use today, and what 'good' looks like)."
                    rows={6}
                    className="w-full border border-border rounded-xl px-4 py-3 bg-background/40 text-text-primary placeholder:text-text-muted/90 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 transition-colors resize-y leading-relaxed"
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
                    disabled={formState.submitting}
                    className="w-full justify-center py-3"
                  >
                    {formState.submitting ? 'Sending…' : 'Send message'}
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
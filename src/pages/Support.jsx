import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { useForm } from '@formspree/react';
import { FORMSPREE_FORM_ID } from '../config/formspree';

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
  const [formState, handleFormSubmit] = useForm(FORMSPREE_FORM_ID);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    setError('');
    return handleFormSubmit(e);
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
        <div className="max-w-[1400px] mx-auto px-6 text-center">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            SUPPORT
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            How Can We Help?
          </h1>

          <p className="text-lg text-text-secondary max-w-[1400px] mx-auto">
            Find answers to common questions or get in touch with the OpEx6 team directly.
          </p>

        </div>
      </motion.section>



      {/* SUPPORT CATEGORIES */}
      <Section>

        <h2 className="text-2xl font-bold text-text-primary mb-8">
          Browse support topics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

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



      {/* GET IN TOUCH */}
      <Section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[1400px]">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Still need help?
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-2">
              If you cannot find the answer you are looking for, send us a message and our team will respond as soon as possible.
            </p>
            <p className="text-base text-text-secondary leading-relaxed">
              Or email us directly at{" "}
              <a
                href="mailto:sales@opex6.com"
                className="text-accent hover:underline"
              >
                sales@opex6.com
              </a>
              .
            </p>
          </div>

          <div className="mt-8 max-w-2xl">
            <div className="relative bg-card-bg border border-border rounded-2xl p-7 sm:p-8 shadow-xl overflow-hidden">
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
                    value={`Support: ${form.subject}`}
                  />
                  <input type="hidden" name="source" value="support_contact" />
                  <input type="hidden" name="_timestamp" value={new Date().toISOString()} />
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
                    placeholder="What is your enquiry about?"
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
                      placeholder="Your message"
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
                      disabled={formState.submitting}
                      className="w-full justify-center py-3"
                    >
                      {formState.submitting ? 'Sending…' : 'Send Message'}
                    </Button>
                    <p className="text-text-secondary text-sm mt-3 text-center">
                      We aim to respond to all enquiries within 1 business day.
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
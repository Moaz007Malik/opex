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
        className="py-28 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
              Get in Touch
            </h1>

            <p className="text-lg text-text-secondary mb-4">
              Whether you have a question about the platform, want to discuss your requirements, or are interested in enterprise pricing — we would like to hear from you.
            </p>

            <p className="text-text-secondary text-sm mb-6">
              Email us at{' '}
              <a
                href="mailto:sales@opex6.com"
                className="text-accent font-medium hover:underline"
              >
                sales@opex6.com
              </a>
            </p>

            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/263/984/small/contact-us-concept.jpg?auto=format&fit=crop&w=1200&q=80"
              className="rounded-xl shadow-lg"
              alt="Team collaborating over data dashboards"
            />

          </div>

          {/* FORM CARD */}
          <div className="bg-card-bg border border-border rounded-xl p-8 shadow-sm">

            {sent ? (
              <div className="bg-success/10 border border-success/40 rounded-xl p-5 text-text-primary">
                <p className="font-medium">Message sent.</p>
                <p className="text-sm text-text-secondary mt-1">
                  We aim to respond to all enquiries within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

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
                  <label className="block text-xs font-medium tracking-[0.1em] uppercase text-text-secondary mb-1">
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
                    className="w-full border border-border rounded-lg px-4 py-3 bg-[#020617] text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/40 transition-colors resize-y"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full justify-center"
                >
                  {loading ? 'Sending…' : 'Submit'}
                </Button>

                <p className="text-text-secondary text-sm">
                  We aim to respond to all enquiries within 1 business day.
                </p>

              </form>
            )}

          </div>

        </div>
      </motion.section>

      {/* SECOND CTA */}
      <Section className="text-center">

        <h2 className="text-3xl font-bold mb-4 text-text-primary">
          Prefer email?
        </h2>

        <p className="text-text-secondary mb-6">
          You can also contact us directly and we will respond as soon as possible.
        </p>

        <a
          href="mailto:sales@opex6.com"
          className="text-accent font-medium hover:underline"
        >
          sales@opex6.com
        </a>

      </Section>
    </>
  );
}
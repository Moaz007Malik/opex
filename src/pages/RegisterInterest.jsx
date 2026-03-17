import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    company: '',
    industry: '',
    message: '',
    consentUpdates: false,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

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
          company: form.company,
          industry: form.industry,
          message: form.message,
          consentUpdates: form.consentUpdates,
          _sourcePage: 'register_interest',
          _sourceForm: 'exec_app_register_interest_primary',
          _noticeVersion: 'privacy_v1_terms_v1',
          _timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);

    } catch {
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
          <div className="max-w-xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Thank you.
            </h1>

            <p className="text-text-secondary">
              You are on the list. We will be in touch ahead of launch with your early access details and information about the £50 for 50 credits + 25 free credits pre-launch offer.
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
        <meta
          name="description"
          content="Register your interest in the OpEx6 Exec App. Be among the first to access it when it opens to early users. Pre-launch offer: 100 credits for £50."
        />
      </Helmet>


      {/* HERO */}
      <motion.section
        className="py-28 border-b border-border bg-background"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px 0px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            Early Access
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Register Your Interest in the Exec App
          </h1>

          <p className="text-lg text-text-secondary mb-8">
            Be among the first to access OpEx6's Exec App when it opens to early users. Register your interest now to secure your place on the early access list.
          </p>


          <div className="bg-highlight/10 border border-highlight/40 rounded-xl p-6 text-left max-w-xl mx-auto">
            <p className="font-semibold text-text-primary mb-1">
              Early Access Offer
            </p>

            <p className="text-sm text-text-secondary">
              Register interest now to secure eligibility for £50 for 50 credits + 25 free credits at launch. This is a pre-launch registration — no payment is taken now. Subject to final launch terms.
            </p>
          </div>

        </div>
      </motion.section>



      {/* FORM */}
      <Section>

        <div className="max-w-xl mx-auto">

          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-border rounded-xl p-8 bg-card-bg"
          >

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
              label="Company (optional)"
              value={form.company}
              onChange={(e) => handleChange('company', e.target.value)}
              placeholder="Your company"
            />

            <Input
              label="Industry (optional)"
              value={form.industry}
              onChange={(e) => handleChange('industry', e.target.value)}
              placeholder="e.g. Food & Beverage, Packaging, Chemicals"
            />

            <Input
              label="Message (optional)"
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Anything helpful about your operations, context, or questions"
            />


            <p className="text-xs text-text-secondary">
              We&apos;ll use the details you provide to respond to your enquiry and manage your early-access request. Read our{' '}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Notice
              </Link>.
            </p>

            <p className="text-xs text-text-secondary">
              By submitting this form, you confirm you have read our{' '}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Notice
              </Link>{' '}
              and{' '}
              <Link to="/terms" className="text-accent hover:underline">
                Terms of Use
              </Link>.
            </p>


            <Checkbox
              id="consentUpdates"
              label="Yes, I'd like to receive product updates and marketing emails from OpEx6."
              checked={form.consentUpdates}
              onChange={(v) => handleChange('consentUpdates', v)}
            />

            {error && (
              <p className="text-danger text-sm">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full justify-center"
            >
              {loading ? 'Sending…' : 'Register Interest in the Exec App'}
            </Button>

          </form>

        </div>

      </Section>



      {/* WHAT HAPPENS NEXT */}
      <Section className="bg-secondary">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-bold text-text-primary mb-8">
            What happens next
          </h2>

          <div className="space-y-6">

            {WHAT_HAPPENS_NEXT.map((item) => (
              <div key={item.step} className="flex gap-4">

                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center">
                  {item.step}
                </div>

                <p className="text-text-secondary pt-1.5">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Section>
    </>
  );
}
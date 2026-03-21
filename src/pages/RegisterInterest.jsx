import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { useForm } from '@formspree/react';
import { FORMSPREE_FORM_ID } from '../config/formspree';
import { EARLY_ACCESS } from '../config/siteCopy.js';

const WHAT_HAPPENS_NEXT = [
  { step: 1, text: 'We receive your registration and send a confirmation by email - Request email template.' },
  { step: 2, text: 'You will be contacted ahead of launch with your early access details and the pre-launch offer.' },
  { step: 3, text: 'When the Exec App opens to early users, you will be among the first to access it.' },
];

export function RegisterInterest() {
  const [formState, handleFormSubmit] = useForm(FORMSPREE_FORM_ID);
  const timestampRef = useRef(null);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    businessEmail: '',
    jobTitle: '',
    companyName: '',
    confirmContact: false,
    marketingOptIn: false,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const onSubmit = (e) => {
    setError('');
    if (!form.confirmContact) {
      e.preventDefault();
      setError('Please confirm consent to be contacted to continue.');
      return;
    }
    if (timestampRef.current) timestampRef.current.value = new Date().toISOString();
    return handleFormSubmit(e);
  };

  if (formState.succeeded) {
    return (
      <>
        <Helmet>
          <title>Thank you — OpEx6</title>
        </Helmet>

        <Section>
          <div className="max-w-[1400px] mx-auto text-center py-16">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Thank you.
            </h1>

            <p className="text-text-secondary">
              {EARLY_ACCESS.THANK_YOU_LINE}
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
          content={`Register your interest in the OpEx6 Exec App. Be among the first to access it when it opens to early users. ${EARLY_ACCESS.META_OFFER_FRAGMENT}`}
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
        <div className="max-w-[1400px] mx-auto px-6 text-center">

          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            EARLY ACCESS
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Register Your Interest in the Exec App
          </h1>

          <p className="text-lg text-text-secondary mb-8">
            Be among the first to access OpEx6's Exec App when it opens to early users. Register your interest now to secure your place on the early access list.
          </p>


          <div className="bg-highlight/10 border border-highlight/40 rounded-xl p-6 text-left max-w-[1400px] mx-auto">
            <p className="font-semibold text-text-primary mb-1">
              {EARLY_ACCESS.SECTION_TITLE}
            </p>

            <p className="text-sm text-text-secondary">
              {EARLY_ACCESS.OFFER_FULL}
            </p>
          </div>

        </div>
      </motion.section>



      {/* FORM */}
      <Section>

        <div className="max-w-[1400px] mx-auto">

          <form
            onSubmit={onSubmit}
            className="space-y-6 border border-border rounded-xl p-8 bg-card-bg"
          >
            <input type="hidden" name="_sourcePage" value="register_interest" />
            <input
              type="hidden"
              name="_sourceForm"
              value="exec_app_register_interest_primary"
            />
            <input type="hidden" name="_noticeVersion" value="privacy_v1_terms_v1" />
            <input type="hidden" name="_timestamp" ref={timestampRef} />

            <p className="text-xs text-text-secondary text-left">
              Your information is handled in accordance with our{' '}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Notice
              </Link>
              . We will only contact you about your interest registration unless you opt in to product updates.
            </p>

            <Input
              label="Full Name"
              required
              name="name"
              value={form.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="Your full name"
            />

            <Input
              label="Work Email"
              type="email"
              required
              name="email"
              value={form.businessEmail}
              onChange={(e) =>
                handleChange('businessEmail', e.target.value)
              }
              placeholder="you@company.com"
            />

            <Input
              label="Job Title"
              required
              name="jobTitle"
              value={form.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              placeholder="e.g. Operations Director"
            />

            <Input
              label="Company Name"
              required
              name="company"
              value={form.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              placeholder="Your company"
            />

            <div className="space-y-3 pt-2 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                Contact permission{" "}
                <span className="text-danger text-base font-bold leading-none" aria-hidden="true">
                  *
                </span>
              </p>
              <Checkbox
                id="register-interest-confirm-contact"
                name="confirmContact"
                value="true"
                required
                label="I confirm that OpEx6 may contact me about the product interest I am registering through this form."
                checked={form.confirmContact}
                onChange={(v) => handleChange('confirmContact', v)}
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">
                Marketing <span className="text-text-muted">(optional)</span>
              </p>
              <Checkbox
                id="register-interest-marketing-optin"
                name="marketingOptIn"
                value="true"
                label="Yes, I would like to receive product updates and marketing communications by email."
                checked={form.marketingOptIn}
                onChange={(v) => handleChange('marketingOptIn', v)}
              />
            </div>

            {!form.marketingOptIn ? (
              <input type="hidden" name="marketingOptIn" value="false" />
            ) : null}

            {error && (
              <p className="text-danger text-sm">{error}</p>
            )}

            <Button
              type="submit"
              disabled={formState.submitting}
              className="w-full justify-center"
            >
              {formState.submitting ? 'Sending…' : 'Register Interest in the Exec App'}
            </Button>

            <p className="text-xs text-text-secondary">
              By submitting this form, you confirm you have read our{' '}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Notice
              </Link>{' '}
              and{' '}
              <Link to="/cookies" className="text-accent hover:underline">
                Cookie Notice
              </Link>
              .
            </p>

          </form>

        </div>

      </Section>



      {/* WHAT HAPPENS NEXT */}
      <Section className="bg-secondary">

        <div className="max-w-[1400px] mx-auto">

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
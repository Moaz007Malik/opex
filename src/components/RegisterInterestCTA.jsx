import { Button } from "./ui/Button";

export function RegisterInterestCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-y border-border">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(148,163,184,0.25),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="bg-card-bg border border-border rounded-3xl shadow-xl px-8 py-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-5 leading-tight">
            Ready to register your interest in the Exec App?
          </h2>

          <p className="text-text-secondary mb-4 max-w-2xl mx-auto leading-relaxed">
            OpEx6 is preparing to open the Exec App to early users. Register your interest now
            to secure your place on the early access list — and eligibility for our pre-launch
            credit offer.
          </p>

          <p className="text-highlight font-medium mb-8 text-sm sm:text-base">
            Register interest now to secure eligibility for £50 for 50 credits + 25 free credits
            at launch. Subject to final launch terms.
          </p>

          <div className="flex justify-center">
            <Button
              to="/register-interest"
              className="px-6 py-3 text-base shadow-md hover:shadow-lg transition"
            >
              Register Interest in the Exec App
            </Button>
          </div>

          <p className="text-text-secondary text-sm mt-6 max-w-xl mx-auto leading-relaxed">
            This is a pre-launch registration. No payment is taken at this stage. You will be
            contacted with full details ahead of launch.
          </p>
        </div>
      </div>
    </section>
  );
}


import { Button } from "./ui/Button";
import { EARLY_ACCESS } from "../config/siteCopy.js";

export function RegisterInterestCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-y border-border">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(148,163,184,0.25),transparent_70%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <div className="bg-card-bg border border-border rounded-lg shadow-xl px-8 py-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-text-primary mb-5 leading-tight">
            Ready to learn more?
          </h2>

          <p className="text-text-primary mb-8 max-w-[1400px] mx-auto leading-relaxed text-lg">
            {EARLY_ACCESS.CTA_PARAGRAPH}
          </p>

          <div className="flex justify-center">
            <Button
              to="/register-interest"
              className="shadow-md hover:shadow-lg transition"
            >
              Register My Interest
            </Button>
          </div>

          <p className="text-text-primary text-sm mt-6 max-w-[1400px] mx-auto leading-relaxed">
            This is a pre-launch registration. No payment is taken at this stage. You will be
            contacted with full details ahead of launch.
          </p>
        </div>
      </div>
    </section>
  );
}


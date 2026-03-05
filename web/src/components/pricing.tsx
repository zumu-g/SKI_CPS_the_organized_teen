import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { BlobShape, DoodleStar, DoodleCheck } from "@/components/illustrations";

const plans = [
  {
    name: "Starter",
    price: "$47",
    description: "Self-paced access to all session recordings and templates.",
    features: [
      "6 session recordings",
      "All Notion & Google templates",
      "Downloadable worksheets & PDFs",
      "Lifetime access to replays",
    ],
    cta: "Get Starter Access",
    featured: false,
    blob: 1 as const,
  },
  {
    name: "Full Program",
    price: "$97",
    description:
      "The complete live cohort experience with community and support.",
    features: [
      "Everything in Starter",
      "6 live sessions with Q&A",
      "Private Discord community (90 days)",
      "Accountability partner matching",
      "Certificate of completion",
    ],
    cta: "Join the Cohort",
    featured: true,
    badge: "Most Popular",
    blob: 3 as const,
  },
  {
    name: "VIP",
    price: "$197",
    description: "Personalized coaching and lifetime community access.",
    features: [
      "Everything in Full Program",
      "1:1 coaching call (30 min)",
      "Personalized study plan review",
      "Lifetime alumni Discord access",
      "Priority Q&A in live sessions",
    ],
    cta: "Go VIP",
    featured: false,
    blob: 5 as const,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32 bg-muted/30 overflow-hidden"
    >
      {/* Background organic shapes */}
      <BlobShape
        variant={1}
        className="absolute -top-24 left-1/4 w-[500px] h-[500px] text-primary/[0.03]"
        color="currentColor"
      />
      <BlobShape
        variant={4}
        className="absolute -bottom-32 right-0 w-[400px] h-[400px] text-accent/[0.03]"
        color="currentColor"
      />

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Invest in skills that
            <br />
            pay off for years.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One-time payment. No subscriptions. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border flex flex-col overflow-hidden ${
                plan.featured
                  ? "bg-card border-primary/30 shadow-xl shadow-primary/10 md:-my-2 md:py-10 md:scale-[1.02]"
                  : "bg-card border-border/50"
              }`}
            >
              {/* Organic blob decoration */}
              <BlobShape
                variant={plan.blob}
                className="absolute -top-8 -right-8 w-32 h-32 opacity-[0.05]"
                color="currentColor"
              />

              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="relative">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    one-time
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3 flex-1 relative">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 rounded-full h-11 font-medium w-full ${
                  plan.featured ? "shadow-lg shadow-primary/20" : ""
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Founding cohort pricing. Prices will increase after the first cohort.
        </p>

        {/* Floating decorations */}
        <DoodleStar className="absolute top-16 right-[8%] w-5 h-5 text-chart-3/30 hidden lg:block" />
        <DoodleCheck className="absolute bottom-24 left-[5%] w-8 h-8 text-accent/20 hidden lg:block" />
      </div>
    </section>
  );
}

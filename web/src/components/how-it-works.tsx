import { Video, Users, Download, Award } from "lucide-react";
import { BlobShape, DoodleStar, Squiggle } from "@/components/illustrations";

const steps = [
  {
    icon: Video,
    step: "1",
    title: "Join a live cohort",
    description:
      "Pick your cohort dates and show up twice a week for 45-minute live sessions. Small groups of 20\u201350 students mean real interaction.",
    color: "text-primary",
    bg: "bg-primary/10",
    blob: 1 as const,
  },
  {
    icon: Download,
    step: "2",
    title: "Get your templates",
    description:
      "Instantly access pre-built Notion and Google templates designed specifically for high school students.",
    color: "text-accent",
    bg: "bg-accent/10",
    blob: 2 as const,
  },
  {
    icon: Users,
    step: "3",
    title: "Practice with peers",
    description:
      "Join the private Discord community. Complete micro-challenges between sessions and get real accountability.",
    color: "text-chart-4",
    bg: "bg-chart-4/10",
    blob: 3 as const,
  },
  {
    icon: Award,
    step: "4",
    title: "Own the system",
    description:
      "By session 6, you have a complete, personalized productivity system and a certificate of completion.",
    color: "text-chart-3",
    bg: "bg-chart-3/15",
    blob: 4 as const,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-32 bg-muted/30 bg-dots overflow-hidden"
    >
      {/* Background blobs */}
      <BlobShape
        variant={5}
        className="absolute top-10 -right-24 w-[350px] h-[350px] text-chart-3/[0.04]"
        color="currentColor"
      />
      <BlobShape
        variant={2}
        className="absolute -bottom-16 left-0 w-[300px] h-[300px] text-primary/[0.03]"
        color="currentColor"
      />

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            How it works
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Simple process.
            <br />
            Real transformation.
          </h2>
          <Squiggle className="mx-auto mt-4 w-28 h-3 text-accent/25" />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((item, i) => (
            <div key={item.step} className="relative text-center group">
              {/* Connector line (hidden on mobile, between cards on lg) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px+1.5rem)] h-px border-t-2 border-dashed border-primary/15" />
              )}

              <div className="relative mx-auto mb-5 w-fit">
                {/* Subtle blob behind icon */}
                <BlobShape
                  variant={item.blob}
                  className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] opacity-[0.08]"
                  color="currentColor"
                />
                <div
                  className={`relative h-14 w-14 rounded-2xl ${item.bg} flex items-center justify-center`}
                >
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <div className="absolute -top-1.5 -right-1.5 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-sm">
                  {item.step}
                </div>
              </div>
              <h3 className="font-semibold text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Floating decorations */}
        <DoodleStar className="absolute top-12 left-[5%] w-5 h-5 text-chart-3/30 hidden lg:block" />
        <DoodleStar className="absolute bottom-16 right-[8%] w-4 h-4 text-primary/25 hidden lg:block" />
      </div>
    </section>
  );
}

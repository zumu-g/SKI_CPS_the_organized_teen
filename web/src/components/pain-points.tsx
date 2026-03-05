import {
  Brain,
  Clock,
  AlertTriangle,
  Smartphone,
  TrendingDown,
  Heart,
} from "lucide-react";
import { BlobShape, Squiggle } from "@/components/illustrations";

const problems = [
  {
    icon: Brain,
    title: "Overwhelmed by deadlines",
    description:
      "Assignments, tests, extracurriculars, and college prep all competing for your attention at once.",
    blob: 1 as const,
    accent: "text-primary",
    accentBg: "bg-primary/10 group-hover:bg-primary/15",
  },
  {
    icon: Clock,
    title: "Studying hard, not smart",
    description:
      "Hours spent re-reading notes but nothing sticks. You feel busy but never actually ahead.",
    blob: 2 as const,
    accent: "text-accent",
    accentBg: "bg-accent/10 group-hover:bg-accent/15",
  },
  {
    icon: Smartphone,
    title: "Distracted constantly",
    description:
      "Social media, notifications, and endless scrolling eat the hours you planned to be productive.",
    blob: 3 as const,
    accent: "text-chart-4",
    accentBg: "bg-chart-4/10 group-hover:bg-chart-4/15",
  },
  {
    icon: TrendingDown,
    title: "Grades don\u2019t match effort",
    description:
      "You\u2019re putting in the work but your results don\u2019t reflect it. It feels unfair.",
    blob: 4 as const,
    accent: "text-chart-3",
    accentBg: "bg-chart-3/10 group-hover:bg-chart-3/15",
  },
  {
    icon: AlertTriangle,
    title: "Last-minute panic mode",
    description:
      "Every week ends with a frantic all-nighter. The stress cycle never breaks.",
    blob: 5 as const,
    accent: "text-destructive",
    accentBg: "bg-destructive/10 group-hover:bg-destructive/15",
  },
  {
    icon: Heart,
    title: "Burnout is real",
    description:
      "You\u2019re exhausted, anxious, and starting to wonder if it\u2019s even worth trying this hard.",
    blob: 1 as const,
    accent: "text-chart-4",
    accentBg: "bg-chart-4/10 group-hover:bg-chart-4/15",
  },
];

export function PainPoints() {
  return (
    <section className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      {/* Organic background shapes */}
      <BlobShape
        variant={2}
        className="absolute -top-32 -right-32 w-[400px] h-[400px] text-primary/[0.03]"
        color="currentColor"
      />
      <BlobShape
        variant={4}
        className="absolute -bottom-24 -left-24 w-[350px] h-[350px] text-accent/[0.03]"
        color="currentColor"
      />

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            Sound familiar?
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            School doesn&apos;t teach you
            <br />
            how to manage school.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            You&apos;re expected to handle a college-level workload with zero
            training in how to actually do it.
          </p>
          <Squiggle className="mx-auto mt-6 w-32 h-3 text-primary/20" />
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group relative rounded-2xl bg-card p-6 border border-border/50 hover:border-border hover:shadow-lg hover:shadow-primary/5 transition-[border-color,box-shadow] duration-200"
            >
              {/* Subtle blob in card background */}
              <BlobShape
                variant={problem.blob}
                className="absolute -top-6 -right-6 w-24 h-24 opacity-[0.04]"
                color="currentColor"
              />
              <div
                className={`relative h-10 w-10 rounded-xl ${problem.accentBg} flex items-center justify-center mb-4 transition-colors duration-200`}
              >
                <problem.icon className={`h-5 w-5 ${problem.accent}`} />
              </div>
              <h3 className="font-semibold text-base">{problem.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

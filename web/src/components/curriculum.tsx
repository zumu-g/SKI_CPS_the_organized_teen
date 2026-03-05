import { Badge } from "@/components/ui/badge";
import {
  BlobShape,
  DoodleStar,
  DoodleArrow,
  IllustrationStudy,
  IllustrationPlanning,
} from "@/components/illustrations";

const sessions = [
  {
    number: "01",
    title: "Brain Dump & Weekly Reset",
    description:
      "Capture every commitment swimming in your head. Build a master list and learn the Weekly Reset ritual that keeps you in control.",
    tags: ["Clarity", "Planning"],
  },
  {
    number: "02",
    title: "Priority Matrix",
    description:
      "Learn the Eisenhower Matrix adapted for teens and the \u2018Big 3\u2019 daily method that ensures you always tackle what matters most.",
    tags: ["Focus", "Decision-making"],
  },
  {
    number: "03",
    title: "Study Smarter",
    description:
      "Active recall, spaced repetition, and the Pomodoro technique. Science-backed methods that cut study time while boosting retention.",
    tags: ["Retention", "Efficiency"],
  },
  {
    number: "04",
    title: "Digital Command Center",
    description:
      "Set up your personal productivity stack using Notion or Google tools. Walk out with a system you\u2019ll actually use every day.",
    tags: ["Tools", "Systems"],
  },
  {
    number: "05",
    title: "Stress-Proof Your Schedule",
    description:
      "Burnout prevention strategies, shutdown rituals, and sleep optimization. Because sustainable beats intense every time.",
    tags: ["Wellness", "Balance"],
  },
  {
    number: "06",
    title: "Long-Game Planning",
    description:
      "College application sprint planning and 90-day backward planning. Turn big, scary goals into clear weekly actions.",
    tags: ["Goals", "College prep"],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background organic shapes */}
      <BlobShape
        variant={3}
        className="absolute top-20 -left-40 w-[500px] h-[500px] text-accent/[0.03]"
        color="currentColor"
      />
      <BlobShape
        variant={1}
        className="absolute bottom-20 -right-40 w-[450px] h-[450px] text-primary/[0.03]"
        color="currentColor"
      />

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: header + illustration */}
          <div className="lg:sticky lg:top-24 lg:w-[340px] shrink-0 text-center lg:text-left">
            <p className="text-sm font-medium text-primary tracking-wide uppercase">
              The Program
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              6 sessions.
              <br />
              3 weeks.
              <br />
              <span className="text-primary">A system for life.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Each 45-minute live session builds on the last. By the end,
              you&apos;ll have a complete productivity system tailored to your
              life.
            </p>

            {/* Illustration */}
            <div className="hidden lg:block mt-8 relative">
              <IllustrationStudy className="w-40 h-40 mx-auto lg:mx-0" />
              <DoodleArrow className="absolute -bottom-4 right-0 w-16 h-12 text-primary/25 rotate-12" />
              <DoodleStar className="absolute top-2 right-8 w-5 h-5 text-chart-3/40" />
            </div>
          </div>

          {/* Right: session cards */}
          <div className="flex-1 space-y-4">
            {sessions.map((session) => (
              <div
                key={session.number}
                className="group flex flex-col sm:flex-row gap-4 sm:gap-8 items-start rounded-2xl bg-card border border-border/50 p-6 sm:p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-[border-color,box-shadow] duration-200"
              >
                <div className="text-4xl font-bold font-mono text-primary/20 group-hover:text-primary/40 transition-colors duration-200 tabular-nums shrink-0">
                  {session.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{session.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">
                    {session.description}
                  </p>
                  <div className="mt-3 flex gap-2">
                    {session.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  BlobShape,
  DoodleStar,
  ScribbleUnderline,
  IllustrationCommunity,
} from "@/components/illustrations";

const testimonials = [
  {
    quote:
      "I went from forgetting assignments daily to finishing my week on Sunday night. The Weekly Reset changed everything.",
    name: "Aisha M.",
    detail: "Junior, AP student",
    initials: "A",
    color: "bg-primary/10 text-primary",
  },
  {
    quote:
      "My parents noticed the difference before I did. I\u2019m less stressed, my grades went up, and I actually have free time now.",
    name: "Jake T.",
    detail: "Sophomore",
    initials: "J",
    color: "bg-accent/10 text-accent",
  },
  {
    quote:
      "The Pomodoro technique + the Big 3 method is a game-changer. I study less but remember more. Wish I learned this freshman year.",
    name: "Priya K.",
    detail: "Senior, IB student",
    initials: "P",
    color: "bg-chart-3/15 text-chart-3",
  },
  {
    quote:
      "Being in a cohort with other students who get it made all the difference. It\u2019s not just tips \u2014 it\u2019s a whole system.",
    name: "Marcus L.",
    detail: "Junior, student athlete",
    initials: "M",
    color: "bg-chart-4/10 text-chart-4",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background organic shapes */}
      <BlobShape
        variant={4}
        className="absolute top-20 -left-32 w-[400px] h-[400px] text-chart-3/[0.03]"
        color="currentColor"
      />
      <BlobShape
        variant={2}
        className="absolute bottom-10 -right-24 w-[350px] h-[350px] text-primary/[0.03]"
        color="currentColor"
      />

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            From our beta testers
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Students like you are
            <br />
            <span className="relative inline-block">
              already seeing results.
              <ScribbleUnderline className="absolute -bottom-1 left-0 w-full h-2.5 text-accent/30" />
            </span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl bg-card border border-border/50 p-8 flex flex-col justify-between"
            >
              {/* Decorative quote blob */}
              <BlobShape
                variant={3}
                className="absolute -top-4 -right-4 w-20 h-20 opacity-[0.04]"
                color="currentColor"
              />

              {/* Large decorative quote mark */}
              <span className="text-5xl font-serif text-primary/10 leading-none select-none mb-2">
                &ldquo;
              </span>

              <blockquote className="text-base leading-relaxed text-foreground -mt-4">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-sm font-semibold`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community illustration */}
        <div className="mt-12 flex justify-center relative">
          <IllustrationCommunity className="w-28 h-28 opacity-60" />
          <DoodleStar className="absolute top-0 right-[calc(50%-80px)] w-4 h-4 text-chart-3/40" />
        </div>
      </div>
    </section>
  );
}

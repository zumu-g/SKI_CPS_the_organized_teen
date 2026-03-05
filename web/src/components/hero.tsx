import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import {
  BlobShape,
  DoodleStar,
  DotsCluster,
  ScribbleUnderline,
} from "@/components/illustrations";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BlobShape
          variant={1}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] text-primary/[0.04]"
          color="currentColor"
        />
        <BlobShape
          variant={3}
          className="absolute -top-10 -right-32 w-[600px] h-[600px] text-accent/[0.05]"
          color="currentColor"
        />
        <BlobShape
          variant={5}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] text-chart-3/[0.04]"
          color="currentColor"
        />
      </div>

      {/* Floating doodle elements */}
      <DoodleStar className="absolute top-36 left-[12%] w-6 h-6 text-chart-3/40 hidden md:block" />
      <DoodleStar className="absolute top-52 right-[15%] w-5 h-5 text-primary/30 hidden md:block" />
      <DoodleStar className="absolute bottom-32 left-[8%] w-4 h-4 text-chart-4/30 hidden lg:block" />
      <DotsCluster className="absolute top-40 right-[8%] w-16 h-16 text-primary/15 hidden lg:block" />
      <DotsCluster className="absolute bottom-20 left-[5%] w-12 h-12 text-accent/15 hidden lg:block" />

      <div className="mx-auto max-w-6xl px-6 text-center relative">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full px-4 py-1.5 text-xs font-medium border border-border/50"
        >
          Founding Cohort Now Enrolling
        </Badge>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
          Stop surviving school.
          <br />
          <span className="relative inline-block text-primary">
            Start owning it.
            <ScribbleUnderline className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" />
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          A 3-week live program that gives you the system, templates, and
          community to manage your workload&nbsp;&mdash; without burning out.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/20 transition-[background-color,box-shadow] duration-200 hover:shadow-xl hover:shadow-primary/30"
          >
            Join the Program
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium transition-colors duration-200"
          >
            <Play className="mr-2 h-4 w-4" />
            Watch Preview
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Ages 14&ndash;18 &middot; 6 live sessions &middot; Starts April 2026
        </p>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "bg-primary/70",
                "bg-accent/70",
                "bg-chart-3/70",
                "bg-chart-4/70",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full ${bg} ring-2 ring-background`}
                />
              ))}
            </div>
            <span>200+ students waitlisted</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-border" />
          <span>4.9 average rating from beta testers</span>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  BlobShape,
  DoodleStar,
  IllustrationGrowth,
} from "@/components/illustrations";

export function CTA() {
  return (
    <section className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center">
          {/* Organic decorative shapes */}
          <BlobShape
            variant={2}
            className="absolute -top-16 -right-16 w-64 h-64 text-white/[0.06]"
            color="currentColor"
          />
          <BlobShape
            variant={4}
            className="absolute -bottom-20 -left-16 w-56 h-56 text-white/[0.06]"
            color="currentColor"
          />
          <BlobShape
            variant={5}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-white/[0.03]"
            color="currentColor"
          />

          {/* Floating stars */}
          <DoodleStar className="absolute top-8 left-12 w-5 h-5 text-white/20 hidden md:block" />
          <DoodleStar className="absolute bottom-12 right-16 w-4 h-4 text-white/15 hidden md:block" />
          <DoodleStar className="absolute top-16 right-24 w-3 h-3 text-white/10 hidden lg:block" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground">
              Your future self will
              <br />
              thank you.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              The next cohort starts soon. Spots are limited to 50 students for
              a personalized experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-8 h-12 text-base font-medium"
              >
                Join the Founding Cohort
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full px-8 h-12 text-base font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10"
              >
                Get the Free Starter Kit
              </Button>
            </div>
          </div>

          {/* Illustration tucked into corner */}
          <IllustrationGrowth className="absolute -bottom-2 -right-2 w-28 h-28 opacity-20 hidden md:block" />
        </div>
      </div>
    </section>
  );
}

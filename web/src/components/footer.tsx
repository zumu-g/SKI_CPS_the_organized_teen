import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-base font-semibold">The Organized Teen</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Helping high school students master their academic workload.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Program</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#curriculum" className="hover:text-foreground transition-colors duration-200 py-1">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors duration-200 py-1">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors duration-200 py-1">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Resources</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
                  Free Starter Kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
                  For Schools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Legal</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 The Organized Teen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
              TikTok
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-200 py-1">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

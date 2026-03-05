import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlobShape, DoodleStar, Squiggle } from "@/components/illustrations";

const faqs = [
  {
    q: "What ages is this for?",
    a: "The Organized Teen is designed for high school students ages 14\u201318. The strategies and templates are tailored specifically for the high school workload, including AP/IB courses, extracurriculars, and college prep.",
  },
  {
    q: "Do I need to attend live, or can I watch replays?",
    a: "The Starter tier gives you access to all recorded sessions. The Full Program and VIP tiers include live sessions with Q&A. All live sessions are recorded and available as replays within 72 hours.",
  },
  {
    q: "I\u2019m a parent. Can I purchase this for my teen?",
    a: "Absolutely. Most purchases are made by parents. Your teen will create their own account and access the program. We also send parent-friendly progress updates if you opt in.",
  },
  {
    q: "What if my teen doesn\u2019t finish the program?",
    a: "All session recordings are available for life with any tier. The cohort community access lasts 90 days (lifetime for VIP). We\u2019ve designed the program with micro-actions and gamification to maximize completion, but there\u2019s no pressure.",
  },
  {
    q: "What tools or apps do students need?",
    a: "Just a computer or tablet with internet access. We use free tools like Notion and Google Workspace. No paid software required.",
  },
  {
    q: "Is my teen\u2019s data safe?",
    a: "Yes. We\u2019re COPPA-compliant, require parent consent for users under 18, and never sell student data or use behavioral ad tracking. See our Privacy Policy for full details.",
  },
  {
    q: "Can my school purchase this for students?",
    a: "Yes! We offer school and district licensing starting at $2,500 per cohort. Contact us at hello@theorganizedteen.com for details.",
  },
  {
    q: "What\u2019s your refund policy?",
    a: "If you\u2019re not satisfied within the first 7 days, we\u2019ll refund your purchase in full. No questions asked.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background organic shapes */}
      <BlobShape
        variant={3}
        className="absolute -top-20 -right-20 w-[350px] h-[350px] text-accent/[0.03]"
        color="currentColor"
      />
      <BlobShape
        variant={1}
        className="absolute -bottom-16 -left-16 w-[300px] h-[300px] text-primary/[0.03]"
        color="currentColor"
      />

      <div className="mx-auto max-w-3xl px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Questions? We&apos;ve got answers.
          </h2>
          <Squiggle className="mx-auto mt-4 w-24 h-3 text-primary/20" />
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[0.938rem]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Floating decorations */}
        <DoodleStar className="absolute top-20 -left-8 w-5 h-5 text-chart-3/25 hidden lg:block" />
        <DoodleStar className="absolute bottom-32 -right-6 w-4 h-4 text-primary/20 hidden lg:block" />
      </div>
    </section>
  );
}

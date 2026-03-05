# The Organized Teen — Master Plan
## Webinar-Based Training Program for High School Students
**Version 1.0 — March 2026**

---

## Executive Summary

The Organized Teen is a cohort-based webinar program that teaches high school students (ages 14–18) a practical system for managing their academic workload. It combines live instruction, pre-built productivity templates, and a peer community — delivered through a website and mobile app.

**The white space:** No product currently combines skill instruction + structured cohort experience + pre-built tools + gamification in a teen-specific package.

---

## 1. Program Structure (6 Sessions / 3 Weeks)

| Session | Title | Focus |
|---------|-------|-------|
| 1 | Brain Dump & Weekly Reset | Capture every commitment, build a master list |
| 2 | Priority Matrix | Eisenhower Matrix for teens, the "Big 3" daily method |
| 3 | Study Smarter | Active recall, spaced repetition, Pomodoro technique |
| 4 | Digital Command Center | Set up a personal productivity stack (Notion/Google) |
| 5 | Stress-Proof Your Schedule | Burnout prevention, shutdown rituals, sleep |
| 6 | Long-Game Planning | College app sprint, 90-day backward planning |

**Format:** 45 min live (30 min instruction + 15 min Q&A), cohorts of 20–50 students, replays available 72 hours.

---

## 2. Recommended Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Web Framework** | Next.js 14 (App Router) | SSG for SEO + SSR for app + API routes in one repo |
| **UI** | shadcn/ui + Tailwind CSS | Accessible, brandable, fast iteration |
| **Mobile** | Expo (React Native) | Code sharing with web, OTA updates via EAS |
| **Database** | Supabase (PostgreSQL) | Managed DB + RLS security + Realtime built in |
| **Auth** | Clerk | Best Next.js/Expo support, Organizations for schools |
| **Video/Webinar** | Mux | Live streaming + auto-recording + signed playback |
| **Payments** | Stripe | Checkout Sessions, one-time + subscription |
| **Email** | Resend + React Email | Developer-friendly transactional emails |
| **Analytics** | PostHog | Events + session recording + feature flags |
| **File Storage** | Cloudflare R2 | Zero egress fees, S3-compatible |
| **Hosting** | Vercel (web) + EAS (mobile) | Zero-config deploys, preview URLs |
| **Error Tracking** | Sentry | Full-stack monitoring |
| **CI/CD** | GitHub Actions | PR checks, auto deploys, DB migrations |
| **Community** | Discord | Teens already use it, free |

**Estimated infra cost at 500 students: ~$210–250/month**

---

## 3. Monetization (Three-Tier System)

### B2C (Launch Revenue)
| Product | Price | Includes |
|---------|-------|----------|
| Starter (recorded only) | $47 | 6 session replays, templates, PDFs |
| Full Program (live cohort) | $97 | Live sessions, Discord (90 days), templates, certificate |
| VIP | $197 | Everything + 1:1 coaching call, lifetime alumni access |

### B2B (Month 6+)
| Product | Price |
|---------|-------|
| School License (per cohort) | $2,500–$5,000 |
| District License (annual) | $15,000–$40,000 |
| PTA/Booster Bundle | $1,500/cohort |

### Freemium (Lead Gen)
- Free Starter Kit: Notion template + sample session
- Weekly Reset email series (5 emails → upsell)

---

## 4. Development Roadmap

### Phase 1: MVP Website (Weeks 1–8)

**Weeks 1–2:** Project setup, design system, auth (Clerk), CI/CD, Stripe/email scaffolding

**Weeks 3–4:** Landing page, Stripe checkout flow, webinar integration (Mux), analytics (PostHog)

**Weeks 5–6:** Student dashboard, video player, session progress tracking, parent consent flow, mobile-responsive

**Weeks 7–8:** QA across browsers/devices, payment edge cases, Sentry monitoring, soft launch with 20–50 beta testers

### Phase 2: Mobile App (Months 3–6)
- Expo app with shared TypeScript/Supabase backend
- Daily Big 3 task entry, push notifications, session library
- Badge/XP dashboard, community feed

### Phase 3: Growth (Months 6–12)
- Gamification (XP, streaks, badges, opt-in leaderboard)
- School partnership pilot with bulk licensing
- Referral program, completion certificates
- Accountability Club ($19/month recurring)

### Phase 4: Scale (Months 12–24)
- AI-powered personalized study planner
- B2B admin portal for schools
- LMS integrations (Canvas, Google Classroom)
- Teacher certification program ($497)

---

## 5. Website Pages

| Page | Purpose |
|------|---------|
| Landing / Homepage | Hero, pain points, social proof, pricing, FAQ, CTA |
| Course Sales Page | Full curriculum details, instructor bio, testimonials |
| Checkout | Stripe-hosted checkout (no PCI burden) |
| Student Dashboard | Upcoming webinars, progress, tasks, badges |
| Webinar Room | Mux player (live + replay), chat, Q&A, polls |
| Profile & Settings | Account, notification preferences, timezone |
| Free Starter Kit | Email opt-in, instant template delivery |
| Blog | SEO content targeting study tips keywords |
| About | Mission, instructor credentials, trust-building |

---

## 6. App Screens (Phase 2)

| Screen | Priority |
|--------|----------|
| Onboarding (4 screens) | P0 |
| Home Dashboard | P0 |
| Daily Big 3 Task Entry | P0 |
| Weekly Reset Wizard | P0 |
| Session Library (replays) | P1 |
| Badge/XP Dashboard | P1 |
| Pomodoro Timer | P2 |
| Assignment Tracker | P2 |
| Parent View (read-only) | P3 |

---

## 7. Engagement & Gamification

- **XP System:** Earn points for attending sessions, completing micro-actions, community participation
- **Badges:** 20+ across categories (Session Completion, Streak, Community, Mastery)
- **Streaks:** Consecutive days using the system, with grace-day recovery
- **Leaderboard:** Opt-in only (teen mental health consideration)
- **Accountability Partners:** Matched in Session 6, paired for 30-day challenge
- **Certificate of Completion:** Printable, shareable — meaningful for college apps

---

## 8. Launch Strategy

### Pre-Launch (4 weeks before)
- Build email list (target: 500 subscribers) via free Starter Kit
- 3 TikTok/Reels videos per week (problem awareness → solution tease → launch countdown)
- Recruit 10–20 beta testers from Reddit (r/studytips, r/highschool) and homeschool groups

### Launch Week
- "Founding Student" pricing ($47 instead of $97)
- Parent Facebook group outreach
- Podcast guesting on parenting shows

### Post-Launch Growth (Months 2–6)
- Video testimonials from students/parents → ads
- Referral: "Give a friend $20 off, get $20 credit"
- SEO blog posts targeting high-intent keywords
- School counselor outreach with free pilot cohort

---

## 9. Key Metrics

| Metric | Target (Cohort 1) | Target (Month 6) |
|--------|-------------------|-------------------|
| Email list | 500 | 5,000 |
| Cohort enrollment | 20–30 | 50+ per cohort |
| Session 1→6 completion | 50% | 65% |
| NPS (post-program) | 40+ | 55+ |
| Free→paid conversion | 5% | 8–12% |
| Monthly revenue | $5,000 | $40,000 |

---

## 10. Risk Assessment

| Risk | Mitigation |
|------|-----------|
| COPPA/Privacy (minors) | 13+ minimum age, parent consent flow, no ad tracking, consult education privacy attorney |
| Low completion rate | Micro-actions, gamification, cohort accountability, sessions under 45 min |
| Parents buy but teens disengage | Teen co-design in beta, engaging instructor (age 22–28), peer community |
| School sales cycle too slow | B2C is primary for 12 months; B2B is additive, not foundational |
| Free competitors (YouTube/Notion) | Compete on transformation + community, not features |

---

## 11. Five Decisions Before Writing Code

1. **Pricing model** — One-time payment or subscription?
2. **Live-first or async-first?** — Cohort webinars or self-paced with optional live?
3. **Age floor** — 13+ (avoids hardest COPPA rules) or 14+?
4. **Free content strategy** — How much to give away vs. paywall?
5. **Domain & handles** — Lock down organizedteen.com, @theorganizedteen on socials

---

*Generated by a 4-agent team: Product Strategy, Technical Architecture, UX/Content, and Project Management*

# The Organized Teen — Project Roadmap & Management Plan
**Generated:** March 4, 2026
**Product:** Webinar-based training program (web + mobile app) for high school students
**Mission:** Help teens manage their academic workload through structured, engaging online training

---

## Table of Contents
1. [Project Phases & Roadmap](#1-project-phases--roadmap)
2. [MVP Scope Definition](#2-mvp-scope-definition)
3. [Development Milestones](#3-development-milestones)
4. [Team & Resource Requirements](#4-team--resource-requirements)
5. [Launch Strategy](#5-launch-strategy)
6. [Risk Assessment](#6-risk-assessment)

---

## 1. Project Phases & Roadmap

### Phase 1 — MVP / Launch (Weeks 1–8)
**Goal:** Ship a working product that delivers value to the first 50–100 paying users.

| Area | Deliverable |
|------|------------|
| Website | Marketing landing page + core product pages |
| Auth | Email/password signup with role: student, parent |
| Dashboard | Basic student dashboard showing enrolled webinars |
| Webinars | Live webinar integration (Zoom/StreamYard) + replay access |
| Payments | Stripe checkout — single course or bundle purchase |
| Content | 1 complete webinar series (4–6 sessions) ready at launch |

**Success Criteria:**
- 50 paying students enrolled within 30 days of launch
- Webinar completion rate > 60%
- Zero critical auth or payment bugs in production

---

### Phase 2 — Mobile App (Months 3–6)
**Goal:** React Native / Expo mobile app that mirrors the web experience and adds mobile-native value.

| Area | Deliverable |
|------|------------|
| iOS + Android | Expo managed workflow app published to both stores |
| Push notifications | Webinar reminders, session unlocks, study streaks |
| Offline access | Download webinar replays for offline viewing |
| Mobile dashboard | Simplified dashboard optimized for small screens |
| Progress tracking | Visual progress bars per course and per session |

**Success Criteria:**
- App store rating >= 4.2 stars
- 30-day retention rate >= 40%
- Push notification opt-in rate >= 55%

---

### Phase 3 — Growth & Community (Months 6–12)
**Goal:** Turn individual users into an engaged community. Add retention loops and institutional revenue.

| Area | Deliverable |
|------|------------|
| Community | Discussion boards / peer study groups per webinar |
| Gamification | XP points, badges, weekly streaks, leaderboards |
| School Partnerships | Pilot program: bulk licenses sold to schools / counselors |
| Referral Program | Student referral codes with discount incentives |
| Content Expansion | 3+ full webinar series covering different skills |
| Certificates | Downloadable completion certificates for college apps |

**Success Criteria:**
- 500 active students
- 3+ school/district partnership agreements
- Monthly recurring revenue (MRR) growth > 15% month-over-month

---

### Phase 4 — Scale & AI (Months 12–24)
**Goal:** Use data to personalize the experience and build a defensible platform.

| Area | Deliverable |
|------|------------|
| AI Personalization | Adaptive learning paths based on quiz results and behavior |
| Smart Study Planner | AI-generated weekly study plans synced to school calendar |
| Advanced Analytics | Parent/counselor dashboards with progress insights |
| School API | LMS integration (Canvas, Google Classroom) for schools |
| B2B Dashboard | Admin portal for school administrators |
| White-label Option | District-branded versions of the platform |

**Success Criteria:**
- 2,000+ active students
- 20+ school/district partners
- Demonstrable learning outcome improvement data

---

## 2. MVP Scope Definition

### Must-Have (Launch Blockers)
These features MUST exist before a single dollar is charged.

- [ ] **User authentication** — email/password signup + login, password reset
- [ ] **Parent consent flow** — required for users under 18 (COPPA compliance)
- [ ] **Student dashboard** — shows purchased courses and next session to watch
- [ ] **Webinar access** — live webinar links + replay video player (Vimeo or Mux)
- [ ] **Stripe payment** — one-time purchase per course or bundle; receipt email
- [ ] **Landing page** — value prop, testimonials placeholder, pricing, FAQ
- [ ] **Email delivery** — welcome email, purchase confirmation, webinar reminder
- [ ] **Basic mobile-responsive design** — the website must work on phones
- [ ] **Privacy Policy + Terms of Service** — legally required, especially for minors
- [ ] **SSL / secure hosting** — non-negotiable for payment and auth

### Nice-to-Have (First 90 Days Post-Launch)
These improve retention and conversion but are not launch blockers.

- [ ] Social login (Google / Apple)
- [ ] Progress tracking per video session
- [ ] Quiz / reflection prompts after each webinar
- [ ] Referral/affiliate links
- [ ] Blog or resource library (SEO)
- [ ] Live chat support widget
- [ ] Coupon/discount code system

### Out of Scope (Phase 2+)
Do not build these until Phase 1 is proven.

- Native mobile app
- AI features of any kind
- Community / forums
- School admin portals
- LMS integrations
- Gamification (points, badges, leaderboards)
- White-label / multi-tenant architecture
- Certificates

---

## 3. Development Milestones

### Week 1–2: Foundation
**Theme:** Get the project off the ground correctly.

**Tasks:**
- [ ] Choose and provision tech stack (see Section 4)
- [ ] Set up monorepo (if using) or separate web + future app repos
- [ ] Configure CI/CD pipeline (GitHub Actions or Vercel auto-deploy)
- [ ] Set up design system in Figma — colors, typography, component library
- [ ] Build auth system: signup, login, password reset, session management
- [ ] Configure Stripe account and webhook endpoints
- [ ] Set up email service (Resend or SendGrid)
- [ ] Deploy skeleton app to staging environment

**Deliverable:** Authenticated user can sign up, log in, and land on an empty dashboard.

---

### Week 3–4: Public Face + Webinar Integration
**Theme:** Build what prospects see and what students access.

**Tasks:**
- [ ] Build and deploy the marketing landing page
- [ ] Write core copy: headline, features, pricing, FAQ
- [ ] Integrate webinar tool (Zoom Webinar or StreamYard for live; Mux/Vimeo for replay)
- [ ] Build the course/webinar detail page
- [ ] Implement Stripe checkout: product, pricing, success/cancel pages
- [ ] Trigger welcome email + purchase confirmation email on payment
- [ ] Add webinar access control: only show replay to paid users
- [ ] Set up basic analytics (Posthog or Plausible)

**Deliverable:** A user can visit the landing page, purchase a course, and access the webinar replay.

---

### Week 5–6: Student Dashboard + Content Delivery
**Theme:** Make the logged-in experience feel real and complete.

**Tasks:**
- [ ] Build student dashboard: enrolled courses, progress, next session
- [ ] Webinar session list view per course (locked/unlocked state)
- [ ] Embed video player for replay sessions (Mux or Vimeo)
- [ ] Mark session as "watched" on 80% completion
- [ ] Add parent consent modal for users under 18
- [ ] Build account settings page (name, email, password change)
- [ ] Mobile responsiveness pass on all screens
- [ ] Accessibility audit (color contrast, keyboard nav, screen reader basics)

**Deliverable:** Enrolled student has a complete, usable dashboard with access to all purchased content.

---

### Week 7–8: Payment Polish, QA, and Soft Launch
**Theme:** Make it bulletproof before real users touch it.

**Tasks:**
- [ ] End-to-end QA testing across Chrome, Safari, Firefox, iOS Safari, Android Chrome
- [ ] Payment edge case testing: failed cards, webhooks, duplicate purchases
- [ ] Load test the video player (concurrent streams)
- [ ] Finalize Privacy Policy and Terms of Service (use a lawyer or a reviewed template)
- [ ] Set up error monitoring (Sentry)
- [ ] Set up uptime monitoring (Better Uptime or UptimeRobot)
- [ ] Invite 20–50 beta testers (see Section 5)
- [ ] Collect beta feedback via a simple Typeform
- [ ] Fix critical bugs from beta feedback
- [ ] Configure custom domain, DNS, SSL certificate

**Deliverable:** Soft launch — product is live at your domain, accepting real payments, stable under beta load.

---

### Week 9+ (Ongoing in Parallel from Week 4): Mobile App
**Theme:** Build the React Native / Expo app while the web product is being refined.

**Parallel Track Tasks (starting Week 4):**
- [ ] Initialize Expo managed workflow project
- [ ] Reuse API endpoints from the web backend (REST or tRPC)
- [ ] Build auth screens (login, signup, forgot password)
- [ ] Build mobile dashboard and course list
- [ ] Integrate Expo Video or React Native Video for webinar replays
- [ ] Implement Expo Notifications for push reminders
- [ ] Submit to TestFlight (iOS) and Google Play Internal Testing
- [ ] Submit to App Store and Google Play for review

**Target:** App store submission by end of Month 4.

---

## 4. Team & Resource Requirements

### Option A — Solo Developer
**Realistic if:** The developer is full-stack (Next.js + backend), has shipped a product before, and can commit 30–40 hours/week.

| Role | Coverage | Tool / Approach |
|------|----------|-----------------|
| Frontend | Self | Next.js + Tailwind |
| Backend / API | Self | Next.js API routes or a lightweight Node backend |
| Database | Self | Supabase (managed Postgres + auth + storage) |
| Design | Self | Use a component library (shadcn/ui, Radix UI) + Figma for custom work |
| DevOps | Outsource to platforms | Vercel (web), Supabase (DB), GitHub Actions |
| Payments | Stripe | No custom billing engine needed |
| Video hosting | Mux or Vimeo Pro | No custom video infrastructure |
| Email | Resend | Simple API, prebuilt React Email templates |
| Legal | Outsource | iubenda or Termly for privacy docs; $50–150 |
| Copy / Marketing | Self initially | Use AI tools to draft, then refine |

**Realistic Timeline:** 10–12 weeks to soft launch (not 8 weeks).
**Risk:** Single point of failure. Build with recovery in mind — document everything.

---

### Option B — Small Team (2–3 People)
**Recommended for:** Hitting the 8-week target and maintaining quality.

| Role | Responsibility | Hours/Week |
|------|---------------|------------|
| Lead Developer (Full-Stack) | Auth, backend, payments, deployment | 35–40 |
| Frontend Developer or Designer | Landing page, dashboard UI, design system | 25–30 |
| Content / Operations Lead | Webinar production, email copy, beta coordination | 15–20 |

**Cost Estimate (if paying market rates):**
- Freelance Full-Stack: $80–150/hr
- Freelance Frontend/Designer: $60–100/hr
- Content/Ops (part-time): $25–40/hr

**Bootstrap Approach:** Defer salaries and share equity, or use a revenue-sharing arrangement.

---

### What to Outsource or No-Code
Even with a developer, outsource or no-code the following to move faster:

| Task | Tool | Cost |
|------|------|------|
| Landing page (pre-dev) | Framer or Webflow | $15–25/mo |
| Webinars (live delivery) | Zoom Webinar or Demio | $150–250/mo |
| Video replay hosting | Mux or Vimeo Pro | $20–50/mo |
| Payments | Stripe | 2.9% + 30c per transaction |
| Email marketing | Kit (formerly ConvertKit) | Free to $29/mo |
| Form collection | Typeform | Free tier |
| Customer support | Intercom or Crisp | Free to $25/mo |
| Legal docs | iubenda | $27/yr |
| Social media scheduling | Buffer | Free tier |

**Total estimated monthly tooling cost (MVP):** $250–500/month before revenue.

---

## 5. Launch Strategy

### Beta Testing (Weeks 7–8)
**Target:** 20–50 teens, recruited before launch.

**Recruitment tactics:**
- Post in relevant subreddits: r/highschool, r/studytips, r/GetStudying
- Reach out to homeschool Facebook groups
- Personal network: ask for referrals to teens you know who struggle with workload
- Offer beta testers free or heavily discounted access in exchange for detailed feedback

**Beta feedback process:**
1. Onboarding survey (background, study habits, goals)
2. Weekly Typeform check-in during beta
3. End-of-beta interview (15 min Zoom call with 5–10 testers)
4. Collect written testimonials for landing page

**What to test:**
- Can they complete signup without confusion?
- Do they actually watch the webinars?
- Where do they drop off?
- What do they wish the product did?

---

### School Partnership Pilot (Month 2–3)
**Target:** 1–3 school counselors or teachers willing to recommend the program.

**Approach:**
1. Identify school counselors or AP/IB coordinators at local high schools
2. Offer a free "educator review" license — let them go through the full program
3. Draft a one-page overview for counselors to share with parents
4. Propose a pilot: school refers students, you provide a group discount code
5. Follow up with outcome data after 60 days to build case study

**What schools care about:**
- Does it reduce student stress / overwhelm?
- Is it safe and appropriate for minors?
- Is there measurable improvement in academic habits?
- Does it align with existing SEL (Social-Emotional Learning) initiatives?

---

### Social Media Presence

**Primary platform: TikTok**
- Post 3x/week minimum before launch to build an audience
- Content pillars: study tips, behind-the-scenes of building the program, student transformations, "what I wish I knew in high school"
- Ideal format: 30–60 second hook-driven videos
- Use trending audio, text overlays, direct address to camera
- CTA in every video: "link in bio" to join waitlist

**Secondary platform: Instagram**
- Repurpose TikTok content as Reels
- Use Stories for polls, Q&As, and countdown to launch
- Build a saved Highlights: About, Testimonials, Tips, Webinar Preview

**Content calendar (pre-launch, 4 weeks before):**
| Week | Focus |
|------|-------|
| -4 | Introduce the problem: "Why teens are overwhelmed" |
| -3 | Tease the solution: "We built something for you" |
| -2 | Behind the scenes: course preview, testimonials |
| -1 | Launch week countdown, early bird pricing |

---

### Parent Outreach Channels
Parents are often the economic decision-makers even when teens are the users.

**Channels:**
- Facebook Groups (parenting teens, homeschool, college prep)
- Parent-facing email newsletter (opt-in from landing page)
- PTA/PTO outreach — present at a meeting or send a flyer
- Podcast guesting — parenting + education podcasts (pitch yourself as an expert guest)
- Pinterest — create pin graphics for "study tips for high schoolers" articles

**Parent-specific messaging:**
- Lead with outcomes: "Your teen will feel less overwhelmed and more in control"
- Address safety: "Designed with student privacy and COPPA compliance in mind"
- Address ROI: "Less parental nagging, more self-directed studying"
- Offer a parent preview: let parents view the first webinar for free

---

## 6. Risk Assessment

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Video delivery fails during live webinar | Medium | High | Use a proven platform (Zoom/Demio), have a backup recording setup, always record locally |
| Payment webhook fails silently | Medium | High | Test webhooks exhaustively; use Stripe's webhook retry + Sentry alerts on failures |
| Auth bug locks users out | Low | Critical | Implement "forgot password" before launch; monitor auth errors in Sentry |
| Site goes down on launch day | Medium | High | Use Vercel or a proven host; set up uptime monitoring + a status page |
| Video hosting cost spikes with scale | Low | Medium | Cap Mux/Vimeo bandwidth in early stages; switch plans proactively |
| Mobile app store rejection | Medium | Medium | Read Apple/Google policies carefully for minor-directed apps; build parental controls early |

---

### Market Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Low initial conversion (teens don't pay, parents don't know) | High | High | Build parent-focused marketing channels from day one; offer free first session |
| Webinar completion rates are low | High | Medium | Keep sessions short (20–30 min), add micro-quizzes, send reminder emails/texts |
| Competitors (Goodnotes, Notion, productivity YouTube) are free | High | Medium | Position on transformation (outcome) not features; build community that free content can't replicate |
| Teens disengage after first webinar | Medium | High | Design for completion: cliff-hanger endings, unlock-gated content, streak rewards (Phase 3) |
| Wrong content/topic for the target audience | Medium | High | Validate content topics with beta users BEFORE producing full series |

---

### COPPA & Privacy Considerations for Minors
**This is non-negotiable.** Operating a product aimed at users under 13 (and in some contexts under 18) triggers specific legal obligations.

**COPPA (Children's Online Privacy Protection Act) — US:**
- If ANY user could be under 13, you must comply with COPPA
- Required: Verifiable parental consent before collecting personal data from under-13 users
- Recommended approach: **Gate signup at age 13+**, but still implement a parent consent flow
- Do NOT collect more data than necessary (no behavioral ad tracking on minors)
- Privacy policy must explicitly describe what data you collect from children

**FERPA (Family Educational Rights and Privacy Act):**
- Relevant if you integrate with schools or receive student education records
- In Phase 1, you are direct-to-consumer, so FERPA is not triggered
- In Phase 3+ (school partnerships), work with a lawyer before handling any school records

**GDPR (if you target EU students):**
- Age of consent for data processing varies by EU country (13–16)
- Require parental consent for users under 16 if you have EU users
- Add a GDPR-compliant cookie consent banner

**Practical steps to take before launch:**
- [ ] Retain a lawyer (even for a one-hour consultation) to review your privacy policy
- [ ] Use iubenda or Termly to generate a compliant privacy policy — then have it reviewed
- [ ] Implement age verification at signup (date of birth gate)
- [ ] Build a parent/guardian consent email flow for users under 18
- [ ] Do NOT use Facebook Pixel or behavioral tracking on minor users
- [ ] Do NOT sell or share student data with third parties
- [ ] Store all data in US-based servers (or be explicit about data location)

---

### Content Quality & Engagement Risks

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Webinar content feels like a lecture (teens tune out) | High | Critical | Use interactive formats: polls, breakout activities, direct challenges with homework |
| Content is not credible / lacks authority | Medium | High | Feature teen success stories, partner with a school counselor or educator as co-presenter |
| Production quality is too low | Medium | Medium | Invest in a decent microphone and ring light; use Descript or CapCut for replay editing |
| Content becomes outdated quickly | Low | Medium | Focus on timeless skills (time management, prioritization) not platform-specific tips |
| Teens share login credentials with friends | Medium | Low | Implement device limit per account in Phase 2; focus on value > access control in Phase 1 |

---

## Appendix A — Recommended Tech Stack

### Web (Phase 1)
| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Next.js 15 (App Router) | SSR, SEO, file-based routing, API routes |
| Styling | Tailwind CSS + shadcn/ui | Fast UI, accessible components |
| Database | Supabase (Postgres) | Managed DB + built-in auth + storage |
| Auth | Supabase Auth | Email/password, OAuth, JWTs — no custom implementation |
| Payments | Stripe | Industry standard, excellent docs |
| Video | Mux or Vimeo Pro | Reliable adaptive streaming |
| Email | Resend + React Email | Developer-friendly, great deliverability |
| Hosting | Vercel | Zero-config Next.js deployment |
| Monitoring | Sentry (errors) + Posthog (analytics) | Free tiers cover Phase 1 |
| CMS (optional) | Sanity or Contentlayer | For blog/resource content without code deploys |

### Mobile (Phase 2)
| Layer | Technology | Why |
|-------|-----------|-----|
| Framework | Expo (React Native) | Single codebase for iOS + Android |
| Navigation | Expo Router | File-based routing, mirrors Next.js patterns |
| State | Zustand or Jotai | Lightweight, no boilerplate |
| Video | Expo Video | Native performance |
| Notifications | Expo Notifications | Cross-platform push |
| Auth | Reuse Supabase tokens | No re-implementation needed |
| OTA Updates | EAS Update | Ship JS fixes without app store review |

---

## Appendix B — Monthly Budget Estimate (MVP Phase)

| Item | Cost |
|------|------|
| Vercel (Pro) | $20/mo |
| Supabase (Pro) | $25/mo |
| Mux or Vimeo Pro | $20–50/mo |
| Stripe (per transaction) | 2.9% + $0.30 |
| Resend | Free to $20/mo |
| Kit / ConvertKit | Free to $29/mo |
| Sentry | Free tier |
| Posthog | Free tier |
| Zoom Webinar (if live) | $150/mo |
| Domain + SSL | $15/yr |
| Legal (one-time) | $200–500 |
| **Total (approx)** | **$300–600/mo** |

Break-even at $25/student: **12–24 paying students** covers tooling costs.
Break-even at $99/student: **4–7 paying students** covers tooling costs.

---

## Appendix C — Key Decisions to Make Before Writing Code

1. **Pricing model:** One-time purchase per course, subscription, or bundle? Recommendation: Start with one-time purchase per course. Simplest to explain, no churn pressure.
2. **Live vs. async-first:** Will webinars be live + replayed, or recorded-only at launch? Recommendation: Record 1 complete course before launch so you can start selling immediately. Run live sessions afterward as a bonus.
3. **Age floor:** Will you allow under-13 users with parental consent, or set minimum age at 13? Recommendation: Set 13+ as the minimum. Dramatically simplifies COPPA compliance.
4. **Free content strategy:** Will you have any free content to build trust? Recommendation: Make webinar #1 of each series free (email-gated), paid for the rest.
5. **Domain and brand:** Lock in your domain and social handles before any marketing goes live.

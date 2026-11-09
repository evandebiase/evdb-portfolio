# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers, heads of product, heads of design, or founding-team recruiters evaluating Evan DeBiase for a full-time role. They land on the site after a resume submission, a LinkedIn visit, or a referral. They have a few minutes, often between other candidates, and they are deciding whether to invite Evan to a first conversation.

Secondary: anyone warm-introduced to Evan who wants to verify the pitch matches the person before replying.

## Product Purpose

EVDB.work is Evan DeBiase's portfolio and the single page he can point a hiring process at. It has to show, in one pass, the breadth and depth of someone who ships full products end to end: product thinking, visual design, front-end engineering, back-end engineering, and native iOS when the work calls for it. Success is the hiring manager ending the visit willing to take a first call, with no lingering doubt about whether Evan actually shipped the work.

## Positioning

The neighboring category is the designer with a portfolio of mockups or the engineer with only GitHub. Evan's claim is that one person built each of the listed products from brief to live URL. Every project on the site is a real live site the visitor can touch in a new tab, not a case-study screenshot of something that may or may not exist. That proof surface is the thing the design has to protect.

## Operating Context

- Visitor arrives from a resume link, a LinkedIn profile, an application on an ATS, or a colleague's referral.
- Visitor is almost always on a desktop at work, often with the applicant tracking system open in another tab. Mobile reads do happen on referrals and need to work.
- A typical visit is under three minutes. A deeper visit opens one or two project tabs, scans the About, and closes.
- The outbound path is email or LinkedIn. The site must make both obvious in the first viewport.

## Capabilities and Constraints

- Shipped as a Next.js 15 (App Router) site on Vercel at evdb.work with auto-deploy on push to main.
- Six projects form the body of work. Each has a live URL embedded as an iframe with a browser-chrome frame and an opens-in-new-tab affordance. Current roster in order: Off Hours Nashville, CaseQuestions.ai, HaulHub.co, WTGA.live, Nashville Bio-hacking, DeepCount.co.
- About page carries a factual bio, a timeline, and a portrait photo. All of this must stay true: PBS and Christian Science Monitor multimedia work, Sotheby's commercial work, Justice Resource Institute therapeutic mentoring, Babson undergrad and current Babson career-development platform work, independent studio under EVDB.work.
- Contact must continue to pipe through Resend and deliver to evandebiase@gmail.com. Any new contact affordance has to preserve that end to end.
- Not every project has public press, testimonials, or named-client logos. Nothing may be invented to fill a case-study slot.
- No analytics or advertising scripts on the public site.
- GitHub profile is https://github.com/evandebiase and is linked prominently.

## Brand Commitments

- The studio name is EVDB.work; the person is Evan DeBiase.
- Voice is measured, first person, editorial. Plain punctuation only. No em dashes, no "--", no arrows, no bullet-hell, no manifesto shouting, no AI-shaped triplet flourishes.
- Current typographic world uses Fraunces (serif) and Inter (sans). Those are evidence, not a lock: the redesign may keep, swap, or extend them.
- Always-night color world (deep navy base, warmed terracotta accent) is the user's stated preference as of November 2026. Preserve the default-dark behavior through the redesign unless the user explicitly reopens it.

## Evidence on Hand

- Six live production URLs listed above, each shippable in an iframe today.
- Portrait photo at `public/images/portrait.jpg` and avatar photo at `public/images/avatar.jpg`.
- Factual career timeline covering 2010 to present. No invented clients, awards, press mentions, headcount, or revenue figures.
- Current contact form end to end via Resend to Gmail.

## Product Principles

1. **Proof over claims.** Every project links to and embeds the real live site. The portfolio opens the apps, not screenshots of them.
2. **Breadth stated as depth.** The visitor should leave convinced one person shipped each of these end to end, not that Evan is a generalist who did a little of everything.
3. **Written like a person.** Prose in Evan's voice with plain punctuation, no AI-shaped formatting, no manifesto filler.
4. **The visitor is a hiring manager.** Every page, every button, every line of copy serves someone deciding whether to take a first call, not a founder shopping for a service and not a design critic.
5. **Opinionated, not maximalist.** The design has a point of view and defends it. It is not a tour of every CSS trick that has ever existed.

## Accessibility & Inclusion

Web, WCAG 2.1 AA as the floor: legible type sizes, sufficient contrast in night mode, descriptive alt text on the portrait and project embeds, keyboard-reachable navigation and project links, and respect for reduced-motion preferences on any added motion.

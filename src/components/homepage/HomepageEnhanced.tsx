"use client";

import { useEffect, useRef, useState } from "react";
import { FinalCtaSection } from "@/components/homepage/FinalCtaSection";
import { HomepageBodyClass } from "@/components/homepage/HomepageBodyClass";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { HOMEPAGE_FAQS } from "@/lib/faq-data";

/* --------------------------------------------------------------------------
 * HomepageEnhanced — the live Nautix homepage.
 *
 *   - IntersectionObserver-based reveals on each section
 *   - Typed hero word rotator
 *   - Self-contained pillar tab switcher
 *   - Industry card: subtle image zoom on hover
 *   - Testimonials: auto-advancing crossfade + manual dots
 *   - FAQ accordion: controlled state
 *   - Workflow cards: subtle purple glow on hover
 * -------------------------------------------------------------------------- */

const DEMO_EMAIL_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

const CLIENT_LOGOS = [
  { src: "/nautix-clients/vsquared-networks.png", alt: "Vsquared Networks" },
  { src: "/nautix-clients/p-cash.png", alt: "P-Cash" },
  { src: "/nautix-clients/rewards.png", alt: "Rewards" },
  { src: "/nautix-clients/kings-mabati.png", alt: "Kings Mabati" },
] as const;

const PILLARS = [
  {
    id: "marketing",
    label: "Marketing",
    video: "/nautix-media/marketing-loop.mp4",
    features: [
      {
        kicker: "Coverage",
        title: "Never miss a lead",
        copy: "Capture inquiries after hours, on weekends, and during campaigns.",
      },
      {
        kicker: "Targeting",
        title: "Segment by intent",
        copy: "Separate buyers, repeat customers, and support requests automatically.",
      },
      {
        kicker: "Re-engagement",
        title: "Re-engage warm audiences",
        copy: "Bring back interested prospects with timed nudges and reminders.",
      },
      {
        kicker: "Launch",
        title: "Launch campaigns faster",
        copy: "Send promotions and announcements without manual broadcast work.",
      },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    video: "/nautix-media/sales-loop.mp4",
    features: [
      {
        kicker: "Qualification",
        title: "Qualify in minutes",
        copy: "Capture budget, need, authority, and timeline from the first exchange.",
      },
      {
        kicker: "Matching",
        title: "Route the right offer",
        copy: "Match each buyer to the right product, plan, or next step.",
      },
      {
        kicker: "Conversion",
        title: "Close inside chat",
        copy: "Collect payment or confirm the next action without leaving the conversation.",
      },
      {
        kicker: "Prioritization",
        title: "Surface hot leads",
        copy: "Highlight buyers showing strong intent so your team acts faster.",
      },
    ],
  },
  {
    id: "support",
    label: "Customer Support",
    video: "/nautix-media/customer-support-loop.mp4",
    features: [
      {
        kicker: "Resolution",
        title: "Resolve Tier 1 issues",
        copy: "Handle billing, outages, order status, and account questions automatically.",
      },
      {
        kicker: "Alerts",
        title: "Send proactive alerts",
        copy: "Update customers before they ask about problems, reminders, or delays.",
      },
      {
        kicker: "Escalation",
        title: "Escalate with context",
        copy: "Hand off only the exceptions, with full conversation history attached.",
      },
      {
        kicker: "Efficiency",
        title: "Reduce team load",
        copy: "Let your team focus on edge cases instead of repetitive requests.",
      },
    ],
  },
] as const;

const WORKFLOW_CARDS = [
  {
    icon: "/wp-content/uploads/2025/05/icon-01.svg",
    alt: "Visual builder icon",
    title: "Visual Agent Builder",
    copy: "Build agents with flows, rules, and actions your team can manage without engineering bottlenecks.",
  },
  {
    icon: "/wp-content/uploads/2025/05/icon-02.svg",
    alt: "Off-script conversations icon",
    title: "Handles Off-Script Conversations",
    copy: "Go beyond rigid chatbot trees with agents that adapt when customers ask unexpected questions.",
  },
  {
    icon: "/wp-content/uploads/2025/05/icon-03.svg",
    alt: "Multi-channel deployment icon",
    title: "Deploy Across Channels",
    copy: "Launch the same agent on WhatsApp, Instagram, and Facebook without rebuilding it for each channel.",
  },
  {
    icon: "/wp-content/uploads/2025/04/icon-07.svg",
    alt: "Business context icon",
    title: "Acts on Business Context",
    copy: "Give agents the context they need so they can diagnose, update, qualify, and confirm in real time.",
  },
  {
    icon: "/wp-content/uploads/2025/05/icon-05.svg",
    alt: "Human handoff icon",
    title: "Human Handoff When Needed",
    copy: "Escalate to a teammate with full context when judgment, approval, or intervention is required.",
  },
  {
    icon: "/wp-content/uploads/2025/05/icon-06.svg",
    alt: "Optimization icon",
    title: "Train, Test, Improve",
    copy: "Review conversations, refine logic, and improve agent performance over time as your use cases expand.",
  },
] as const;

const INDUSTRIES = [
  {
    label: "Internet Service Providers",
    image: "/nautix-industries/isps.jpg",
    alt: "Nautix ISP workflow preview",
    title: "From \u201Cno internet\u201D to restored line \u2014 before you even get the call.",
    desc: "Handles support automatically: reboots routers, reactivates suspended accounts, collects overdue payments, and sends proactive outage alerts before subscribers call.",
    proof:
      "AI reboots an ONU remotely via SmartOLT and confirms resolution to the subscriber in under 3 minutes. No agent. No call.",
    demoSubject: "Show%20me%20the%20Nautix%20ISP%20Demo",
  },
  {
    label: "Real Estate",
    image: "/nautix-industries/real-estate.jpg",
    alt: "Nautix real estate workflow preview",
    title: "From comment to site visit.",
    desc: "Captures leads from Instagram and Facebook, qualifies buyers on budget, bedrooms, and location, and books site visits automatically while your agents sleep.",
    proof:
      "Instagram comment at 9:47pm, buyer qualified by AI, WhatsApp site visit booking confirmed at 9:55pm. Eight minutes. Zero agent involvement.",
    demoSubject: "Show%20me%20the%20Nautix%20Real%20Estate%20Demo",
  },
  {
    label: "Ecommerce",
    image: "/nautix-industries/ecommerce.jpg",
    alt: "Nautix ecommerce workflow preview",
    title: "Turn DMs into confirmed orders.",
    desc: "Responds to every DM instantly, confirms stock availability, initiates payment inside the conversation, and sends dispatch and delivery notifications automatically.",
    proof:
      "Instagram video goes viral at midnight, Nautix handles every DM simultaneously, payments are collected, and confirmed orders are in by morning.",
    demoSubject: "Show%20me%20the%20Nautix%20Ecommerce%20Demo",
  },
] as const;

const METRICS = [
  { value: 60, prefix: "<\u00a0", suffix: "s", label: "Median first-response time", hint: "On every channel, at every hour" },
  { value: 24, prefix: "", suffix: "/7", label: "After-hours coverage", hint: "Customers never wait for Monday" },
  { value: 3, prefix: "", suffix: "", label: "Channels, one inbox", hint: "WhatsApp, Instagram, Facebook" },
  { value: 5, prefix: "", suffix: "\u00a0min", label: "Lead qualification", hint: "Budget, need, authority, timeline" },
] as const;

const STEPS = [
  {
    n: "01",
    title: "Connect your channels",
    copy: "Connect your WhatsApp Business number, Instagram page, and Facebook Messenger through Meta's official partner flow.",
    stat: "< 30 min",
    statLabel: "first sync",
    kind: "connect",
  },
  {
    n: "02",
    title: "Ground it in your data",
    copy: "Connect your CRM, billing, inventory, and ticket systems. Nautix learns your products, your workflows, and only acts within the boundaries you set.",
    stat: "Your data",
    statLabel: "never ours",
    kind: "train",
  },
  {
    n: "03",
    title: "Launch and iterate",
    copy: "The agent goes live. You review real conversations, refine logic, and expand scope as confidence grows.",
    stat: "2 — 5 days",
    statLabel: "to first resolution",
    kind: "launch",
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Before Nautix, outages and billing questions flooded our channels after hours. Now subscribers get instant updates, routine issues are resolved automatically, and agents only step in for exceptions.",
    name: "Martin Njau",
    company: "VSquared",
  },
  {
    quote:
      "We used to lose serious buyers overnight. Now every ad inquiry gets a response immediately, leads are qualified in chat, and our team wakes up to scheduled site visits.",
    name: "Lorna K.",
    company: "Hillview Homes",
  },
  {
    quote:
      "When campaigns spike, our inbox no longer becomes a bottleneck. Nautix handles product questions, nudges buyers toward payment, and helps us convert demand while it is still warm.",
    name: "Maya A.",
    company: "Rewards",
  },
  {
    quote:
      "Members expect fast answers on balances, repayments, and eligibility. Nautix handles those conversations on WhatsApp with consistency, and our team only steps in when real judgment is needed.",
    name: "Peter O.",
    company: "Imara SACCO",
  },
] as const;

/* --------------------------------------------------------------------------
 *  Enhancement-only stylesheet.
 *  Scoped to .home-enhanced-root so it can't leak into the rest of the site.
 * -------------------------------------------------------------------------- */

function EnhancementStyles() {
  return (
    <style>{`
      .home-enhanced-root {
        --he-accent: #7e10a2;
        --he-accent-soft: #b52ed1;
        --he-accent-tint: rgba(126, 16, 162, 0.08);
      }

      @keyframes he-fade-up {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes he-float-a {
        0%,100% { transform: translate(0,0); }
        50%     { transform: translate(14px,-10px); }
      }
      @keyframes he-float-b {
        0%,100% { transform: translate(0,0) rotate(45deg); }
        50%     { transform: translate(-10px,12px) rotate(48deg); }
      }
      @keyframes he-float-c {
        0%,100% { transform: translate(0,0); }
        50%     { transform: translate(-12px,-6px); }
      }
      @keyframes he-pulse-dot {
        0%,100% { transform: scale(1); opacity: 1; }
        50%     { transform: scale(1.4); opacity: 0.55; }
      }
      @keyframes he-blink { 50% { opacity: 0; } }

      .home-enhanced-root .he-reveal {
        opacity: 0;
      }
      .home-enhanced-root .he-reveal.is-in {
        animation: he-fade-up 0.75s cubic-bezier(.22,.61,.36,1) forwards;
      }

      .home-enhanced-root .he-hero-shapes .he-shape {
        position: absolute;
        display: inline-block;
        width: 52px;
        height: 52px;
        will-change: transform;
        filter: drop-shadow(0 10px 22px rgba(23,23,23,0.07));
      }
      .home-enhanced-root .he-hero-shapes .he-shape svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .home-enhanced-root .he-shape--megaphone {
        top: 14%; left: 8%;
        animation: he-float-a 7s ease-in-out infinite;
      }
      .home-enhanced-root .he-shape--dashboard {
        top: 12%; right: 9%;
        animation: he-float-c 8.5s ease-in-out infinite;
      }
      .home-enhanced-root .he-shape--team {
        top: 34%; right: 3%;
        animation: he-float-b 9s ease-in-out infinite;
      }
      .home-enhanced-root .he-shape--idea {
        top: 40%; left: 14%;
        animation: he-float-a 6.5s ease-in-out infinite;
      }
      .home-enhanced-root .he-shape--donut {
        top: 28%; left: 2%;
        animation: he-float-c 10s ease-in-out infinite;
      }
      @media (max-width: 768px) {
        .home-enhanced-root .he-hero-shapes .he-shape { display: none; }
      }

      .home-enhanced-root .he-cursor::after {
        content: "";
        display: inline-block;
        width: 3px;
        height: 0.85em;
        margin-left: 4px;
        background: var(--he-accent);
        vertical-align: -0.05em;
        animation: he-blink 1.05s steps(2) infinite;
      }

      /* Hero typed word — match original homepage highlight (lime on navy) */
      .home-enhanced-root .animated-title {
        color: #22303f !important;
        background: #e2fe5e !important;
      }
      .home-enhanced-root .animated-title *,
      .home-enhanced-root .typed-cursor {
        color: #22303f !important;
      }

      /* "Live in days" — apply the same lime highlight to the focus word */
      .home-enhanced-root .he-steps .nautix-section-title-focus {
        background: #e2fe5e;
        color: #22303f;
        box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
      }

      /* "Frequently asked questions" — lime highlight on the focus word */
      .home-enhanced-root .he-faq .nautix-section-title-focus {
        background: #e2fe5e;
        color: #22303f;
        box-shadow: inset 0 0 0 1px rgba(34, 48, 63, 0.06);
      }

      /* Hero headline — matches .nautix-section-title type style ("Everything you need to grow"),
         just scaled up to hero proportions */
      .home-enhanced-root .hero-header .title.tg-element-title {
        font-family: "Sharp Grotesk", sans-serif;
        color: #091624;
        font-size: clamp(2.4rem, 6vw, 4.6rem);
        line-height: 1.04;
        letter-spacing: -0.055em;
      }
      @media (max-width: 1024px) {
        .home-enhanced-root .hero-header .title.tg-element-title {
          font-size: clamp(2.1rem, 5vw, 3.6rem);
          line-height: 1.06;
        }
      }
      @media (max-width: 640px) {
        .home-enhanced-root .hero-header .title.tg-element-title {
          font-size: clamp(1.9rem, 8vw, 2.6rem);
          line-height: 1.08;
        }
      }

      /* Pillar tab pill row */
      .home-enhanced-root .he-pillar-tabs {
        display: inline-flex;
        gap: 4px;
        padding: 6px;
        border-radius: 999px;
        background: rgba(255,255,255,0.7);
        border: 1px solid rgba(23,23,23,0.08);
        backdrop-filter: blur(8px);
      }
      .home-enhanced-root .he-pillar-tab {
        position: relative;
        padding: 10px 22px;
        border: 0;
        background: transparent;
        font-weight: 500;
        font-size: 15px;
        color: rgba(23,23,23,0.7);
        border-radius: 999px;
        cursor: pointer;
        transition: color 0.2s ease;
      }
      .home-enhanced-root .he-pillar-tab:hover { color: rgba(23,23,23,0.95); }
      .home-enhanced-root .he-pillar-tab[data-active="true"] {
        color: #fff;
        background: linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%);
        box-shadow: 0 8px 20px rgba(126,16,162,0.25);
      }

      /* Pillar panel crossfade */
      .home-enhanced-root .he-pillar-panel {
        display: none;
        animation: he-fade-up 0.45s ease-out forwards;
      }
      .home-enhanced-root .he-pillar-panel[data-active="true"] { display: block; }

      /* Workflow card polish */
      .home-enhanced-root .he-workflow-card {
        position: relative;
        padding: 28px;
        border-radius: 20px;
        background: #ffffff;
        border: 1px solid rgba(23,23,23,0.07);
        transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        overflow: hidden;
      }
      .home-enhanced-root .he-workflow-card::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(600px 220px at var(--mx,50%) var(--my,0%), rgba(181,46,209,0.08), transparent 60%);
        opacity: 0;
        transition: opacity 0.35s ease;
        pointer-events: none;
      }
      .home-enhanced-root .he-workflow-card:hover {
        transform: translateY(-3px);
        border-color: rgba(126,16,162,0.25);
        box-shadow: 0 20px 40px -24px rgba(126,16,162,0.25);
      }
      .home-enhanced-root .he-workflow-card:hover::before { opacity: 1; }

      /* Industry card */
      .home-enhanced-root .he-industry-card {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 0 0 28px;
        border-radius: 22px;
        background: #ffffff;
        border: 1px solid rgba(23,23,23,0.07);
        overflow: hidden;
        transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
      }
      .home-enhanced-root .he-industry-card:hover {
        transform: translateY(-4px);
        border-color: rgba(126,16,162,0.22);
        box-shadow: 0 28px 50px -30px rgba(126,16,162,0.28);
      }
      .home-enhanced-root .he-industry-media {
        position: relative;
        aspect-ratio: 16 / 10;
        overflow: hidden;
      }
      .home-enhanced-root .he-industry-media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(.22,.61,.36,1);
      }
      .home-enhanced-root .he-industry-card:hover .he-industry-media img {
        transform: scale(1.06);
      }
      .home-enhanced-root .he-industry-label {
        display: block;
        font-family: var(--font-heading), sans-serif;
        font-size: clamp(18px, 1.55vw, 22px);
        font-weight: 700;
        letter-spacing: -0.015em;
        color: var(--he-accent);
        text-transform: none;
        line-height: 1.15;
        white-space: nowrap;
      }
      .home-enhanced-root .he-industry-subtitle {
        font-family: var(--font-heading), sans-serif;
        font-size: 17px;
        font-weight: 500;
        color: #171717;
        margin: 0;
        line-height: 1.35;
        letter-spacing: -0.005em;
        min-height: 2.7em; /* reserves 2 lines so subtitle stacks align */
      }
      .home-enhanced-root .he-industry-proof {
        margin-top: auto; /* push proof + CTA to the bottom of every card */
        padding: 14px 16px;
        border-radius: 14px;
        background: rgba(126,16,162,0.04);
        border: 1px dashed rgba(126,16,162,0.25);
      }
      .home-enhanced-root .he-industry-proof span {
        display: block;
        font-size: 11px;
        letter-spacing: 0.14em;
        color: var(--he-accent);
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 4px;
      }

      /* Testimonial crossfade — grid stack so height = tallest testimonial */
      .home-enhanced-root .he-testimonial-stage {
        position: relative;
        display: grid;
        grid-template-areas: "stack";
        overflow: hidden;
      }
      .home-enhanced-root .he-testimonial {
        grid-area: stack;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: translateY(8px);
        transition: opacity 0.6s ease, transform 0.6s ease, visibility 0s linear 0.6s;
      }
      .home-enhanced-root .he-testimonial[data-active="true"] {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: translateY(0);
        transition: opacity 0.6s ease, transform 0.6s ease, visibility 0s linear 0s;
      }
      .home-enhanced-root .he-testimonial-nav {
        position: relative;
        z-index: 2;
      }
      .home-enhanced-root .he-testimonial-dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: rgba(23,23,23,0.18);
        border: 0;
        padding: 0;
        cursor: pointer;
        transition: background 0.25s ease, transform 0.25s ease;
      }
      .home-enhanced-root .he-testimonial-dot[data-active="true"] {
        background: var(--he-accent);
        transform: scale(1.25);
      }
      .home-enhanced-root .he-testimonial-arrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: #fff;
        border: 1px solid rgba(23,23,23,0.1);
        color: #171717;
        cursor: pointer;
        transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
      }
      .home-enhanced-root .he-testimonial-arrow:hover {
        background: var(--he-accent);
        border-color: var(--he-accent);
        color: #fff;
        transform: translateY(-1px);
        box-shadow: 0 10px 24px -12px rgba(126,16,162,0.45);
      }
      .home-enhanced-root .he-testimonial-arrow:focus-visible {
        outline: 2px solid var(--he-accent-soft);
        outline-offset: 2px;
      }

      /* FAQ accordion */
      .home-enhanced-root .he-faq-item {
        border-top: 1px solid rgba(23,23,23,0.08);
        padding: 18px 0;
      }
      .home-enhanced-root .he-faq-item:last-child {
        border-bottom: 1px solid rgba(23,23,23,0.08);
      }
      .home-enhanced-root .he-faq-button {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 6px 0;
        border: 0;
        background: transparent;
        cursor: pointer;
        text-align: left;
        font-family: var(--font-heading), sans-serif;
        font-size: 20px;
        font-weight: 500;
        color: #171717;
      }
      .home-enhanced-root .he-faq-chevron {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        border-radius: 999px;
        background: var(--he-accent-tint);
        color: var(--he-accent);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, background 0.25s ease;
      }
      .home-enhanced-root .he-faq-item[data-open="true"] .he-faq-chevron {
        transform: rotate(45deg);
        background: var(--he-accent);
        color: #fff;
      }
      .home-enhanced-root .he-faq-body {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.35s ease;
      }
      .home-enhanced-root .he-faq-item[data-open="true"] .he-faq-body {
        max-height: 400px;
      }
      .home-enhanced-root .he-faq-body p {
        margin: 10px 0 0;
        color: rgba(23,23,23,0.72);
        font-size: 16px;
        line-height: 1.6;
      }

      /* Metrics band */
      .home-enhanced-root .he-metrics {
        max-width: 1200px;
        margin: 0 auto;
        padding: 56px 24px;
      }
      .home-enhanced-root .he-metric-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0;
        border-top: 1px solid rgba(23,23,23,0.08);
        border-bottom: 1px solid rgba(23,23,23,0.08);
      }
      .home-enhanced-root .he-metric {
        padding: 32px 24px;
        border-right: 1px solid rgba(23,23,23,0.08);
      }
      .home-enhanced-root .he-metric:last-child { border-right: 0; }
      .home-enhanced-root .he-metric-value {
        font-family: var(--font-heading), sans-serif;
        font-size: clamp(38px, 4.5vw, 56px);
        font-weight: 600;
        line-height: 1;
        letter-spacing: -0.03em;
        background: linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .home-enhanced-root .he-metric-label {
        margin-top: 10px;
        font-size: 15px;
        font-weight: 500;
        color: #171717;
      }
      .home-enhanced-root .he-metric-hint {
        margin-top: 4px;
        font-size: 13px;
        color: rgba(23,23,23,0.55);
      }

      /* How it works */
      .home-enhanced-root .he-steps {
        max-width: 1200px;
        margin: 0 auto;
        padding: 80px 24px;
      }
      .home-enhanced-root .he-steps-chip {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 8px 16px;
        margin: 20px auto 0;
        border-radius: 999px;
        background: rgba(126,16,162,0.06);
        border: 1px solid rgba(126,16,162,0.18);
        color: var(--he-accent);
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .home-enhanced-root .he-steps-chip::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--he-accent-soft);
        box-shadow: 0 0 0 4px rgba(181,46,209,0.18);
        animation: he-pulse-dot 2.4s ease-in-out infinite;
      }
      .home-enhanced-root .he-steps-grid {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 24px;
        margin-top: 48px;
      }
      .home-enhanced-root .he-steps-grid::before {
        content: "";
        position: absolute;
        top: 70px;
        left: 10%;
        right: 10%;
        height: 2px;
        background: linear-gradient(90deg, transparent 0%, rgba(126,16,162,0.25) 20%, rgba(181,46,209,0.35) 50%, rgba(126,16,162,0.25) 80%, transparent 100%);
        border-radius: 999px;
        z-index: 0;
        pointer-events: none;
      }
      @media (max-width: 820px) {
        .home-enhanced-root .he-steps-grid::before { display: none; }
      }
      .home-enhanced-root .he-step {
        position: relative;
        padding: 32px 28px 28px;
        border-radius: 22px;
        background:
          linear-gradient(180deg, rgba(126,16,162,0.025) 0%, rgba(255,255,255,0) 40%),
          #fff;
        border: 1px solid rgba(23,23,23,0.07);
        transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        overflow: hidden;
        z-index: 1;
      }
      .home-enhanced-root .he-step::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: linear-gradient(90deg, #7e10a2 0%, #b52ed1 50%, #7e10a2 100%);
        opacity: 0.9;
        border-radius: 22px 22px 0 0;
      }
      .home-enhanced-root .he-step::after {
        content: attr(data-ghost);
        position: absolute;
        top: -28px;
        right: -12px;
        font-family: var(--font-heading), sans-serif;
        font-size: 200px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.05em;
        color: rgba(126,16,162,0.045);
        pointer-events: none;
        user-select: none;
        z-index: 0;
      }
      .home-enhanced-root .he-step:hover {
        transform: translateY(-6px);
        border-color: rgba(126,16,162,0.3);
        box-shadow: 0 36px 60px -32px rgba(126,16,162,0.35);
      }
      .home-enhanced-root .he-step-head {
        position: relative;
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 22px;
        padding-bottom: 22px;
        border-bottom: 1px solid rgba(126,16,162,0.08);
      }
      .home-enhanced-root .he-step-head::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, #7e10a2 0%, #b52ed1 100%);
        border-radius: 2px;
      }
      .home-enhanced-root .he-step-num {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 52px;
        height: 52px;
        border-radius: 15px;
        background: linear-gradient(135deg, #7e10a2 0%, #b52ed1 100%);
        color: #fff;
        font-family: var(--font-heading), sans-serif;
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 0.02em;
        box-shadow: 0 14px 26px -12px rgba(126,16,162,0.6), inset 0 1px 0 rgba(255,255,255,0.22);
        flex-shrink: 0;
        position: relative;
      }
      .home-enhanced-root .he-step-num::after {
        content: "";
        position: absolute;
        inset: -5px;
        border-radius: 19px;
        border: 1px dashed rgba(126,16,162,0.28);
        pointer-events: none;
      }
      .home-enhanced-root .he-step-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 46px;
        height: 46px;
        border-radius: 13px;
        background: linear-gradient(135deg, rgba(126,16,162,0.1) 0%, rgba(181,46,209,0.14) 100%);
        color: var(--he-accent);
        flex-shrink: 0;
        border: 1px solid rgba(126,16,162,0.12);
      }
      .home-enhanced-root .he-step-icon svg {
        width: 22px;
        height: 22px;
      }
      .home-enhanced-root .he-step-title {
        font-family: var(--font-heading), sans-serif;
        font-size: 21px;
        font-weight: 600;
        color: #171717;
        margin: 0 0 12px;
        letter-spacing: -0.015em;
        position: relative;
      }
      .home-enhanced-root .he-step-copy {
        margin: 0 0 22px;
        font-size: 14.5px;
        line-height: 1.6;
        color: rgba(23,23,23,0.65);
        position: relative;
      }
      .home-enhanced-root .he-step-stat {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        border-radius: 12px;
        background: linear-gradient(90deg, rgba(126,16,162,0.06) 0%, rgba(181,46,209,0.03) 100%);
        border: 1px solid rgba(126,16,162,0.1);
        position: relative;
      }
      .home-enhanced-root .he-step-stat::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--he-accent-soft);
        box-shadow: 0 0 0 3px rgba(181,46,209,0.18);
        flex-shrink: 0;
      }
      .home-enhanced-root .he-step-stat b {
        font-family: var(--font-heading), sans-serif;
        font-size: 17px;
        font-weight: 700;
        color: var(--he-accent);
        letter-spacing: -0.01em;
      }
      .home-enhanced-root .he-step-stat span {
        font-size: 11.5px;
        color: rgba(23,23,23,0.55);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-left: auto;
      }

    `}</style>
  );
}

/* -------------------------------------------------------------------------- */
/*  Reveal-on-scroll hook                                                     */
/* -------------------------------------------------------------------------- */

function useReveal<T extends HTMLElement>(rootMargin = "-60px") {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin, threshold: 0.08 },
    );
    el.querySelectorAll<HTMLElement>(".he-reveal").forEach((n, i) => {
      n.style.animationDelay = `${i * 80}ms`;
      io.observe(n);
    });
    return () => io.disconnect();
  }, [rootMargin]);
  return ref;
}

/* -------------------------------------------------------------------------- */
/*  Section: Hero                                                             */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="hero-header"
      style={{
        position: "relative",
        padding: "80px 24px 40px",
        overflow: "hidden",
      }}
    >
      <div
        className="he-hero-shapes"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {/* 1. Megaphone — marketing / campaigns (matches the original marketing.svg) */}
        <span className="he-shape he-shape--megaphone">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <path
              d="M50 20 L26 32 L18 32 a6 6 0 0 0 0 12 l8 0 L50 56 Z"
              fill="#fbf2fe"
              stroke="#7e10a2"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M56 28 l6 -3" stroke="#b52ed1" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M57 38 l7 0" stroke="#b52ed1" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M56 48 l6 3" stroke="#b52ed1" strokeWidth="2.5" strokeLinecap="round" />
            <path
              d="M28 44 l0 10 a3 3 0 0 1 -6 0 l0 -10"
              stroke="#7e10a2"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* 2. Dashboard with bar chart (matches the original charts-pc.svg) */}
        <span className="he-shape he-shape--dashboard">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <rect
              x="14"
              y="16"
              width="44"
              height="32"
              rx="4"
              fill="#fbf2fe"
              stroke="#7e10a2"
              strokeWidth="2.5"
            />
            <rect x="21" y="36" width="6" height="8" rx="1.5" fill="#b52ed1" opacity="0.75" />
            <rect x="31" y="30" width="6" height="14" rx="1.5" fill="#7e10a2" />
            <rect x="41" y="24" width="6" height="20" rx="1.5" fill="#b52ed1" />
            <path d="M26 56 L46 56" stroke="#7e10a2" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 60 L42 60" stroke="#7e10a2" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>

        {/* 3. Team of people (matches the original group.svg) */}
        <span className="he-shape he-shape--team">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <circle cx="22" cy="28" r="7" fill="#fbf2fe" stroke="#7e10a2" strokeWidth="2.5" />
            <circle cx="50" cy="28" r="7" fill="#fbf2fe" stroke="#7e10a2" strokeWidth="2.5" />
            <circle cx="36" cy="32" r="9" fill="#7e10a2" stroke="#fff" strokeWidth="3" />
            <path
              d="M14 54 a8 8 0 0 1 16 0"
              stroke="#7e10a2"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M42 54 a8 8 0 0 1 16 0"
              stroke="#7e10a2"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M24 58 a12 12 0 0 1 24 0"
              stroke="#7e10a2"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </span>

        {/* 4. Lightbulb (matches the original idea.svg) */}
        <span className="he-shape he-shape--idea">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <path
              d="M36 14 a14 14 0 0 1 14 14 c0 5 -3 9 -6 13 l-16 0 c-3 -4 -6 -8 -6 -13 a14 14 0 0 1 14 -14 z"
              fill="#fbf2fe"
              stroke="#7e10a2"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M36 22 l0 18" stroke="#b52ed1" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 46 l12 0" stroke="#7e10a2" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M32 52 l8 0" stroke="#7e10a2" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M34 58 l4 0" stroke="#b52ed1" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M18 28 l4 0" stroke="#b52ed1" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 28 l4 0" stroke="#b52ed1" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>

        {/* 5. Donut chart — analytics/growth (paired with dashboard) */}
        <span className="he-shape he-shape--donut">
          <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="70" height="70" rx="20" fill="#fff" />
            <rect x="1" y="1" width="70" height="70" rx="20" stroke="#171717" strokeOpacity="0.06" />
            <circle cx="36" cy="36" r="18" fill="#fbf2fe" stroke="#7e10a2" strokeWidth="2.5" />
            <path d="M36 36 L36 18 A18 18 0 0 1 52 46 Z" fill="#7e10a2" />
            <path d="M36 36 L52 46 A18 18 0 0 1 26 50 Z" fill="#b52ed1" opacity="0.75" />
            <circle cx="36" cy="36" r="7" fill="#fff" />
            <circle cx="36" cy="36" r="7" stroke="#7e10a2" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
        </span>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 className="title tg-element-title mb-0 ">
          When your customers
          <br />
          reach out.
          <br />
          Nautix is{" "}
          <span
            className="px-1 animated-title"
            data-uc-typed="typeSpeed: 80; backSpeed: 50; backDelay: 1600; loop: true;"
          >
            <span>solving</span>
            <span>qualifying</span>
            <span>converting</span>
          </span>
        </h1>

        <p
          className="he-reveal"
          style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            lineHeight: 1.55,
            color: "rgba(23,23,23,0.7)",
            maxWidth: 760,
            margin: "24px auto 0",
          }}
        >
          Nautix reads, reasons, and resolves customer conversations across
          WhatsApp, Instagram, and Facebook with full access to your live
          business context, and escalates to a human when needed.
        </p>

        <div
          className="he-reveal nautix-hero-actions"
          style={{
            marginTop: 32,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="nautix-hero-action-row">
            <a className="nautix-hero-primary text-none" href={DEMO_EMAIL_URL}>
              Book a Live Demo{" "}
              <i className="fs-8 unicon-arrow-up-right fw-bold" aria-hidden="true" />
            </a>
            <a className="nautix-hero-secondary text-none" href="/pricing">
              See Pricing
            </a>
          </div>
        </div>

        <div
          className="he-reveal"
          style={{
            marginTop: 48,
            maxWidth: 1000,
            marginInline: "auto",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(23,23,23,0.08)",
              boxShadow: "0 30px 60px -30px rgba(126,16,162,0.25), 0 10px 30px -15px rgba(0,0,0,0.18)",
              background: "#000",
            }}
          >
            <video
              preload="auto"
              autoPlay
              playsInline
              muted
              loop
              poster="/nautix-media/home-hero-0419-poster.jpg"
              src="/nautix-media/home-hero-0419-optimized.mp4"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div
          className="he-reveal nautix-hero-marquee"
          style={{ marginTop: 40 }}
        >
          <p className="nautix-hero-marquee-title mb-0">
            Trusted by leading teams across industries
          </p>
          <div className="nautix-client-marquee">
            <div className="nautix-client-logo-row" aria-label="Selected Nautix customers">
              {CLIENT_LOGOS.map((logo) => (
                <div key={logo.alt} className="brand-item text-center">
                  <img
                    className="brand-item-image nautix-client-logo"
                    src={logo.src}
                    loading="lazy"
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Pillars (tabbed)                                                 */
/* -------------------------------------------------------------------------- */

function PillarsSection() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<(typeof PILLARS)[number]["id"]>("marketing");
  const current = PILLARS.find((p) => p.id === active)!;

  return (
    <section
      ref={ref}
      id="solutions"
      className="nautix-pillars-section"
      style={{ paddingTop: 24 }}
    >
      <div className="nautix-pillars-head">
        <h2 className="nautix-section-title mb-0 he-reveal">
          <span className="nautix-section-title-line">76</span>
          <span className="nautix-section-title-focus">across marketing, sales, and support.</span>
        </h2>
        <p className="nautix-section-copy mb-0 he-reveal">
          Nautix supports every stage of the customer journey.
        </p>
      </div>

      <div className="nautix-pillars-tabs-wrap he-reveal" style={{ textAlign: "center" }}>
        <div
          role="tablist"
          aria-label="Nautix solution pillars"
          className="he-pillar-tabs"
          style={{ margin: "0 auto 32px" }}
        >
          {PILLARS.map((p) => (
            <button
              key={p.id}
              role="tab"
              type="button"
              className="he-pillar-tab"
              data-active={active === p.id}
              aria-selected={active === p.id}
              onClick={() => setActive(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>

        {PILLARS.map((p) => (
          <div
            key={p.id}
            className="he-pillar-panel"
            data-active={active === p.id}
            role="tabpanel"
            hidden={active !== p.id}
          >
            <div className="nautix-pillar-panel">
              <div className="nautix-pillar-media-panel">
                <div className="nautix-pillar-media">
                  <video
                    key={p.id}
                    className="nautix-pillar-video nautix-pillar-video--ui-frame"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    aria-label={`${p.label} automation demo`}
                  >
                    <source src={current.video} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="nautix-pillar-feature-grid">
                {current.features.map((f) => (
                  <article key={f.title} className="nautix-pillar-feature">
                    <span className="nautix-pillar-feature-kicker">{f.kicker}</span>
                    <h4 className="nautix-pillar-feature-title mb-0">{f.title}</h4>
                    <p className="nautix-pillar-feature-copy mb-0">{f.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Workflows (6 feature cards)                                      */
/* -------------------------------------------------------------------------- */

function WorkflowsSection() {
  const ref = useReveal<HTMLElement>();
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const t = e.currentTarget as HTMLElement;
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={ref}
      id="product"
      className="nautix-workflows-section nautix-workflows-section--cards"
    >
      <div className="nautix-workflows-head">
        <h2 className="nautix-section-title mb-0 he-reveal">
          Build <span className="px-1">AI agents</span> your team will actually use.
        </h2>
        <p className="nautix-section-copy mb-0 he-reveal">
          Nautix lets your team define what an agent can resolve, when it should
          escalate, and which actions it can take across your channels. The
          result is an always-on execution layer, not just another bot.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          maxWidth: 1200,
          margin: "32px auto 0",
          padding: "0 16px",
        }}
      >
        {WORKFLOW_CARDS.map((c) => (
          <article
            key={c.title}
            className="he-workflow-card he-reveal"
            onMouseMove={handleMove}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "var(--he-accent-tint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <img
                src={c.icon}
                alt={c.alt}
                loading="lazy"
                style={{ width: 26, height: 26 }}
              />
            </div>
            <h5
              style={{
                fontFamily: "var(--font-heading), sans-serif",
                fontSize: 18,
                fontWeight: 600,
                margin: "0 0 8px",
                color: "#171717",
              }}
            >
              {c.title}
            </h5>
            <p
              style={{
                margin: 0,
                color: "rgba(23,23,23,0.68)",
                fontSize: 15,
                lineHeight: 1.55,
              }}
            >
              {c.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Industries                                                       */
/* -------------------------------------------------------------------------- */

function IndustriesSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id="industries" className="nautix-industry-section">
      <div className="nautix-industry-head">
        <h2 className="nautix-section-title mb-0 he-reveal">
          <span className="nautix-section-title-line">Purpose-built.</span>
          <span className="nautix-section-title-focus">Not adapted.</span>
        </h2>
        <p className="nautix-industry-copy mb-0 he-reveal">
          Generic tools require you to adapt your business to their workflows.
          Nautix was built for four specific industries, with the payment rails,
          workflows, and operational logic each one actually needs.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 1200,
          margin: "32px auto 0",
          padding: "0 16px",
        }}
      >
        {INDUSTRIES.map((i) => (
          <article key={i.label} className="he-industry-card he-reveal">
            <div className="he-industry-media">
              <img src={i.image} loading="lazy" alt={i.alt} />
            </div>
            <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: 10 }}>
              <h3 className="he-industry-label" style={{ margin: 0 }}>
                {i.label}
              </h3>
              <p className="he-industry-subtitle">{i.title}</p>
              <p
                style={{
                  margin: 0,
                  color: "rgba(23,23,23,0.68)",
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                {i.desc}
              </p>
              <div className="he-industry-proof">
                <span>In action</span>
                <p style={{ margin: 0, color: "rgba(23,23,23,0.8)", fontSize: 14, lineHeight: 1.55 }}>
                  {i.proof}
                </p>
              </div>
              <a
                className="text-none"
                href={`mailto:support@nautix.io?subject=${i.demoSubject}`}
                style={{
                  color: "var(--he-accent)",
                  fontWeight: 600,
                  fontSize: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                See {i.label} Demo <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Testimonials (auto-crossfade)                                    */
/* -------------------------------------------------------------------------- */

function TestimonialsSection() {
  const ref = useReveal<HTMLDivElement>();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % len), 5500);
    return () => window.clearInterval(t);
  }, [paused, len]);

  const prev = () => {
    setPaused(true);
    setI((n) => (n - 1 + len) % len);
  };
  const next = () => {
    setPaused(true);
    setI((n) => (n + 1) % len);
  };

  return (
    <div ref={ref} style={{ maxWidth: 980, margin: "0 auto", padding: "80px 24px" }}>
      <h2 className="title tg-element-title mb-0 nautix-testimonials-heading he-reveal">
        What our <span className="px-1">customers</span> say about Nautix
      </h2>

      <div
        className="he-reveal"
        style={{ marginTop: 40, position: "relative" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="he-testimonial-stage">
          {TESTIMONIALS.map((t, idx) => (
            <figure
              key={t.name}
              className="he-testimonial"
              data-active={idx === i}
              style={{ margin: 0 }}
            >
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: "var(--font-heading), sans-serif",
                  fontSize: "clamp(20px, 2vw, 28px)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.015em",
                  color: "#171717",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                style={{
                  marginTop: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <span style={{ fontWeight: 600, color: "#171717" }}>{t.name}</span>
                <span style={{ color: "rgba(23,23,23,0.6)", fontSize: 14 }}>{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          className="he-testimonial-nav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            marginTop: 32,
          }}
        >
          <button
            type="button"
            className="he-testimonial-arrow"
            aria-label="Previous testimonial"
            onClick={prev}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div style={{ display: "flex", gap: 10 }}>
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                className="he-testimonial-dot"
                data-active={idx === i}
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => {
                  setPaused(true);
                  setI(idx);
                }}
              />
            ))}
          </div>

          <button
            type="button"
            className="he-testimonial-arrow"
            aria-label="Next testimonial"
            onClick={next}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: FAQ                                                              */
/* -------------------------------------------------------------------------- */

function FaqSection() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div ref={ref} className="he-faq" style={{ maxWidth: 880, margin: "0 auto", padding: "40px 24px 60px" }}>
      <div className="nautix-industry-head he-reveal">
        <h2 className="nautix-section-title mb-0">
          <span className="nautix-section-title-line">Frequently asked</span>
          <span className="nautix-section-title-focus">questions</span>
        </h2>
      </div>

      <ul className="he-reveal" style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}>
        {HOMEPAGE_FAQS.map((f, idx) => (
          <li key={f.question} className="he-faq-item" data-open={open === idx}>
            <button
              type="button"
              className="he-faq-button"
              aria-expanded={open === idx}
              onClick={() => setOpen((o) => (o === idx ? null : idx))}
            >
              <span>{f.question}</span>
              <span className="he-faq-chevron" aria-hidden="true">
                +
              </span>
            </button>
            <div className="he-faq-body">
              <p>{f.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: Metrics band (counted-up on reveal)                              */
/* -------------------------------------------------------------------------- */

function Counter({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const t0 = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setN(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{n}</span>;
}

function MetricsBand() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="he-metrics">
      <div className="he-metric-grid he-reveal">
        {METRICS.map((m) => (
          <div key={m.label} className="he-metric">
            <div className="he-metric-value">
              {m.prefix}
              <Counter target={m.value} />
              {m.suffix}
            </div>
            <div className="he-metric-label">{m.label}</div>
            <div className="he-metric-hint">{m.hint}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section: How it works                                                     */
/* -------------------------------------------------------------------------- */

function StepIcon({ kind }: { kind: "connect" | "train" | "launch" }) {
  if (kind === "connect") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 3v4M15 3v4M6 9h12M9 9v5a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V9M12 17v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "train") {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3a5 5 0 0 0-5 5v1a3 3 0 0 0 0 6v2a3 3 0 0 0 3 3h1V3a2 2 0 0 0-2 2m10 0a5 5 0 0 1 5 5v1a3 3 0 0 1 0 6v2a3 3 0 0 1-3 3h-1V3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="11" r="1.25" fill="currentColor" />
        <circle cx="16" cy="11" r="1.25" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 16.5L3 21l4.5-1.5M13 3l8 8-6.5 2L11 16.5 7.5 13 10 9.5 13 3zM18 6l0 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function HowItWorks() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="he-steps">
      <div className="nautix-pillars-head" style={{ textAlign: "center" }}>
        <h2 className="nautix-section-title mb-0 he-reveal">
          <span className="nautix-section-title-line">Live in days,</span>
          <span className="nautix-section-title-focus">not quarters.</span>
        </h2>
      </div>
      <div className="he-steps-grid">
        {STEPS.map((s) => (
          <article
            key={s.n}
            className="he-step he-reveal"
            data-ghost={s.n}
          >
            <div className="he-step-head">
              <span className="he-step-num">{s.n}</span>
              <span className="he-step-icon" aria-hidden="true">
                <StepIcon kind={s.kind} />
              </span>
            </div>
            <h3 className="he-step-title">{s.title}</h3>
            <p className="he-step-copy">{s.copy}</p>
            <div className="he-step-stat">
              <b>{s.stat}</b>
              <span>{s.statLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function HomepageEnhanced() {
  return (
    <div className="home-enhanced-root">
      <EnhancementStyles />
      <HomepageBodyClass />
      <SiteHeader />
      <main className="main-area">
        <div data-elementor-type="wp-page" className="elementor">
          <Hero />
          <MetricsBand />
          <PillarsSection />
          <HowItWorks />
          <WorkflowsSection />
          <IndustriesSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}



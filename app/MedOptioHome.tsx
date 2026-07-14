"use client";

import Link from "next/link";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  AtSign,
  BadgeCheck,
  Bell,
  CalendarClock,
  Check,
  ChevronRight,
  ClipboardCheck,
  Database,
  FileClock,
  LineChart,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Pill,
  Phone,
  RefreshCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
  Globe2,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const proofLabels = [
  "Community Pharmacy",
  "Primary Care",
  "Care Homes",
  "Digital Health",
  "Clinical Ops",
  "EU Teams",
];

const productModules = [
  {
    name: "MedOptio Review",
    label: "Structured profile preparation",
    copy: "Medication histories, potential issues, missing context, and source notes prepared for professional review.",
    stat: "42",
    statLabel: "reviews queued",
    accent: "plum",
    icon: ClipboardCheck,
  },
  {
    name: "MedOptio Refill",
    label: "Authorization-ready request flow",
    copy: "Completeness checks, communication history, policy review, and decision logs keep refill work moving.",
    stat: "18",
    statLabel: "requests ready",
    accent: "terracotta",
    icon: RefreshCcw,
  },
  {
    name: "MedOptio Care",
    label: "Follow-up orchestration",
    copy: "Outreach timelines, response tracking, escalations, outcomes, and next actions in one calm workspace.",
    stat: "31",
    statLabel: "follow-ups due",
    accent: "sage",
    icon: MessageCircle,
  },
];

const stickySteps = [
  {
    eyebrow: "01 Intake",
    title: "Collect the work before it becomes risk.",
    copy: "Requests from pharmacy teams, clinics, care homes, and patient messaging are normalized into a single medication operations queue.",
  },
  {
    eyebrow: "02 Preparation",
    title: "AI assists with context, not clinical decisions.",
    copy: "MedOptio surfaces medication history, missing information, prior actions, and source references for professional review.",
  },
  {
    eyebrow: "03 Professional review",
    title: "Every decision has an owner and an audit trail.",
    copy: "Pharmacists and authorized care professionals can see who owns the next action, what changed, and what must be escalated.",
  },
  {
    eyebrow: "04 Follow-up",
    title: "The workflow continues after the request.",
    copy: "Care teams track outreach, outcomes, unresolved issues, and next steps without rebuilding the patient story each time.",
  },
];

const mathRows = [
  ["Medication tasks prepared before review", "68%", "Review context organized before a pharmacist opens the case"],
  ["Refill requests blocked by missing context", "24%", "Flagged early so teams can request information before authorization"],
  ["Follow-ups completed within target window", "91%", "Tracked across pharmacy, clinic, and care-home worklists"],
  ["Audit events captured per workflow", "100%", "Ownership, sources, status changes, and professional review notes preserved"],
];

const useCases = [
  {
    role: "Pharmacy groups",
    line: "Multi-site queues for review, refill, and follow-up work.",
    location: "Apteka Saska Kepa · ul. Francuska 31, Warszawa",
    insight:
      "Multi-site teams can see which medication reviews are prepared, which refill requests are blocked, and who owns each follow-up before work moves between branches.",
    proof: "12 prepared reviews · 4 refill blockers · 8 follow-ups due",
    icon: Pill,
  },
  {
    role: "Clinics",
    line: "Complete refill context before authorized staff review.",
    location: "Klinika Wola · ul. Kasprzaka 18, Warszawa",
    insight:
      "Clinic teams receive refill requests with missing information, source context, and previous outreach history already organized for the responsible professional.",
    proof: "24% fewer requests opened without context",
    icon: Stethoscope,
  },
  {
    role: "Care homes",
    line: "Resident medication actions with ownership and escalation.",
    location: "Dom Opieki Magnolia · ul. Dluga 12, Krakow",
    insight:
      "Care-home coordinators can track resident medication changes, review ownership, escalations, and family or clinician follow-up without rebuilding the record.",
    proof: "91% follow-ups completed inside target window",
    icon: UsersRound,
  },
  {
    role: "Digital health",
    line: "Workflow and audit infrastructure for medication services.",
    location: "Zdrowie Online · ul. Piekna 22, Wroclaw",
    insight:
      "Digital health providers can add medication operations, audit history, and professional review states around the clinical systems already in use.",
    proof: "100% workflow actions written to audit history",
    icon: Database,
  },
];

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="MedOptio home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>MedOptio</span>
    </Link>
  );
}

function StatusChip({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "ready" | "warning" | "review";
}) {
  return <span className={`status-chip ${tone}`}>{children}</span>;
}

function HeroWorkspace() {
  return (
    <div className="hero-workspace parallax-soft">
      <div className="workspace-toolbar">
        <div>
          <span className="toolbar-kicker">Warsaw Outpatient Group</span>
          <strong>Medication operations</strong>
        </div>
        <div className="toolbar-actions">
          <Search size={16} />
          <Bell size={16} />
        </div>
      </div>
      <div className="workspace-grid">
        <aside className="workspace-sidebar">
          {["Review", "Refill", "Care", "Tasks"].map((item, index) => (
            <span className={index === 0 ? "active" : ""} key={item}>
              {item}
            </span>
          ))}
        </aside>
        <main className="workspace-main">
          <div className="queue-head">
            <div>
              <span>Review queue</span>
              <strong>Ready for professional review</strong>
            </div>
            <StatusChip tone="ready">12 ready</StatusChip>
          </div>
          <div className="patient-card featured">
            <div>
              <span className="mono">MR-2048</span>
              <h3>Anna Kowalska</h3>
              <p>ul. Marszalkowska 84, 00-514 Warszawa</p>
            </div>
            <StatusChip tone="review">Pharmacist review</StatusChip>
          </div>
          <div className="queue-list">
            {[
              ["Jan Nowak", "Refill context missing", "Needs information"],
              ["Ewa Zielinska", "Follow-up due today", "Owner assigned"],
              ["Pawel Wisniewski", "Interaction note prepared", "Ready"],
            ].map(([name, issue, state]) => (
              <div className="queue-row" key={name}>
                <div>
                  <strong>{name}</strong>
                  <span>{issue}</span>
                </div>
                <span>{state}</span>
              </div>
            ))}
          </div>
        </main>
        <aside className="workspace-panel">
          <div className="ai-panel">
            <span className="eyebrow">AI-assisted summary</span>
            <p>
              Missing renal monitoring date. Recent refill request may require
              prescriber confirmation before next action.
            </p>
          </div>
          <div className="audit-trail">
            <span>Sources</span>
            <strong>Dispensing record</strong>
            <strong>Patient response</strong>
            <strong>Clinic note</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ProductWorkspace({ activeStep }: { activeStep: number }) {
  const step = stickySteps[activeStep];

  return (
    <div className="product-stage">
      <div className="product-stage-top">
        <div>
          <span className="mono">{step.eyebrow}</span>
          <strong>{step.title}</strong>
        </div>
        <StatusChip tone={activeStep === 2 ? "review" : "ready"}>
          {activeStep === 2 ? "Professional review" : "Prepared"}
        </StatusChip>
      </div>
      <div className="product-stage-body">
        <div className="rail">
          {["Intake", "Preparation", "Review", "Follow-up"].map((item, i) => (
            <span className={activeStep === i ? "active" : ""} key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="clinical-board">
          <div className="clinical-header">
            <div>
              <span className="mono">CASE · WO-1184</span>
              <h3>Marek Lewandowski</h3>
              <p>Apteka Saska Kepa · ul. Francuska 31, Warszawa</p>
            </div>
            <span className="score">{activeStep + 2}/5</span>
          </div>
          <div className="medication-stack">
            {[
              ["Atorvastatin", "20 mg · evening", "Last reviewed 21 Jun"],
              ["Metformin", "500 mg · twice daily", "Monitoring due"],
              ["Ramipril", "5 mg · morning", "Source verified"],
            ].map(([name, dose, meta], i) => (
              <div className={i === activeStep % 3 ? "med-row active" : "med-row"} key={name}>
                <div>
                  <strong>{name}</strong>
                  <span>{dose}</span>
                </div>
                <small>{meta}</small>
              </div>
            ))}
          </div>
          <div className="timeline-mini">
            {["Request received", "Context prepared", "Review note", "Care follow-up"].map((item, i) => (
              <span className={i <= activeStep ? "done" : ""} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="right-note">
          <span className="eyebrow">Professional note</span>
          <p>{step.copy}</p>
          <button type="button">
            Open case <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <label>
        Work email
        <input required type="email" placeholder="anna@apteka-saska.pl" />
      </label>
      <label>
        Name
        <input required placeholder="Anna Kowalska" />
      </label>
      <label>
        Organization
        <input required placeholder="Warsaw Outpatient Group" />
      </label>
      <label>
        Organization type
        <select defaultValue="Pharmacy group">
          <option>Pharmacy group</option>
          <option>Clinic</option>
          <option>Care home</option>
          <option>Digital health provider</option>
        </select>
      </label>
      <label className="full">
        Medication workflow priority
        <textarea placeholder="Tell us about reviews, refills, follow-ups, or audit workflows you want to improve." />
      </label>
      <button className="button primary full" type="submit">
        {submitted ? "Demo request noted" : "Request a Demo"}
        <ArrowRight size={17} />
      </button>
      {submitted ? (
        <p className="form-success">
          Thanks. The demo flow is mocked for now, but the form is ready for backend wiring.
        </p>
      ) : null}
    </form>
  );
}

export function MedOptioHome() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const modules = useMemo(() => productModules, []);
  const selectedCase = useCases[activeCase];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    });

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.to(".hero-title", {
        y: -100,
        opacity: 0.2,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((node) => {
        gsap.fromTo(
          node,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 82%",
            },
          },
        );
      });

      gsap.fromTo(
        ".fragment-lane",
        { y: 34, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: ".fragment-map",
            start: "top 78%",
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".story-step").forEach((node, index) => {
        ScrollTrigger.create({
          trigger: node,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

      gsap.utils.toArray<HTMLElement>(".metric-value").forEach((node) => {
        const endValue = Number(node.dataset.value ?? 0);
        const suffix = node.dataset.suffix ?? "";
        const counter = { value: 0 };

        gsap.to(counter, {
          value: endValue,
          duration: 1.35,
          ease: "power2.out",
          onUpdate: () => {
            node.textContent = `${Math.round(counter.value)}${suffix}`;
          },
          scrollTrigger: {
            trigger: node,
            start: "top 84%",
            once: true,
          },
        });
      });

      const track = document.querySelector<HTMLElement>(".module-track");
      if (track) {
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 180),
          ease: "none",
          scrollTrigger: {
            trigger: ".horizontal-modules",
            start: "top top",
            end: () => `+=${track.scrollWidth}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".case-panel").forEach((panel, index) => {
        gsap.fromTo(
          panel,
          { y: 120 + index * 20, opacity: 0.35 },
          {
            y: index * -16,
            opacity: 1,
            scrollTrigger: {
              trigger: ".case-stack",
              start: "top 78%",
              end: "bottom 42%",
              scrub: true,
            },
          },
        );
      });

      gsap.fromTo(
        ".trust-checks span",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: ".trust-checks",
            start: "top 78%",
          },
        },
      );

      gsap.to(".parallax-soft", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      <header className="nav-shell">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#review">Review</a>
          <a href="#refill">Refill</a>
          <a href="#care">Care</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <Link href="/sign-in">Sign in</Link>
          <a className="button primary small" href="#contact">
            Request a Demo
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="pill-label">Human-supervised medication operations</span>
          <h1 className="hero-title">Medication workflows, optimized for safer care.</h1>
          <p>
            MedOptio helps pharmacy and care teams coordinate medication reviews,
            refill requests, interaction checks, and patient follow-ups through
            one calm, structured workflow.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Request a Demo <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#product">
              Explore Platform
            </a>
          </div>
          <div className="hero-note">
            <BadgeCheck size={18} />
            AI prepares context. Professionals remain accountable for decisions.
          </div>
        </div>
        <HeroWorkspace />
      </section>

      <section className="proof-band" aria-label="Customer categories">
        <span>Built for medication operations across</span>
        <div className="category-marquee">
          <div className="category-track">
            <div className="category-set">
              {proofLabels.map((label) => (
                <strong key={label}>{label}</strong>
              ))}
            </div>
            <div className="category-set" aria-hidden="true">
              {proofLabels.map((label) => (
                <strong key={`${label}-repeat`}>{label}</strong>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section reveal">
        <span className="pill-label">The operational risk</span>
        <div className="section-grid">
          <div>
            <h2>Same patient, many systems. One high-risk workflow.</h2>
            <p>
              Medication work often moves through inboxes, dispensing software,
              clinical notes, phone calls, and spreadsheets. The routine parts are
              repetitive. The missed context is where risk builds.
            </p>
          </div>
          <div className="fragment-map" aria-label="Fragmented medication workflow visual">
            {["Inbox", "Dispensing system", "EHR context", "Phone note", "Care task"].map((item, index) => (
              <div className="fragment-lane" key={item}>
                <span>{item}</span>
                <strong>{index === 2 ? "Missing dose change" : index === 4 ? "Follow-up due" : "Unmatched record"}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky-story" id="product">
        <div className="sticky-visual">
          <ProductWorkspace activeStep={activeStep} />
        </div>
        <div className="story-copy">
          {stickySteps.map((step) => (
            <article className="story-step" key={step.eyebrow}>
              <span>{step.eyebrow}</span>
              <h2>{step.title}</h2>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="horizontal-modules" id="review">
        <div className="horizontal-intro">
          <span className="pill-label dark">Three connected products</span>
          <h2>Review, refill, and care work from the same patient context.</h2>
        </div>
        <div className="module-track">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article className={`module-panel ${module.accent}`} key={module.name} id={module.name.includes("Refill") ? "refill" : module.name.includes("Care") ? "care" : undefined}>
                <div className="module-art">
                  <Icon size={24} />
                  <div>
                    <strong>{module.stat}</strong>
                    <span>{module.statLabel}</span>
                  </div>
                </div>
                <span>{module.label}</span>
                <h3>{module.name}</h3>
                <p>{module.copy}</p>
                <button type="button">
                  View workflow <ArrowRight size={15} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="math-section reveal">
        <div className="section-heading">
          <span className="pill-label">The math behind safer operations</span>
          <h2>Small workflow gaps become expensive when they repeat every day.</h2>
        </div>
        <div className="math-table">
          {mathRows.map(([label, value, detail]) => (
            <div className="metric-row" key={label}>
              <div>
                <span>{label}</span>
                <p>{detail}</p>
              </div>
              <strong
                className="metric-value"
                data-value={value.replace("%", "")}
                data-suffix={value.includes("%") ? "%" : ""}
              >
                {value}
              </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="use-cases" id="use-cases">
        <div className="section-heading reveal">
          <span className="pill-label">Built for different teams</span>
          <h2>One medication workflow layer, tuned to each operating model.</h2>
        </div>
        <div className="case-layout">
          <div className="case-stack">
            {useCases.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  className={`case-panel ${activeCase === index ? "active" : ""}`}
                  key={item.role}
                  onClick={() => setActiveCase(index)}
                  style={{ zIndex: useCases.length - index }}
                  type="button"
                  aria-pressed={activeCase === index}
                >
                  <div className="case-image">
                    <Icon size={28} />
                    <span>{item.location}</span>
                  </div>
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.line}</p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="quote-block reveal" aria-live="polite">
            <span className="quote-kicker">Selected workflow</span>
            <h3>{selectedCase.role}</h3>
            <p>{selectedCase.insight}</p>
            <strong>{selectedCase.proof}</strong>
            <small>{selectedCase.location}</small>
          </div>
        </div>
      </section>

      <section className="ecosystem reveal">
        <div>
          <span className="pill-label">Integrations and audit context</span>
          <h2>Works around the systems your team already uses.</h2>
          <p>
            MedOptio does not ask teams to abandon existing clinical systems. It
            creates a shared operating layer for the work that sits between them.
          </p>
        </div>
        <div className="integration-grid" aria-label="Integration categories">
          {[
            [FileClock, "Dispensing software"],
            [ShieldCheck, "EHR context"],
            [MessageCircle, "Patient messaging"],
            [CalendarClock, "Task calendars"],
            [LineChart, "Reporting"],
            [LockKeyhole, "Identity access"],
          ].map(([Icon, label]) => (
            <span key={label as string}>
              <Icon size={22} />
              {label as string}
            </span>
          ))}
        </div>
      </section>

      <section className="trust-section reveal">
        <div className="trust-copy">
          <span className="pill-label dark">Human before AI</span>
          <h2>AI assists preparation. Professionals make the decisions.</h2>
          <p>
            MedOptio is designed for medication operations, not autonomous
            prescribing. Sources, missing information, review notes, ownership,
            and audit history remain visible throughout the workflow.
          </p>
        </div>
        <div className="trust-checks">
          {[
            "AI-assisted summaries are labelled clearly",
            "Source references remain visible",
            "Professional review state is explicit",
            "Every action writes to the audit history",
          ].map((item) => (
            <span key={item}>
              <Check size={17} />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy reveal">
          <span className="pill-label">Request a Demo</span>
          <h2>A useful demo starts with your real review, refill, and follow-up process.</h2>
          <p>
            Share how medication work moves today. We will map the workflow and
            show how MedOptio can bring queueing, preparation, review, and audit
            into one structured system.
          </p>
          <div className="address-card">
            <Sparkles size={18} />
            <span>MedOptio Sp. z o.o. · ul. Prosta 20, 00-850 Warszawa</span>
          </div>
        </div>
        <DemoForm />
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <Logo />
          <p>
            Medication workflow infrastructure for Polish and EU pharmacy,
            clinic, care-home, and digital health teams.
          </p>
          <div className="social-links" aria-label="MedOptio social links">
            <a href="https://www.linkedin.com/company/medoptio" aria-label="MedOptio on LinkedIn">
              <Globe2 size={18} />
            </a>
            <a href="https://www.instagram.com/medoptio" aria-label="MedOptio on Instagram">
              <AtSign size={18} />
            </a>
            <a href="https://www.youtube.com/@medoptio" aria-label="MedOptio on YouTube">
              <Send size={18} />
            </a>
          </div>
        </div>
        <div>
          <strong>Product</strong>
          <a href="#review">Review</a>
          <a href="#refill">Refill</a>
          <a href="#care">Care</a>
        </div>
        <div>
          <strong>Use Cases</strong>
          <a href="#use-cases">Pharmacies</a>
          <a href="#use-cases">Clinics</a>
          <a href="#use-cases">Care Homes</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:hello@medoptio.com">
            <Mail size={15} />
            hello@medoptio.com
          </a>
          <a href="tel:+48221030240">
            <Phone size={15} />
            +48 22 103 02 40
          </a>
          <span>
            <MapPin size={15} />
            ul. Prosta 20, 00-850 Warszawa
          </span>
          <Link href="/sign-in">Sign in</Link>
        </div>
      </footer>
    </main>
  );
}

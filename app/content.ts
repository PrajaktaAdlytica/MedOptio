import {
  CalendarClock,
  ClipboardCheck,
  Database,
  FileClock,
  LineChart,
  MessageCircle,
  Pill,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

export const products = {
  review: {
    name: "MedOptio Review",
    eyebrow: "Medication review workspace",
    headline: "Prepare every review with the source context already visible.",
    summary:
      "MedOptio Review organizes medication history, missing information, interaction notes, and professional ownership before a pharmacist or authorized clinician opens the case.",
    accent: "plum",
    metric: "42",
    metricLabel: "reviews queued",
    icon: ClipboardCheck,
    path: "/products/review",
    outcomes: [
      "Medication histories organized from pharmacy, clinic, and care-home inputs",
      "Potential interaction and monitoring notes prepared for human review",
      "Every source, owner, and professional decision recorded in the audit trail",
    ],
    workflow: [
      ["Intake", "Collect review requests from pharmacy counters, care teams, and digital channels."],
      ["Context", "Surface relevant medication history, notes, missing data, and source references."],
      ["Review", "Route the prepared case to the right accountable professional."],
      ["Audit", "Capture decisions, changes, ownership, and next actions."],
    ],
    scenario:
      "A pharmacist at Apteka Saska Kepa starts the morning with 42 prepared cases instead of rebuilding patient context from separate systems.",
  },
  refill: {
    name: "MedOptio Refill",
    eyebrow: "Refill request operations",
    headline: "Move refill requests forward only when the context is complete.",
    summary:
      "MedOptio Refill checks request completeness, communication history, policy context, and source records so refill work reaches review without avoidable back-and-forth.",
    accent: "terracotta",
    metric: "18",
    metricLabel: "requests ready",
    icon: RefreshCcw,
    path: "/products/refill",
    outcomes: [
      "Missing clinical or patient information flagged before authorization review",
      "Patient and prescriber communication history visible in one request thread",
      "Decision logs preserve why a refill moved, paused, or escalated",
    ],
    workflow: [
      ["Request", "Capture refill requests from patient messages, pharmacy systems, and clinic tasks."],
      ["Completeness", "Check source fields, recent activity, and missing data before review."],
      ["Decision", "Send ready requests to the responsible reviewer with context attached."],
      ["Resolution", "Track communication, outcome, and next refill follow-up."],
    ],
    scenario:
      "Klinika Wola can separate refill requests that are ready for review from requests waiting for missing patient or prescriber context.",
  },
  care: {
    name: "MedOptio Care",
    eyebrow: "Patient follow-up coordination",
    headline: "Keep medication follow-ups moving after the first decision.",
    summary:
      "MedOptio Care gives teams a shared follow-up layer for patient outreach, unresolved medication issues, escalations, and outcomes across pharmacies, clinics, and care homes.",
    accent: "sage",
    metric: "31",
    metricLabel: "follow-ups due",
    icon: MessageCircle,
    path: "/products/care",
    outcomes: [
      "Follow-up worklists tied back to the original review or refill request",
      "Escalations and ownership visible for care-home and clinic teams",
      "Outcomes and patient responses recorded without scattered notes",
    ],
    workflow: [
      ["Plan", "Create follow-up tasks from reviews, refill decisions, or care team requests."],
      ["Outreach", "Track patient, family, prescriber, and care-home communication."],
      ["Escalate", "Flag unresolved issues with clear ownership and urgency."],
      ["Close", "Record the outcome and keep the audit trail intact."],
    ],
    scenario:
      "Dom Opieki Magnolia can see resident medication follow-ups, escalation owners, and care-team responses without rebuilding the story.",
  },
} as const;

export const productList = [products.review, products.refill, products.care];

export const useCases = [
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
] as const;

export const integrationItems = [
  [FileClock, "Dispensing software"],
  [ShieldCheck, "EHR context"],
  [MessageCircle, "Patient messaging"],
  [CalendarClock, "Task calendars"],
  [LineChart, "Reporting"],
  [Database, "Identity access"],
] as const;

import { BadgeCheck, CalendarClock, FileText, ShieldCheck } from "lucide-react";
import { DemoForm } from "../components/DemoForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function DemoPage() {
  return (
    <main>
      <SiteHeader />
      <section className="demo-page-hero">
        <div>
          <span className="pill-label">Request a Demo</span>
          <h1>A useful demo starts with your real medication workflow.</h1>
          <p>
            Share the review, refill, or follow-up process that creates the most
            repetitive work today. We will map how MedOptio can organize queues,
            preparation, professional review, and audit.
          </p>
        </div>
        <DemoForm />
      </section>
      <section className="demo-expectations">
        {[
          [FileText, "Workflow mapping", "We translate your current process into queues, owners, review states, and follow-up steps."],
          [ShieldCheck, "Human accountability", "The demo shows where AI assists and where professional decisions remain explicit."],
          [CalendarClock, "Implementation path", "You leave with a practical view of what should connect first and what can wait."],
          [BadgeCheck, "Polish/EU context", "Example data, addresses, and workflows reflect EU pharmacy, clinic, and care-home operations."],
        ].map(([Icon, title, copy]) => (
          <article key={title as string}>
            <Icon size={22} />
            <h2>{title as string}</h2>
            <p>{copy as string}</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}

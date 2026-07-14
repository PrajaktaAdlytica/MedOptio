"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export function DemoForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={`demo-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit}>
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

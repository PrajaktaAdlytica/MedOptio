import Link from "next/link";
import { ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { DemoForm } from "./DemoForm";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { productList, products } from "../content";

type ProductKey = keyof typeof products;

export function ProductDetailPage({ productKey }: { productKey: ProductKey }) {
  const product = products[productKey];
  const Icon = product.icon;
  const related = productList.filter((item) => item.path !== product.path);

  return (
    <main>
      <SiteHeader />
      <section className={`product-hero ${product.accent}`}>
        <div className="product-hero-copy">
          <span className="pill-label">{product.eyebrow}</span>
          <h1>{product.headline}</h1>
          <p>{product.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/demo">
              Request a Demo <ArrowRight size={18} />
            </Link>
            <Link className="button secondary" href="/#product">
              See platform flow
            </Link>
          </div>
        </div>
        <div className="product-hero-panel">
          <div className="module-art">
            <Icon size={28} />
            <div>
              <strong>{product.metric}</strong>
              <span>{product.metricLabel}</span>
            </div>
          </div>
          <div className="product-case-card">
            <span className="mono">Live workspace</span>
            <h2>{product.name}</h2>
            <p>{product.scenario}</p>
          </div>
        </div>
      </section>

      <section className="product-workflow-section">
        <div className="section-heading">
          <span className="pill-label">Workflow</span>
          <h2>Built around the way medication teams already operate.</h2>
        </div>
        <div className="workflow-grid">
          {product.workflow.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-split-section">
        <div className="product-proof-panel">
          <ShieldCheck size={24} />
          <h2>Human-supervised by design.</h2>
          <p>
            MedOptio prepares context, detects missing information, and keeps
            work moving. Professional review, responsibility, and escalation
            remain explicit at every step.
          </p>
        </div>
        <div className="outcome-list">
          {product.outcomes.map((outcome) => (
            <span key={outcome}>
              <Check size={17} />
              {outcome}
            </span>
          ))}
        </div>
      </section>

      <section className="related-products">
        <div>
          <span className="pill-label">Connected products</span>
          <h2>The work does not stop at one workflow.</h2>
        </div>
        <div className="related-grid">
          {related.map((item) => (
            <Link className={`related-card ${item.accent}`} href={item.path} key={item.name}>
              <span>{item.eyebrow}</span>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              <strong>
                Open product <ChevronRight size={16} />
              </strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="product-demo-band">
        <div>
          <span className="pill-label dark">See it with your workflow</span>
          <h2>Bring a real review, refill, or follow-up process.</h2>
          <p>
            We will map the current workflow and show how MedOptio structures
            queueing, preparation, review, ownership, and audit.
          </p>
        </div>
        <DemoForm compact />
      </section>
      <SiteFooter />
    </main>
  );
}

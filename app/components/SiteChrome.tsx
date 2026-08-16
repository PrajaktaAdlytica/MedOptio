import Link from "next/link";
import { AtSign, BriefcaseBusiness, ChevronDown, Database, Mail, MapPin, Phone, Send } from "lucide-react";
import { BrandLogo } from "./Brand";
import { productList } from "../content";

export function SiteHeader() {
  return (
    <header className="nav-shell">
      <BrandLogo />
      <nav aria-label="Main navigation">
        <div className="nav-dropdown">
          <button type="button" aria-haspopup="true">
            Products <ChevronDown size={14} />
          </button>
          <div className="product-menu" role="menu">
            {productList.map((product) => {
              const Icon = product.icon;
              return (
                <Link className="product-menu-item" href={product.path} key={product.name}>
                  <span className={`menu-icon ${product.accent}`}>
                    <Icon size={18} />
                  </span>
                  <span>
                    <strong>{product.name.replace("MedOptio ", "")}</strong>
                    <small>{product.eyebrow}</small>
                  </span>
                </Link>
              );
            })}
            <Link className="product-menu-cta" href="/#product">
              View full platform flow
            </Link>
          </div>
        </div>
        <Link href="/#product">Platform</Link>
        <Link href="/#use-cases">Use Cases</Link>
        <Link href="/news/medoptio-announces-550k-funding-from-tiphub">Funding</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <div className="nav-actions">
        <Link href="/sign-in">Sign in</Link>
        <Link className="button primary small" href="/demo">
          Request a Demo
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <BrandLogo />
        <p>
          Medication workflow infrastructure for Polish and EU pharmacy, clinic,
          care-home, and digital health teams.
        </p>
        <div className="social-links" aria-label="MedOptio social links">
          <a
            href="https://www.linkedin.com/company/medoplio/"
            aria-label="MedOptio on LinkedIn"
            rel="noreferrer"
            target="_blank"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a href="https://www.instagram.com/medoptio" aria-label="MedOptio on Instagram">
            <AtSign size={18} />
          </a>
          <a href="https://www.youtube.com/@medoptio" aria-label="MedOptio on YouTube">
            <Send size={18} />
          </a>
          <a
            href="https://www.crunchbase.com/organization/medoptio"
            aria-label="MedOptio on Crunchbase"
            rel="noreferrer"
            target="_blank"
          >
            <Database size={18} />
          </a>
        </div>
      </div>
      <div>
        <strong>Product</strong>
        <Link href="/products/review">Review</Link>
        <Link href="/products/refill">Refill</Link>
        <Link href="/products/care">Care</Link>
      </div>
      <div>
        <strong>Use Cases</strong>
        <Link href="/#use-cases">Pharmacies</Link>
        <Link href="/#use-cases">Clinics</Link>
        <Link href="/#use-cases">Care Homes</Link>
      </div>
      <div>
        <strong>Company</strong>
        <Link href="/news/medoptio-announces-550k-funding-from-tiphub">Funding announcement</Link>
        <Link href="/#contact">Contact</Link>
        <a href="mailto:hello@medoptio.com">
          <Mail size={15} />
          hello@medoptio.com
        </a>
        <a href="tel:+36186158582">
          <Phone size={15} />
          06 18 615 8582
        </a>
        <span>
          <MapPin size={15} />
          4778 Park Street, Dunakeszi, Pest (PE) 2120, Hungary
        </span>
        <Link href="/sign-in">Sign in</Link>
      </div>
    </footer>
  );
}

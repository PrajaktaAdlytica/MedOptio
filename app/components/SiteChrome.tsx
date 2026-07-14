import Link from "next/link";
import { AtSign, Globe2, Mail, MapPin, Phone, Send } from "lucide-react";
import { BrandLogo } from "./Brand";

export function SiteHeader() {
  return (
    <header className="nav-shell">
      <BrandLogo />
      <nav aria-label="Main navigation">
        <Link href="/products/review">Review</Link>
        <Link href="/products/refill">Refill</Link>
        <Link href="/products/care">Care</Link>
        <Link href="/#use-cases">Use Cases</Link>
        <Link href="/demo">Demo</Link>
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
  );
}

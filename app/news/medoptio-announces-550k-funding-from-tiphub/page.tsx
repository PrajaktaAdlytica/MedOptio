import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Building2, CalendarDays } from "lucide-react";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

const articlePath = "/news/medoptio-announces-550k-funding-from-tiphub";
const articleUrl = `https://www.medoptio.com${articlePath}`;

export const metadata: Metadata = {
  title: "MedOptio announces $550K in funding from TipHub",
  description:
    "MedOptio announced $550K in funding from TipHub on 9 November 2025 to support its mission to improve medication operations for pharmacy and care teams.",
  alternates: {
    canonical: articlePath,
  },
  openGraph: {
    type: "article",
    url: articleUrl,
    siteName: "MedOptio",
    title: "MedOptio announces $550K in funding from TipHub",
    description:
      "The funding supports MedOptio's existing mission and the next phase of company and product building.",
    publishedTime: "2025-11-09T00:00:00.000Z",
    images: [
      {
        url: `${articlePath}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "MedOptio announces $550K in funding from TipHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedOptio announces $550K in funding from TipHub",
    description:
      "MedOptio announced $550K in funding from TipHub on 9 November 2025.",
    images: [`${articlePath}/opengraph-image`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "MedOptio announces $550K in funding from TipHub",
  description:
    "MedOptio announced $550K in funding from TipHub on 9 November 2025.",
  datePublished: "2025-11-09",
  dateModified: "2025-11-09",
  mainEntityOfPage: articleUrl,
  author: {
    "@type": "Organization",
    name: "MedOptio",
    url: "https://www.medoptio.com",
  },
  publisher: {
    "@type": "Organization",
    name: "MedOptio",
    url: "https://www.medoptio.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.medoptio.com/icon-512.png",
    },
  },
};

export default function FundingAnnouncementPage() {
  return (
    <main>
      <SiteHeader />

      <article className="news-article">
        <header className="news-hero">
          <Link className="news-back-link" href="/">
            <ArrowLeft size={16} /> Back to MedOptio
          </Link>
          <div className="news-meta">
            <span>Company announcement</span>
            <time dateTime="2025-11-09">
              <CalendarDays size={16} /> 9 November 2025
            </time>
          </div>
          <h1>MedOptio announces $550K in funding from TipHub.</h1>
          <p className="news-deck">
            The milestone supports MedOptio&apos;s existing mission to make
            high-risk medication workflows calmer, clearer, and more
            coordinated for pharmacy and care teams.
          </p>
          <div className="news-funding-card" aria-label="Funding summary">
            <div>
              <span>Funding announced</span>
              <strong>$550K</strong>
            </div>
            <div>
              <span>Investor</span>
              <a
                href="https://tiphub-prototype-review.vercel.app/companies/medoptio"
                rel="noreferrer"
                target="_blank"
              >
                TipHub <ArrowUpRight size={18} />
              </a>
            </div>
            <div>
              <span>Announcement date</span>
              <strong>9 November 2025</strong>
            </div>
          </div>
        </header>

        <div className="news-body">
          <div className="news-article-label">
            <Building2 size={18} />
            <span>Warszawa, Poland</span>
          </div>

          <p className="news-lead">
            MedOptio announced $550K in funding from TipHub on 9 November 2025.
            The funding marks an important step in building the company around
            a clear purpose: helping teams manage medication reviews, refill
            requests, interaction checks, and patient follow-ups through one
            structured workflow.
          </p>

          <h2>Supporting MedOptio&apos;s existing mission</h2>
          <p>
            Medication operations are repetitive, but the consequences of
            missing context can be significant. MedOptio is designed to help
            pharmacy, clinic, care-home, and digital health teams prepare the
            right information, assign clear ownership, preserve source context,
            and maintain an audit trail while professionals remain responsible
            for clinical decisions.
          </p>
          <p>
            The funding supports the continued development of that mission. It
            gives MedOptio additional capacity to keep building the product and
            the company behind it, while maintaining the human-supervised
            approach at the centre of the platform.
          </p>

          <h2>The next phase of company building</h2>
          <p>
            MedOptio&apos;s next phase remains focused on strengthening the
            foundations needed for dependable medication workflows: a calm
            operating layer for review, refill, and care work; clear
            professional accountability; and product experiences that fit the
            systems teams already use.
          </p>
          <p>
            This milestone is not a change in positioning. It supports the same
            direction MedOptio has established from the beginning: intelligent
            medication care, with humans at the core.
          </p>

          <aside className="news-company-links" aria-label="MedOptio company profiles">
            <span>Company profiles</span>
            <div>
              <a
                href="https://www.crunchbase.com/organization/medoptio"
                rel="noreferrer"
                target="_blank"
              >
                Crunchbase <ArrowUpRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/medoplio/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </aside>
        </div>

        <footer className="news-cta">
          <div>
            <span>See MedOptio in practice</span>
            <h2>Explore the medication operations platform.</h2>
          </div>
          <div>
            <Link className="button secondary" href="/products/review">
              Explore product
            </Link>
            <Link className="button primary" href="/demo">
              Request a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </footer>
      </article>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}

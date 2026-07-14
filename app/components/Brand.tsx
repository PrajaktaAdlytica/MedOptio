import Link from "next/link";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Link className={`brand ${className}`} href="/" aria-label="MedOptio home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span>MedOptio</span>
    </Link>
  );
}

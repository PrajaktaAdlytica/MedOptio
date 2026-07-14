import Link from "next/link";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Link className={`brand ${className}`} href="/" aria-label="MedOptio home">
      <BrandMark />
      <span className="brand-wordmark">MedOptio</span>
    </Link>
  );
}

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`brand-mark ${className}`}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M19.82 37.08C11.9 35.79 6 28.78 6 20.5V13.9C13.34 14.52 18.87 19.82 19.82 26.74V37.08Z"
        fill="url(#medoptio-left-petal)"
      />
      <path
        d="M22.18 37.08C30.1 35.79 36 28.78 36 20.5V13.9C28.66 14.52 23.13 19.82 22.18 26.74V37.08Z"
        fill="url(#medoptio-right-petal)"
      />
      <path
        d="M21 37.25V25.45"
        stroke="#A78FAE"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="21" cy="8.6" r="5.6" fill="url(#medoptio-sun)" />
      <defs>
        <linearGradient
          id="medoptio-left-petal"
          x1="5.47"
          x2="22.08"
          y1="14.31"
          y2="33.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9F819C" />
          <stop offset="1" stopColor="#DCC8D8" />
        </linearGradient>
        <linearGradient
          id="medoptio-right-petal"
          x1="36.53"
          x2="19.92"
          y1="14.31"
          y2="33.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F789A" />
          <stop offset="1" stopColor="#D7C3D4" />
        </linearGradient>
        <linearGradient
          id="medoptio-sun"
          x1="16.47"
          x2="25.97"
          y1="4.2"
          y2="13.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2C8B8" />
          <stop offset="1" stopColor="#E9A68E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

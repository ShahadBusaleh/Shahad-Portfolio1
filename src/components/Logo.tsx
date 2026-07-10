type LogoProps = {
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
};

const sizes = {
  sm: { box: 40, initials: 18, name: 8 },
  md: { box: 56, initials: 26, name: 10 },
  lg: { box: 120, initials: 52, name: 14 },
};

export function Logo({ size = "md", showName = false, className = "" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={`inline-flex flex-col items-center gap-1 ${className}`}>
      <svg
        width={s.box}
        height={s.box}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Shahad Busaleh logo"
      >
        <rect width="120" height="120" rx="16" fill="#5a7d85" />
        <text
          x="18"
          y="78"
          fill="#e8dec9"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontSize="56"
          fontWeight="700"
          letterSpacing="-2"
        >
          S
        </text>
        <text
          x="58"
          y="78"
          fill="#e8dec9"
          fontFamily="var(--font-sans), system-ui, sans-serif"
          fontSize="56"
          fontWeight="700"
          letterSpacing="-2"
        >
          B
        </text>
        {/* Circuit motif on B */}
        <line x1="98" y1="28" x2="108" y2="18" stroke="#e8dec9" strokeWidth="2" strokeLinecap="round" />
        <circle cx="108" cy="18" r="3" fill="#e8dec9" />
        <line x1="94" y1="34" x2="104" y2="34" stroke="#e8dec9" strokeWidth="2" strokeLinecap="round" />
        <circle cx="104" cy="34" r="3" fill="#e8dec9" />
        <line x1="98" y1="40" x2="108" y2="50" stroke="#e8dec9" strokeWidth="2" strokeLinecap="round" />
        <circle cx="108" cy="50" r="3" fill="#e8dec9" />
      </svg>
      {showName && (
        <span
          className="font-semibold tracking-[0.2em] text-brand-cream"
          style={{ fontSize: s.name }}
        >
          SHAHAD BUSALEH
        </span>
      )}
    </div>
  );
}

interface BrandMarkProps {
  size?: number;
  className?: string;
}

/** Small hand-drawn crescent-page emblem used as a subtle brand ornament. */
const BrandMark = ({ size = 20, className = "" }: BrandMarkProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 3.5c-2.6 2.4-2.6 6.6 0 9 2.6 2.4 2.6 6.6 0 9" opacity="0.85" />
    <path d="M12 3.5c2.6 2.4 2.6 6.6 0 9-2.6 2.4-2.6 6.6 0 9" opacity="0.35" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export default BrandMark;

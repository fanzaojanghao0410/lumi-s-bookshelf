interface BrandMarkProps {
  size?: number;
  className?: string;
}

/** Brand logo used as a subtle ornament across the site. */
const BrandMark = ({ size = 20, className = "" }: BrandMarkProps) => (
  <img
    src="/logo.png"
    alt=""
    width={size}
    height={size}
    aria-hidden="true"
    className={`inline-block object-contain select-none ${className}`}
    style={{ width: size, height: size }}
    draggable={false}
  />
);

export default BrandMark;

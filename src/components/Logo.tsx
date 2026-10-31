// Project Nina mark: a gingham-check tile (Nina's checkered shirt) with a villa and a paint drip.
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <pattern id="pn-check" width="16" height="16" patternUnits="userSpaceOnUse">
          <rect width="16" height="16" fill="#fbf6ee" />
          <rect width="8" height="16" fill="#c8432b" opacity="0.55" />
          <rect width="16" height="8" fill="#c8432b" opacity="0.55" />
        </pattern>
        <clipPath id="pn-clip">
          <rect width="64" height="64" />
        </clipPath>
      </defs>
      <g clipPath="url(#pn-clip)">
        <rect width="64" height="64" fill="url(#pn-check)" />
      </g>
      <path d="M14 34 L32 18 L50 34 V50 H14 Z" fill="#1c2534" />
      <rect x="28" y="38" width="8" height="12" rx="1" fill="#f4b43a" />
      <path d="M44 22 h6 v8 q0 4 -3 4 q-3 0 -3 -4 z" fill="#f4b43a" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`}>
      <LogoMark />
      <span className="logo-word">
        Project <b>Nina</b>
      </span>
    </span>
  );
}

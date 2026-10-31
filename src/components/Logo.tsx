// Project Nina mark: one villa split down the middle, tired on the left and freshly renovated on the right.
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" fill="#1c2534" />
      {/* tired half */}
      <path d="M10 30 L32 12 V54 H10 Z" fill="#9b9690" />
      <path d="M6 32 L32 9 V14 L10 33 Z" fill="#8a5a3a" />
      <path d="M13 37 h3 M13 43 h5 M18 49 h4 M22 40 h3" stroke="#6f6a64" strokeWidth="1.6" />
      <rect x="15" y="36" width="9" height="9" fill="#4a4f57" />
      <path d="M15 36 l9 9 M24 36 l-4 5" stroke="#9b9690" strokeWidth="1.2" />
      {/* renovated half */}
      <path d="M32 12 L54 30 V54 H32 Z" fill="#ffffff" />
      <path d="M32 9 L58 32 L54 33 L32 14 Z" fill="#c8432b" />
      <rect x="40" y="36" width="9" height="9" fill="#bfe0f0" stroke="#1c2534" strokeWidth="1.2" />
      <rect x="33" y="42" width="6" height="12" fill="#2f6b4f" />
      <rect x="44" y="16" width="4" height="8" fill="#c8432b" />
      {/* paint line where the brush has been */}
      <rect x="31" y="9" width="2" height="45" fill="#f4b43a" />
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

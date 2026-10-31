// Project Nina mark: cartoon Nina's face on the navy square.
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <img
      className="logo-mark"
      src="/media/nina-logo.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
    />
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

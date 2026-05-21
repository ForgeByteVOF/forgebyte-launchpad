import logoSrc from "@/assets/forgebyte-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Link
      to="/"
      aria-label="ForgeByte — home"
      className="group inline-flex items-center gap-2.5"
    >
      <span
        className="relative inline-flex items-center justify-center rounded-lg"
        style={{ width: size, height: size }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-lg bg-primary/30 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
        />
        <img
          src={logoSrc}
          alt=""
          width={size}
          height={size}
          className="relative size-full object-contain"
        />
      </span>
      <span className="font-display text-base font-semibold tracking-tight">
        Forge<span className="text-gradient">Byte</span>
      </span>
    </Link>
  );
}

import logoSrc from "@/assets/forgebyte-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ height = 36 }: { height?: number }) {
  return (
    <Link
      to="/"
      aria-label="ForgeByte — home"
      className="group relative inline-flex items-center"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-xl bg-primary/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <img
        src={logoSrc}
        alt="ForgeByte"
        height={height}
        style={{ height }}
        className="w-auto object-contain"
      />
    </Link>
  );
}

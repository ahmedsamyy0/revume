import Link from "next/link";

export function NavBar() {
  return (
    <nav className="hidden md:flex gap-6">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/features"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Features
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        About
      </Link>
    </nav>
  );
}

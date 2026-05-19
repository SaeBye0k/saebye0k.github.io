import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span className="logo-dot" />
          <span>Test</span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/posts">Posts</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

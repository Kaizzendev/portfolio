import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border nav-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="text-xl font-semibold primary-text">
                <Link href="/">Kaizzendev</Link>
            </div>
            <div className="flex items-center gap-6">
                <Link href="/"> Home </Link>
                <Link href="/portfolio"> Portfolio </Link>
                <Link href="/about"> Contact / About me </Link>
            </div>
        </nav>
    </header>
  );
}
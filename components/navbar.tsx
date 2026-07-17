import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border nav-background">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold primary-text transition hover:scale-105 duration-300">
                <img src="/logo.png" alt="Logo Image" className="w-12 h-12 rounded-full object-cover shadow-lg" />
                <span>Kaizzendev</span>
                </Link>
            </div>
            <div className="flex items-center gap-6">
                <Link href="/" className="transition hover:scale-105 hover:text-primary duration-100">
                    Home
                </Link>
                <Link href="/portfolio" className="transition hover:scale-105 hover:text-primary duration-100">
                    Portfolio
                </Link>
                <Link href="/about" className="transition hover:scale-105 hover:text-primary duration-100">
                    Contact
                </Link>
            </div>
        </nav>
    </header>
  );
}
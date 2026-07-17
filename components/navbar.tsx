import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border nav-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div>
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold primary-text">
                <img src="/logo.png" alt="Logo Image" className="w-12 h-12 rounded-full object-cover shadow-lg transition hover:scale-105 duration-300" />
                <span>Kaizzendev</span>
                </Link>
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
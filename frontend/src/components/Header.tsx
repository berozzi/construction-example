import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const nav = [
  { path: "/", label: "Strona główna" },
  { path: "/o-nas", label: "O nas" },
  { path: "/oferta", label: "Oferta" },
  { path: "/galeria", label: "Galeria" },
  { path: "/kontakt", label: "Kontakt" },
]

export default function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isDark = scrolled || pathname !== "/"

  return (
    <header
      className={
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 " +
        (isDark
          ? "bg-construction-dark/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 md:px-6">
        <Link to="/" className="shrink-0 no-underline">
          <img src="/logo.svg" alt="TOL-BUD" className="h-10 md:h-12" />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                "rounded-lg px-4 py-2 text-sm font-medium tracking-wide text-white no-underline transition-all " +
                (pathname === item.path
                  ? "bg-construction-accent text-construction-dark"
                  : "hover:bg-white/10")
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+48602679761"
          className="ml-auto mr-3 inline-flex items-center gap-2 rounded-xl bg-construction-accent px-4 py-2 text-sm font-bold text-white no-underline transition-all hover:bg-construction-accent-hover md:ml-8 md:mr-0 md:px-5 md:py-3 md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 md:size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="hidden sm:inline">Zadzwoń</span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {menuOpen ? (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-construction-dark/98 backdrop-blur-sm md:hidden">
            <div className="space-y-1 px-4 py-4">
              {nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={
                    "block rounded-lg px-4 py-3 text-sm font-medium tracking-wide text-white no-underline transition-all " +
                    (pathname === item.path
                      ? "bg-construction-accent text-construction-dark"
                      : "hover:bg-white/10")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

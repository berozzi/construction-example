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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 " +
        (scrolled || pathname !== "/"
          ? "bg-construction-dark/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-3">
        <Link to="/" className="shrink-0 no-underline">
          <img src="/logo.svg" alt="TOL-BUD" className="h-12" />
        </Link>

        <nav className="ml-auto flex items-center gap-1">
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
          className="ml-8 inline-flex items-center gap-2.5 rounded-xl bg-construction-accent px-5 py-3 font-bold text-white no-underline transition-all hover:bg-construction-accent-hover hover:shadow-xl hover:shadow-construction-accent/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
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
          Zadzwoń
        </a>
      </div>
    </header>
  )
}

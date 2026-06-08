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

  return (
    <header className="w-full border-b-4 border-accent">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center bg-[#0d465b]">
          <div className="flex items-center gap-1 px-3 py-2">
            <div className="flex size-12 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white">
              TB
            </div>
            <div className="leading-tight text-white">
              <span className="text-2xl font-bold">POSADZKI</span>
              <br />
              <span className="text-xl font-semibold">BETONOWE</span>
            </div>
          </div>

          <nav className="flex flex-1">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={
                  "px-4 py-8 text-sm font-bold text-white no-underline transition-colors hover:bg-white/10 " +
                  (pathname === item.path ? "bg-white/15" : "")
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 pr-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
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
            <div className="text-lg font-semibold leading-tight">
              602 679 761
              <br />
              604 518 314
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

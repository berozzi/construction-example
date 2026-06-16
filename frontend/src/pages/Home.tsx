import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-construction-dark via-construction-gray to-construction-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.08),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-block rounded-full border border-construction-accent/30 bg-construction-accent/10 px-5 py-1.5 text-construction-accent text-xs font-semibold tracking-widest uppercase">
            Ponad 30 lat doświadczenia
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
            Profesjonalne
            <br />
            <span className="text-construction-accent">Posadzki Betonowe</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-construction-muted sm:text-lg">
            Kompleksowe usługi posadzkarskie dla klientów indywidualnych i firm.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/oferta"
              className="rounded-xl bg-construction-accent px-8 py-4 font-bold text-construction-dark no-underline transition-all hover:bg-construction-accent-hover hover:shadow-xl hover:shadow-construction-accent/25"
            >
              Nasza oferta
            </Link>
            <Link
              to="/kontakt"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white no-underline transition-all hover:bg-white/10"
            >
              Skontaktuj się
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-construction-light to-transparent" />
      </section>

      <section className="relative -mt-16 mx-auto max-w-6xl px-4 sm:-mt-20 sm:px-6">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
          {[
            { label: "Lat doświadczenia", value: "30+" },
            { label: "Zrealizowanych projektów", value: "500+" },
            { label: "Brygad wykonawczych", value: "5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-8 text-center shadow-xl shadow-black/5"
            >
              <div className="mb-1 text-4xl font-extrabold text-construction-accent">
                {stat.value}
              </div>
              <div className="font-medium text-construction-muted text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block font-semibold text-construction-accent text-sm uppercase tracking-widest">
              O firmie
            </span>
            <h2 className="text-3xl font-bold text-construction-dark md:text-4xl">
              Witamy Serdecznie
            </h2>
          </div>
          <div className="mx-auto max-w-4xl space-y-6 text-center text-lg leading-relaxed text-construction-gray/80">
            <p>
              Wysoka jakość, terminowość oraz zadowolenie klienta – to dewiza
              naszej działalności. Każdy klient może liczyć na profesjonalne
              doradztwo w zakresie doboru materiałów, indywidualne dopasowanie
              produktu do jego potrzeb oraz wykonanie usługi na najwyższym
              poziomie.
            </p>
            <p>
              Od wielu lat naszym flagowym produktem jest jastrych cementowy,
              jednak do naszej oferty wprowadzamy coraz to nowsze rozwiązania:
              styrobeton, keramzytobeton, podłoża szybkosprawne oraz nowoczesny
              jastrych anhydrytowy.
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/o-nas"
              className="inline-flex items-center gap-2 font-semibold text-construction-accent no-underline transition-colors hover:text-construction-accent-hover"
            >
              Poznaj naszą historię
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-construction-dark py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block font-semibold text-construction-accent text-sm uppercase tracking-widest">
              Nasze usługi
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Kompleksowe rozwiązania posadzkarskie
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Jastrych cementowy",
                desc: "Flagowy produkt – wytrzymałe podkłady betonowe pod każdy rodzaj posadzki.",
              },
              {
                title: "Jastrych anhydrytowy",
                desc: "Nowoczesne podkłady anhydrytowe typu AGILIA SOLS A i ALPHA 2000.",
              },
              {
                title: "Styrobeton",
                desc: "Lekkie i termoizolacyjne wylewki idealne do ocieplania podłóg.",
              },
              {
                title: "Keramzytobeton",
                desc: "Wytrzymałe podkłady z keramzytu o doskonałych parametrach izolacyjnych.",
              },
              {
                title: "Izolacje posadzek",
                desc: "Izolacje przeciwwodne, przeciwwilgociowe i termiczne posadzek.",
              },
              {
                title: "Prace naprawcze",
                desc: "Remonty i naprawy istniejących podłoży betonowych.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-construction-accent/30 hover:bg-white/10"
              >
                <div className="mb-4 flex size-10 shrink-0 items-center justify-center rounded-xl bg-construction-accent/10 text-construction-accent sm:size-12">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 font-bold text-white text-xl">{s.title}</h3>
                <p className="leading-relaxed text-construction-muted text-sm">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/oferta"
              className="inline-flex items-center gap-2 rounded-xl bg-construction-accent px-8 py-4 font-bold text-construction-dark no-underline transition-all hover:bg-construction-accent-hover"
            >
              Zobacz pełną ofertę
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <span className="mb-2 block font-semibold text-construction-accent text-sm uppercase tracking-widest">
            Kontakt
          </span>
          <h2 className="mb-4 text-3xl font-bold text-construction-dark md:text-4xl">
            Masz pytania? Skontaktuj się z nami
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-construction-muted">
            Zadzwoń lub napisz – odpowiemy na wszystkie pytania i pomożemy
            dobrać najlepsze rozwiązanie dla Twojego projektu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+48602679761"
              className="inline-flex items-center gap-3 rounded-xl bg-construction-accent px-8 py-4 font-bold text-construction-dark no-underline transition-all hover:bg-construction-accent-hover"
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
              602 679 761
            </a>
            <a
              href="mailto:biuro@posadzki.zgora.pl"
              className="inline-flex items-center gap-3 rounded-xl border border-construction-gray/20 px-8 py-4 font-bold text-construction-dark no-underline transition-all hover:bg-construction-dark hover:text-white"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              biuro@posadzki.zgora.pl
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

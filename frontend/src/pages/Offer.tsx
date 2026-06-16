const serviceGroups = [
  {
    category: "Podłoża i jastrychy",
    items: [
      "Podłoża betonowe",
      "Podłoża anhydrytowe typu AGILIA SOLS A (Lafarge)",
      "Podłoża anhydrytowe typu ALPHA 2000 (Baumit)",
      "Podłoża betonowe szybkosprawne (możliwość układania okładzin po 24h)",
      "Podkłady betonowe (chudziaki)",
      "Szlichty betonowe",
    ],
  },
  {
    category: "Betonowanie",
    items: [
      "Betonowanie stropów (TERIVA)",
      "Betonowanie ław fundamentowych",
      "Wylewki cienkowarstwowe",
      "Warstwy wyrównawcze podłoży",
    ],
  },
  {
    category: "Izolacje i naprawy",
    items: [
      "Izolacje przeciwwodne posadzek",
      "Izolacje przeciwwilgociowe posadzek",
      "Izolacje termiczne posadzek",
      "Remonty podłoży betonowych",
      "Prace naprawcze posadzek",
    ],
  },
  {
    category: "Nowoczesne technologie",
    items: ["Styrobeton", "Keramzytobeton"],
  },
]

export default function Offer() {
  return (
    <>
      <section className="relative flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-construction-dark via-construction-gray to-construction-dark" />
        <div className="relative z-10 text-center">
          <span className="mb-2 block font-semibold text-construction-accent text-sm uppercase tracking-widest">
            Co robimy
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Nasza oferta
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="text-sm leading-relaxed text-construction-gray/80 sm:text-base">
              Świadczymy szeroki zakres prac betoniarskich dla klientów
              indywidualnych oraz firm. Służymy naszym klientom fachowym
              doradztwem w zakresie zastosowania i doboru materiałów zależnie od
              potrzeb indywidualnych obiektu. Wykonujemy zlecenia z materiałów
              własnych oraz powierzonych.
            </p>
          </div>

          <div className="space-y-16">
            {serviceGroups.map((group) => (
              <div key={group.category}>
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-construction-gray/20" />
                  <span className="shrink-0 font-bold text-construction-accent text-sm uppercase tracking-widest">
                    {group.category}
                  </span>
                  <div className="h-px flex-1 bg-construction-gray/20" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="group flex items-start gap-3 rounded-xl border border-construction-gray/10 bg-white p-4 transition-all hover:border-construction-accent/30 hover:shadow-lg hover:shadow-construction-accent/5 sm:gap-4 sm:p-5"
                    >
                      <div className="mt-1 shrink-0 rounded-lg bg-construction-accent/10 p-1.5 text-construction-accent transition-colors group-hover:bg-construction-accent group-hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-construction-gray/80 sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-construction-dark py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Zapraszamy do współpracy
          </h2>
          <p className="mb-8 text-construction-muted text-lg">
            Wykonujemy zlecenia z materiałów własnych oraz powierzonych. Pracujemy
            na obiektach wszelkiego typu – od małych remontów po wielkogabarytowe
            inwestycje.
          </p>
          <a
            href="tel:+48602679761"
            className="inline-flex items-center gap-2 rounded-xl bg-construction-accent px-8 py-4 font-bold text-construction-dark no-underline transition-all hover:bg-construction-accent-hover"
          >
            Zadzwoń: 602 679 761
          </a>
        </div>
      </section>
    </>
  )
}

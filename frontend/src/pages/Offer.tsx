const services = [
  "podłoża betonowe",
  "podłoża anhydrytowe typu AGILIA SOLS A (Lafarge)",
  "podłoża anhydrytowe typu ALPHA 2000 (Baumit)",
  "podłoża betonowe szybkosprawne (możliwość układania okładzin po 24h)",
  "podkłady betonowe (chudziaki)",
  "szlichty betonowe",
  "betonowanie stropów (TERIVA)",
  "betonowanie ław fundamentowych",
  "wylewki cienkowarstwowe",
  "warstwy wyrównawcze podłoży",
  "remonty podłoży betonowych",
  "izolacje przeciwwodne posadzek",
  "izolacje przeciwwilgociowe posadzek",
  "izolacje termiczne posadzek",
  "prace naprawcze posadzek",
  "styrobeton",
  "keramzytobeton",
]

export default function Offer() {
  return (
    <div className="p-5">
      <div className="border-l-4 border-accent bg-title-bg px-6 py-3 text-lg font-semibold text-gray-700">
        Oferta
      </div>

      <div className="mt-5 space-y-4 text-justify text-[#555]">
        <p className="text-lg leading-relaxed">
          Świadczymy szeroki zakres prac betoniarskich dla klientów
          indywidualnych oraz firm. Służymy naszym klientom fachowym doradztwem w
          zakresie zastosowania i doboru materiałów zależnie od potrzeb
          indywidualnych obiektu. Wykonujemy zlecenia z materiałów własnych oraz
          powierzonych. Zapraszamy do współpracy przy wykonywaniu różnego rodzaju
          prac betoniarskich na wszelkiego typu obiektach budowlanych.
        </p>

        <p className="text-lg font-semibold text-primary">
          Zakres wykonywanych przez nas usług:
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s}
              className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mt-1 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 text-accent"
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
              <span className="text-[#555]">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

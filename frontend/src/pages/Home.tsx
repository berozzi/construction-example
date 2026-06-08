export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="flex h-56 animate-scroll">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex min-w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-4xl font-bold text-white"
            >
              Profesjonalne posadzki betonowe
            </div>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="border-l-4 border-accent bg-title-bg px-6 py-3 text-lg font-semibold text-gray-700">
          Witamy Serdecznie
        </div>

        <div className="mt-5 flex flex-col gap-5 md:flex-row">
          <div className="shrink-0">
            <div className="flex size-48 items-center justify-center rounded-xl border-4 border-accent bg-gradient-to-br from-gray-600 to-gray-800 text-white shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-4 text-justify text-[#555]">
            <p className="text-lg leading-relaxed">
              Wysoka jakość, terminowość oraz zadowolenie klienta – to dewiza
              naszej działalności. Każdy klient może liczyć na profesjonalne
              doradztwo w zakresie doboru materiałów, indywidualne dopasowanie
              produktu do jego potrzeb oraz wykonanie usługi na najwyższym
              poziomie. Obsługujemy wszystkie rodzaje zleceń od tych najmniejszych
              po obiekty wielkogabarytowe.
            </p>
            <p className="text-lg leading-relaxed">
              Od wielu lat naszym flagowym produktem jest jastrych cementowy
              (podkład betonowy), jednak do naszej oferty wprowadzamy coraz to
              nowsze rozwiązania pojawiające się na rynku: styrobeton,
              keramzytobeton, podłoża szybkosprawne oraz nowoczesny produkt -
              jastrych anhydrytowy (podkłady anhydrytowe). Więcej o naszych
              usługach mogą Państwo przeczytać w zakładce OFERTA.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

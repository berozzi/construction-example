export default function About() {
  return (
    <div className="p-5">
      <div className="border-l-4 border-accent bg-title-bg px-6 py-3 text-lg font-semibold text-gray-700">
        O nas
      </div>

      <div className="mt-5 space-y-4 text-justify text-[#555]">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="shrink-0">
            <div className="flex size-48 items-center justify-center rounded-xl border-4 border-accent bg-gradient-to-br from-gray-500 to-gray-700 text-white shadow-md">
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
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Nasza firma rozpoczęła swą działalność w 1994 r. Początki były
              bardzo skromne. Jednak z upływem kolejnych lat przybywało nam
              doświadczenia, a to przełożyło się na jakość wykonywanych przez nas
              usług. W tym czasie zyskaliśmy zaufanie coraz większej rzeszy
              klientów, a to pozwoliło nam na dalszy rozwój firmy: zaangażowanie
              środków finansowych i zatrudnienie wykwalifikowanej kadry.
            </p>
            <p className="text-lg leading-relaxed">
              W ciągu wielu lat, spośród wielu osób, zatrudnionych w naszym
              zespole, udało nam się dobrać i wyszkolić doskonałą kadrę
              pracowników, posiadających umiejętności i wiedzę pozwalające na
              wykonywanie usług na najwyższym poziome. Aktualnie posiadamy pięć
              brygad wykonawczych oraz zespół zaopatrzeniowo-logistyczny, które są
              w stanie zorganizować i wykonać około 600m² jastrychów cementowych w
              ciągu jednej zmiany.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="order-2 space-y-4 md:order-1">
            <p className="text-lg leading-relaxed">
              W trosce o środowisko naturalne oraz konieczności obniżania kosztów
              produkcji, nasze brygady pracują na najnowszych, dostępnych na
              rynku, agregatach niemieckiej firmy BRINKMAN oraz nowoczesnym
              taborze pojazdów dostawczych i ciężarowych. Sprzęt ten serwisujemy w
              autoryzowanych punktach obsługi, co zapewnia bezpieczeństwo i wysoką
              jakość naszych usług.
            </p>
            <p className="text-lg leading-relaxed">
              Zakres świadczonych przez nas usług pozwala na kompleksową obsługę
              naszych klientów oraz ich minimalne zaangażowanie w proces produkcji.
              Wykwalifikowana kadra oraz bezawaryjny i niezawodny sprzęt to idealne
              połączenie. Dzięki temu nasz klient może oczekiwać od nas wykonania
              usługi na najwyższym poziomie, a także profesjonalnego doradztwa w
              zakresie doboru odpowiednich materiałów i indywidualnego dostosowania
              produktu do jego potrzeb.
            </p>
          </div>
          <div className="order-1 shrink-0 md:order-2">
            <div className="flex size-48 items-center justify-center rounded-xl border-4 border-accent bg-gradient-to-br from-gray-500 to-gray-700 text-white shadow-md">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

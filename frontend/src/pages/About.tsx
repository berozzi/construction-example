export default function About() {
  return (
    <>
      <section className="relative flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-construction-dark via-construction-gray to-construction-dark" />
        <div className="relative z-10 text-center">
          <span className="mb-2 block font-semibold text-construction-accent text-sm uppercase tracking-widest">
            Poznaj nas
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            O nas
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-construction-gray to-construction-dark p-12">
              <div className="text-center text-white">
                <div className="mb-4 text-6xl font-extrabold text-construction-accent">
                  1994
                </div>
                <p className="text-construction-muted text-sm">
                  Rok założenia firmy
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-construction-gray/80">
                Nasza firma rozpoczęła swą działalność w 1994 r. Początki były
                bardzo skromne. Jednak z upływem kolejnych lat przybywało nam
                doświadczenia, a to przełożyło się na jakość wykonywanych przez
                nas usług.
              </p>
              <p className="text-lg leading-relaxed text-construction-gray/80">
                W tym czasie zyskaliśmy zaufanie coraz większej rzeszy klientów,
                a to pozwoliło nam na dalszy rozwój firmy: zaangażowanie środków
                finansowych i zatrudnienie wykwalifikowanej kadry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 space-y-5 md:order-1">
              <p className="text-lg leading-relaxed text-construction-gray/80">
                W ciągu wielu lat, spośród wielu osób zatrudnionych w naszym
                zespole, udało nam się dobrać i wyszkolić doskonałą kadrę
                pracowników, posiadających umiejętności i wiedzę pozwalające na
                wykonywanie usług na najwyższym poziome.
              </p>
              <p className="text-lg leading-relaxed text-construction-gray/80">
                Aktualnie posiadamy pięć brygad wykonawczych oraz zespół
                zaopatrzeniowo-logistyczny, które są w stanie zorganizować i
                wykonać około 600m² jastrychów cementowych w ciągu jednej
                zmiany.
              </p>
            </div>
            <div className="order-1 flex items-center justify-center rounded-2xl bg-construction-dark p-12 md:order-2">
              <div className="text-center text-white">
                <div className="mb-4 text-5xl font-extrabold text-construction-accent">
                  600 m²
                </div>
                <p className="text-construction-muted text-sm">
                  Jastrychu cementowego na jedną zmianę
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-construction-gray to-construction-dark p-12">
              <div className="text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-4 size-16 text-construction-accent"
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
                <p className="text-construction-muted text-sm">
                  Nowoczesny sprzęt
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed text-construction-gray/80">
                W trosce o środowisko naturalne oraz konieczności obniżania
                kosztów produkcji, nasze brygady pracują na najnowszych,
                dostępnych na rynku, agregatach niemieckiej firmy BRINKMAN oraz
                nowoczesnym taborze pojazdów dostawczych i ciężarowych.
              </p>
              <p className="text-lg leading-relaxed text-construction-gray/80">
                Zakres świadczonych przez nas usług pozwala na kompleksową
                obsługę naszych klientów oraz ich minimalne zaangażowanie w
                proces produkcji. Wykwalifikowana kadra oraz bezawaryjny i
                niezawodny sprzęt to idealne połączenie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

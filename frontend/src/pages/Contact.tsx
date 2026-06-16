export default function Contact() {
  return (
    <>
      <section className="relative flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-construction-dark via-construction-gray to-construction-dark" />
        <div className="relative z-10 text-center">
          <span className="mb-2 block font-semibold text-construction-accent text-sm uppercase tracking-widest">
            Skontaktuj się
          </span>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Kontakt
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-2xl font-bold text-construction-dark">
                Napisz do nas
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="mb-1 block text-sm font-medium text-construction-gray/70">
                    Imię i Nazwisko
                  </label>
                  <input
                    type="text"
                    placeholder="Twoje imię i nazwisko"
                    className="w-full rounded-xl border border-construction-gray/20 bg-white px-5 py-3.5 text-construction-gray outline-none transition-all placeholder:text-construction-muted/50 focus:border-construction-accent focus:ring-2 focus:ring-construction-accent/20"
                  />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-construction-gray/70">
                      Adres e-mail
                    </label>
                    <input
                      type="email"
                      placeholder="Twój e-mail"
                      className="w-full rounded-xl border border-construction-gray/20 bg-white px-5 py-3.5 text-construction-gray outline-none transition-all placeholder:text-construction-muted/50 focus:border-construction-accent focus:ring-2 focus:ring-construction-accent/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-construction-gray/70">
                      Numer telefonu
                    </label>
                    <input
                      type="tel"
                      placeholder="Twój telefon"
                      className="w-full rounded-xl border border-construction-gray/20 bg-white px-5 py-3.5 text-construction-gray outline-none transition-all placeholder:text-construction-muted/50 focus:border-construction-accent focus:ring-2 focus:ring-construction-accent/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-construction-gray/70">
                    Treść wiadomości
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Treść wiadomości..."
                    className="w-full resize-none rounded-xl border border-construction-gray/20 bg-white px-5 py-3.5 text-construction-gray outline-none transition-all placeholder:text-construction-muted/50 focus:border-construction-accent focus:ring-2 focus:ring-construction-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-xl bg-construction-accent px-8 py-4 font-bold text-construction-dark transition-all hover:bg-construction-accent-hover hover:shadow-xl hover:shadow-construction-accent/25"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>

            <div>
              <h2 className="mb-8 text-2xl font-bold text-construction-dark">
                Dane kontaktowe
              </h2>
              <div className="mb-8 space-y-4">
                {[
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    ),
                    label: "Adres",
                    value: "ul. Wiejska 8, 65-609 Zielona Góra",
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    ),
                    label: "Telefony",
                    value: "602 679 761 / 604 518 314",
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    ),
                    label: "E-mail",
                    value: "biuro@posadzki.zgora.pl",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 rounded-lg bg-construction-accent/10 p-2.5 text-construction-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-construction-muted">
                        {item.label}
                      </div>
                      <div className="font-semibold text-construction-gray">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  title="Mapa dojazdu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1e2!2s51.940515!3d15.48841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU2JzI1LjkiTiAxNcKwMjknMTguMyJF!5e0!3m2!1spl!2spl!4v1"
                  className="h-72 w-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-construction-gray/10 bg-white p-6">
                <h3 className="mb-2 font-bold text-construction-dark">
                  Przedsiębiorstwo Remontowo-budowlane
                </h3>
                <p className="font-semibold text-construction-accent">
                  &quot;TOL-BUD&quot; Antoni Magiera
                </p>
                <div className="mt-3 space-y-1 text-sm text-construction-gray/70">
                  <p>ul. Wiejska 8, 65-609 Zielona Góra</p>
                  <p>NIP 929-101-22-18</p>
                  <p>fax. 68 458 76 01</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

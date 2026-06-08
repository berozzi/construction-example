export default function Contact() {
  return (
    <div className="p-5">
      <div className="border-l-4 border-accent bg-title-bg px-6 py-3 text-lg font-semibold text-gray-700">
        Skontaktuj się z nami!
      </div>

      <div className="mt-5 flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <form className="space-y-4">
            <div className="rounded-xl border-2 border-gray-300 p-2">
              <input
                type="text"
                placeholder="Imię i Nazwisko"
                className="w-full text-gray-500 outline-none"
              />
            </div>
            <div className="rounded-xl border-2 border-gray-300 p-2">
              <input
                type="email"
                placeholder="Adres e-mail"
                className="w-full text-gray-500 outline-none"
              />
            </div>
            <div className="rounded-xl border-2 border-gray-300 p-2">
              <input
                type="tel"
                placeholder="Numer telefonu"
                className="w-full text-gray-500 outline-none"
              />
            </div>
            <div className="rounded-xl border-2 border-gray-300 p-2">
              <textarea
                rows={5}
                placeholder="Treść wiadomości"
                className="w-full resize-none text-gray-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-accent px-8 py-2 font-bold text-white transition-colors hover:bg-red-700"
            >
              Wyślij
            </button>
          </form>
        </div>

        <div className="lg:w-1/2">
          <div className="h-64 w-full rounded-xl border-4 border-accent bg-gray-200">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.0!2d15.48841!3d51.940515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU2JzI1LjkiTiAxNcKwMjknMTguMyJF!5e0!3m2!1spl!2spl!4v1"
              className="h-full w-full rounded-xl"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="mt-4 space-y-1 text-sm text-[#555]">
            <p className="font-bold">
              Przedsiębiorstwo Remontowo-budowlane
            </p>
            <p className="font-bold">&quot;TOL-BUD&quot; Antoni Magiera</p>
            <p>ul. Wiejska 8</p>
            <p>65-609 Zielona Góra</p>
            <p>NIP 929-101-22-18</p>
            <p>tel. 604 518 314 lub 602 679 761</p>
            <p>fax. 68 458 76 01</p>
          </div>
        </div>
      </div>
    </div>
  )
}

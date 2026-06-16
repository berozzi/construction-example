const images = [
  { id: 1, title: "Realizacja – jastrych cementowy", gradient: "from-slate-600 to-slate-800" },
  { id: 2, title: "Posadzka anhydrytowa", gradient: "from-slate-500 to-slate-700" },
  { id: 3, title: "Podkład betonowy", gradient: "from-gray-600 to-gray-800" },
  { id: 4, title: "Betonowanie stropu TERIVA", gradient: "from-slate-700 to-slate-900" },
  { id: 5, title: "Wylewka cienkowarstwowa", gradient: "from-gray-500 to-gray-700" },
  { id: 6, title: "Izolacja posadzki", gradient: "from-slate-600 to-slate-900" },
  { id: 7, title: "Styrobeton", gradient: "from-gray-600 to-slate-800" },
  { id: 8, title: "Keramzytobeton", gradient: "from-slate-500 to-gray-800" },
  { id: 9, title: "Ławy fundamentowe", gradient: "from-gray-700 to-slate-900" },
  { id: 10, title: "Posadzka przemysłowa", gradient: "from-slate-600 to-gray-800" },
  { id: 11, title: "Remont podłoża", gradient: "from-gray-500 to-slate-700" },
  { id: 12, title: "Warstwa wyrównawcza", gradient: "from-slate-700 to-gray-900" },
  { id: 13, title: "Podkład szybkosprawny", gradient: "from-gray-600 to-slate-800" },
  { id: 14, title: "Szlichta betonowa", gradient: "from-slate-500 to-gray-700" },
  { id: 15, title: "Realizacja niestandardowa", gradient: "from-gray-700 to-slate-900" },
]

export default function Gallery() {
  return (
    <>
      <section className="relative flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-construction-dark via-construction-gray to-construction-dark" />
        <div className="relative z-10 text-center">
          <span className="mb-2 block font-semibold text-construction-accent text-sm uppercase tracking-widest">
            Nasze realizacje
          </span>
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Galeria
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {images.map((img) => (
              <div
                key={img.id}
                className="group mb-6 inline-block w-full overflow-hidden rounded-2xl shadow-lg transition-transform hover:-translate-y-1"
              >
                <div
                  className={
                    "flex h-40 items-center justify-center bg-gradient-to-br sm:h-56 " +
                    img.gradient
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-14 text-white/30 transition-all group-hover:scale-110 group-hover:text-white/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="border-t border-construction-gray/10 bg-white p-3 sm:p-4">
                  <p className="font-medium text-construction-gray text-sm">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

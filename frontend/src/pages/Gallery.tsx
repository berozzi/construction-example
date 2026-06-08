const images = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Zdjęcie - nr.${i + 1}`,
  gradient: `hsl(${(i * 24) % 360}, 30%, 40%)`,
}))

export default function Gallery() {
  return (
    <div className="p-5">
      <div className="border-l-4 border-accent bg-title-bg px-6 py-3 text-lg font-semibold text-gray-700">
        Galeria
      </div>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.id}
            className="group overflow-hidden rounded-xl border-4 border-accent shadow-md transition-transform hover:scale-[1.02]"
          >
            <div
              className="flex h-48 items-center justify-center text-white"
              style={{ background: img.gradient }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 opacity-50"
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
            <div className="bg-gray-100 p-3 text-center text-sm text-gray-600">
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

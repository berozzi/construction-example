export default function Footer() {
  return (
    <footer className="bg-construction-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4">
              <img src="/logo.svg" alt="TOL-BUD" className="h-10" />
            </div>
            <p className="leading-relaxed text-construction-muted text-sm">
              Ponad 30 lat doświadczenia w branży posadzkarskiej. Jakość,
              terminowość i zadowolenie klienta to nasze priorytety.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-sm uppercase tracking-widest text-construction-accent">
              Kontakt
            </h4>
            <div className="space-y-2 text-construction-muted text-sm">
              <p>ul. Wiejska 8</p>
              <p>65-609 Zielona Góra</p>
              <p className="pt-2">tel. 602 679 761</p>
              <p>tel. 604 518 314</p>
              <p>fax. 68 458 76 01</p>
              <p className="pt-2 font-medium text-white">
                biuro@posadzki.zgora.pl
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-sm uppercase tracking-widest text-construction-accent">
              Usługi
            </h4>
            <div className="space-y-2 text-construction-muted text-sm">
              <p>Podłoża betonowe</p>
              <p>Podłoża anhydrytowe</p>
              <p>Styrobeton</p>
              <p>Keramzytobeton</p>
              <p>Izolacje posadzek</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl px-6 text-center text-construction-muted text-xs">
          &copy; {new Date().getFullYear()} TOL-BUD Antoni Magiera. Wszelkie
          prawa zastrzeżone.
        </div>
      </div>
    </footer>
  )
}

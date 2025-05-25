export default function Footer() {
  return (
    <footer className="bg-[#58937E] text-white font-bree py-4 flex flex-col items-center space-y-2 text-sm sm:text-base shadow-bloc-top-phone sm:shadow-bloc-top">
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <a href="/" className="hover:underline">
          Accueil
        </a>
        <a href="/jurassic-islas" className="hover:underline">
          Jurassic Islas
        </a>
        <a href="/ultime-victime" className="hover:underline">
          Ultime Victime
        </a>
        <a href="/monster-snacks" className="hover:underline">
          Monster Snacks
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </nav>
      <div className="text-white text-xs sm:text-sm font-medium">
        © 2022 Ju&Go
      </div>
    </footer>
  );
}

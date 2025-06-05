import gameList from "../games-list";

export default function Footer() {
  return (
    <footer className="bg-[#58937E] text-white font-bree py-4 flex flex-col items-center space-y-2 text-sm sm:text-base shadow-bloc-top-phone sm:shadow-bloc-top">
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <a href="/" className="hover:underline">
          Accueil
        </a>
        {Object.values(gameList).map((game) => (
          <a key={game.name} className="hover:underline" href={game.path}>
            {game.name}
          </a>
        ))}
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

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import gameList from "../games-list";
import Link from "next/link";

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

      <div className="flex gap-4 text-xl sm:text-2xl">
        <Link
          href="https://www.instagram.com/juego_boardgames/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaInstagram />
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=61590285694604"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaFacebook />
        </Link>

        <Link
          href="https://www.youtube.com/@JueGoBoardgames"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaYoutube />
        </Link>
      </div>

      <div className="text-white text-xs sm:text-sm font-medium">
        © 2026 Ju&Go
      </div>
    </footer>
  );
}

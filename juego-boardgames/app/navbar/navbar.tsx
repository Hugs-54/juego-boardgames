"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import classes from "./navbar.module.css";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import gameList from "../games-list";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="px-10 py-8">
      <div className={"font-bree flex items-center"}>
        <Link className="pr-5" href="/">
          <Image
            className="w-2/3 md:w-20 xl:w-full"
            src="/Logo_JueGo.png"
            width={110}
            height={128}
            alt="Logo Ju&Go"
          />
        </Link>

        <div className={`hidden md:flex md:text-xl xl:text-4xl items-center`}>
          <Link
            className="text-[#58937E] hover:text-[#73bea4] px-5 hover:scale-110 transition-transform"
            href="/"
          >
            ACCUEIL
          </Link>
          <div className="group px-5 hover:scale-110 transition-transform">
            <p className="text-[#58937E] hover:text-[#73bea4] cursor-default group-hover:underline md:underline-offset-10 xl:underline-offset-20">
              JEUX
            </p>
            <div className="absolute hidden group-hover:flex flex-col w-max z-10 md:pt-2 xl:pt-8 md:space-y-1 xl:space-y-4">
              {Object.values(gameList).map((game) => (
                <Link
                  key={game.name}
                  className="text-[#58937E] hover:text-[#73bea4]"
                  href={game.path}
                >
                  {game.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
          <Link
            className="text-[#58937E] hover:text-[#73bea4] px-5 hover:scale-110 transition-transform"
            href="/discover-us"
          >
            NOUS DECOUVRIR
          </Link>
          <Link
            className="text-[#58937E] hover:text-[#73bea4] px-5 hover:scale-110 transition-transform"
            href="/contact"
          >
            CONTACT
          </Link>
          <Link
            href="https://www.instagram.com/juego_boardgames/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58937E] hover:text-[#73bea4] pl-5 pr-3 hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61590285694604"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58937E] hover:text-[#73bea4] pr-3 hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </Link>

          <Link
            href="https://www.youtube.com/@JueGoBoardgames"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58937E] hover:text-[#73bea4] hover:scale-110 transition-transform"
          >
            <FaYoutube />
          </Link>
        </div>

        <button
          className={`${
            menuOpen ? "hidden" : "block"
          } block md:hidden absolute end-4`}
          onClick={toggleMenu}
        >
          <Bars3Icon className="size-10 text-[#58937E] hover:text-[#73bea4]" />
        </button>

        <div
          className={`fixed inset-0 z-50 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out ${
            classes.greenBackground
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <button className="start mb-5 mt-6" onClick={toggleMenu}>
              <ChevronRightIcon className="size-10 text-white hover:text-[#dffaf0]" />
            </button>
            <Link
              className={`mb-4 text-white hover:text-[#dffaf0] text-base sm:text-2xl`}
              href="/"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <div className="flex flex-col mb-1">
              <p
                className={`mb-2 text-white text-base sm:text-2xl cursor-default`}
              >
                Jeux
              </p>
              {Object.values(gameList).map((game) => (
                <Link
                  key={game.name}
                  className={`mb-4 ml-4 text-white hover:text-[#dffaf0] text-base sm:text-2xl`}
                  onClick={toggleMenu}
                  href={game.path}
                >
                  {game.name}
                </Link>
              ))}
            </div>
            <Link
              className={`mb-4 text-white hover:text-[#dffaf0] text-base sm:text-2xl`}
              href="/discover-us"
              onClick={toggleMenu}
            >
              Nous découvrir
            </Link>
            <Link
              className={`mb-4 text-white hover:text-[#dffaf0] text-base sm:text-2xl`}
              href="/contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-row">
              <Link
                href="https://www.instagram.com/juego_boardgames/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white hover:text-[#dffaf0] pr-3 sm:text-2xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61590285694604"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white hover:text-[#dffaf0] pr-3 sm:text-2xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.youtube.com/@JueGoBoardgames"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#dffaf0] sm:text-2xl"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/*<nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Bars3Icon
                className={`${menuOpen ? "hidden" : "block"} size-10 ${
                  classes.navItem
                }`}
              />

              <ChevronRightIcon
                className={`${menuOpen ? "block" : "hidden"} size-10 ${
                  classes.navItem
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 grid">
            <Link href="/" passHref>
              MOBILE
            </Link>
            <Link href="/team" passHref>
              Team
            </Link>
            <Link href="/projects" passHref>
              Projects
            </Link>
            <Link href="/calendar" passHref>
              Calendar
            </Link>
          </div>
        </div>
      )}
    </nav>
    */

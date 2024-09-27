"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bree_Serif } from "next/font/google";
import classes from "./navbar.module.css";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const bree_Serif = Bree_Serif({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="px-10 py-8">
      <div className={`${bree_Serif.className} flex items-center`}>
        <Link className="pr-5" href="/">
          <Image
            className="w-2/3 md:w-20 xl:w-full"
            src="/Logo_JueGo.png"
            width={110}
            height={128}
            alt="Logo Ju&Go"
          />
        </Link>

        <div className={`hidden md:flex md:text-xl xl:text-5xl items-center`}>
          <Link className={`${classes.navItem} px-5`} href="/">
            ACCUEIL
          </Link>

          <div className="group px-5">
            <p
              className={`${classes.navItem} cursor-default group-hover:underline md:underline-offset-10 xl:underline-offset-20`}
            >
              JEUX
            </p>
            <div className="absolute hidden group-hover:flex flex-col w-max z-10 md:pt-2 xl:pt-8 md:space-y-1 xl:space-y-4">
              <Link className={`${classes.navItem}`} href="/discover-us">
                JURASSIC ISLAS
              </Link>
              <Link className={`${classes.navItem}`} href="/discover-us">
                ULTIME VICTIME
              </Link>
              <Link className={`${classes.navItem}`} href="/discover-us">
                MONSTER SNACKS
              </Link>
            </div>
          </div>

          <Link className={`${classes.navItem} px-5 `} href="/discover-us">
            NOUS DECOUVRIR
          </Link>
          <Link className={`${classes.navItem} px-5 `} href="/contact">
            CONTACT
          </Link>
        </div>

        <button
          className={`${
            menuOpen ? "hidden" : "block"
          } block md:hidden absolute end-4`}
          onClick={toggleMenu}
        >
          <Bars3Icon className={`size-10 ${classes.navItem}`} />
        </button>

        <div
          className={`fixed inset-0 z-50 transform ${
            menuOpen ? "translate-x-1/2" : "translate-x-full"
          } transition-transform duration-300 ease-in-out ${
            classes.greenBackground
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <button className="start mb-5 mt-6" onClick={toggleMenu}>
              <ChevronRightIcon
                className={`size-10 ${classes.navItemMobile}`}
              />
            </button>

            <Link
              className={`mb-4 ${classes.navItemMobile} text-base sm:text-2xl`}
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
              <Link
                className={`mb-4 ml-4 ${classes.navItemMobile} text-base sm:text-2xl`}
                href="/discover-us"
                onClick={toggleMenu}
              >
                Jurassic Islas
              </Link>
              <Link
                className={`mb-4 ml-4 ${classes.navItemMobile} text-base sm:text-2xl`}
                href="/discover-us"
                onClick={toggleMenu}
              >
                Ultime Victime
              </Link>
              <Link
                className={`mb-4 ml-4 ${classes.navItemMobile} text-base sm:text-2xl`}
                href="/discover-us"
                onClick={toggleMenu}
              >
                Monster Snacks
              </Link>
            </div>

            <Link
              className={`mb-4 ${classes.navItemMobile} text-base sm:text-2xl`}
              href="/discover-us"
              onClick={toggleMenu}
            >
              Nous découvrir
            </Link>
            <Link
              className={`mb-4 ${classes.navItemMobile} text-base sm:text-2xl`}
              href="/contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
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

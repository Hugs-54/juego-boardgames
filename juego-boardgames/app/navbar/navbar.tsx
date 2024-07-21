"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Bree_Serif } from "next/font/google";
import classes from "./navbar.module.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const bree_Serif = Bree_Serif({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" px-12 py-8">
      <div
        className={`${bree_Serif.className} ${
          menuOpen ? "flex" : "hidden"
        } flex items-center`}
      >
        <Link className="pr-5" href="/">
          <Image
            src="/Logo_JueGo.png"
            width={110}
            height={128}
            alt="Logo Ju&Go"
          />
        </Link>
        <button className="block md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
        <div className={`text-sm md:text-xl xl:text-5xl`}>
          <Link className={`${classes.navItem} px-5 `} href="/">
            ACCUEIL
          </Link>
          <Link className={`${classes.navItem} px-5`} href="/discover-us">
            JEUX
          </Link>
          <Link className={`${classes.navItem} px-5 `} href="/discover-us">
            NOUS DECOUVRIR
          </Link>
          <Link className={`${classes.navItem} px-5 `} href="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import gameList from "../games-list";
import Link from "next/link";

export default function GameGrid() {
  const games = Object.values(gameList);

  return (
    <>
      <div className="text-center font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
        <h1 className="text-white mb-6 sm:mb-6 md:mb-10 xl:mb-16 font-bree">
          Nos Jeux
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 mb-8 sm:mb-12 md:mb-16 xl:mb-24">
        {games.map((game) => (
          <Link key={game.name} href={game.path} className="block">
            <div className="bg-white rounded-3xl p-4 flex flex-col items-center shadow-item-phone sm:shadow-item h-48 sm:h-64 md:h-72 xl:h-[420px]">
              <h1 className="text-sm sm:text-lg md:text-xl xl:text-4xl text-center font-bree text-[#305B68] my-1 sm:my-2 md:my-3">
                {game.name}
              </h1>

              <div className="relative flex-1 w-4/5 min-h-0">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm md:text-base xl:text-2xl text-gray-400 font-bree mt-2 sm:mt-3 md:mt-4 shrink-0">
                {game.dates}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

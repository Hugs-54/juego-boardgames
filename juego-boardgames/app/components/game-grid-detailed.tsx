"use client";

import React from "react";
import Image from "next/image";
import gameList from "../games-list";
import Link from "next/link";

const truncate = (text: string, maxLength: number = 120) =>
  text && text.length > maxLength
    ? text.slice(0, maxLength).trimEnd() + "..."
    : text;

const currentYear = new Date().getFullYear();

const isInProgress = (dates: string) => {
  const endPart = dates.split("–")[dates.split("–").length - 1].trim();
  return endPart.toUpperCase().includes("XX");
};

const GameCard = ({ game }: { game: (typeof gameList)[string] }) => (
  <Link href={game.path} className="block">
    <div className="bg-white rounded-3xl p-4 sm:p-5 md:p-6 xl:p-8 flex flex-col shadow-item-phone sm:shadow-item">
      <h1 className="text-lg sm:text-xl md:text-2xl xl:text-5xl text-center font-bree text-[#305B68] mb-2 sm:mb-3">
        {game.name}
      </h1>

      <div className="relative w-full h-40 sm:h-48 md:h-56 xl:h-80 mb-3 sm:mb-4">
        <Image
          src={game.image}
          alt={game.name}
          fill
          className="object-contain"
        />
      </div>

      {(game.time || game.players || game.age) && (
        <div className="flex gap-3 sm:gap-4 justify-center mb-2 sm:mb-3">
          {game.players && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base xl:text-xl text-black font-bree">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 xl:w-7 xl:h-7 flex-shrink-0">
                <Image
                  src="/nombre-joueur.png"
                  alt="joueurs"
                  fill
                  className="object-contain"
                />
              </div>
              <span>{game.players}</span>
            </div>
          )}
          {game.time && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base xl:text-xl text-black font-bree">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 xl:w-7 xl:h-7 flex-shrink-0">
                <Image
                  src="/duree.png"
                  alt="durée"
                  fill
                  className="object-contain"
                />
              </div>
              <span>{game.time}</span>
            </div>
          )}
          {game.age && (
            <div className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base xl:text-xl text-black font-bree">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 xl:w-7 xl:h-7 flex-shrink-0">
                <Image
                  src="/tranche-dage.png"
                  alt="âge"
                  fill
                  className="object-contain"
                />
              </div>
              <span>{game.age}</span>
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-2 mb-1 sm:mb-2">
        <div className="flex">
          {game.authors.map((author, i) => (
            <div
              key={author}
              className="flex items-center justify-center rounded-full bg-[#58937E] text-white font-bold font-bree border-2 border-white
                w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 xl:w-12 xl:h-12
                text-xs sm:text-sm md:text-base xl:text-xl"
              style={{
                marginLeft: i > 0 ? "-6px" : "0",
                zIndex: game.authors.length - i,
              }}
            >
              {author[0]}
            </div>
          ))}
        </div>
        <p className="text-xs sm:text-sm md:text-base xl:text-2xl text-[#58937E] font-bree font-bold">
          {game.authors.join(" & ")}
        </p>
      </div>

      <p className="text-xs sm:text-sm md:text-base xl:text-2xl text-gray-400 font-bree mb-2 sm:mb-3">
        {game.dates}
      </p>

      {game.description && (
        <p className="text-xs sm:text-sm md:text-base xl:text-2xl text-gray-500 font-bree leading-relaxed">
          {truncate(game.description)}
        </p>
      )}
    </div>
  </Link>
);

export default function GameGridDetailed() {
  const allGames = Object.values(gameList);
  const inProgress = allGames.filter((g) => isInProgress(g.dates));
  const finished = allGames.filter((g) => !isInProgress(g.dates));

  return (
    <div className="bg-[#58937E] py-6 sm:pt-8 md:pt-10 xl:pt-14 shadow-bloc-top-phone sm:shadow-bloc-top">
      {/* Jeux en cours */}
      {inProgress.length > 0 && (
        <div className="mb-8 sm:mb-12 md:mb-16 xl:mb-20">
          <div className="flex items-center gap-4 px-4 mb-6 sm:mb-8 md:mb-10 xl:mb-14">
            <div className="flex-1" />
            <h2 className="text-white font-bree font-bold text-xl sm:text-3xl md:text-5xl xl:text-7xl flex-shrink-0">
              Prototypes
            </h2>
            <div className="flex-1" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            {inProgress.map((game) => (
              <GameCard key={game.name} game={game} />
            ))}
          </div>
        </div>
      )}

      {/* Jeux terminés */}
      {finished.length > 0 && (
        <div className="mb-8 sm:mb-12 md:mb-16 xl:mb-24">
          <div className="flex items-center gap-4 px-4 mb-6 sm:mb-8 md:mb-10 xl:mb-14">
            <div className="flex-1 " />
            <h2 className="text-white font-bree font-bold text-xl sm:text-3xl md:text-5xl xl:text-7xl flex-shrink-0">
              Terminés
            </h2>
            <div className="flex-1 " />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            {finished.map((game) => (
              <GameCard key={game.name} game={game} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

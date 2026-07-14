import React from "react";
import Footer from "../components/footer";
import GameGridDetailed from "../components/game-grid-detailed";

export default function Games() {
  return (
    <>
      <div className="text-center font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
        <h1 className="text-[#58937E] mb-6 sm:mb-6 md:mb-10 xl:mb-16 font-bree">
          Nos Jeux
        </h1>
      </div>
      <GameGridDetailed></GameGridDetailed>
      <Footer></Footer>
    </>
  );
}

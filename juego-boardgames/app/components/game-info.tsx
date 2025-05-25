import React from "react";
import Image from "next/image";

export default function GameInfo(props: {
  nbPlayer: string;
  age: string;
  time: string;
}) {
  return (
    <>
      <div className="relative w-full pb-12 sm:pb-20 md:pb-28 xl:pb-32">
        <div className="absolute top-0 left-0 w-full h-12 sm:h-28 md:h-36 xl:h-44 bg-[#58937E] z-0 shadow-bloc-down-phone sm:shadow-bloc-down" />

        <div className="relative z-10 max-w-md sm:max-w-xl md:max-w-4xl xl:max-w-6xl mx-auto grid grid-cols-3 gap-0 sm:gap-24 md:gap-8 xl:gap-52 justify-items-center">
          <div className="bg-white rounded-3xl shadow-item-phone sm:shadow-item flex flex-col items-center justify-center p-4 w-20 h-28 sm:w-44 md:w-52 xl:w-80 sm:h-52 md:h-64 xl:h-96">
            <Image
              className="w-3/5"
              src="/nombre-joueur.png"
              width={200}
              height={201}
              alt="Logo nombre de joueur"
            />
            <p className="font-bold pt-4 text-2xl sm:text-5xl md:text-7xl xl:text-8xl">
              {props.nbPlayer}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-item-phone sm:shadow-item flex flex-col items-center justify-center p-4 w-20 h-28 sm:w-44 md:w-52 xl:w-80 sm:h-52 md:h-64 xl:h-96">
            <Image
              className="w-3/5"
              src="/duree.png"
              width={200}
              height={201}
              alt="Logo duree"
            />
            <p className="font-bold pt-4 text-2xl sm:text-5xl md:text-7xl xl:text-8xl">
              {props.time}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-item-phone sm:shadow-item flex flex-col items-center justify-center p-4 w-20 h-28 sm:w-44 md:w-52 xl:w-80 sm:h-52 md:h-64 xl:h-96">
            <Image
              className="w-3/5"
              src="/tranche-dage.png"
              width={200}
              height={201}
              alt="Logo tranche d'age"
            />
            <p className="font-bold pt-4 text-2xl sm:text-5xl md:text-7xl xl:text-8xl">
              {props.age}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

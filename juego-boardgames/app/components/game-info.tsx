import React from "react";
import Image from "next/image";

export default function GameInfo() {
  return (
    <>
      <div className="relative w-full pb-12">
        {/* Bande verte en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-12 sm:h-28 md:h-36 xl:h-44 bg-[#58937E] z-0 shadow-xl" />

        {/* Grille centrée */}
        <div className="relative z-10 max-w-md sm:max-w-xl md:max-w-4xl xl:max-w-6xl mx-auto grid grid-cols-3 gap-0 sm:gap-28 md:gap-8 xl:gap-52 justify-items-center">
          {/* Carte 1 */}
          <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-4 w-20 h-28 sm:w-44 md:w-52 xl:w-80 sm:h-52 md:h-64 xl:h-96">
            <Image
              className="w-3/5"
              src="/nombre-joueur.png"
              width={200}
              height={201}
              alt="Logo nombre de joueur"
            />
            <p className="font-bold pt-4 text-2xl sm:text-5xl md:text-7xl xl:text-8xl">
              2-6
            </p>
          </div>

          {/* Carte 2 */}
          <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-4 w-20 h-28 sm:w-44 md:w-52 xl:w-80 sm:h-52 md:h-64 xl:h-96">
            <Image
              className="w-3/5"
              src="/duree.png"
              width={200}
              height={201}
              alt="Logo duree"
            />
            <p className="font-bold pt-4 text-2xl sm:text-5xl md:text-7xl xl:text-8xl">
              30&apos;
            </p>
          </div>

          {/* Carte 3 */}
          <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-4 w-20 h-28 sm:w-44 md:w-52 xl:w-80 sm:h-52 md:h-64 xl:h-96">
            <Image
              className="w-3/5"
              src="/tranche-dage.png"
              width={200}
              height={201}
              alt="Logo tranche d'age"
            />
            <p className="font-bold pt-4 text-2xl sm:text-5xl md:text-7xl xl:text-8xl">
              7+
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * <div className="grid grid-cols-3 grid-rows-1 font-bree pb-24">
        <div className="col-start-1 col-end-4 row-start-1 row-end-1 bg-[#58937E] -z-10 w-full h-full -translate-y-48" />
        <div className="col-start-1 row-start-1 w-96">
          <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center py-8 mx-16">
            <Image
              className="w-3/5"
              src="/nombre-joueur.png"
              width={200}
              height={201}
              alt="Logo nombre de joueur"
            />
            <p className="text-8xl">2-6</p>
          </div>
        </div>
        <div className="col-start-2 row-start-1 w-96">
          <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center py-8 mx-16">
            <Image
              className="w-3/5"
              src="/duree.png"
              width={200}
              height={201}
              alt="Logo duree"
            />
            <p className="text-8xl">30'</p>
          </div>
        </div>

        <div className="col-start-3 row-start-1 w-96">
          <div className="bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center py-8 mx-16">
            <Image
              className="w-3/5"
              src="/tranche-dage.png"
              width={200}
              height={201}
              alt="Logo tranche d'age"
            />
            <p className="text-8xl">7+</p>
          </div>
        </div>
      </div>
 * 
 * 
 * 
 * 
 * <div className="grid grid-cols-3 grid-rows-4 font-bree gap-x-32 pb-24">
        <div className="col-start-1 col-end-1 row-start-1 row-end-5 bg-white rounded-xl shadow-xl mx-10" />
        <div className="col-start-2 col-end-2 row-start-1 row-end-5 bg-white rounded-xl shadow-xl mx-10" />
        <div className="col-start-3 col-end-3 row-start-1 row-end-5 bg-white rounded-xl shadow-xl mx-10" />
        <div className="col-start-1 row-start-1 row-span-3 flex flex-col items-center justify-center">
          <Image
            className="w-1/3"
            src="/nombre-joueur.png"
            width={200}
            height={201}
            alt="Logo nombre de joueur"
          />
        </div>
        <div className="col-start-1 row-start-4 text-center flex justify-center">
          <p className="text-6xl">2-6</p>
        </div>
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col items-center justify-center">
          <Image
            className="w-1/3"
            src="/duree.png"
            width={200}
            height={201}
            alt="Logo duree"
          />
        </div>
        <div className="col-start-2 row-start-4 text-center flex justify-center">
          <p className="text-6xl font-bold">30'</p>
        </div>
        <div className="col-start-3 row-start-1 row-span-3 flex flex-col items-center justify-center">
          <Image
            className="w-1/3"
            src="/tranche-dage.png"
            width={200}
            height={201}
            alt="Logo tranche d'age"
          />
        </div>
        <div className="col-start-3 row-start-4 text-center flex justify-center">
          <p className="text-6xl font-bold">7+</p>
        </div>

        <div className="col-start-1 col-end-4 row-start-1 row-end-3 bg-[#58937E] -z-10 w-full h-full" />
      </div>
 */

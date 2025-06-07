"use client";

import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div className="min-h-fit flex flex-col items-center justify-center mb-2 shadow-bloc-phone sm:shadow-bloc bg-[#58937E]">
      <p className="text-white font-bree my-4 sm:my-5 md:my-8 xl:my-12 text-center font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
        Qui sommes-nous ?
      </p>

      <div className="flex flex-col md:flex-row items-start justify-center gap-3 mb-6 sm:mb-6 md:mb-10 xl:mb-16">
        {/* Julien */}
        <div className="flex flex-col items-center text-white max-w-xs text-center">
          <div className="rounded-2xl overflow-hidden w-40 h-40 relative">
            <Image
              src="/Julien.png"
              alt="Julien"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-4 text-4xl font-bowlby">
            <span className="text-[#15750A]">Ju</span>lien
          </h2>
          <p className="mt-2 text-sm sm:text-lg md:text-xl">
            Concierge en chef sénior et passionné par les jeux depuis toujours.
          </p>
          <p className="mt-2 font-semibold text-sm sm:text-lg md:text-xl">
            Expert en découpage de coin de carte
          </p>
        </div>

        {/* & centré verticalement */}
        <div className="flex items-center justify-center px-2 self-stretch">
          <span className="text-5xl text-[#D72631] font-bowlby">&</span>
        </div>

        {/* Hugo */}
        <div className="flex flex-col items-center text-white max-w-xs text-center">
          <div className="rounded-2xl overflow-hidden w-40 h-40 relative">
            <Image src="/Hugo.png" alt="Hugo" fill className="object-cover" />
          </div>
          <h2 className="mt-4 text-4xl font-bowlby">
            <span className="text-white">Hu</span>
            <span className="text-[#15750A]">go</span>
          </h2>
          <p className="mt-2 text-sm sm:text-lg md:text-xl">
            Jeune développeur informatique et passionné par les jeux depuis
            toujours.
          </p>
          <p className="mt-2 font-semibold text-sm sm:text-lg md:text-xl">
            Expert en création de tableur
          </p>
        </div>
      </div>
    </div>
  );
}

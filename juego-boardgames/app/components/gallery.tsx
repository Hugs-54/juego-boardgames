"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function GameGallery(props: {
  images: string[];
  isWhite?: boolean;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";

  const [main, ...rest] = props.images;

  const prev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + props.images.length) % props.images.length,
    );
  };

  const next = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % props.images.length);
  };

  return (
    <>
      <div
        className={`min-h-fit flex flex-col items-center justify-center font-bree mb-2 py-8 sm:py-10 md:py-14 xl:py-20 ${
          props.isWhite ? "" : "shadow-bloc-phone sm:shadow-bloc"
        }`}
        style={{ backgroundColor: primaryColor }}
      >
        <h2
          className="font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl mb-6 sm:mb-8 md:mb-10 xl:mb-14"
          style={{ color: secondaryColor }}
        >
          Galerie
        </h2>

        <div
          className="w-11/12 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 xl:gap-5"
          style={{ gridTemplateRows: "repeat(2, clamp(140px, 20vw, 320px))" }}
        >
          <div
            className="col-span-2 row-span-2 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer relative"
            onClick={() => setSelectedIndex(0)}
          >
            <Image
              src={main}
              alt="photo principale"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {rest.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className="rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer relative"
              onClick={() => setSelectedIndex(i + 1)}
            >
              <Image
                src={src}
                alt={`photo ${i + 2}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Fermer */}
          <button
            className="absolute top-5 right-6 text-white hover:text-gray-300 z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <XMarkIcon className="size-10" />
          </button>

          {/* Flèche gauche */}
          <button
            className="absolute left-4 sm:left-8 text-white hover:text-gray-300 z-10 bg-black/30 rounded-full p-1 sm:p-2"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeftIcon className="size-8 sm:size-12" />
          </button>

          {/* Image */}
          <div
            className="relative w-[80vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={props.images[selectedIndex]}
              alt="photo agrandie"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* Flèche droite */}
          <button
            className="absolute right-4 sm:right-8 text-white hover:text-gray-300 z-10 bg-black/30 rounded-full p-1 sm:p-2"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRightIcon className="size-8 sm:size-12" />
          </button>

          {/* Indicateur */}
          <div className="absolute bottom-6 flex gap-2">
            {props.images.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  width: i === selectedIndex ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === selectedIndex ? "white" : "rgba(255,255,255,0.4)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(i);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

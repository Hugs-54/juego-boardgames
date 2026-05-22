"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Review = {
  name: string;
  date: string;
  text: string;
};

export default function Review(props: {
  reviews: Review[];
  isWhite?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";
  const avatarColor = props.isWhite ? "#58937E" : "#2d5061";

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 768) setVisibleCount(2);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, props.reviews.length - visibleCount);
  const prev = () =>
    setIndex((i) => (i - 1 + props.reviews.length) % props.reviews.length);
  const next = () => setIndex((i) => (i + 1) % props.reviews.length);
  const visible = props.reviews
    .slice(index, index + visibleCount)
    .concat(
      props.reviews.slice(
        0,
        Math.max(0, index + visibleCount - props.reviews.length),
      ),
    )
    .slice(0, visibleCount);

  return (
    <div
      className={`min-h-fit flex flex-col items-center justify-center font-bree mb-2 py-8 sm:py-10 md:py-14 xl:py-20 ${
        props.isWhite ? "" : "shadow-bloc-phone sm:shadow-bloc"
      }`}
      style={{ backgroundColor: primaryColor }}
    >
      {/* Titre */}
      <h2
        className="font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl mb-6 sm:mb-8 md:mb-10 xl:mb-14"
        style={{ color: secondaryColor }}
      >
        Avis
      </h2>

      {/* Carousel */}
      <div className="w-11/12 flex items-center gap-2 sm:gap-4 md:gap-6">
        {/* Flèche gauche */}
        <button
          onClick={prev}
          className="flex-shrink-0 rounded-full p-1 sm:p-2 transition-opacity hover:opacity-70"
          style={{ backgroundColor: secondaryColor }}
        >
          <ChevronLeftIcon
            className="size-5 sm:size-7 md:size-9 xl:size-12"
            style={{ color: primaryColor }}
          />
        </button>

        {/* Cartes visibles */}
        <div
          className={`flex-1 grid gap-4 sm:gap-6 md:gap-8 xl:gap-10 items-start ${
            visibleCount === 1
              ? "grid-cols-1"
              : visibleCount === 2
                ? "grid-cols-2"
                : "grid-cols-3"
          }`}
        >
          {visible.map((review, i) => (
            <div
              key={index + i}
              className="bg-white rounded-3xl shadow-item-phone sm:shadow-item flex flex-col gap-2 sm:gap-3 p-4 sm:p-5 md:p-6 xl:p-8 h-40 sm:h-48 md:h-52 xl:h-72 overflow-y-auto"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="flex items-center justify-center rounded-full text-white font-bold flex-shrink-0
                    w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-20 xl:h-20
                    text-base sm:text-xl md:text-2xl xl:text-4xl"
                  style={{ backgroundColor: avatarColor }}
                >
                  {review.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <p
                    className="font-bold text-sm sm:text-base md:text-lg xl:text-3xl"
                    style={{ color: "#2d5061" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-xs sm:text-sm md:text-base xl:text-xl"
                    style={{ color: "#7aaa97" }}
                  >
                    {review.date}
                  </p>
                </div>
              </div>
              <p
                className="text-xs sm:text-sm md:text-base xl:text-2xl leading-relaxed italic"
                style={{ color: "#555" }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Flèche droite */}
        <button
          onClick={next}
          className="flex-shrink-0 rounded-full p-1 sm:p-2 transition-opacity hover:opacity-70"
          style={{ backgroundColor: secondaryColor }}
        >
          <ChevronRightIcon
            className="size-5 sm:size-7 md:size-9 xl:size-12"
            style={{ color: primaryColor }}
          />
        </button>
      </div>

      {/* Indicateur */}
      <div className="flex gap-2 mt-4 sm:mt-6">
        {props.reviews.map(
          (
            _,
            i, // ← remplace Array.from({ length: maxIndex + 1 }).map(...)
          ) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="rounded-full cursor-pointer transition-all duration-200"
              style={{
                width: i === index ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === index ? secondaryColor : `${secondaryColor}55`,
              }}
            />
          ),
        )}
      </div>
    </div>
  );
}

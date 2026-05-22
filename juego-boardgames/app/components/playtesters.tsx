import React from "react";

export default function Playtesters(props: {
  playtesters: string[];
  isWhite?: boolean;
}) {
  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";

  return (
    <div
      className={`min-h-fit flex flex-col items-center justify-center font-bree mb-2 py-8 sm:py-10 md:py-14 xl:py-20 ${
        props.isWhite ? "" : "shadow-bloc-phone sm:shadow-bloc"
      }`}
      style={{ backgroundColor: primaryColor }}
    >
      {/* Titre */}
      <p
        className="font-bold text-xl sm:text-3xl md:text-5xl xl:text-7xl mb-6 sm:mb-8 md:mb-10 xl:mb-14 text-center"
        style={{ color: secondaryColor }}
      >
        Merci aux{" "}
        <span className="text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
          {props.playtesters.length}
        </span>{" "}
        testeurs
      </p>

      {/* Liste */}
      <div className="w-11/12 flex flex-wrap gap-2 sm:gap-3 md:gap-4 xl:gap-5 justify-center">
        {props.playtesters.map((name, i) => (
          <div
            key={i}
            className="px-3 sm:px-4 md:px-5 xl:px-7 py-1 sm:py-1.5 md:py-2 xl:py-3 rounded-full text-xs sm:text-sm md:text-base xl:text-2xl font-medium"
            style={{
              backgroundColor: props.isWhite
                ? "#f0f7f4"
                : "rgba(255,255,255,0.15)",
              color: props.isWhite ? "#2d5061" : "#FFFFFF",
              border: props.isWhite ? "1.5px solid #c5ddd6" : "none",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

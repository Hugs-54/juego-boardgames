import React from "react";

type Stat = {
  value: string;
  label: string;
};

export default function Statistics(props: {
  stats: Stat[];
  isWhite?: boolean;
}) {
  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";
  const valueColor = props.isWhite ? "#2d5061" : "#FFFFFF";
  const labelColor = props.isWhite ? "#58937E" : "rgba(255,255,255,0.8)";
  const sepColor = props.isWhite
    ? "rgba(88,147,126,0.4)"
    : "rgba(255,255,255,0.4)";

  return (
    <div
      className={`min-h-fit flex flex-col items-center justify-center font-bree mb-2 py-8 sm:py-10 md:py-14 xl:py-20 ${
        props.isWhite ? "" : "shadow-bloc-phone sm:shadow-bloc"
      }`}
      style={{ backgroundColor: primaryColor }}
    >
      {/* Titre */}
      <h2
        className="font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl mb-6 sm:mb-8 md:mb-10 xl:mb-16"
        style={{ color: secondaryColor }}
      >
        Statistiques
      </h2>

      {/* Stats */}
      <div className="flex items-center">
        {props.stats.map((stat, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div
                className="w-0.5 sm:w-[3px] h-8 sm:h-10 md:h-14 xl:h-20 rounded-sm mx-4 sm:mx-8 md:mx-12 xl:mx-16 flex-shrink-0"
                style={{ backgroundColor: sepColor }}
              />
            )}
            <div className="flex flex-col items-center">
              <p
                className="font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl leading-none"
                style={{ color: valueColor }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs sm:text-sm md:text-lg xl:text-2xl mt-1 sm:mt-2"
                style={{ color: labelColor }}
              >
                {stat.label}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

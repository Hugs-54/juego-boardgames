import React from "react";

type Step = {
  label: string;
  date: string;
};

export default function GameTimeline(props: {
  steps: Step[];
  isWhite?: boolean;
}) {
  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";
  const lineColor = props.isWhite ? "#58937E" : "#3a6b5a";
  const dateColor = props.isWhite ? "#7aaa97" : "rgba(255,255,255,0.65)";

  return (
    <div
      className={`min-h-fit flex flex-col items-center justify-center font-bree mb-2 ${
        props.isWhite ? "" : "shadow-bloc-phone sm:shadow-bloc"
      }`}
      style={{ backgroundColor: primaryColor }}
    >
      <div className="flex items-center w-11/12 py-8 sm:py-10 md:py-14 xl:py-20 gap-1 sm:gap-1.5">
        {/* Élément de début */}
        <div
          className="flex-shrink-0 w-1 sm:w-1.5 md:w-2 h-5 sm:h-6 md:h-8 xl:h-12 rounded-sm"
          style={{ backgroundColor: lineColor }}
        />

        {/* Ligne + étapes */}
        <div className="relative flex-1 flex items-center">
          <div
            className="absolute top-1/2 left-0 right-0 h-1 sm:h-1.5 md:h-2 -translate-y-1/2 rounded-sm"
            style={{ backgroundColor: lineColor }}
          />

          <div className="relative flex justify-between w-full z-10">
            {props.steps.map((step, i) => {
              const labelOnTop = i % 2 === 0;
              return (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div className="flex flex-col items-center justify-end text-center pb-1.5 sm:pb-2 min-h-[48px] sm:min-h-[64px] md:min-h-[80px] xl:min-h-[110px]">
                    {labelOnTop ? (
                      <p
                        className="text-sm sm:text-lg md:text-2xl xl:text-4xl font-bold leading-tight max-w-[80px] sm:max-w-[110px] md:max-w-[140px] xl:max-w-[200px]"
                        style={{ color: secondaryColor }}
                      >
                        {step.label}
                      </p>
                    ) : (
                      <p
                        className="text-xs sm:text-sm md:text-lg xl:text-2xl leading-tight max-w-[80px] sm:max-w-[110px] md:max-w-[140px] xl:max-w-[200px]"
                        style={{ color: dateColor }}
                      >
                        {step.date}
                      </p>
                    )}
                  </div>

                  <div
                    className="w-1 sm:w-1.5 md:w-2 h-6 sm:h-8 md:h-10 xl:h-14 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: lineColor }}
                  />

                  <div className="flex flex-col items-center justify-start text-center pt-1.5 sm:pt-2 min-h-[48px] sm:min-h-[64px] md:min-h-[80px] xl:min-h-[110px]">
                    {labelOnTop ? (
                      <p
                        className="text-xs sm:text-sm md:text-lg xl:text-2xl leading-tight max-w-[80px] sm:max-w-[110px] md:max-w-[140px] xl:max-w-[200px]"
                        style={{ color: dateColor }}
                      >
                        {step.date}
                      </p>
                    ) : (
                      <p
                        className="text-sm sm:text-lg md:text-2xl xl:text-4xl font-bold leading-tight max-w-[80px] sm:max-w-[110px] md:max-w-[140px] xl:max-w-[200px]"
                        style={{ color: secondaryColor }}
                      >
                        {step.label}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flèche */}
        <div
          className="flex-shrink-0 ml-0.5 w-0 h-0"
          style={{
            borderTop: "13px solid transparent",
            borderBottom: "13px solid transparent",
            borderLeft: `20px solid ${lineColor}`,
          }}
        />
      </div>
    </div>
  );
}

/**
 * const timeline = [
    {
      titleTop: "Premières idées",
      dateBottom: "Juillet 2020",
    },
    {
      titleBottom: "Premier prototype",
      dateTop: "Novembre 2020",
    },
    {
      titleTop: "Prototype final",
      dateBottom: "Juillet 2021",
    },
    {
      titleBottom: "Soumission aux ME",
      dateTop: "Octobre 2022",
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center py-12 bg-gray-50">
      <div className="w-11/12 h-1 bg-green-600 relative">
        <div className="absolute right-0 -top-2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-green-600" />

        <div className="absolute left-0 -top-2 w-4 h-4 bg-green-600 rotate-45" />

        <div className="flex justify-between w-full absolute -top-10">
          {timeline.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-1/4 relative"
            >
              {step.titleTop && (
                <div className="text-center font-bold text-teal-900">
                  {step.titleTop}
                </div>
              )}
              {step.dateTop && (
                <div className="text-center text-sm text-gray-600 mt-1">
                  {step.dateTop}
                </div>
              )}

              <div className="w-0.5 h-10 bg-green-600 mt-2" />

              {step.titleBottom && (
                <div className="text-center font-bold text-teal-900 mt-2">
                  {step.titleBottom}
                </div>
              )}
              {step.dateBottom && (
                <div className="text-center text-sm text-gray-600">
                  {step.dateBottom}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
 */

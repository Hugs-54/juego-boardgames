import React from "react";

export default function BubbleCloud(props: {
  main: string;
  bubble1: string;
  bubble2: string;
  bubble3: string;
  isWhite?: boolean;
}) {
  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";
  const darkColor = "#2d5061";
  const textOnSecondary = props.isWhite ? "#FFFFFF" : darkColor;

  return (
    <div
      className={`min-h-fit flex flex-col items-center justify-center font-bree mb-2 ${
        props.isWhite ? "" : "shadow-bloc-phone sm:shadow-bloc"
      }`}
      style={{ backgroundColor: primaryColor }}
    >
      <svg
        width="100%"
        viewBox="0 0 680 340"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bulle principale */}
        <circle cx="260" cy="110" r="85" fill={darkColor} />
        <text
          x="260"
          y="114"
          textAnchor="middle"
          fontSize="22"
          fontWeight="700"
          fill="white"
          fontFamily="sans-serif"
        >
          {props.main}
        </text>

        {/* Bulle 1 */}
        <circle cx="550" cy="125" r="60" fill={secondaryColor} />
        <text
          x="550"
          y="129"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill={textOnSecondary}
          fontFamily="sans-serif"
        >
          {props.bubble1}
        </text>

        {/* Bulle 2 */}
        <circle cx="420" cy="240" r="60" fill={secondaryColor} />
        <text
          x="420"
          y="244"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill={textOnSecondary}
          fontFamily="sans-serif"
        >
          {props.bubble2}
        </text>

        {/* Bulle 3 */}
        <circle cx="90" cy="195" r="60" fill={secondaryColor} />
        <text
          x="90"
          y="199"
          textAnchor="middle"
          fontSize="16"
          fontWeight="700"
          fill={textOnSecondary}
          fontFamily="sans-serif"
        >
          {props.bubble3}
        </text>

        {/* Bulles décoratives */}
        <circle cx="350" cy="275" r="12" fill={secondaryColor} opacity="1" />
        <circle cx="150" cy="60" r="18" fill={darkColor} opacity="1" />
        <circle cx="120" cy="120" r="8" fill={secondaryColor} opacity="1" />
        <circle cx="180" cy="170" r="8" fill={darkColor} opacity="1" />
        <circle cx="355" cy="55" r="6" fill={darkColor} opacity="1" />
        <circle cx="530" cy="40" r="10" fill={secondaryColor} opacity="1" />
        <circle cx="630" cy="120" r="8" fill={secondaryColor} opacity="1" />
        <circle cx="50" cy="270" r="9" fill={secondaryColor} opacity="1" />
        <circle cx="490" cy="175" r="6" fill={secondaryColor} opacity="1" />
        <circle cx="140" cy="260" r="5" fill={secondaryColor} opacity="1" />
        <circle cx="490" cy="300" r="6" fill={secondaryColor} opacity="1" />
        <circle cx="330" cy="200" r="14" fill={darkColor} opacity="1" />
      </svg>
    </div>
  );
}

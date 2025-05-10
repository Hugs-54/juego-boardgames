"use client";
import React, { useEffect, useState } from "react";

//Bloc par défaut, vert 1000px
export default function Bloc(props: { color?: string; height?: number }) {
  const [blocHeight, setBlocHeight] = useState(props.height || 1000);
  const [blocColor, setBlocColor] = useState(
    props.color === "white" ? props.color : "58937E"
  );

  useEffect(() => {
    if (props.height) {
      setBlocHeight(props.height);
    }
    if (props.color === "white") {
      setBlocColor(props.color);
    }
  }, [props.height, props.color]);

  return (
    <div
      className={`h-auto w-full -z-10`}
      style={{
        height: `${blocHeight}px`,
        backgroundColor: blocColor.startsWith("#")
          ? blocColor
          : `#${blocColor}`,
      }}
    ></div>
  );
}

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function TextImageBloc(props: {
  title?: string;
  image?: { source: string; isLeft: boolean };
  text: string;
  isWhite?: boolean;
}) {
  const primaryColor = props.isWhite ? "#FFFFFF" : "#58937E";
  const secondaryColor = props.isWhite ? "#58937E" : "#FFFFFF";

  return (
    <>
      {/*Bloc principal*/}
      <div
        className={`min-h-fit flex flex-col items-center justify-center font-bree mb-2 ${
          props.isWhite ? "" : "shadow-bloc-phone sm:shadow-bloc"
        }`}
        style={{ backgroundColor: primaryColor }}
      >
        {/*Titre*/}
        <div
          className={`${
            props.title
              ? "my-4 sm:my-5 md:my-8 xl:my-12"
              : "mb-6 sm:mb-6 md:mb-10 xl:mb-16"
          }
            text-center font-bold text-2xl sm:text-4xl md:text-6xl xl:text-8xl`}
          style={{ color: secondaryColor }}
        >
          {props.title}
        </div>
        {/* Grid de l'image + texte */}
        <div
          className={`${
            props.image?.source
              ? "grid grid-rows-[auto_auto_50px_100px] sm:grid-rows-1 sm:grid-cols-6"
              : "grid grid-rows-1 sm:grid-rows-1 sm:grid-cols-1"
          }  w-11/12 h-fit mb-6 sm:mb-6 md:mb-10 xl:mb-16`}
        >
          {/*Bloc pour le texte*/}
          <div
            className={`${
              props.image?.source
                ? props.image?.isLeft
                  ? "sm:col-start-2 sm:col-end-7 sm:row-start-1 sm:row-end-1"
                  : "sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-1"
                : "sm:col-start-1"
            } row-start-1 row-end-4 col-start-1 rounded-3xl shadow-item-phone sm:shadow-item z-0`}
            style={{ backgroundColor: secondaryColor }}
          />
          {/*Image*/}
          {props.image && (
            <div
              className={`${
                props.image?.source
                  ? props.image?.isLeft
                    ? "sm:row-start-1 sm:col-start-1 sm:col-end-3"
                    : "sm:row-start-1 sm:col-start-5 sm:col-end-7"
                  : ""
              } row-start-3 row-end-5 col-start-1 z-0 items-center justify-center flex`}
            >
              <Image
                className="h-full w-fit sm:h-fit sm:w-full md:w-full xl:w-5/6"
                src={props.image.source}
                width={2000}
                height={2000}
                alt=""
              />
            </div>
          )}

          {/*Texte*/}
          <div
            className={`${
              props.image?.source
                ? props.image?.isLeft
                  ? "sm:row-start-1 sm:col-start-3 sm:col-end-7"
                  : "sm:row-start-1 sm:col-start-1 sm:col-end-5"
                : ""
            } row-start-1 row-end-3 col-start-1 z-10 items-center flex`}
          >
            <p
              className="text-justify text-base sm:text-lg md:text-2xl xl:text-4xl font-medium leading-snug sm:leading-snug md:leading-normal xl:leading-relaxed py-2 px-4 sm:py-2 sm:px-4 md:py-4 md:px-6 xl:py-6 xl:px-8"
              style={{ color: primaryColor }}
            >
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";

export default function TitlePage(props: {
  title1: string;
  title2?: string;
  imgSrc: string;
  text?: React.ReactNode;
  hasBigTitle?: boolean;
  authors?: ("Hugo" | "Julien")[];
  dates?: string;
}) {
  return (
    <>
      <div className="grid grid-cols-2 font-bree mt-2 md:mt-14 xl:mt-16">
        <div className="mt-4 sm:mt-10 md:mt-14 xl:mt-16"></div>
        <div className="col-start-1 row-start-2 text-center flex items-end justify-center">
          <p
            className={`text-[#58937E] ${
              props.hasBigTitle
                ? "text-1xl sm:text-4xl md:text-[50px] -mb-[6px] sm:-mb-1.5 md:mb-0 xl:text-8xl xl:-mb-3"
                : "text-3xl sm:text-6xl md:text-[80px] -mb-[6px] sm:-mb-1.5 md:-mb-2 xl:text-9xl xl:-mb-4"
            }`}
          >
            {props.title1}
          </p>
        </div>
        <div className="col-start-1 row-start-3 text-center flex items-start justify-center">
          <p
            className={`text-white ${
              props.hasBigTitle
                ? "text-1xl sm:text-4xl md:text-[50px] xl:text-8xl -mt-2 sm:-mt-[10px] md:-mt-[8px] xl:-mt-[24px]"
                : "text-3xl sm:text-6xl md:text-[80px] xl:text-9xl -mt-2.5 sm:-mt-[14px] md:-mt-[19px] xl:-mt-[30px]"
            }`}
          >
            {props.title2}
          </p>
        </div>
        <div className="row-span-3 col-start-2 row-start-1 flex justify-center items-center px-2 sm:px-4 md:px-8 xl:px-12">
          <div className="relative w-full h-40 sm:h-56 md:h-72 xl:h-[420px]">
            <Image
              fill
              className="object-contain"
              src={props.imgSrc}
              alt="Logo Jeu"
            />
          </div>
        </div>

        {/* Auteurs + dates — row-start-4, col-start-1 */}
        {props.authors && props.dates && (
          <div className="col-start-1 row-start-4 flex justify-center pb-1 sm:pb-2 md:pb-3 xl:pb-4 pt-0">
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-item-phone sm:shadow-item flex items-center gap-2 sm:gap-5 md:gap-6 px-2 sm:px-6 md:px-8 xl:px-10 py-1.5 sm:py-3 md:py-4 xl:py-5">
              <div className="flex">
                {props.authors.map((author, i) => (
                  <div
                    key={author}
                    className="flex items-center justify-center rounded-full bg-[#58937E] text-white font-bold border border-white sm:border-2
              w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-16 xl:h-16
              text-[10px] sm:text-lg md:text-xl xl:text-2xl"
                    style={{
                      marginLeft: i > 0 ? "-4px" : "0",
                      zIndex: props.authors!.length - i,
                    }}
                  >
                    {author[0]}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <p className="text-[7px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-gray-400">
                  {props.authors.length > 1 ? "Auteurs" : "Auteur"}
                </p>
                <p className="font-bold text-[#58937E] text-[10px] sm:text-base md:text-xl xl:text-3xl">
                  {props.authors.join(" & ")}
                </p>
              </div>
              <div className="w-px self-stretch bg-gray-200 mx-0.5 sm:mx-1" />
              <div className="flex flex-col">
                <p className="text-[7px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-gray-400">
                  Réalisation
                </p>
                <p className="font-bold text-[#58937E] text-[10px] sm:text-base md:text-xl xl:text-3xl">
                  {props.dates}
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          className={`${props.text ? "pt-4 sm:pt-5 md:pt-8 xl:pt-12 pb-12 sm:pb-8 md:pb-16 xl:pb-32" : "py-1 sm:py-5"} col-start-1 col-span-2 row-start-5`}
        >
          <p className="text-md sm:text-lg md:text-3xl xl:text-5xl text-white px-4 sm:px-10 md:px-18 xl:px-28 xl:leading-normal text-justify">
            {props.text}
          </p>
        </div>

        <div className="col-start-1 col-end-3 row-start-3 row-end-6 bg-[#58937E] -z-10 w-full h-full" />
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";

export default function TitlePage(props: {
  title1: string;
  title2?: string;
  imgSrc: string;
  text: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-2 font-bree mt-2 md:mt-14 xl:mt-16">
        <div className="mt-4 sm:mt-10 md:mt-14 xl:mt-16"></div>
        <div className="col-start-1 row-start-2 text-center flex items-end justify-center">
          <p className="text-[#58937E] text-3xl sm:text-6xl md:text-[80px] -mb-[6px] sm:-mb-1.5 md:-mb-2 xl:text-9xl xl:-mb-4">
            {props.title1}
          </p>
        </div>
        <div className="col-start-1 row-start-3 text-center flex items-start justify-center">
          <p className="text-white text-3xl sm:text-6xl md:text-[80px] xl:text-9xl -mt-2.5 sm:-mt-[14px] md:-mt-[19px] xl:-mt-[30px]">
            {props.title2}
          </p>
        </div>
        <div className="row-span-3 col-start-2 row-start-1 flex justify-center px-2 sm:px-4 md:px-8 xl:px-12 ">
          <Image
            className="w-10/12"
            src={props.imgSrc}
            width={1000}
            height={1000}
            alt="Logo Jeu"
          />
        </div>

        <div className="col-start-1 col-span-2 row-start-4 pt-8 sm:pt-12 md:pt-20 xl:pt-28 pb-12 sm:pb-8 md:pb-16 xl:pb-32 ">
          <p className="text-md sm:text-lg md:text-3xl xl:text-5xl text-white px-4 sm:px-10 md:px-18 xl:px-28 xl:leading-normal text-justify">
            {props.text}
          </p>
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-5 bg-[#58937E] -z-10 w-full h-full" />
      </div>
    </>
  );
}

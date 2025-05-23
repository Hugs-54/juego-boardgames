import React from "react";
import Image from "next/image";

export default function TitlePage() {
  return (
    <>
      <div className="grid grid-cols-2 font-bree mt-2 md:mt-14 xl:mt-16">
        <div className="mt-4 sm:mt-10 md:mt-14 xl:mt-16"></div>
        <div className="col-start-1 row-start-2 text-center flex items-end justify-center">
          <p className="text-[#58937E] text-3xl sm:text-6xl md:text-[80px] -mb-[6px] sm:-mb-1.5 md:-mb-2 xl:text-9xl xl:-mb-4">
            JURASSIC
          </p>
        </div>
        <div className="col-start-1 row-start-3 text-center flex items-start justify-center">
          <p className="text-white text-3xl sm:text-6xl md:text-[80px] xl:text-9xl -mt-2.5 sm:-mt-[14px] md:-mt-[19px] xl:-mt-[30px]">
            ISLAS
          </p>
        </div>
        <div className="row-span-3 col-start-2 row-start-1 flex justify-center px-2 sm:px-4 md:px-8 xl:px-12 ">
          <Image
            className="w-full"
            src="/Jurassic_Islas_Logo.png"
            width={446}
            height={320}
            alt="Logo Jurassic Islas"
          />
        </div>

        <div className="col-start-1 col-span-2 row-start-4 pt-8 sm:pt-12 md:pt-20 xl:pt-44 pb-12 sm:pb-8 md:pb-16 xl:pb-32 ">
          <p className="text-md sm:text-lg md:text-2xl xl:text-5xl text-white px-4 sm:px-10 md:px-18 xl:px-28 xl:leading-normal text-justify">
            L’extravagant et riche PDG Julian Hugont, vous fait lègue d’un
            archipel d’îles au large du Costa Rica. Il compte sur vous pour
            construire, malgré toutes les difficultés, un parc de dinosaures.
            Dépêchez-vous de construire les plus beaux bâtiments et d’introduire
            les plus féroces des dinosaures afin d’accueillir le plus de
            visiteurs. Attention, les autres héritiers ne vous laisseront pas
            faire…
          </p>
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-5 bg-[#58937E] -z-10 w-full h-full" />
      </div>
    </>
  );
}

/**
 * <>
      <div className={`h-auto w-full -z-10 bg-[#58937E] translate-y-2/3`}>
        <div className="grid grid-cols-2 items-center xl:-translate-y-80">
          <div className="text-center font-bree">
            <p className="text-[#58937E] sm:text-4xl md:text-7xl xl:text-9xl">
              JURASSIC
            </p>
            <p className="text-white sm:text-4xl md:text-7xl xl:text-9xl -translate-y-custom-y-44">
              ISLAS
            </p>
          </div>
          <div>
            <Image
              className="md:w-20 xl:w-full "
              src="/Jurassic_Islas_Logo.png"
              width={446}
              height={320}
              alt="Logo Ju&Go"
            />
          </div>
        </div>
        hello je suis le titre fin titre
      </div>
    </>

    <div className="w-full">
      <div className="relative z-5">
        <p className="text-[#58937E] font-bree text-3xl sm:text-5xl md:text-7xl xl:text-9xl xl:-mb-4 md:-mb-2 sm:-mb-1.5 -mb-[6px] ">
          JURASSIC
        </p>
      </div>

      <div className="bg-[#58937E] h-96 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between ">
          <p className="text-white font-bree text-3xl sm:text-5xl md:text-7xl xl:text-9xl xl:-mt-[30px] md:-mt-[17px] sm:-mt-3 -mt-2.5">
            ISLAS
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <Image
          className="w-2/3 md:w-1/2 xl:w-1/3"
          src="/Jurassic_Islas_Logo.png"
          width={446}
          height={320}
          alt="Logo Ju&Go"
        />
      </div>
    </div>
 */

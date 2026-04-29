import React from "react";

export default function GameAuthors(props: {
  authors: ("Hugo" | "Julien")[];
  dates: string;
}) {
  const label = props.authors.length > 1 ? "Auteurs" : "Auteur";
  const names = props.authors.join(" & ");

  return (
    <div className="bg-[#58937E] flex justify-center pb-8 sm:pb-12 md:pb-16 xl:pb-20 font-bree">
      <div className="bg-white rounded-3xl shadow-item-phone sm:shadow-item flex items-center gap-4 sm:gap-6 md:gap-8 px-6 sm:px-8 md:px-10 xl:px-14 py-3 sm:py-4 md:py-5 xl:py-7">
        {/* Avatars */}
        <div className="flex">
          {props.authors.map((author, i) => (
            <div
              key={author}
              className="flex items-center justify-center rounded-full bg-[#58937E] text-white font-bold border-2 border-white
                w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 xl:w-20 xl:h-20
                text-base sm:text-xl md:text-2xl xl:text-3xl"
              style={{
                marginLeft: i > 0 ? "-8px" : "0",
                zIndex: props.authors.length - i,
              }}
            >
              {author[0]}
            </div>
          ))}
        </div>

        {/* Noms */}
        <div className="flex flex-col">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
            {label}
          </p>
          <p className="font-bold text-[#58937E] text-sm sm:text-xl md:text-2xl xl:text-4xl">
            {names}
          </p>
        </div>

        {/* Séparateur */}
        <div className="w-px self-stretch bg-gray-200 mx-1 sm:mx-2" />

        {/* Dates */}
        <div className="flex flex-col">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">
            Réalisation
          </p>
          <p className="font-bold text-[#58937E] text-sm sm:text-xl md:text-2xl xl:text-4xl">
            {props.dates}
          </p>
        </div>
      </div>
    </div>
  );
}

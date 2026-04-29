import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";

export default function Totem() {
  return (
    <>
      <TitlePage
        hasBigTitle={true}
        title1={gameList.totem.title.split(" ")[0].toUpperCase()}
        imgSrc={gameList.totem.image}
        text="Les clans de l'Ouest se sont rassemblés pour élire le clan qui dirigera la région. 
        Le totem déterminera qui aura réussit à dépasser les autres.
"
        authors={["Hugo"]}
        dates="2026 - 20XX"
      ></TitlePage>
      <GameInfo time="15'" age="7+" nbPlayer="2-6"></GameInfo>
      <TextImageBloc
        title="Totem"
        text="Dans ce jeu physique, ajoutez ou déplacez les briques du totem pour les placer à votre avantage. 
        Attention, tout peut basculer en votre défaveur très vite...
"
      ></TextImageBloc>
      <TextImageBloc
        title="Statut"
        text="En phase de prototypage, tests et équilibrages."
        isWhite
      ></TextImageBloc>
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";
import BubbleCloud from "../components/bubble-cloud";
import Timeline from "../components/timeline";

const game = gameList.poissonPourri;

export default function PassionnementFolie() {
  return (
    <>
      <TitlePage
        title1={game.title.split(" ")[0].toUpperCase()}
        title2={game.title.split(" ")[1].toUpperCase()}
        imgSrc={game.image}
        text={game.description}
        authors={game.authors}
        dates={game.dates}
      ></TitlePage>
      <GameInfo
        time={game.time}
        age={game.age}
        nbPlayer={game.players}
      ></GameInfo>
      <BubbleCloud
        isWhite
        main="Enchère"
        bubble1="Bluff"
        bubble2="Prise de risque"
        bubble3="Retournement de situation"
      />
      <TextImageBloc
        title="Enchère risquée"
        text="Enchérissez pour récupérer le poisson mis en vente... mais attention ! 
        Un seul joueur connaît sa vraie nature, frais ou pourri. 
        Ce joueur vous mènera-t-il vers un piège ou vers une course d'enchères effréné ?
"
        image={{
          source: "/Concept_PP.png",
          isLeft: true,
        }}
      ></TextImageBloc>
      <TextImageBloc
        title="Pièce double face"
        text="Toutes les pièces possèdent une valeur différente sur leur deux faces. 
        Elles seront retournés plusieurs fois par partie, sans que vous l'ayez décidé... 
        Une petite pièce peut rapidement devenir une grosse pièce, alors réfléchissez bien à ce que vous jouez !"
        image={{
          source: "/PP-piece_exemple.png",
          isLeft: false,
        }}
        isWhite
      ></TextImageBloc>
      <TextImageBloc
        title="Poisson spécial"
        text="Certains poissons sont spéciaux, ils accordent un effet unique puissant qui peut renverser le cours de la partie ! Attention, ils ne rapportent pas de points…"
        image={{
          source: "/Poisson_special_exemple.png",
          isLeft: true,
        }}
      ></TextImageBloc>

      <Timeline
        isWhite
        steps={[
          { label: "Premières idées", date: "Juin 2026" },
          { label: "Tests et équilibrage", date: "Juillet 2026" },
        ]}
      />
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

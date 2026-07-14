import React from "react";
import TitlePage from "../components/title-page";
import gameList from "@/app/games-list";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

const game = gameList.goldenNuggets;

export default function CowboysGoldenNuggets() {
  return (
    <>
      <TitlePage
        hasBigTitle={true}
        title1={
          game.title.split(" ")[0].toUpperCase() +
          " " +
          game.title.split(" ")[1].toUpperCase() +
          " " +
          game.title.split(" ")[2].toUpperCase()
        }
        title2={
          game.title.split(" ")[3].toUpperCase() +
          " " +
          game.title.split(" ")[4].toUpperCase()
        }
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
      <TextImageBloc
        title="Découvrez le Far West"
        text="Révélez une nouvelle tuile et placez-la afin de vous favoriser votre conquête de l'Ouest. 
        Déplacez vous avec votre diligence à la recherche de mines d'or et de matériel pour votre conquête.
"
        image={{
          source: "/CGN_saloon.png",
          isLeft: true,
        }}
        isWhite
      ></TextImageBloc>
      <TextImageBloc
        title="Sécurisez vos golden nuggets"
        text="Transportez vos trouvailles en train jusqu'à votre planque grâce aux chemins de fer que vous aurez 
        construit. Veillez à ne pas vous faire voler mais ne vous empêchez pas de partir à l'assaut des convois des autres cowboys."
        image={{
          source: "/CGN_rails.png",
          isLeft: false,
        }}
      ></TextImageBloc>
      <TextImageBloc
        title="Statut"
        text="Cowboys et les Golden Nuggets est en première phase d'élaboration et réalisera ses premiers tests d'équilibrage."
        isWhite
      ></TextImageBloc>
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

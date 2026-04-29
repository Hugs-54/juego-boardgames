import React from "react";
import TitlePage from "../components/title-page";
import gameList from "@/app/games-list";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

export default function CowboysGoldenNuggets() {
  return (
    <>
      <TitlePage
        hasBigTitle={true}
        title1={
          gameList.goldennuggets.title.split(" ")[0].toUpperCase() +
          " " +
          gameList.goldennuggets.title.split(" ")[1].toUpperCase() +
          " " +
          gameList.goldennuggets.title.split(" ")[2].toUpperCase()
        }
        title2={
          gameList.goldennuggets.title.split(" ")[3].toUpperCase() +
          " " +
          gameList.goldennuggets.title.split(" ")[4].toUpperCase()
        }
        imgSrc={gameList.goldennuggets.image}
        text="Bienvenu au far West lors de la conquête de l'or. Là où chaque cowboy a espoir 
        de faire fortune en trouvant les plus grosses pépites d'or. Trouver ces fameuses golden
         nuggets ne suffira pas, il faudra également les acheminer en toute sécurité jusqu'à votre 
         planque en train. A vous de créer votre itinéraire idéal et de découvrir l'Ouest à chacun 
         de vos tours. Mais n'oubliez pas, vous n'êtes jamais à l'abri d'un vol lors d'un convoi ferré.
"
        authors={gameList.goldennuggets.authors}
        dates={gameList.goldennuggets.dates}
      ></TitlePage>
      <GameInfo time="45'" age="7+" nbPlayer="2-6"></GameInfo>
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

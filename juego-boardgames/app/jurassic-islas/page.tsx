import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";

export default function JurassicIslas() {
  return (
    <>
      <TitlePage></TitlePage>
      <GameInfo></GameInfo>
      <TextImageBloc
        title="Construisez"
        text="Obtenez une île, choisissez bien car certaines pourraient se révéler dangereuses ! 
        Récupérez des bâtiments et des dinosaures parmi une selection de presque 60 cartes uniques. 
        Construisez les bâtiments et les dinosaures selon votre stratégie, car attention aux attaques de vos adversaires. 
        Soyez le plus rapide et obtenez une inauguration digne de ce nom, mais retenez bien, c'est le parc avec le plus de visiteurs qui l'emporte !"
        image={{
          source: "/cartesBatDinos.png",
          isLeft: true,
        }}
        isWhite
      ></TextImageBloc>
      <TextImageBloc
        title="Attaquez"
        text="Ne laissez pas vos adversaires ouvrir le parc avant vous, attaquez pendant qu'il en est encore temps ! 
        Munissez-vous des cartes Domination pour faire la différence. Ces cartes seront dévastatrices sur un parc non préparé. 
        N'oubliez pas de vous protéger avec certains bâtiments et des cartes Domination Défense."
        image={{
          source: "/cartesDominations.png",
          isLeft: false,
        }}
      ></TextImageBloc>
      <TextImageBloc
        title="Statut"
        text="Après deux ans de développement, plusieurs versions du jeu et des
              heures de playtest et d'équilibrage, le jeu s'offre enfin un
              prototype final ; une version stable, équilibrée et surtout
              amusante. Actuellement, le jeu est envoyé vers les maisons
              d'éditions susceptibles d'être intéressées. Avec comme souhait,
              que Jurassic Islas soit édité et commercialisé."
        isWhite
      ></TextImageBloc>
      <Footer></Footer>
    </>
  );
}

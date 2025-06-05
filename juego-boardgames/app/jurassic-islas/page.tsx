import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import VideoBloc from "../components/video-bloc";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";

export default function JurassicIslas() {
  return (
    <>
      <TitlePage
        title1={gameList.jurassicIslas.name.split(" ")[0].toUpperCase()}
        title2={gameList.jurassicIslas.name.split(" ")[1].toUpperCase()}
        imgSrc={gameList.jurassicIslas.image}
        text="L’extravagant et riche PDG Julian Hugont, vous fait lègue d’un
            archipel d’îles au large du Costa Rica. Il compte sur vous pour
            construire, malgré toutes les difficultés, un parc de dinosaures.
            Dépêchez-vous de construire les plus beaux bâtiments et d’introduire
            les plus féroces des dinosaures afin d’accueillir le plus de
            visiteurs. Attention, les autres héritiers ne vous laisseront pas
            faire…"
      ></TitlePage>
      <GameInfo time="30'" age="7+" nbPlayer="2-6"></GameInfo>
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
      <VideoBloc
        title="Présentation vidéo"
        ytbLink="https://www.youtube.com/embed/GqiO7WTwzFE"
        isWhite
      ></VideoBloc>
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
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

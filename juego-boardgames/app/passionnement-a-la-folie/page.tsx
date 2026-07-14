import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";
import BubbleCloud from "../components/bubble-cloud";
import Timeline from "../components/timeline";
import Statistics from "../components/statistics";
import Gallery from "../components/gallery";
import Review from "../components/review";
import Playtesters from "../components/playtesters";

const game = gameList.palf;

export default function PassionnementFolie() {
  return (
    <>
      <TitlePage
        hasBigTitle={true}
        title1={game.title.split(" ")[0].toUpperCase()}
        title2={
          game.title.split(" ")[1].toUpperCase() +
          " " +
          game.title.split(" ")[2].toUpperCase() +
          " " +
          game.title.split(" ")[3].toUpperCase()
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
      <BubbleCloud
        isWhite
        main="Recouvrement partiel"
        bubble1="Anticipation"
        bubble2="Fleurs"
        bubble3="Observation"
      />
      <TextImageBloc
        title="Recouvrement partiel"
        text="La force du jeu réside dans sa mécanique de recouvrement partiel de tuile. 
        Pour reconstituer une fleur, recouvrez judicieusement les tuiles pour assembler les morceaux de fleurs entre eux. 
        Cette mécanique offre une grande possibilité de placement et de recouvrement, beaucoup de réflexion, des stratégies de pose variés, de la satisfaction et de la rejouabilité. 

"
        image={{
          source: "/PALF_superposition_exemple.png",
          isLeft: true,
        }}
        isWhite
      ></TextImageBloc>
      <TextImageBloc
        title="Ceuillir"
        text="Cueillez les plus belles fleurs pour amasser le plus de points possible. 
        Utilisez les insectes, ils seront vos meilleurs amis ! Mais évitez les mauvaises herbes, ou sinon c'est la défaite... "
        image={{
          source: "/insectes_palf.png",
          isLeft: false,
        }}
      ></TextImageBloc>

      <Review
        isWhite
        reviews={[
          {
            name: "Lauryn L.",
            date: "Avril 2026",
            text: "Un jeu de stratégie au thème coloré et fleuri, qui plait autant au petit qu'au grand. Il se joue aussi bien à 2 joueurs qu'à plusieurs !",
          },
          {
            name: "Gaëlle L.C.",
            date: "Mai 2026",
            text: "Un jeu que j'adore avec un thème qui colle parfaitement à son titre. Des parties passionnément à la folie ? Cela dépendra surtout de vos adversaires !",
          },
          {
            name: "Froc",
            date: "Mai 2026",
            text: "Jeu plus stratégique qu'il n'y paraît, parfait à jouer entre amis, surtout si on aime bien s'embêter un peu. Chaque partie est différente, vous aurez tout de suite envie d'en recommencer une autre !",
          },
          {
            name: "Jordan E.",
            date: "Mai 2026",
            text: "Jeu plus stratégique que le design laisse croire, un jeu qui n'est pas passif parce que tu peux venir gêner les autres. En somme, tout ce qu'on demande à un jeu entre amis ! Interaction et rejouabilité",
          },
          {
            name: "Aurélien T.",
            date: "Mai 2026",
            text: 'Le jeu a un petit côté domino qui est intéressant, les "missions" personnelles donnent une perspective agréable au jeu, tout en devant cueillir ses fleurs face à ses concurrents jardiniers (amateurs !)',
          },
          {
            name: "Louis J.",
            date: "Juin 2026",
            text: "Jeu original qui est simple à prendre en main. Le gros plus du jeu c'est ses modificateurs de partie, on peut les manipuler de façon à ce qu'une partie ne ressemble pas à une autre ! De plus les missions de début de partie sont parfaitement équilibrés, n'importe qui peut gagner s'il trouve la bonne stratégie ! Je recommande fortement.",
          },
        ]}
      />
      <Gallery
        images={[gameList.palf.image, "/Mockup_palf.png", "/insectes_palf.png"]}
      />
      <TextImageBloc
        isWhite
        title="Statut"
        text="Le jeu est prêt à être soumis aux maisons éditions. "
      ></TextImageBloc>
      <Statistics
        stats={[
          { value: "100", label: "variations de parties" },
          { value: "20", label: "missions uniques" },
          { value: "66", label: "cartes" },
        ]}
      />

      <Timeline
        isWhite
        steps={[
          { label: "Premières idées", date: "Juin 2025" },
          { label: "Premiers tests", date: "Juillet 2025" },
          { label: "Version stable", date: "Décembre 2025" },
          { label: "Version améliorée", date: "Avril 2026" },
          { label: "Version terminée", date: "Juin 2026" },
        ]}
      />
      <Playtesters
        isWhite
        playtesters={[
          "Lauryn",
          "Julien",
          "Gaëlle",
          "Brigitte",
          "Jordan",
          "Axelle",
          "Aurélien",
          "Louis",
          "Laure",
          "Christophe",
          "Emmanuelle",
          "Jean-Luc",
          "Marine",
          "Eva",
          "Manon",
          "Sixtine",
          "Lucie",
          "Alicia",
          "Sabine",
          "Ernestine",
          "Gérard",
        ]}
      />

      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

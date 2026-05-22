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

export default function PassionnementFolie() {
  return (
    <>
      <TitlePage
        hasBigTitle={true}
        title1={gameList.palf.title.split(" ")[0].toUpperCase()}
        title2={
          gameList.palf.title.split(" ")[1].toUpperCase() +
          " " +
          gameList.palf.title.split(" ")[2].toUpperCase() +
          " " +
          gameList.palf.title.split(" ")[3].toUpperCase()
        }
        imgSrc={gameList.palf.image}
        text="Rose, la fleuriste du village, acceptera un rendez-vous amoureux au jardinier qui 
        réalisera le plus beau bouquet de fleurs. Mais la tâche ne sera pas évidente, tous les 
        jardiniers devront partager le même jardin, alors attention au coup fourré.
"
        authors={gameList.palf.authors}
        dates={gameList.palf.dates}
      ></TitlePage>
      <GameInfo time="15'" age="10+" nbPlayer="2-5"></GameInfo>
      <BubbleCloud
        isWhite
        main="Recouvrement"
        bubble1="Anticipation"
        bubble2="Fleurs"
        bubble3="Observation"
      />
      <TextImageBloc
        title="Planter"
        text="Superposez judicieusement les tuiles comprenant des fragments de fleurs pour reconstituer les fleurs tant convoitées.
        Usez d'observation et d'anticipation pour récolter les fleurs avant vos adversaires.
"
        image={{
          source: "/Mockup_palf.png",
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
      <Timeline
        isWhite
        steps={[
          { label: "Premières idées", date: "Juin 2025" },
          { label: "Premiers tests", date: "Juillet 2025" },
          { label: "Version stable", date: "Décembre 2025" },
          { label: "Version améliorée", date: "Avril 2026" },
        ]}
      />
      <Review
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
        ]}
      />
      <TextImageBloc
        isWhite
        title="Statut"
        text="Le jeu est dans un état stable. Les tests continuent pour l'améliorer au maximum."
      ></TextImageBloc>
      <Statistics
        stats={[
          { value: "64", label: "variations de parties" },
          { value: "20", label: "missions uniques" },
          { value: "66", label: "cartes" },
        ]}
      />
      <Gallery
        isWhite
        images={[gameList.palf.image, "/Mockup_palf.png", "/insectes_palf.png"]}
      />
      {/* <Playtesters
        isWhite
        playtesters={[
          "Lauryn",
          "Julien",
          "Gaëlle",
          "Brigitte",
          "Jordan",
          "Axelle",
          "Aurélien",
          "Laure",
          "Christophe",
          "Emanuelle",
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
      /> */}

      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

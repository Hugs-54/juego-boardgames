import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";
import BubbleCloud from "../components/bubble-cloud";
import Timeline from "../components/timeline";

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
      <TextImageBloc
        title="Statut"
        text="Le jeu est dans un état stable. Les tests continuent pour l'améliorer au maximum."
        isWhite
      ></TextImageBloc>
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import VideoBloc from "../components/video-bloc";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";
import Timeline from "../components/timeline";
import BubbleCloud from "../components/bubble-cloud";
import Statistics from "../components/statistics";
import Review from "../components/review";

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
        authors={gameList.jurassicIslas.authors}
        dates={gameList.jurassicIslas.dates}
      ></TitlePage>
      <GameInfo time="30'" age="7+" nbPlayer="2-6"></GameInfo>
      <BubbleCloud
        isWhite
        main="Dinosaure"
        bubble1="Famille"
        bubble2="Gestion"
        bubble3="Stratégie"
      />
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
      <Review
        reviews={[
          {
            name: "Théa F.",
            date: "Mai 2026",
            text: "Concept très sympathique, excellent jeu, original et prenant. L'univers Jurassic Park est super bien retranscrit !",
          },
          {
            name: "Gaëlle L.C.",
            date: "Mai 2026",
            text: "Un jeu qui se joue et se rejoue sans modération. Les parties ne sont jamais les mêmes. Il est parfait pour toute la famille. J'adore le concept, je ne suis jamais déçue et je m'amuse toujours !",
          },
          {
            name: "Mathis T.",
            date: "Mai 2026",
            text: "J'ai eu l'opportunité de découvrir et de jouer à Jurassic Islas, et autant vous dire que j'ai directement accroché. Le jeu est à la fois fun, facile à prendre en main tout en étant stratégique. Le panel de cartes permet de tester différentes stratégies d'une partie à l'autre ce qui ne rend pas le jeu redondant. Je le recommande fortement !",
          },
          {
            name: "Lauryn L.",
            date: "Mai 2026",
            text: "Jeu de cartes qui mêle stratégie, compétition et attaque autour de son parc de Dinausore : on ne s'ennuie pas !",
          },
        ]}
      />

      <TextImageBloc
        title="Statut"
        text="Après deux ans de développement, plusieurs versions du jeu et des
              heures de playtest et d'équilibrage, le jeu s'offre enfin un
              prototype final ; une version stable, équilibrée et surtout
              amusante. Le jeu a pu être envoyé à divers maisons d'éditions mais
              n'a pas trouvé preneur. Ce n'est pas grave, Jurassic Islas est notre premier jeu, 
              il nous a appris beaucoup de choses sur le développement d'un jeu et a conforté 
              notre passion pour la création de jeux de société !
              "
        isWhite
      ></TextImageBloc>
      <Statistics
        stats={[
          { value: "60", label: "cartes uniques" },
          { value: "+100", label: "parties jouées" },
          { value: "230", label: "cartes" },
        ]}
      />
      <Timeline
        isWhite
        steps={[
          { label: "Premières idées", date: "Juillet 2020" },
          { label: "Premier prototype", date: "Novembre 2020" },
          { label: "Prototype final", date: "Juillet 2021" },
          { label: "Soumission aux ME", date: "Octobre 2022" },
        ]}
      />
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

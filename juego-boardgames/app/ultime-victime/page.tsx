import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";
import Timeline from "../components/timeline";
import BubbleCloud from "../components/bubble-cloud";
import Statistics from "../components/statistics";
import Review from "../components/review";
import Gallery from "../components/gallery";

const game = gameList.ultimeVictime;

export default function UltimeVictime() {
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
        main="Ambiance"
        bubble1="Films d'horreur"
        bubble2="Gages"
        bubble3="Mauvaise chance"
      />
      <TextImageBloc
        image={{ source: "/cartes_perso_ultime_victime.png", isLeft: true }}
        title="Principe"
        text="Ultime Victime est un jeu où chaque joueur choisit méticuleusement la carte qui le fera avancer sur un plateau semé d’embuche et qui lui permettra de faire souffrir ses adversaires en même temps. Chaque carte infligera une contrainte à un joueur adverse basé sur les pires tortures de films d’horreur ! 
        Par exemple, la carte « Chucky » vous obligera à la vulgarité lorsque vous parlerez, ou la carte « Annabelle » vous imposera un sourire diabolique ! Attention si vous ne respectez pas la contrainte, vous reculerez et vous vous éloignerez de l’Ultime Victime !"
      ></TextImageBloc>
      <TextImageBloc
        title="T'as pas la ref ?"
        text={
          <>
            Ultime Victime s&apos;adresse autant aux amateurs du genre
            qu&apos;aux plus peureux ! Pas besoin d&apos;avoir vu les films pour
            y jouer. D&apos;ailleurs, vous avez besoin de comprendre le lien
            entre une carte et son film ? Vous ne connaissez pas le film cité ?
            Pas de panique !
            <br />
            Ultime Victime propose également des cartes supplémentaires pour
            ceux qui aiment et connaissent l&apos;univers du cinéma
            d&apos;horreur.
          </>
        }
        isWhite
      ></TextImageBloc>
      <TextImageBloc
        image={{ source: "/carte_ultimevictime_tapaslaref.png", isLeft: false }}
        text={
          <>
            Scannez le QR-code de la carte « T&apos;as pas la ref ? » pour
            découvrir les bandes annonces ou extraits faisant référence aux
            effets que vous ferez subir aux autres joueurs. <br />
            T&apos;as pas le ref est disponible{" "}
            <a
              href="https://qrco.de/ultimevictime"
              target="_blank"
              className="underline text-white hover:text-gray-200 "
            >
              ici
            </a>{" "}
            <br />
          </>
        }
        isWhite
      ></TextImageBloc>
      <TextImageBloc
        //image={{ source: "/carte_ultimevictime.png", isLeft: true }}
        title="Informations"
        text={
          <>
            Contenu : 71 cartes de jeu, 3 cartes Ultime Victime, 1 carte
            “T&apos;as pas la ref ?”, une règle du jeu, 1 plateau de jeu, 8
            pions, et 1 cimetière. <br />
            Accessoires effrayants et musique inquiétante sont recommandés.
          </>
        }
      ></TextImageBloc>
      <Review
        isWhite
        reviews={[
          {
            name: "Théa F.",
            date: "Mai 2026",
            text: "Superbe jeu d'ambiance entre amis ou en famille ! Immersif et innovant. De belles références horrifiques.",
          },
          {
            name: "Gaëlle L.C.",
            date: "Mai 2026",
            text: "Si vous voulez passer une bonne soirée, avec un soupçon de frisson, c'est le jeu d'ambiance qu'il vous faut. Il y a de quoi voir vos amis comme jamais vous n'auriez pu les imaginer. Je recommande à 100%",
          },
          {
            name: "Romane N.",
            date: "Mai 2026",
            text: "Super concept, Ultime Victime est hyper prenant et met direct une bonne ambiance dès les premières minutes. Les parties sont fun, fluides et donnent vraiment envie de rejouer encore et encore.",
          },
          {
            name: "Julie B.",
            date: "Mai 2026",
            text: "Véritable jeu d'ambiance où l'on progresse avec des contraintes qui font peur mais aussi rire. On s'amuse tout en révisant ses classiques !",
          },
          {
            name: "Lauryn L.",
            date: "Mai 2026",
            text: "Un jeu d'ambiance qui réunit aussi bien les amateurs de frissons que les plus peureux autour de la table ! J'ai beaucoup apprécié que le jeu reste tout à fait compréhensible même si on a vu aucun film d'horreur.",
          },
        ]}
      />
      <Gallery
        images={[
          "/boite_de_jeu_UV.png",
          "/regles_du_jeu_UV.png",
          "/anatomie_dune_carte_UV.png",
          "/plateau_de_jeu_UV.png",
        ]}
      />
      <TextImageBloc
        isWhite
        title="Statut"
        text="Ultime Victime est finalisé ! Depuis décembre 2022, et quelques différentes versions avec de nombreux tests, 
        retouches et ajustements, Ultime Victime est prêt à être proposé à l'édition. Illustrateurs ou éditeurs, 
        n'hésitez pas à nous contacter si ce projet vous intéresse ou s'il vous effraie profondément !"
      ></TextImageBloc>

      <Statistics
        stats={[
          { value: "46", label: "Façons de souffrir" },
          { value: "1", label: "Extension déjà disponible" },
          { value: "8", label: "armes différentes" },
        ]}
      />
      <Timeline
        isWhite
        steps={[
          { label: "Idée du projet", date: "Décembre 2022" },
          { label: "1er prototype", date: "Mars 2023" },

          { label: "4ème prototype validé", date: "Décembre 2025" },
          {
            label: "Jeu finalisé et disponible à l'édition",
            date: "Avril 2026",
          },
        ]}
      />
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

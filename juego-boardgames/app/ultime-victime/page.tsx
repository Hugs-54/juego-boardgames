import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";

export default function UltimeVictime() {
  return (
    <>
      <TitlePage
        title1="ULTIME"
        title2="VICTIME"
        imgSrc="/logo_ultime_victime.png"
        text="Bienvenue à Bad-Horror City, dans la ville la plus dangereuse du monde, où s’affrontent les plus grands tueurs du cinéma d’horreur dans une course à l’ultime victime. En effet il ne reste plus qu’une seule et Ultime victime à Bad-Horror City ! Mais le chemin pour l’atteindre ne sera pas facile ! Chaque grand tueur devra avancer prudemment vers l’ultime Victime et devra être encore plus horrible avec ses adversaires pour y arriver !"
      ></TitlePage>
      <GameInfo time="30'" age="12+" nbPlayer="4-8"></GameInfo>
      <TextImageBloc
        image={{ source: "/cartes_perso_ultime_victime.png", isLeft: true }}
        title="Principe"
        text="Ultime Victime est un jeu où chaque joueur choisit méticuleusement la carte qui le fera avancer sur un plateau semé d’embuche et qui lui permettra de faire souffrir ses adversaires en même temps. Chaque carte infligera une contrainte à un joueur adverse basé sur les pires tortures de films d’horreur ! 
        Par exemple, la carte « Chucky » vous obligera à la vulgarité lorsque vous parlerez, ou la carte « Annabelle » vous imposera un sourire diabolique ! Attention si vous ne respectez pas la contrainte, vous reculerez et vous vous éloignerez de l’Ultime Victime !"
      ></TextImageBloc>
      <TextImageBloc
        image={{ source: "/carte_ultimevictime_tapaslaref.png", isLeft: false }}
        title="T'as pas la ref ?"
        text={
          <>
            Ultime Victime s&apos;adresse autant aux amateurs du genre
            qu&apos;aux plus peureux ! Pas besoin d&apos;avoir vu les films pour
            y jouer. D&apos;ailleurs, vous avez besoin de comprendre le lien
            entre une carte et son film ? Vous ne connaissez pas le film cité ?
            Pas de panique !
            <br />
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
            Ultime Victime propose également des cartes supplémentaires pour
            ceux qui aiment et connaissent l&apos;univers du cinéma
            d&apos;horreur.
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
      <TextImageBloc
        title="Statut"
        text="Ultime Victime est sur sa finalisation après tests. Depuis décembre 2022, et quelques différentes versions avec de nombreux tests, retouches et ajustements, Ultime Victime est bientôt prêt à être proposé à l’édition. N’hésitez pas à nous contacter si ce projet vous intéresse !"
        isWhite
      ></TextImageBloc>
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

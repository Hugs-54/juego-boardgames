import React from "react";
import TitlePage from "../components/title-page";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import Team from "../components/team";

export default function DiscoverUS() {
  return (
    <>
      <TitlePage
        title1="NOUS"
        title2="DECOUVRIR"
        imgSrc="/LesDeuxFreres_carre.png"
        text="Ju&Go est l'association de deux frères, Hugo et Julien, dont le but est de créer et de développer des jeux de sociétés. Ju&Go mise principalement sur des jeux familiaux, stratégiques et amusants."
      ></TitlePage>
      <TextImageBloc
        title="Ambitions"
        text="A travers ses jeux, Ju&Go a pour objectif de créer des expériences mémorables, divertissantes et le plus important, amusantes. Ju&Go a pour ambition de séduire et de convaincre les maisons d'éditions afin de voir ses jeux commercialisés. Et ainsi permettre au public de jouer aux expériences que Ju&Go leur propose."
        isWhite
      ></TextImageBloc>
      <Team></Team>
      <TextImageBloc
        image={{
          source: "/Logo_JueGo.png",
          isLeft: false,
        }}
        title="Origine du nom"
        text="L'origine du nom Ju&Go est très simple, Ju pour le début de Julien et Go pour la fin de Hugo. Anecdote linguistique, juego signifie jeu en espagnol. Comment mieux tomber ?"
        isWhite
      ></TextImageBloc>
      <Footer></Footer>
    </>
  );
}

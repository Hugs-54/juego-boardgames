import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";

export default function MonsterSnacks() {
  return (
    <>
      <TitlePage
        title1="MONSTER"
        title2="SNACKS"
        imgSrc="/image_monster_snack.png"
        text="Incarner un monstre à l'appétit immense, pour vous rassassier récoltez les snacks les plus savoureux du distributeur. Attention, vous devrez faire preuve d'observation et de stratégie pour les récupérer."
      ></TitlePage>
      <GameInfo time="20'" age="10+" nbPlayer="2-4"></GameInfo>
      <TextImageBloc
        title="Statut"
        text="Les premiers tests et l'élaboration des visuels sont en cours."
        isWhite
      ></TextImageBloc>
      <ContactForm withTitle withTopShadow></ContactForm>
      <Footer></Footer>
    </>
  );
}

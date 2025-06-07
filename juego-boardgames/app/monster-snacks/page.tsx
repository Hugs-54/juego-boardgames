import React from "react";
import TitlePage from "../components/title-page";
import GameInfo from "../components/game-info";
import TextImageBloc from "../components/text-image-bloc";
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import gameList from "../games-list";

export default function MonsterSnacks() {
  return (
    <>
      <TitlePage
        title1={gameList.monsterSnacks.name.split(" ")[0].toUpperCase()}
        title2={gameList.monsterSnacks.name.split(" ")[1].toUpperCase()}
        imgSrc={gameList.monsterSnacks.image}
        text="Incarner un monstre à l'appétit immense, pour vous rassassier récoltez les snacks les plus savoureux du distributeur. Attention, vous devrez faire preuve d'observation et de stratégie pour les récupérer."
      ></TitlePage>
      <GameInfo time="30'" age="10+" nbPlayer="2-4"></GameInfo>
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

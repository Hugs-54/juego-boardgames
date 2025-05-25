import React from "react";
import TextImageBloc from "../components/text-image-bloc";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";
import TitlePage from "../components/title-page";

export default function Contact() {
  return (
    <>
      <TitlePage
        title1="NOUS"
        title2="CONTACTER"
        imgSrc="/Logo_JueGo.png"
        text={
          <>
            Vous avez une question, une demande ou vous souhaitez rentrer en
            relation avec nous ?<br />
            Contactez-nous via le formulaire ci-dessous ou via notre adresse
            email :<br />
            <a
              href="mailto:juego.boardgames@gmail.com"
              className="underline text-white hover:text-gray-200 justify-center flex"
            >
              juego.boardgames@gmail.com
            </a>
          </>
        }
      ></TitlePage>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

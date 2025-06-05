import Link from "next/link";
import Footer from "./components/footer";
import TextImageBloc from "./components/text-image-bloc";
import TitlePage from "./components/title-page";
import GameGrid from "./components/game-grid";

export default function Home() {
  return (
    <main>
      <TitlePage
        title1="ACCUEIL"
        title2="JU&GO"
        imgSrc="/Logo_JueGo.png"
      ></TitlePage>
      <div className="bg-[#58937E]">
        <Link href="/discover-us" className="block">
          <TextImageBloc
            text={
              <>
                <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl text-[#305B68] pb-2 sm:pb-3">
                  Nous découvrir
                </h1>
                <p>
                  Ju&Go est l&apos;association de deux frères, Hugo et Julien,
                  dont le but est de créer et de développer des jeux de...
                </p>
              </>
            }
            image={{
              source: "/LesDeuxFreres_rond.png",
              isLeft: true,
            }}
            hideShadowBloc
          ></TextImageBloc>
        </Link>
        <Link href="/jurassic-islas" className="block">
          <TextImageBloc
            title="A la une"
            text={
              <>
                <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl text-[#305B68] pb-4">
                  Jurassic Islas
                </h1>
                <p>
                  L&apos;extravagant et riche PDG Julian Hugont, vous fait lègue
                  d&apos;un archipel d&apos;îles au large du Costa Rica. Il
                  compte sur vous pour construire, malgré toutes les...
                </p>
              </>
            }
            image={{
              source: "/Jurassic_Islas_Logo.png",
              isLeft: false,
            }}
            hideShadowBloc
          ></TextImageBloc>
        </Link>
        <GameGrid></GameGrid>
        <Footer></Footer>
      </div>
    </main>
  );
}

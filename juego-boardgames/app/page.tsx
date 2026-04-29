import Link from "next/link";
import Footer from "./components/footer";
import TextImageBloc from "./components/text-image-bloc";
import TitlePage from "./components/title-page";
import GameGrid from "./components/game-grid";
import gameList from "./games-list";

export default function Home() {
  const featuredGame = Object.values(gameList).find((g) => g.featured);

  const truncate = (text: string, maxLength: number = 150) =>
    text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "..." : text;

  return (
    <main>
      <TitlePage
        title1="ACCUEIL"
        title2="JU&GO"
        imgSrc="/Logo_JueGo.png"
      ></TitlePage>
      <div className="bg-[#58937E]">
        {featuredGame && (
          <Link href={featuredGame.path} className="block">
            <TextImageBloc
              title="A la une"
              text={
                <>
                  <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl text-[#305B68] pb-4">
                    {featuredGame.name}
                  </h1>
                  <p>{truncate(featuredGame.description)}</p>
                </>
              }
              image={{
                source: featuredGame.image,
                isLeft: false,
              }}
              hideShadowBloc
            ></TextImageBloc>
          </Link>
        )}

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

        <GameGrid></GameGrid>
        <Footer></Footer>
      </div>
    </main>
  );
}

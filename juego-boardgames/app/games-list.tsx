type Game = {
  title: string;
  name: string;
  path: string;
  image: string;
};

const gameList: Record<string, Game> = {
  jurassicIslas: {
    title: "Jurassic Islas",
    name: "Jurassic Islas",
    path: "/jurassic-islas",
    image: "/Jurassic_Islas_Logo.png",
  },
  ultimeVictime: {
    title: "Ultime Victime",
    name: "Ultime Victime",
    path: "/ultime-victime",
    image: "/logo_ultime_victime.png",
  },
  palf: {
    title: "Passionnément a la Folie",
    name: "Passionnément, à la Folie",
    path: "/passionnement-a-la-folie",
    image: "/logo_palf.png",
  },
  totem: {
    title: "Totem",
    name: "Totem",
    path: "/totem",
    image: "/totem_logo.png",
  },
  /*  monsterSnacks: {
  title:
    name: "Monster Snacks",
    path: "/monster-snacks",
    image: "/Logo_MonsterSnacks.png",
  },
*/
};

export default gameList;

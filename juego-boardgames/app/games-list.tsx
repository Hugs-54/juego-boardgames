type Game = {
  name: string;
  path: string;
  image: string;
};

const gameList: Record<string, Game> = {
  jurassicIslas: {
    name: "Jurassic Islas",
    path: "/jurassic-islas",
    image: "/Jurassic_Islas_Logo.png",
  },
  ultimeVictime: {
    name: "Ultime Victime",
    path: "/ultime-victime",
    image: "/logo_ultime_victime.png",
  },
  monsterSnacks: {
    name: "Monster Snacks",
    path: "/monster-snacks",
    image: "/image_monster_snack.png",
  },
};

export default gameList;

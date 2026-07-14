type Game = {
  title: string;
  name: string;
  path: string;
  image: string;
  authors: ("Hugo" | "Julien")[];
  dates: string;
  dateStart: number;
  description: string;
  featured?: boolean;
  age: string;
  players: string;
  time: string;
};

const gameListRaw: Record<string, Game> = {
  jurassicIslas: {
    title: "Jurassic Islas",
    name: "Jurassic Islas",
    path: "/jurassic-islas",
    image: "/Jurassic_Islas_Logo.png",
    authors: ["Julien", "Hugo"],
    dates: "2020 – 2022",
    dateStart: 2020,
    featured: false,
    description:
      "L'extravagant et riche PDG Julian Hugont, vous fait lègue d’un archipel d’îles au large du Costa Rica. Il compte sur vous pourconstruire, malgré toutes les difficultés, un parc de dinosaures. Dépêchez-vous de construire les plus beaux bâtiments et d’introduire les plus féroces des dinosaures afin d’accueillir le plus de visiteurs. Attention, les autres héritiers ne vous laisseront pas faire…",
    age: "7+",
    players: "2-6",
    time: "30'",
  },
  ultimeVictime: {
    title: "Ultime Victime",
    name: "Ultime Victime",
    path: "/ultime-victime",
    image: "/logo_ultime_victime.png",
    authors: ["Julien"],
    dates: "2023 – 2026",
    dateStart: 2023,
    description:
      "Bienvenue à Bad-Horror City, dans la ville la plus dangereuse du monde, où s’affrontent les plus grands tueurs du cinéma d’horreur dans une course à l’ultime victime. En effet il ne reste plus qu’une seule et Ultime victime à Bad-Horror City ! Mais le chemin pour l’atteindre ne sera pas facile ! Chaque grand tueur devra avancer prudemment vers l’ultime Victime et devra être encore plus horrible avec ses adversaires pour y arriver !",
    featured: false,
    age: "12+",
    players: "4-8",
    time: "60'",
  },
  palf: {
    title: "Passionnément a la folie",
    name: "Passionnément, à la folie",
    path: "/passionnement-a-la-folie",
    image: "/logo_palf.png",
    authors: ["Hugo"],
    dates: "2025 – 2026",
    dateStart: 2025,
    description:
      "Rose, la fleuriste du village, acceptera un rendez-vous amoureux au jardinier qui réalisera le plus beau bouquet de fleurs. Mais la tâche ne sera pas évidente, tous les jardiniers devront partager le même jardin, alors attention au coup fourré.",
    featured: true,
    age: "10+",
    players: "2-5",
    time: "15'",
  },
  poissonPourri: {
    title: "Poisson pourri",
    name: "Poisson pourri",
    path: "/poisson-pourri",
    image: "/logo_poisson-pourri.png",
    authors: ["Hugo"],
    dates: "2026 – 20XX",
    dateStart: 2026,
    description:
      "Pour votre ragoût de ce soir vous cherchez à obtenir les plus beaux poissons frais. Mais le vendeur est sournois, il ne vous dit pas à l'avance si le poisson est frais ou pourri. C'est une fois acheté que vous verrez la bonne ou mauvaise surprise. A vous de prendre le risque !",
    featured: false,
    age: "12+",
    players: "3-6",
    time: "20'",
  },
  /*totem: {
    title: "Totem",
    name: "Totem",
    path: "/totem",
    image: "/totem_logo.png",
    authors: ["Hugo"],
    dates: "2026 – 20XX",
    dateStart: 2026,
  },*/
  goldenNuggets: {
    title: "Cowboys et les Golden Nuggets",
    name: "Cowboys et les Golden Nuggets",
    path: "/cowboys-golden-nuggets",
    image: "/cowboys_logo.png",
    authors: ["Julien"],
    dates: "2026 – 20XX",
    dateStart: 2026,
    description:
      "Bienvenu au far West lors de la conquête de l'or. Là où chaque cowboy a espoir de faire fortune en trouvant les plus grosses pépites d'or. Trouver ces fameuses golden nuggets ne suffira pas, il faudra également les acheminer en toute sécurité jusqu'à votre",
    featured: false,
    age: "7+",
    players: "2-6",
    time: "45'",
  },
  /*  monsterSnacks: {
  title:
    name: "Monster Snacks",
    path: "/monster-snacks",
    image: "/Logo_MonsterSnacks.png",
  },
*/
};

const gameList = Object.fromEntries(
  Object.entries(gameListRaw).sort(([, a], [, b]) => b.dateStart - a.dateStart),
);

export default gameList;

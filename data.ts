export type Post = {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
    comments: Comment[];
  };
  
  export type Comment = {
    id: number;
    postId: number;
    email: string;
    body: string;
  };
  
  export const posts: Post[] = [
    {
      id: 1,
      title: "Holanda possuí o maior jardim de flores do mundo",
      imageUrl: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/keukenhof-holanda.jpg.webp",
          body: "Já a Holanda possuí um jardim de flores fabuloso, que desabrocha na primavera e atraí turistas do mundo inteiro. Trata-se do Keukenhof que fica a 41 km da capital e pode ser incluído em um roteiro de 5 dias em Amsterdam.Já a Holanda possuí um jardim de flores fabuloso, que desabrocha na primavera e atraí turistas do mundo inteiro.",
      comments: [
            {
            id: 1,
            postId: 1,
            email: "arthur@gmail.com",
            body: "Linda imagem!",
            },
            {
            id: 2,
            postId: 1,
            email: "ana_julia@gmail.com",
            body: "Adoro flores!",
            },
        ],
    },

    {
      id: 2,
      title: "Incrível paisagem de Antelope Canyon nos estados Unidos.",
      imageUrl: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/cavernas-nos-estados-unidos.jpg.webp",
      body: "Uma das paisagens naturais que mais impressiona é a formação das cavernas do Antelope Canyon, localizado no Arizona.",
      comments: [
            {
            id: 3,
            postId: 2,
            email: "felipe@gmail.com",
            body: "Desertos são maravilhosos!",
            },
            {
            id: 4,
            postId: 2,
            email: "renata@hotmail.com",
            body: "Que linda imagem!",
            },
      ],
    },

    {
        id: 3,
        title: "Mount Cook possuí uma linda natureza ao redor.",
        imageUrl: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/mount-cook.jpg.webp",
        body: "Localizado no sul da Nova Zelândia, o Mount Cook está entre as paisagens naturais mais bonitas do mundo. A região do Vale da Tasmânia ainda possuí diversos icebergs e um destino de inverno muito procurado.",
        comments: [
            {
            id: 5,
            postId: 3,
            email: "maria@gmail.com",
            body: "Bela imagem!",
            },
            {
            id: 6,
            postId: 3,
            email: "heitor@hotmail.com.br",
            body: "Um nome interresante para uma montanha =D",
            },
        ],
      },

      {
        id: 4,
        title: "montanhas mais bonitas da europaAlpes italianos e seu charme sempre rendem belas fotos.",
        imageUrl: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/alpes-italianos.jpg.webp",
        body: "Visitar as Dolomitas, na Itália, é se encantar com os alpes do país.",
        comments: [
            {
            id: 7,
            postId: 4,
            email: "pedro@gmail.com",
            body: "Maravilha!",
            },
            {
            id: 8,
            postId: 4,
            email: "joão@hotmail.com.br",
            body: "Gostaria de ir algum dia...",
            },
        ],
      },

      {
        id: 5,
        title: "Lago Louise em Alberta é um dos mais belos do planeta.",
        imageUrl: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/lago-louise.jpg.webp",
        body: "Admirado pelos viajantes que visitam o Parque nacional de Baniff durante inverno, o Lago Louise dispensa apresentações pelas imagens que proporciona.",
        comments: [
            {
            id: 8,
            postId: 5,
            email: "sophia@gmail.com",
            body: "Realmente muito bonito!",
            },
            {
            id: 9,
            postId: 5,
            email: "isabela@gmail.com",
            body: "Simplismente incrivel!",
            },
        ],
      },

  ];
  
export type PostDataType = {
    body: string,
    id: number,
    imageUrl: string,
    title: string
  }

export const postsData: PostDataType[] = [
    {
      id: 1,
      title: 'Lago Louise em Alberta é um dos mais belos do planeta.',
      body: 'Admirado pelos viajantes que visitam o Parque nacional de Baniff durante inverno, o Lago Louise dispensa apresentações pelas imagens que proporciona.',
      imageUrl: 'https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/lago-louise.jpg.webp',
    },
    {
      id: 2,
      title: 'Alpes italianos',
      body: 'Os Alpes Italianos e Dolomitas pertencem às Montanhas dos Alpes que chegam até 3 mil metros de altitude e estão localizadas nas regiões do Vêneto, Trentino Alto-Ádige e Friuli ao norte da Itália.',
      imageUrl: 'https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/alpes-italianos.jpg.webp',
    },
    {
      id: 3,
      title: 'Mount Cook possuí uma linda natureza ao redor.',
      body: 'Localizado no sul da Nova Zelândia, o Mount Cook está entre as paisagens naturais mais bonitas do mundo. A região do Vale da Tasmânia ainda possuí diversos icebergs e um destino de inverno muito procurado.',
      imageUrl: 'https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/mount-cook.jpg.webp',
    },
    {
      id: 4,
      title: 'Incrível paisagem de Antelope Canyon nos estados Unidos.',
      body: 'Uma das paisagens naturais que mais impressiona é a formação das cavernas do Antelope Canyon, localizado no Arizona.',
      imageUrl: 'https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/cavernas-nos-estados-unidos.jpg.webp',
    },
    {
      id: 5,
      title: 'Holanda possuí o maior jardim de flores do mundo',
      body: 'Na Holanda possuí um jardim de flores fabuloso, que desabrocha na primavera e atraí turistas do mundo inteiro. Trata-se do Keukenhof que fica a 41 km da capital e pode ser incluído em um roteiro de 5 dias em Amsterdam.Já a Holanda possuí um jardim de flores fabuloso, que desabrocha na primavera e atraí turistas do mundo inteiro.',
      imageUrl: 'https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/keukenhof-holanda.jpg.webp',
    },
  ];
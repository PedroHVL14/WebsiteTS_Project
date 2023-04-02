export type PostDataType = {
  body: string,
  id: number,
  imageUrl: string,
  title: string
}
type PostCommentsType = {
  id2: number,
  postId: number,
  email: string,
  body2: string
}


const postsData: PostDataType[] = [
  {
    id: 1,
    title: 'Lago Louise em Alberta é um dos mais belos do planeta.',
    body: 'Admirado pelos viajantes que visitam o Parque nacional de Baniff durante inverno, o Lago Louise dispensa apresentações pelas imagens que proporciona.',
    imageUrl: 'https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2020/08/lago-louise.jpg.webp',
  },
  {
    id: 2,
    title: 'Alpes italianos',
    body: 'Visitar as Dolomitas, na Itália, é se encantar com os alpes do país.',
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
  }
];

const postCard = ({ body, id, imageUrl, title }: PostDataType) =>
  `
  <div class='post'>
    <button type='button' class='post-btn' id='${id}'>
      <img src='${imageUrl}' alt='${title}' />
      <div>
        <h1>${title}</h1>
        <p>${body}</p>
      </div>
    </button>
  </div>
  `;

const commentCard = ({ id2, postId, email, body2 }: PostCommentsType) =>
  `
  <div class='post'>
    <button type='button' class='post-btn' id='${id2}'>
      <div>
        <h1>${email}</h1>
        <p>${body2}</p>
      </div>
    </button>
  </div>
  `;

const container = document.getElementById('main')

if (container) {

  const handleShowPost = (postId: number) => {
    console.log(postId)
    let postHTML = ''

    const filteredComments = commentsData.filter(comment => comment.postId === postId)

    for (const postComment of filteredComments) {
      postHTML += commentCard(postComment)
    }

    container.innerHTML = postHTML
  }


  const init = () => {
    let postsDataToHTML = ''

    for (const postData of postsData) {
      postsDataToHTML += postCard(postData)
    }

    container.innerHTML = postsDataToHTML

    const postButtons = document.querySelectorAll('.post-btn');
    postButtons.forEach((button) => {
      button.addEventListener('click', function () {
        handleShowPost(+this.id)
      });
    });
  }

  init()

  const commentsData: PostCommentsType[] = [
    {
      id2: 1,
      postId: 1,
      email: 'pedro@gmail.com',
      body2: 'Linda imagem!'
    },
    {
      id2: 2,
      postId: 1,
      email: 'arthur@hotmail.com',
      body2: 'Uma bela paisagem =D',
    },
    {
      id2: 1,
      postId: 2,
      email: 'ana@gmail.com',
      body2: 'Adoro esse site!',
    },
    {
      id2: 2,
      postId: 2,
      email: 'eduardo@gmail.com',
      body2: 'Que site bem feito =D',
    },
    {
      id2: 1,
      postId: 3,
      email: 'pedro@gmail.com',
      body2: 'Que bela imagem!',
    },
    {
      id2: 2,
      postId: 3,
      email: 'eduardo@gmail.com',
      body2: 'Adoro esse site!',
    },
    {
      id2: 1,
      postId: 4,
      email: 'gabriela@hotmail.com',
      body2: 'Que site bem feito =D',
    },
    {
      id2: 2,
      postId: 4,
      email: 'pedro@gmail.com',
      body2: 'Linda imagem!',
    },
    {
      id2: 1,
      postId: 5,
      email: 'ana@gmail.com',
      body2: 'Adoro esse site!',
    },
    {
      id2: 2,
      postId: 5,
      email: 'gabriela@hotmail.com',
      body2: 'Uma bela paisagem =D',
    },
  ]
}



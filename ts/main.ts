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

const commentsData: PostCommentsType[] = [
  {
    id2: 1,
    postId: 1,
    email: 'pedro@gmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.'
  },
  {
    id2: 2,
    postId: 1,
    email: 'arthur@hotmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 1,
    postId: 2,
    email: 'ana@gmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 2,
    postId: 2,
    email: 'eduardo@gmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 1,
    postId: 3,
    email: 'pedro@gmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 2,
    postId: 3,
    email: 'eduardo@gmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 1,
    postId: 4,
    email: 'gabriela@hotmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 2,
    postId: 4,
    email: 'pedro@gmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 1,
    postId: 5,
    email: 'ana@gmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
  {
    id2: 2,
    postId: 5,
    email: 'gabriela@hotmail.com',
    body2: 'Olá! Este é uma mensagem de teste, criado para verificar se o sistema de envio e recebimento de mensagens está funcionando corretamente. Se você estiver lendo esta mensagem, isso significa que ela foi entregue com sucesso.',
  },
]

const postCard = ({ body, id, imageUrl, title }: PostDataType) =>               // HTML Página dos Posts
  `
  <div class='post'>
  <p>
    <button type='button' class='post-btn' id='${id}'>
      <head><img class = 'imagem' src='${imageUrl}' alt='${title}' /> </head> <p> <h2>Comentários: [clique]</h2> </p> </button>
      <div class = 'descrição'>
      <div>
        <p><h1>${title}</h1></p>
        <p><h2>${body}</h2></p>
      </div>
      </div>
  <p>
  </div>
  `;

const commentCard = ({ id2, postId, email, body2 }: PostCommentsType) =>      // HTML do determinado comentário
  `
  <div class='post'>
      <div class = 'comment'>
        <p><h3>${email}</h3></p>
        <p><h3>${body2}</h3></p>
      </div>
      <button type='button' class='post01'> 
      <p>Voltar<p>
      </button>
  </div>
  `;

const container = document.getElementById('main')

if (container) {                                      // Mostrar Comentários e o post do Id clicado 

  const handleShowPost = (postId: number) => {
    console.log(postId)
    let postHTML = ''

    const post = postsData.find((post) => post.id === postId)

    if (post) {
      postHTML += postCard(post)
    }

    const filteredComments = commentsData.filter(comment => comment.postId === postId)

    for (const postComment of filteredComments) {
      postHTML += commentCard(postComment)
    }

    container.innerHTML = postHTML

    const returnposts = document.querySelectorAll('.post01'); // Button para voltar
    returnposts.forEach((button) => {
      button.addEventListener('click', function () {
        init()
      });
    });
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
        handleShowPost(+this.id)                          // Guardar Id de clique
      });
    });
  }

  init()

}



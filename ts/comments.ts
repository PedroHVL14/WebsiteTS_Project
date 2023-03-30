type PostCommentsType = {
    id: number,
    postId: number,
    email: string,
    body: string
  }

  const commentsData = [
    {
        id: 1,
        postId: 1,
        email: 'pedro@gmail.com',
        body: 'Linda imagem!'
    },
    {
        id: 1,
        postId: 2,
        email: 'arthur@hotmail.com',
        body: 'Uma bela paisagem =D',
    },
    {
        id: 2,
        postId: 1,
        email: 'ana@gmail.com',
        body: 'Adoro esse site!',
    },
    {
        id: 2,
        postId: 2,
        email: 'eduardo@gmail.com',
        body: 'Que site bem feito =D',
    },
    {
        id: 3,
        postId: 1,
        email: 'pedro@gmail.com',
        body: 'Que bela imagem!',
    },
    {
        id: 3,
        postId: 2,
        email: 'eduardo@gmail.com',
        body: 'Adoro esse site!',
    },
    {
        id: 4,
        postId: 1,
        email: 'gabriela@hotmail.com',
        body: 'Que site bem feito =D',
    },
    {
        id: 4,
        postId: 2,
        email: 'pedro@gmail.com',
        body: 'Linda imagem!',
    },
    {
        id: 5,
        postId: 1,
        email: 'ana@gmail.com',
        body: 'Adoro esse site!',
    },
    {
        id: 5,
        postId: 2,
        email: 'gabriela@hotmail.com',
        body: 'Uma bela paisagem =D',
    },
  ]

  export { commentsData };
import { PostCommentsType, commentsData } from "./commentsData";
import { PostDataType, postsData } from "./postData";


const postCard = ({ body, id, imageUrl, title }: PostDataType) => {              // HTML Página dos Posts
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
  `};

const commentCard = ({ id2, postId, email, body2 }: PostCommentsType) => {     // HTML do determinado comentário
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
  `};

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



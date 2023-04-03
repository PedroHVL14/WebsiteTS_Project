const postsData = [
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
const commentsData = [
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
];
const postCard = ({ body, id, imageUrl, title }) => // HTML Página dos Posts
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
const commentCard = ({ id2, postId, email, body2 }) => // HTML do determinado comentário
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
const container = document.getElementById('main');
if (container) { // Mostrar Comentários e o post do Id clicado 
    const handleShowPost = (postId) => {
        console.log(postId);
        let postHTML = '';
        const post = postsData.find((post) => post.id === postId);
        if (post) {
            postHTML += postCard(post);
        }
        const filteredComments = commentsData.filter(comment => comment.postId === postId);
        for (const postComment of filteredComments) {
            postHTML += commentCard(postComment);
        }
        container.innerHTML = postHTML;
        const returnposts = document.querySelectorAll('.post01'); // Button para voltar
        returnposts.forEach((button) => {
            button.addEventListener('click', function () {
                init();
            });
        });
    };
    const init = () => {
        let postsDataToHTML = '';
        for (const postData of postsData) {
            postsDataToHTML += postCard(postData);
        }
        container.innerHTML = postsDataToHTML;
        const postButtons = document.querySelectorAll('.post-btn');
        postButtons.forEach((button) => {
            button.addEventListener('click', function () {
                handleShowPost(+this.id); // Guardar Id de clique
            });
        });
    };
    init();
}
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0EsTUFBTSxTQUFTLEdBQW1CO0lBQ2hDO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsd0RBQXdEO1FBQy9ELElBQUksRUFBRSx1SkFBdUo7UUFDN0osUUFBUSxFQUFFLDBHQUEwRztLQUNySDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLElBQUksRUFBRSxxTUFBcU07UUFDM00sUUFBUSxFQUFFLDhHQUE4RztLQUN6SDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsZ0RBQWdEO1FBQ3ZELElBQUksRUFBRSwrTUFBK007UUFDck4sUUFBUSxFQUFFLHlHQUF5RztLQUNwSDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsMERBQTBEO1FBQ2pFLElBQUksRUFBRSxzSEFBc0g7UUFDNUgsUUFBUSxFQUFFLDBIQUEwSDtLQUNySTtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsa0RBQWtEO1FBQ3pELElBQUksRUFBRSw0VUFBNFU7UUFDbFYsUUFBUSxFQUFFLGdIQUFnSDtLQUMzSDtDQUNGLENBQUM7QUFFRixNQUFNLFlBQVksR0FBdUI7SUFDdkM7UUFDRSxHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixLQUFLLEVBQUUsZ09BQWdPO0tBQ3hPO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixLQUFLLEVBQUUsZ09BQWdPO0tBQ3hPO0lBQ0Q7UUFDRSxHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxDQUFDO1FBQ1QsS0FBSyxFQUFFLGVB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QUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFBO0lBR0QsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO1FBQ2hCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQTtRQUV4QixLQUFLLE1BQU0sUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUNoQyxlQUFlLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ3RDO1FBRUQsU0FBUyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUE7UUFFckMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM3QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUMvQixjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUEsQ0FBMEIsdUJBQXVCO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUE7SUFFRCxJQUFJLEVBQUUsQ0FBQTtDQUVQIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgUG9zdERhdGFUeXBlID0ge1xuICBib2R5OiBzdHJpbmcsXG4gIGlkOiBudW1iZXIsXG4gIGltYWdlVXJsOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmdcbn1cbnR5cGUgUG9zdENvbW1lbnRzVHlwZSA9IHtcbiAgaWQyOiBudW1iZXIsXG4gIHBvc3RJZDogbnVtYmVyLFxuICBlbWFpbDogc3RyaW5nLFxuICBib2R5Mjogc3RyaW5nXG59XG5cblxuY29uc3QgcG9zdHNEYXRhOiBQb3N0RGF0YVR5cGVbXSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnTGFnbyBMb3Vpc2UgZW0gQWxiZXJ0YSDDqSB1bSBkb3MgbWFpcyBiZWxvcyBkbyBwbGFuZXRhLicsXG4gICAgYm9keTogJ0FkbWlyYWRvIHBlbG9zIHZpYWphbnRlcyBxdWUgdmlzaXRhbSBvIFBhcnF1ZSBuYWNpb25hbCBkZSBCYW5pZmYgZHVyYW50ZSBpbnZlcm5vLCBvIExhZ28gTG91aXNlIGRpc3BlbnNhIGFwcmVzZW50YcOnw7VlcyBwZWxhcyBpbWFnZW5zIHF1ZSBwcm9wb3JjaW9uYS4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgvbGFnby1sb3Vpc2UuanBnLndlYnAnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBbHBlcyBpdGFsaWFub3MnLFxuICAgIGJvZHk6ICdPcyBBbHBlcyBJdGFsaWFub3MgZSBEb2xvbWl0YXMgcGVydGVuY2VtIMOgcyBNb250YW5oYXMgZG9zIEFscGVzIHF1ZSBjaGVnYW0gYXTDqSAzIG1pbCBtZXRyb3MgZGUgYWx0aXR1ZGUgZSBlc3TDo28gbG9jYWxpemFkYXMgbmFzIHJlZ2nDtWVzIGRvIFbDqm5ldG8sIFRyZW50aW5vIEFsdG8tw4FkaWdlIGUgRnJpdWxpIGFvIG5vcnRlIGRhIEl0w6FsaWEuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vd3d3LnF1ZXJvdmlhamFybWFpcy5jb20vd3AtY29udGVudC93ZWJwLWV4cHJlc3Mvd2VicC1pbWFnZXMvdXBsb2Fkcy8yMDIwLzA4L2FscGVzLWl0YWxpYW5vcy5qcGcud2VicCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ01vdW50IENvb2sgcG9zc3XDrSB1bWEgbGluZGEgbmF0dXJlemEgYW8gcmVkb3IuJyxcbiAgICBib2R5OiAnTG9jYWxpemFkbyBubyBzdWwgZGEgTm92YSBaZWzDom5kaWEsIG8gTW91bnQgQ29vayBlc3TDoSBlbnRyZSBhcyBwYWlzYWdlbnMgbmF0dXJhaXMgbWFpcyBib25pdGFzIGRvIG11bmRvLiBBIHJlZ2nDo28gZG8gVmFsZSBkYSBUYXNtw6JuaWEgYWluZGEgcG9zc3XDrSBkaXZlcnNvcyBpY2ViZXJncyBlIHVtIGRlc3Rpbm8gZGUgaW52ZXJubyBtdWl0byBwcm9jdXJhZG8uJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vd3d3LnF1ZXJvdmlhamFybWFpcy5jb20vd3AtY29udGVudC93ZWJwLWV4cHJlc3Mvd2VicC1pbWFnZXMvdXBsb2Fkcy8yMDIwLzA4L21vdW50LWNvb2suanBnLndlYnAnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6ICdJbmNyw612ZWwgcGFpc2FnZW0gZGUgQW50ZWxvcGUgQ2FueW9uIG5vcyBlc3RhZG9zIFVuaWRvcy4nLFxuICAgIGJvZHk6ICdVbWEgZGFzIHBhaXNhZ2VucyBuYXR1cmFpcyBxdWUgbWFpcyBpbXByZXNzaW9uYSDDqSBhIGZvcm1hw6fDo28gZGFzIGNhdmVybmFzIGRvIEFudGVsb3BlIENhbnlvbiwgbG9jYWxpemFkbyBubyBBcml6b25hLicsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3d3dy5xdWVyb3ZpYWphcm1haXMuY29tL3dwLWNvbnRlbnQvd2VicC1leHByZXNzL3dlYnAtaW1hZ2VzL3VwbG9hZHMvMjAyMC8wOC9jYXZlcm5hcy1ub3MtZXN0YWRvcy11bmlkb3MuanBnLndlYnAnLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6ICdIb2xhbmRhIHBvc3N1w60gbyBtYWlvciBqYXJkaW0gZGUgZmxvcmVzIGRvIG11bmRvJyxcbiAgICBib2R5OiAnTmEgSG9sYW5kYSBwb3NzdcOtIHVtIGphcmRpbSBkZSBmbG9yZXMgZmFidWxvc28sIHF1ZSBkZXNhYnJvY2hhIG5hIHByaW1hdmVyYSBlIGF0cmHDrSB0dXJpc3RhcyBkbyBtdW5kbyBpbnRlaXJvLiBUcmF0YS1zZSBkbyBLZXVrZW5ob2YgcXVlIGZpY2EgYSA0MSBrbSBkYSBjYXBpdGFsIGUgcG9kZSBzZXIgaW5jbHXDrWRvIGVtIHVtIHJvdGVpcm8gZGUgNSBkaWFzIGVtIEFtc3RlcmRhbS5Kw6EgYSBIb2xhbmRhIHBvc3N1w60gdW0gamFyZGltIGRlIGZsb3JlcyBmYWJ1bG9zbywgcXVlIGRlc2Ficm9jaGEgbmEgcHJpbWF2ZXJhIGUgYXRyYcOtIHR1cmlzdGFzIGRvIG11bmRvIGludGVpcm8uJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vd3d3LnF1ZXJvdmlhamFybWFpcy5jb20vd3AtY29udGVudC93ZWJwLWV4cHJlc3Mvd2VicC1pbWFnZXMvdXBsb2Fkcy8yMDIwLzA4L2tldWtlbmhvZi1ob2xhbmRhLmpwZy53ZWJwJyxcbiAgfSxcbl07XG5cbmNvbnN0IGNvbW1lbnRzRGF0YTogUG9zdENvbW1lbnRzVHlwZVtdID0gW1xuICB7XG4gICAgaWQyOiAxLFxuICAgIHBvc3RJZDogMSxcbiAgICBlbWFpbDogJ3BlZHJvQGdtYWlsLmNvbScsXG4gICAgYm9keTI6ICdPbMOhISBFc3RlIMOpIHVtYSBtZW5zYWdlbSBkZSB0ZXN0ZSwgY3JpYWRvIHBhcmEgdmVyaWZpY2FyIHNlIG8gc2lzdGVtYSBkZSBlbnZpbyBlIHJlY2ViaW1lbnRvIGRlIG1lbnNhZ2VucyBlc3TDoSBmdW5jaW9uYW5kbyBjb3JyZXRhbWVudGUuIFNlIHZvY8OqIGVzdGl2ZXIgbGVuZG8gZXN0YSBtZW5zYWdlbSwgaXNzbyBzaWduaWZpY2EgcXVlIGVsYSBmb2kgZW50cmVndWUgY29tIHN1Y2Vzc28uJ1xuICB9LFxuICB7XG4gICAgaWQyOiAyLFxuICAgIHBvc3RJZDogMSxcbiAgICBlbWFpbDogJ2FydGh1ckBob3RtYWlsLmNvbScsXG4gICAgYm9keTI6ICdPbMOhISBFc3RlIMOpIHVtYSBtZW5zYWdlbSBkZSB0ZXN0ZSwgY3JpYWRvIHBhcmEgdmVyaWZpY2FyIHNlIG8gc2lzdGVtYSBkZSBlbnZpbyBlIHJlY2ViaW1lbnRvIGRlIG1lbnNhZ2VucyBlc3TDoSBmdW5jaW9uYW5kbyBjb3JyZXRhbWVudGUuIFNlIHZvY8OqIGVzdGl2ZXIgbGVuZG8gZXN0YSBtZW5zYWdlbSwgaXNzbyBzaWduaWZpY2EgcXVlIGVsYSBmb2kgZW50cmVndWUgY29tIHN1Y2Vzc28uJyxcbiAgfSxcbiAge1xuICAgIGlkMjogMSxcbiAgICBwb3N0SWQ6IDIsXG4gICAgZW1haWw6ICdhbmFAZ21haWwuY29tJyxcbiAgICBib2R5MjogJ09sw6EhIEVzdGUgw6kgdW1hIG1lbnNhZ2VtIGRlIHRlc3RlLCBjcmlhZG8gcGFyYSB2ZXJpZmljYXIgc2UgbyBzaXN0ZW1hIGRlIGVudmlvIGUgcmVjZWJpbWVudG8gZGUgbWVuc2FnZW5zIGVzdMOhIGZ1bmNpb25hbmRvIGNvcnJldGFtZW50ZS4gU2Ugdm9jw6ogZXN0aXZlciBsZW5kbyBlc3RhIG1lbnNhZ2VtLCBpc3NvIHNpZ25pZmljYSBxdWUgZWxhIGZvaSBlbnRyZWd1ZSBjb20gc3VjZXNzby4nLFxuICB9LFxuICB7XG4gICAgaWQyOiAyLFxuICAgIHBvc3RJZDogMixcbiAgICBlbWFpbDogJ2VkdWFyZG9AZ21haWwuY29tJyxcbiAgICBib2R5MjogJ09sw6EhIEVzdGUgw6kgdW1hIG1lbnNhZ2VtIGRlIHRlc3RlLCBjcmlhZG8gcGFyYSB2ZXJpZmljYXIgc2UgbyBzaXN0ZW1hIGRlIGVudmlvIGUgcmVjZWJpbWVudG8gZGUgbWVuc2FnZW5zIGVzdMOhIGZ1bmNpb25hbmRvIGNvcnJldGFtZW50ZS4gU2Ugdm9jw6ogZXN0aXZlciBsZW5kbyBlc3RhIG1lbnNhZ2VtLCBpc3NvIHNpZ25pZmljYSBxdWUgZWxhIGZvaSBlbnRyZWd1ZSBjb20gc3VjZXNzby4nLFxuICB9LFxuICB7XG4gICAgaWQyOiAxLFxuICAgIHBvc3RJZDogMyxcbiAgICBlbWFpbDogJ3BlZHJvQGdtYWlsLmNvbScsXG4gICAgYm9keTI6ICdPbMOhISBFc3RlIMOpIHVtYSBtZW5zYWdlbSBkZSB0ZXN0ZSwgY3JpYWRvIHBhcmEgdmVyaWZpY2FyIHNlIG8gc2lzdGVtYSBkZSBlbnZpbyBlIHJlY2ViaW1lbnRvIGRlIG1lbnNhZ2VucyBlc3TDoSBmdW5jaW9uYW5kbyBjb3JyZXRhbWVudGUuIFNlIHZvY8OqIGVzdGl2ZXIgbGVuZG8gZXN0YSBtZW5zYWdlbSwgaXNzbyBzaWduaWZpY2EgcXVlIGVsYSBmb2kgZW50cmVndWUgY29tIHN1Y2Vzc28uJyxcbiAgfSxcbiAge1xuICAgIGlkMjogMixcbiAgICBwb3N0SWQ6IDMsXG4gICAgZW1haWw6ICdlZHVhcmRvQGdtYWlsLmNvbScsXG4gICAgYm9keTI6ICdPbMOhISBFc3RlIMOpIHVtYSBtZW5zYWdlbSBkZSB0ZXN0ZSwgY3JpYWRvIHBhcmEgdmVyaWZpY2FyIHNlIG8gc2lzdGVtYSBkZSBlbnZpbyBlIHJlY2ViaW1lbnRvIGRlIG1lbnNhZ2VucyBlc3TDoSBmdW5jaW9uYW5kbyBjb3JyZXRhbWVudGUuIFNlIHZvY8OqIGVzdGl2ZXIgbGVuZG8gZXN0YSBtZW5zYWdlbSwgaXNzbyBzaWduaWZpY2EgcXVlIGVsYSBmb2kgZW50cmVndWUgY29tIHN1Y2Vzc28uJyxcbiAgfSxcbiAge1xuICAgIGlkMjogMSxcbiAgICBwb3N0SWQ6IDQsXG4gICAgZW1haWw6ICdnYWJyaWVsYUBob3RtYWlsLmNvbScsXG4gICAgYm9keTI6ICdPbMOhISBFc3RlIMOpIHVtYSBtZW5zYWdlbSBkZSB0ZXN0ZSwgY3JpYWRvIHBhcmEgdmVyaWZpY2FyIHNlIG8gc2lzdGVtYSBkZSBlbnZpbyBlIHJlY2ViaW1lbnRvIGRlIG1lbnNhZ2VucyBlc3TDoSBmdW5jaW9uYW5kbyBjb3JyZXRhbWVudGUuIFNlIHZvY8OqIGVzdGl2ZXIgbGVuZG8gZXN0YSBtZW5zYWdlbSwgaXNzbyBzaWduaWZpY2EgcXVlIGVsYSBmb2kgZW50cmVndWUgY29tIHN1Y2Vzc28uJyxcbiAgfSxcbiAge1xuICAgIGlkMjogMixcbiAgICBwb3N0SWQ6IDQsXG4gICAgZW1haWw6ICdwZWRyb0BnbWFpbC5jb20nLFxuICAgIGJvZHkyOiAnT2zDoSEgRXN0ZSDDqSB1bWEgbWVuc2FnZW0gZGUgdGVzdGUsIGNyaWFkbyBwYXJhIHZlcmlmaWNhciBzZSBvIHNpc3RlbWEgZGUgZW52aW8gZSByZWNlYmltZW50byBkZSBtZW5zYWdlbnMgZXN0w6EgZnVuY2lvbmFuZG8gY29ycmV0YW1lbnRlLiBTZSB2b2PDqiBlc3RpdmVyIGxlbmRvIGVzdGEgbWVuc2FnZW0sIGlzc28gc2lnbmlmaWNhIHF1ZSBlbGEgZm9pIGVudHJlZ3VlIGNvbSBzdWNlc3NvLicsXG4gIH0sXG4gIHtcbiAgICBpZDI6IDEsXG4gICAgcG9zdElkOiA1LFxuICAgIGVtYWlsOiAnYW5hQGdtYWlsLmNvbScsXG4gICAgYm9keTI6ICdPbMOhISBFc3RlIMOpIHVtYSBtZW5zYWdlbSBkZSB0ZXN0ZSwgY3JpYWRvIHBhcmEgdmVyaWZpY2FyIHNlIG8gc2lzdGVtYSBkZSBlbnZpbyBlIHJlY2ViaW1lbnRvIGRlIG1lbnNhZ2VucyBlc3TDoSBmdW5jaW9uYW5kbyBjb3JyZXRhbWVudGUuIFNlIHZvY8OqIGVzdGl2ZXIgbGVuZG8gZXN0YSBtZW5zYWdlbSwgaXNzbyBzaWduaWZpY2EgcXVlIGVsYSBmb2kgZW50cmVndWUgY29tIHN1Y2Vzc28uJyxcbiAgfSxcbiAge1xuICAgIGlkMjogMixcbiAgICBwb3N0SWQ6IDUsXG4gICAgZW1haWw6ICdnYWJyaWVsYUBob3RtYWlsLmNvbScsXG4gICAgYm9keTI6ICdPbMOhISBFc3RlIMOpIHVtYSBtZW5zYWdlbSBkZSB0ZXN0ZSwgY3JpYWRvIHBhcmEgdmVyaWZpY2FyIHNlIG8gc2lzdGVtYSBkZSBlbnZpbyBlIHJlY2ViaW1lbnRvIGRlIG1lbnNhZ2VucyBlc3TDoSBmdW5jaW9uYW5kbyBjb3JyZXRhbWVudGUuIFNlIHZvY8OqIGVzdGl2ZXIgbGVuZG8gZXN0YSBtZW5zYWdlbSwgaXNzbyBzaWduaWZpY2EgcXVlIGVsYSBmb2kgZW50cmVndWUgY29tIHN1Y2Vzc28uJyxcbiAgfSxcbl1cblxuY29uc3QgcG9zdENhcmQgPSAoeyBib2R5LCBpZCwgaW1hZ2VVcmwsIHRpdGxlIH06IFBvc3REYXRhVHlwZSkgPT4gICAgICAgICAgICAgICAvLyBIVE1MIFDDoWdpbmEgZG9zIFBvc3RzXG4gIGBcbiAgPGRpdiBjbGFzcz0ncG9zdCc+XG4gIDxwPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0ncG9zdC1idG4nIGlkPScke2lkfSc+XG4gICAgICA8aGVhZD48aW1nIGNsYXNzID0gJ2ltYWdlbScgc3JjPScke2ltYWdlVXJsfScgYWx0PScke3RpdGxlfScgLz4gPC9oZWFkPiA8cD4gPGgyPkNvbWVudMOhcmlvczogW2NsaXF1ZV08L2gyPiA8L3A+IDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzcyA9ICdkZXNjcmnDp8Ojbyc+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD48aDE+JHt0aXRsZX08L2gxPjwvcD5cbiAgICAgICAgPHA+PGgyPiR7Ym9keX08L2gyPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDxwPlxuICA8L2Rpdj5cbiAgYDtcblxuY29uc3QgY29tbWVudENhcmQgPSAoeyBpZDIsIHBvc3RJZCwgZW1haWwsIGJvZHkyIH06IFBvc3RDb21tZW50c1R5cGUpID0+ICAgICAgLy8gSFRNTCBkbyBkZXRlcm1pbmFkbyBjb21lbnTDoXJpb1xuICBgXG4gIDxkaXYgY2xhc3M9J3Bvc3QnPlxuICAgICAgPGRpdiBjbGFzcyA9ICdjb21tZW50Jz5cbiAgICAgICAgPHA+PGgzPiR7ZW1haWx9PC9oMz48L3A+XG4gICAgICAgIDxwPjxoMz4ke2JvZHkyfTwvaDM+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Bvc3QwMSc+IFxuICAgICAgPHA+Vm9sdGFyPHA+XG4gICAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIGA7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcblxuaWYgKGNvbnRhaW5lcikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9zdHJhciBDb21lbnTDoXJpb3MgZSBvIHBvc3QgZG8gSWQgY2xpY2FkbyBcblxuICBjb25zdCBoYW5kbGVTaG93UG9zdCA9IChwb3N0SWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvc3RJZClcbiAgICBsZXQgcG9zdEhUTUwgPSAnJ1xuXG4gICAgY29uc3QgcG9zdCA9IHBvc3RzRGF0YS5maW5kKChwb3N0KSA9PiBwb3N0LmlkID09PSBwb3N0SWQpXG5cbiAgICBpZiAocG9zdCkge1xuICAgICAgcG9zdEhUTUwgKz0gcG9zdENhcmQocG9zdClcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJlZENvbW1lbnRzID0gY29tbWVudHNEYXRhLmZpbHRlcihjb21tZW50ID0+IGNvbW1lbnQucG9zdElkID09PSBwb3N0SWQpXG5cbiAgICBmb3IgKGNvbnN0IHBvc3RDb21tZW50IG9mIGZpbHRlcmVkQ29tbWVudHMpIHtcbiAgICAgIHBvc3RIVE1MICs9IGNvbW1lbnRDYXJkKHBvc3RDb21tZW50KVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBwb3N0SFRNTFxuXG4gICAgY29uc3QgcmV0dXJucG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdDAxJyk7IC8vIEJ1dHRvbiBwYXJhIHZvbHRhclxuICAgIHJldHVybnBvc3RzLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbml0KClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBwb3N0c0RhdGFUb0hUTUwgPSAnJ1xuXG4gICAgZm9yIChjb25zdCBwb3N0RGF0YSBvZiBwb3N0c0RhdGEpIHtcbiAgICAgIHBvc3RzRGF0YVRvSFRNTCArPSBwb3N0Q2FyZChwb3N0RGF0YSlcbiAgICB9XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcG9zdHNEYXRhVG9IVE1MXG5cbiAgICBjb25zdCBwb3N0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0LWJ0bicpO1xuICAgIHBvc3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoYW5kbGVTaG93UG9zdCgrdGhpcy5pZCkgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEd1YXJkYXIgSWQgZGUgY2xpcXVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKVxuXG59XG5cblxuIl19
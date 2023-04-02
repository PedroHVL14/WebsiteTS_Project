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
const postCard = ({ body, id, imageUrl, title }) => `
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
const commentCard = ({ id2, postId, email, body2 }) => `
  <div class='post'>
    <button type='button' class='post-btn' id='${id2}'>
      <div>
        <h1>${email}</h1>
        <p>${body2}</p>
      </div>
    </button>
  </div>
  `;
const container = document.getElementById('main');
if (container) {
    const handleShowPost = (postId) => {
        console.log(postId);
        let postHTML = '';
        const filteredComments = commentsData.filter(comment => comment.postId === postId);
        for (const postComment of filteredComments) {
            postHTML += commentCard(postComment);
        }
        container.innerHTML = postHTML;
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
                handleShowPost(+this.id);
            });
        });
    };
    init();
    const commentsData = [
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
    ];
}
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0EsTUFBTSxTQUFTLEdBQW1CO0lBQ2hDO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsd0RBQXdEO1FBQy9ELElBQUksRUFBRSx1SkFBdUo7UUFDN0osUUFBUSxFQUFFLDBHQUEwRztLQUNySDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLElBQUksRUFBRSxzRUFBc0U7UUFDNUUsUUFBUSxFQUFFLDhHQUE4RztLQUN6SDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsZ0RBQWdEO1FBQ3ZELElBQUksRUFBRSwrTUFBK007UUFDck4sUUFBUSxFQUFFLHlHQUF5RztLQUNwSDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsMERBQTBEO1FBQ2pFLElBQUksRUFBRSxzSEFBc0g7UUFDNUgsUUFBUSxFQUFFLDBIQUEwSDtLQUNySTtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsa0RBQWtEO1FBQ3pELElBQUksRUFBRSw0VUFBNFU7UUFDbFYsUUFBUSxFQUFFLGdIQUFnSDtLQUMzSDtDQUNGLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFnQixFQUFFLEVBQUUsQ0FDL0Q7O2lEQUUrQyxFQUFFO2tCQUNqQyxRQUFRLFVBQVUsS0FBSzs7Y0FFM0IsS0FBSzthQUNOLElBQUk7Ozs7R0FJZCxDQUFDO0FBRUosTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBb0IsRUFBRSxFQUFFLENBQ3RFOztpREFFK0MsR0FBRzs7Y0FFdEMsS0FBSzthQUNOLEtB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Q0FBQztZQUNULEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QjtLQUNGLENBQUE7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFBvc3REYXRhVHlwZSA9IHtcbiAgYm9keTogc3RyaW5nLFxuICBpZDogbnVtYmVyLFxuICBpbWFnZVVybDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nXG59XG50eXBlIFBvc3RDb21tZW50c1R5cGUgPSB7XG4gIGlkMjogbnVtYmVyLFxuICBwb3N0SWQ6IG51bWJlcixcbiAgZW1haWw6IHN0cmluZyxcbiAgYm9keTI6IHN0cmluZ1xufVxuXG5cbmNvbnN0IHBvc3RzRGF0YTogUG9zdERhdGFUeXBlW10gPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0xhZ28gTG91aXNlIGVtIEFsYmVydGEgw6kgdW0gZG9zIG1haXMgYmVsb3MgZG8gcGxhbmV0YS4nLFxuICAgIGJvZHk6ICdBZG1pcmFkbyBwZWxvcyB2aWFqYW50ZXMgcXVlIHZpc2l0YW0gbyBQYXJxdWUgbmFjaW9uYWwgZGUgQmFuaWZmIGR1cmFudGUgaW52ZXJubywgbyBMYWdvIExvdWlzZSBkaXNwZW5zYSBhcHJlc2VudGHDp8O1ZXMgcGVsYXMgaW1hZ2VucyBxdWUgcHJvcG9yY2lvbmEuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vd3d3LnF1ZXJvdmlhamFybWFpcy5jb20vd3AtY29udGVudC93ZWJwLWV4cHJlc3Mvd2VicC1pbWFnZXMvdXBsb2Fkcy8yMDIwLzA4L2xhZ28tbG91aXNlLmpwZy53ZWJwJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQWxwZXMgaXRhbGlhbm9zJyxcbiAgICBib2R5OiAnVmlzaXRhciBhcyBEb2xvbWl0YXMsIG5hIEl0w6FsaWEsIMOpIHNlIGVuY2FudGFyIGNvbSBvcyBhbHBlcyBkbyBwYcOtcy4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgvYWxwZXMtaXRhbGlhbm9zLmpwZy53ZWJwJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnTW91bnQgQ29vayBwb3NzdcOtIHVtYSBsaW5kYSBuYXR1cmV6YSBhbyByZWRvci4nLFxuICAgIGJvZHk6ICdMb2NhbGl6YWRvIG5vIHN1bCBkYSBOb3ZhIFplbMOibmRpYSwgbyBNb3VudCBDb29rIGVzdMOhIGVudHJlIGFzIHBhaXNhZ2VucyBuYXR1cmFpcyBtYWlzIGJvbml0YXMgZG8gbXVuZG8uIEEgcmVnacOjbyBkbyBWYWxlIGRhIFRhc23Dom5pYSBhaW5kYSBwb3NzdcOtIGRpdmVyc29zIGljZWJlcmdzIGUgdW0gZGVzdGlubyBkZSBpbnZlcm5vIG11aXRvIHByb2N1cmFkby4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgvbW91bnQtY29vay5qcGcud2VicCcsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ0luY3LDrXZlbCBwYWlzYWdlbSBkZSBBbnRlbG9wZSBDYW55b24gbm9zIGVzdGFkb3MgVW5pZG9zLicsXG4gICAgYm9keTogJ1VtYSBkYXMgcGFpc2FnZW5zIG5hdHVyYWlzIHF1ZSBtYWlzIGltcHJlc3Npb25hIMOpIGEgZm9ybWHDp8OjbyBkYXMgY2F2ZXJuYXMgZG8gQW50ZWxvcGUgQ2FueW9uLCBsb2NhbGl6YWRvIG5vIEFyaXpvbmEuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vd3d3LnF1ZXJvdmlhamFybWFpcy5jb20vd3AtY29udGVudC93ZWJwLWV4cHJlc3Mvd2VicC1pbWFnZXMvdXBsb2Fkcy8yMDIwLzA4L2NhdmVybmFzLW5vcy1lc3RhZG9zLXVuaWRvcy5qcGcud2VicCcsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICB0aXRsZTogJ0hvbGFuZGEgcG9zc3XDrSBvIG1haW9yIGphcmRpbSBkZSBmbG9yZXMgZG8gbXVuZG8nLFxuICAgIGJvZHk6ICdOYSBIb2xhbmRhIHBvc3N1w60gdW0gamFyZGltIGRlIGZsb3JlcyBmYWJ1bG9zbywgcXVlIGRlc2Ficm9jaGEgbmEgcHJpbWF2ZXJhIGUgYXRyYcOtIHR1cmlzdGFzIGRvIG11bmRvIGludGVpcm8uIFRyYXRhLXNlIGRvIEtldWtlbmhvZiBxdWUgZmljYSBhIDQxIGttIGRhIGNhcGl0YWwgZSBwb2RlIHNlciBpbmNsdcOtZG8gZW0gdW0gcm90ZWlybyBkZSA1IGRpYXMgZW0gQW1zdGVyZGFtLkrDoSBhIEhvbGFuZGEgcG9zc3XDrSB1bSBqYXJkaW0gZGUgZmxvcmVzIGZhYnVsb3NvLCBxdWUgZGVzYWJyb2NoYSBuYSBwcmltYXZlcmEgZSBhdHJhw60gdHVyaXN0YXMgZG8gbXVuZG8gaW50ZWlyby4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgva2V1a2VuaG9mLWhvbGFuZGEuanBnLndlYnAnLFxuICB9XG5dO1xuXG5jb25zdCBwb3N0Q2FyZCA9ICh7IGJvZHksIGlkLCBpbWFnZVVybCwgdGl0bGUgfTogUG9zdERhdGFUeXBlKSA9PlxuICBgXG4gIDxkaXYgY2xhc3M9J3Bvc3QnPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0ncG9zdC1idG4nIGlkPScke2lkfSc+XG4gICAgICA8aW1nIHNyYz0nJHtpbWFnZVVybH0nIGFsdD0nJHt0aXRsZX0nIC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+JHt0aXRsZX08L2gxPlxuICAgICAgICA8cD4ke2JvZHl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICBgO1xuXG5jb25zdCBjb21tZW50Q2FyZCA9ICh7IGlkMiwgcG9zdElkLCBlbWFpbCwgYm9keTIgfTogUG9zdENvbW1lbnRzVHlwZSkgPT5cbiAgYFxuICA8ZGl2IGNsYXNzPSdwb3N0Jz5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Bvc3QtYnRuJyBpZD0nJHtpZDJ9Jz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT4ke2VtYWlsfTwvaDE+XG4gICAgICAgIDxwPiR7Ym9keTJ9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICBgO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG5cbmlmIChjb250YWluZXIpIHtcblxuICBjb25zdCBoYW5kbGVTaG93UG9zdCA9IChwb3N0SWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvc3RJZClcbiAgICBsZXQgcG9zdEhUTUwgPSAnJ1xuXG4gICAgY29uc3QgZmlsdGVyZWRDb21tZW50cyA9IGNvbW1lbnRzRGF0YS5maWx0ZXIoY29tbWVudCA9PiBjb21tZW50LnBvc3RJZCA9PT0gcG9zdElkKVxuXG4gICAgZm9yIChjb25zdCBwb3N0Q29tbWVudCBvZiBmaWx0ZXJlZENvbW1lbnRzKSB7XG4gICAgICBwb3N0SFRNTCArPSBjb21tZW50Q2FyZChwb3N0Q29tbWVudClcbiAgICB9XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcG9zdEhUTUxcbiAgfVxuXG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBsZXQgcG9zdHNEYXRhVG9IVE1MID0gJydcblxuICAgIGZvciAoY29uc3QgcG9zdERhdGEgb2YgcG9zdHNEYXRhKSB7XG4gICAgICBwb3N0c0RhdGFUb0hUTUwgKz0gcG9zdENhcmQocG9zdERhdGEpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHBvc3RzRGF0YVRvSFRNTFxuXG4gICAgY29uc3QgcG9zdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdC1idG4nKTtcbiAgICBwb3N0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlU2hvd1Bvc3QoK3RoaXMuaWQpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKVxuXG4gIGNvbnN0IGNvbW1lbnRzRGF0YTogUG9zdENvbW1lbnRzVHlwZVtdID0gW1xuICAgIHtcbiAgICAgIGlkMjogMSxcbiAgICAgIHBvc3RJZDogMSxcbiAgICAgIGVtYWlsOiAncGVkcm9AZ21haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnTGluZGEgaW1hZ2VtISdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkMjogMixcbiAgICAgIHBvc3RJZDogMSxcbiAgICAgIGVtYWlsOiAnYXJ0aHVyQGhvdG1haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnVW1hIGJlbGEgcGFpc2FnZW0gPUQnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQyOiAxLFxuICAgICAgcG9zdElkOiAyLFxuICAgICAgZW1haWw6ICdhbmFAZ21haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnQWRvcm8gZXNzZSBzaXRlIScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDI6IDIsXG4gICAgICBwb3N0SWQ6IDIsXG4gICAgICBlbWFpbDogJ2VkdWFyZG9AZ21haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnUXVlIHNpdGUgYmVtIGZlaXRvID1EJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkMjogMSxcbiAgICAgIHBvc3RJZDogMyxcbiAgICAgIGVtYWlsOiAncGVkcm9AZ21haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnUXVlIGJlbGEgaW1hZ2VtIScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDI6IDIsXG4gICAgICBwb3N0SWQ6IDMsXG4gICAgICBlbWFpbDogJ2VkdWFyZG9AZ21haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnQWRvcm8gZXNzZSBzaXRlIScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDI6IDEsXG4gICAgICBwb3N0SWQ6IDQsXG4gICAgICBlbWFpbDogJ2dhYnJpZWxhQGhvdG1haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnUXVlIHNpdGUgYmVtIGZlaXRvID1EJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkMjogMixcbiAgICAgIHBvc3RJZDogNCxcbiAgICAgIGVtYWlsOiAncGVkcm9AZ21haWwuY29tJyxcbiAgICAgIGJvZHkyOiAnTGluZGEgaW1hZ2VtIScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDI6IDEsXG4gICAgICBwb3N0SWQ6IDUsXG4gICAgICBlbWFpbDogJ2FuYUBnbWFpbC5jb20nLFxuICAgICAgYm9keTI6ICdBZG9ybyBlc3NlIHNpdGUhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkMjogMixcbiAgICAgIHBvc3RJZDogNSxcbiAgICAgIGVtYWlsOiAnZ2FicmllbGFAaG90bWFpbC5jb20nLFxuICAgICAgYm9keTI6ICdVbWEgYmVsYSBwYWlzYWdlbSA9RCcsXG4gICAgfSxcbiAgXVxufVxuXG5cbiJdfQ==
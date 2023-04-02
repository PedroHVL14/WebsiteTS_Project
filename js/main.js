"use strict";
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
const container = document.getElementById('main');
if (container) {
    const handleShowPost = (postId) => {
        console.log(postId);
        const post = postsData.find((postData) => postData.id === postId);
        if (!post) {
            return;
        }
        let postHTML = postCard(post);
        // cada elemento do array de comentarios, criar um commentCard
        postHTML +=
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE1BQU0sU0FBUyxHQUFHO0lBQ2hCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsd0RBQXdEO1FBQy9ELElBQUksRUFBRSx1SkFBdUo7UUFDN0osUUFBUSxFQUFFLDBHQUEwRztLQUNySDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLElBQUksRUFBRSxzRUFBc0U7UUFDNUUsUUFBUSxFQUFFLDhHQUE4RztLQUN6SDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsZ0RBQWdEO1FBQ3ZELElBQUksRUFBRSwrTUFBK007UUFDck4sUUFBUSxFQUFFLHlHQUF5RztLQUNwSDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsMERBQTBEO1FBQ2pFLElBQUksRUFBRSxzSEFBc0g7UUFDNUgsUUFBUSxFQUFFLDBIQUEwSDtLQUNySTtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsa0RBQWtEO1FBQ3pELElBQUksRUFBRSw0VUFBNFU7UUFDbFYsUUFBUSxFQUFFLGdIQUFnSDtLQUMzSDtDQUNGLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFlLEVBQUUsRUFBRSxDQUM5RDs7aURBRStDLEVBQUU7a0JBQ2pDLFFBQVEsVUFBVSxLQUFLOztjQUUzQixLQUFLO2FBQ04sSUFBSTs7OztHQUlkLENBQUM7QUFHSixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRWpELElBQUksU0FBUyxFQUFFO0lBRWIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRW5CLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU07U0FDUDtRQUVELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU3Qiw4REFBOEQ7UUFDOUQsUUFBUTtZQUVSLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO0lBQ2hDLENBQUMsQ0FBQTtJQUdELE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtRQUNoQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUE7UUFFeEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFDaEMsZUFBZSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUN0QztRQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFBO1FBRXJDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDL0IsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUE7SUFFRCxJQUFJLEVBQUUsQ0FBQTtDQUNQIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBQb3N0Q2FyZFR5cGUgPSB7XG4gIGJvZHk6IHN0cmluZyxcbiAgaWQ6IG51bWJlcixcbiAgaW1hZ2VVcmw6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZ1xufVxuXG5jb25zdCBwb3N0c0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogJ0xhZ28gTG91aXNlIGVtIEFsYmVydGEgw6kgdW0gZG9zIG1haXMgYmVsb3MgZG8gcGxhbmV0YS4nLFxuICAgIGJvZHk6ICdBZG1pcmFkbyBwZWxvcyB2aWFqYW50ZXMgcXVlIHZpc2l0YW0gbyBQYXJxdWUgbmFjaW9uYWwgZGUgQmFuaWZmIGR1cmFudGUgaW52ZXJubywgbyBMYWdvIExvdWlzZSBkaXNwZW5zYSBhcHJlc2VudGHDp8O1ZXMgcGVsYXMgaW1hZ2VucyBxdWUgcHJvcG9yY2lvbmEuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vd3d3LnF1ZXJvdmlhamFybWFpcy5jb20vd3AtY29udGVudC93ZWJwLWV4cHJlc3Mvd2VicC1pbWFnZXMvdXBsb2Fkcy8yMDIwLzA4L2xhZ28tbG91aXNlLmpwZy53ZWJwJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiAnQWxwZXMgaXRhbGlhbm9zJyxcbiAgICBib2R5OiAnVmlzaXRhciBhcyBEb2xvbWl0YXMsIG5hIEl0w6FsaWEsIMOpIHNlIGVuY2FudGFyIGNvbSBvcyBhbHBlcyBkbyBwYcOtcy4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgvYWxwZXMtaXRhbGlhbm9zLmpwZy53ZWJwJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnTW91bnQgQ29vayBwb3NzdcOtIHVtYSBsaW5kYSBuYXR1cmV6YSBhbyByZWRvci4nLFxuICAgIGJvZHk6ICdMb2NhbGl6YWRvIG5vIHN1bCBkYSBOb3ZhIFplbMOibmRpYSwgbyBNb3VudCBDb29rIGVzdMOhIGVudHJlIGFzIHBhaXNhZ2VucyBuYXR1cmFpcyBtYWlzIGJvbml0YXMgZG8gbXVuZG8uIEEgcmVnacOjbyBkbyBWYWxlIGRhIFRhc23Dom5pYSBhaW5kYSBwb3NzdcOtIGRpdmVyc29zIGljZWJlcmdzIGUgdW0gZGVzdGlubyBkZSBpbnZlcm5vIG11aXRvIHByb2N1cmFkby4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgvbW91bnQtY29vay5qcGcud2VicCcsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogJ0luY3LDrXZlbCBwYWlzYWdlbSBkZSBBbnRlbG9wZSBDYW55b24gbm9zIGVzdGFkb3MgVW5pZG9zLicsXG4gICAgYm9keTogJ1VtYSBkYXMgcGFpc2FnZW5zIG5hdHVyYWlzIHF1ZSBtYWlzIGltcHJlc3Npb25hIMOpIGEgZm9ybWHDp8OjbyBkYXMgY2F2ZXJuYXMgZG8gQW50ZWxvcGUgQ2FueW9uLCBsb2NhbGl6YWRvIG5vIEFyaXpvbmEuJyxcbiAgICBpbWFnZVVybDogJ2h0dHBzOi8vd3d3LnF1ZXJvdmlhamFybWFpcy5jb20vd3AtY29udGVudC93ZWJwLWV4cHJlc3Mvd2VicC1pbWFnZXMvdXBsb2Fkcy8yMDIwLzA4L2NhdmVybmFzLW5vcy1lc3RhZG9zLXVuaWRvcy5qcGcud2VicCcsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICB0aXRsZTogJ0hvbGFuZGEgcG9zc3XDrSBvIG1haW9yIGphcmRpbSBkZSBmbG9yZXMgZG8gbXVuZG8nLFxuICAgIGJvZHk6ICdOYSBIb2xhbmRhIHBvc3N1w60gdW0gamFyZGltIGRlIGZsb3JlcyBmYWJ1bG9zbywgcXVlIGRlc2Ficm9jaGEgbmEgcHJpbWF2ZXJhIGUgYXRyYcOtIHR1cmlzdGFzIGRvIG11bmRvIGludGVpcm8uIFRyYXRhLXNlIGRvIEtldWtlbmhvZiBxdWUgZmljYSBhIDQxIGttIGRhIGNhcGl0YWwgZSBwb2RlIHNlciBpbmNsdcOtZG8gZW0gdW0gcm90ZWlybyBkZSA1IGRpYXMgZW0gQW1zdGVyZGFtLkrDoSBhIEhvbGFuZGEgcG9zc3XDrSB1bSBqYXJkaW0gZGUgZmxvcmVzIGZhYnVsb3NvLCBxdWUgZGVzYWJyb2NoYSBuYSBwcmltYXZlcmEgZSBhdHJhw60gdHVyaXN0YXMgZG8gbXVuZG8gaW50ZWlyby4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgva2V1a2VuaG9mLWhvbGFuZGEuanBnLndlYnAnLFxuICB9XG5dO1xuXG5jb25zdCBwb3N0Q2FyZCA9ICh7IGJvZHksIGlkLCBpbWFnZVVybCwgdGl0bGV9OiBQb3N0Q2FyZFR5cGUpID0+XG4gIGBcbiAgPGRpdiBjbGFzcz0ncG9zdCc+XG4gICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzPSdwb3N0LWJ0bicgaWQ9JyR7aWR9Jz5cbiAgICAgIDxpbWcgc3JjPScke2ltYWdlVXJsfScgYWx0PScke3RpdGxlfScgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT4ke3RpdGxlfTwvaDE+XG4gICAgICAgIDxwPiR7Ym9keX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIGA7XG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuXG5pZiAoY29udGFpbmVyKSB7XG5cbiAgY29uc3QgaGFuZGxlU2hvd1Bvc3QgPSAocG9zdElkOiBudW1iZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwb3N0SWQpXG4gICAgXG4gICAgY29uc3QgcG9zdCA9IHBvc3RzRGF0YS5maW5kKChwb3N0RGF0YSkgPT4gcG9zdERhdGEuaWQgPT09IHBvc3RJZClcbiAgICBpZiAoIXBvc3QpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBwb3N0SFRNTCA9IHBvc3RDYXJkKHBvc3QpXG4gICAgXG4gICAgLy8gY2FkYSBlbGVtZW50byBkbyBhcnJheSBkZSBjb21lbnRhcmlvcywgY3JpYXIgdW0gY29tbWVudENhcmRcbiAgICBwb3N0SFRNTCArPSBcbiAgXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHBvc3RIVE1MXG4gIH1cblxuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgbGV0IHBvc3RzRGF0YVRvSFRNTCA9ICcnXG5cbiAgICBmb3IgKGNvbnN0IHBvc3REYXRhIG9mIHBvc3RzRGF0YSkgeyAgXG4gICAgICBwb3N0c0RhdGFUb0hUTUwgKz0gcG9zdENhcmQocG9zdERhdGEpXG4gICAgfVxuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHBvc3RzRGF0YVRvSFRNTFxuXG4gICAgY29uc3QgcG9zdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdC1idG4nKTtcbiAgICBwb3N0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlU2hvd1Bvc3QoK3RoaXMuaWQpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKVxufVxuXG5cbiJdfQ==
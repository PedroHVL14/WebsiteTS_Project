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
        // const comments = lista de comatarios com esse postId
        let postHTML = '';
        postHTML += 'html do post';
        // cada elemento do array de comentarios, criar um commentCard
        postHTML += 'um commentCard';
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
                //console.log(+this.id);
                handleShowPost(+this.id);
            });
        });
    };
    init();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE1BQU0sU0FBUyxHQUFHO0lBQ2hCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsd0RBQXdEO1FBQy9ELElBQUksRUFBRSx1SkFBdUo7UUFDN0osUUFBUSxFQUFFLDBHQUEwRztLQUNySDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCLElBQUksRUFBRSxzRUFBc0U7UUFDNUUsUUFBUSxFQUFFLDhHQUE4RztLQUN6SDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsZ0RBQWdEO1FBQ3ZELElBQUksRUFBRSwrTUFBK007UUFDck4sUUFBUSxFQUFFLHlHQUF5RztLQUNwSDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsMERBQTBEO1FBQ2pFLElBQUksRUFBRSxzSEFBc0g7UUFDNUgsUUFBUSxFQUFFLDBIQUEwSDtLQUNySTtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsa0RBQWtEO1FBQ3pELElBQUksRUFBRSw0VUFBNFU7UUFDbFYsUUFBUSxFQUFFLGdIQUFnSDtLQUMzSDtDQUNGLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFlLEVBQUUsRUFBRSxDQUM5RDs7aURBRStDLEVBQUU7a0JBQ2pDLFFBQVEsVUFBVSxLQUFLOztjQUUzQixLQUFLO2FBQ04sSUFBSTs7OztHQUlkLENBQUM7QUFHSixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRWpELElBQUksU0FBUyxFQUFFO0lBRWIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ25CLHVEQUF1RDtRQUN2RCxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFFakIsUUFBUSxJQUFJLGNBQWMsQ0FBQTtRQUUxQiw4REFBOEQ7UUFDOUQsUUFBUSxJQUFJLGdCQUFnQixDQUFBO1FBRTVCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO0lBQ2hDLENBQUMsQ0FBQTtJQUdELE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtRQUNoQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUE7UUFFeEIsS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFDaEMsZUFBZSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUN0QztRQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFBO1FBRXJDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDL0Isd0JBQXdCO2dCQUN4QixjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQTtJQUVELElBQUksRUFBRSxDQUFBO0NBQ1AiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFBvc3RDYXJkVHlwZSA9IHtcbiAgYm9keTogc3RyaW5nLFxuICBpZDogbnVtYmVyLFxuICBpbWFnZVVybDogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nXG59XG5cbmNvbnN0IHBvc3RzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnTGFnbyBMb3Vpc2UgZW0gQWxiZXJ0YSDDqSB1bSBkb3MgbWFpcyBiZWxvcyBkbyBwbGFuZXRhLicsXG4gICAgYm9keTogJ0FkbWlyYWRvIHBlbG9zIHZpYWphbnRlcyBxdWUgdmlzaXRhbSBvIFBhcnF1ZSBuYWNpb25hbCBkZSBCYW5pZmYgZHVyYW50ZSBpbnZlcm5vLCBvIExhZ28gTG91aXNlIGRpc3BlbnNhIGFwcmVzZW50YcOnw7VlcyBwZWxhcyBpbWFnZW5zIHF1ZSBwcm9wb3JjaW9uYS4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgvbGFnby1sb3Vpc2UuanBnLndlYnAnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6ICdBbHBlcyBpdGFsaWFub3MnLFxuICAgIGJvZHk6ICdWaXNpdGFyIGFzIERvbG9taXRhcywgbmEgSXTDoWxpYSwgw6kgc2UgZW5jYW50YXIgY29tIG9zIGFscGVzIGRvIHBhw61zLicsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3d3dy5xdWVyb3ZpYWphcm1haXMuY29tL3dwLWNvbnRlbnQvd2VicC1leHByZXNzL3dlYnAtaW1hZ2VzL3VwbG9hZHMvMjAyMC8wOC9hbHBlcy1pdGFsaWFub3MuanBnLndlYnAnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6ICdNb3VudCBDb29rIHBvc3N1w60gdW1hIGxpbmRhIG5hdHVyZXphIGFvIHJlZG9yLicsXG4gICAgYm9keTogJ0xvY2FsaXphZG8gbm8gc3VsIGRhIE5vdmEgWmVsw6JuZGlhLCBvIE1vdW50IENvb2sgZXN0w6EgZW50cmUgYXMgcGFpc2FnZW5zIG5hdHVyYWlzIG1haXMgYm9uaXRhcyBkbyBtdW5kby4gQSByZWdpw6NvIGRvIFZhbGUgZGEgVGFzbcOibmlhIGFpbmRhIHBvc3N1w60gZGl2ZXJzb3MgaWNlYmVyZ3MgZSB1bSBkZXN0aW5vIGRlIGludmVybm8gbXVpdG8gcHJvY3VyYWRvLicsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3d3dy5xdWVyb3ZpYWphcm1haXMuY29tL3dwLWNvbnRlbnQvd2VicC1leHByZXNzL3dlYnAtaW1hZ2VzL3VwbG9hZHMvMjAyMC8wOC9tb3VudC1jb29rLmpwZy53ZWJwJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnSW5jcsOtdmVsIHBhaXNhZ2VtIGRlIEFudGVsb3BlIENhbnlvbiBub3MgZXN0YWRvcyBVbmlkb3MuJyxcbiAgICBib2R5OiAnVW1hIGRhcyBwYWlzYWdlbnMgbmF0dXJhaXMgcXVlIG1haXMgaW1wcmVzc2lvbmEgw6kgYSBmb3JtYcOnw6NvIGRhcyBjYXZlcm5hcyBkbyBBbnRlbG9wZSBDYW55b24sIGxvY2FsaXphZG8gbm8gQXJpem9uYS4nLFxuICAgIGltYWdlVXJsOiAnaHR0cHM6Ly93d3cucXVlcm92aWFqYXJtYWlzLmNvbS93cC1jb250ZW50L3dlYnAtZXhwcmVzcy93ZWJwLWltYWdlcy91cGxvYWRzLzIwMjAvMDgvY2F2ZXJuYXMtbm9zLWVzdGFkb3MtdW5pZG9zLmpwZy53ZWJwJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHRpdGxlOiAnSG9sYW5kYSBwb3NzdcOtIG8gbWFpb3IgamFyZGltIGRlIGZsb3JlcyBkbyBtdW5kbycsXG4gICAgYm9keTogJ05hIEhvbGFuZGEgcG9zc3XDrSB1bSBqYXJkaW0gZGUgZmxvcmVzIGZhYnVsb3NvLCBxdWUgZGVzYWJyb2NoYSBuYSBwcmltYXZlcmEgZSBhdHJhw60gdHVyaXN0YXMgZG8gbXVuZG8gaW50ZWlyby4gVHJhdGEtc2UgZG8gS2V1a2VuaG9mIHF1ZSBmaWNhIGEgNDEga20gZGEgY2FwaXRhbCBlIHBvZGUgc2VyIGluY2x1w61kbyBlbSB1bSByb3RlaXJvIGRlIDUgZGlhcyBlbSBBbXN0ZXJkYW0uSsOhIGEgSG9sYW5kYSBwb3NzdcOtIHVtIGphcmRpbSBkZSBmbG9yZXMgZmFidWxvc28sIHF1ZSBkZXNhYnJvY2hhIG5hIHByaW1hdmVyYSBlIGF0cmHDrSB0dXJpc3RhcyBkbyBtdW5kbyBpbnRlaXJvLicsXG4gICAgaW1hZ2VVcmw6ICdodHRwczovL3d3dy5xdWVyb3ZpYWphcm1haXMuY29tL3dwLWNvbnRlbnQvd2VicC1leHByZXNzL3dlYnAtaW1hZ2VzL3VwbG9hZHMvMjAyMC8wOC9rZXVrZW5ob2YtaG9sYW5kYS5qcGcud2VicCcsXG4gIH1cbl07XG5cbmNvbnN0IHBvc3RDYXJkID0gKHsgYm9keSwgaWQsIGltYWdlVXJsLCB0aXRsZX06IFBvc3RDYXJkVHlwZSkgPT5cbiAgYFxuICA8ZGl2IGNsYXNzPSdwb3N0Jz5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Bvc3QtYnRuJyBpZD0nJHtpZH0nPlxuICAgICAgPGltZyBzcmM9JyR7aW1hZ2VVcmx9JyBhbHQ9JyR7dGl0bGV9JyAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPiR7dGl0bGV9PC9oMT5cbiAgICAgICAgPHA+JHtib2R5fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgYDtcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG5cbmlmIChjb250YWluZXIpIHtcblxuICBjb25zdCBoYW5kbGVTaG93UG9zdCA9IChwb3N0SWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBvc3RJZClcbiAgICAvLyBjb25zdCBjb21tZW50cyA9IGxpc3RhIGRlIGNvbWF0YXJpb3MgY29tIGVzc2UgcG9zdElkXG4gICAgbGV0IHBvc3RIVE1MID0gJydcbiAgXG4gICAgcG9zdEhUTUwgKz0gJ2h0bWwgZG8gcG9zdCdcbiAgXG4gICAgLy8gY2FkYSBlbGVtZW50byBkbyBhcnJheSBkZSBjb21lbnRhcmlvcywgY3JpYXIgdW0gY29tbWVudENhcmRcbiAgICBwb3N0SFRNTCArPSAndW0gY29tbWVudENhcmQnXG4gIFxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBwb3N0SFRNTFxuICB9XG5cblxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGxldCBwb3N0c0RhdGFUb0hUTUwgPSAnJ1xuXG4gICAgZm9yIChjb25zdCBwb3N0RGF0YSBvZiBwb3N0c0RhdGEpIHsgIFxuICAgICAgcG9zdHNEYXRhVG9IVE1MICs9IHBvc3RDYXJkKHBvc3REYXRhKVxuICAgIH1cblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBwb3N0c0RhdGFUb0hUTUxcblxuICAgIGNvbnN0IHBvc3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3QtYnRuJyk7XG4gICAgcG9zdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coK3RoaXMuaWQpO1xuICAgICAgICBoYW5kbGVTaG93UG9zdCgrdGhpcy5pZClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdCgpXG59XG5cblxuIl19
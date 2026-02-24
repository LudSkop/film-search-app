
import axios from 'axios'


 const BASE_URL = 'https://api.themoviedb.org/3/'
 const ENDPOINT = 'trending/movie/week';



 const KEY_API = import.meta.env.VITE_TMDB_API_KEY;




 const container = document.querySelector(".js-movie-list");
 const loadMore = document.querySelector(".js-load-more");
 const page = 1;

async function serviceMovie() {
    const response = await axios.get(`${BASE_URL}${ENDPOINT}`, {
        params: {
            api_key: KEY_API,
            page: page
        }
    });
    return response.data;
}

serviceMovie()
    .then(data => {
        console.log(data);
        container.insertAdjacentHTML("beforeend", createMarkup(data.results))
    })
    .catch(error => {
        console.log(error);
    })

function createMarkup(arr){
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
    return arr.map(({original_title, vote_average, poster_path, release_date })=> `
    <li class="movie-card">
        <img src="${BASE_IMG_URL}${poster_path}" alt="${original_title}"/>
        <div class="movie-info">
        <h2>${original_title}</h2>
        <p>Release Date :${release_date}</p>
        <p>vote Average :${vote_average}</p>
        </div>
    </li>
    `).join("");
}
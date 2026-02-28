
import axios from 'axios'


 const BASE_URL = 'https://api.themoviedb.org/3/'
 const ENDPOINT = 'trending/movie/week';
 //const KEY_API = import.meta.env.VITE_TMDB_API_KEY;
const KEY_API = "db3bf6017741aebd99ceac23878d0092";
 const container = document.querySelector(".js-movie-list");
 const loadMore = document.querySelector(".js-load-more");
 loadMore.addEventListener("click", onLoadMore);


 let page = 1;


async function serviceMovie(page=1) {
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
        container.insertAdjacentHTML("beforeend", createMarkup(data.results));
        if (data.page < data.total_pages){
          loadMore.classList.replace("load-more-hidden", "js-load-more");  
        } 
       
    })
    .catch(error => {
        console.log(error);
    })
 //<a href="https://www.themoviedb.org/movie/${id}" target="_blank">
function createMarkup(arr){
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
    return arr.map(({id, original_title, vote_average, poster_path, release_date })=> `
    <li class="movie-card">
        <img src="${poster_path ? BASE_IMG_URL + poster_path : 'https://via.placeholder.com/500x750'}" 
        alt="${original_title}"/>
        <div class="movie-info">
       
        <h2> 🎬 ${original_title}</h2>
        <h3>📅 Release Date: ${release_date}</h3>
        <h3>⭐ Rating: ${vote_average}</h3>
        <button class="trailer-btn" data-id="${id}">
                🎥 Watch Trailer
            </button>
        </div>
    </li>
    `).join("");
}

async function onLoadMore(event){
    page++;
     loadMore.disabled = true;

    try {
        console.log("кількість кліків: ", page);
        const data = await serviceMovie(page);
        console.log(data);
        container.insertAdjacentHTML("beforeend", createMarkup(data.results));
          const card = document.querySelector(".movie-card");
            const cardHeight = card. getBoundingClientRect().height;
            console.log("висота картки:", cardHeight);
            window.scrollBy({
                left: 0,
                top: cardHeight * 5,
                behavior: "smooth",
            })
        if (data.page >= data.total_pages) {
            loadMore.classList.replace( "js-load-more", "load-more-hidden");
          
        }

    } catch(error){
        alert(error.message);
    } finally {
        loadMore.disabled = false;
    }

}
const modal = document.getElementById("trailer-modal");
const iframe = document.getElementById("trailer-frame");
const closeBtn = document.querySelector(".close-btn");

function openModal(videoKey) {
    iframe.src = `https://www.youtube.com/embed/${videoKey}`;
    modal.style.display = "flex";
}

function closeModal() {
    iframe.src = "";
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
async function getTrailer(movieId) {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
            params: {
                api_key: KEY_API
            }
        }
    );

    return response.data.results;
}
container.addEventListener("click", async (e) => {
    if (e.target.classList.contains("trailer-btn")) {
        const movieId = e.target.dataset.id;
        
        try {
            const videos = await getTrailer(movieId);
            const trailer = videos.find(v => v.type === "Trailer" && v.site === "YouTube");
            
            if (trailer) {
                openModal(trailer.key);
            } else {
                alert("Trailer not found");
            }
        } catch (error) {
            alert(error.message);
        }
    }
});

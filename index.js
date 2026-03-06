import"./assets/styles-C6B26fbb.js";import{a as d}from"./assets/vendor-CzPQa-jL.js";const y="https://api.themoviedb.org/3/",v="trending/movie/week",m="db3bf6017741aebd99ceac23878d0092",c=document.querySelector(".js-movie-list"),s=document.querySelector(".js-load-more");s.addEventListener("click",b);let r=1;async function p(e=1){return(await d.get(`${y}${v}`,{params:{api_key:m,page:e}})).data}p().then(e=>{console.log(e),c.insertAdjacentHTML("beforeend",u(e.results)),e.page<e.total_pages&&s.classList.replace("load-more-hidden","js-load-more")}).catch(e=>{console.log(e)});function u(e){const t="https://image.tmdb.org/t/p/w500";return e.map(({id:a,original_title:o,vote_average:n,poster_path:l,release_date:f})=>`
    <li class="movie-card">
        <img src="${l?t+l:"https://via.placeholder.com/500x750"}" 
        alt="${o}"/>
        <div class="movie-info">
       
        <h2> 🎬 ${o}</h2>
        <h3>📅 Release Date: ${f}</h3>
        <h3>⭐ Rating: ${n}</h3>
        <button class="trailer-btn" data-id="${a}">
                🎥 Watch Trailer
            </button>
        </div>
    </li>
    `).join("")}async function b(e){r++,s.disabled=!0;try{console.log("кількість кліків: ",r);const t=await p(r);console.log(t),c.insertAdjacentHTML("beforeend",u(t.results));const o=document.querySelector(".movie-card").getBoundingClientRect().height;console.log("висота картки:",o),window.scrollBy({left:0,top:o*5,behavior:"smooth"}),t.page>=t.total_pages&&s.classList.replace("js-load-more","load-more-hidden")}catch(t){alert(t.message)}finally{s.disabled=!1}}const i=document.getElementById("trailer-modal"),g=document.getElementById("trailer-frame"),w=document.querySelector(".close-btn");function L(e){g.src=`https://www.youtube.com/embed/${e}`,i.style.display="flex"}function h(){g.src="",i.style.display="none"}w.addEventListener("click",h);window.addEventListener("click",e=>{e.target===i&&h()});async function E(e){return(await d.get(`https://api.themoviedb.org/3/movie/${e}/videos`,{params:{api_key:m}})).data.results}c.addEventListener("click",async e=>{if(e.target.classList.contains("trailer-btn")){const t=e.target.dataset.id;try{const o=(await E(t)).find(n=>n.type==="Trailer"&&n.site==="YouTube");o?L(o.key):alert("Trailer not found")}catch(a){alert(a.message)}}});
//# sourceMappingURL=index.js.map

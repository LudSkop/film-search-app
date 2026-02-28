import{a as u}from"./assets/vendor-BJ9gahTP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const h="https://api.themoviedb.org/3/",v="trending/movie/week",m="db3bf6017741aebd99ceac23878d0092",l=document.querySelector(".js-movie-list"),a=document.querySelector(".js-load-more");a.addEventListener("click",b);let c=1;async function f(e=1){return(await u.get(`${h}${v}`,{params:{api_key:m,page:e}})).data}f().then(e=>{console.log(e),l.insertAdjacentHTML("beforeend",p(e.results)),e.page<e.total_pages&&a.classList.replace("load-more-hidden","js-load-more")}).catch(e=>{console.log(e)});function p(e){const o="https://image.tmdb.org/t/p/w500";return e.map(({id:n,original_title:s,vote_average:t,poster_path:r,release_date:i})=>`
    <li class="movie-card">
        <img src="${r?o+r:"https://via.placeholder.com/500x750"}" 
        alt="${s}"/>
        <div class="movie-info">
       
        <h2> 🎬 ${s}</h2>
        <h3>📅 Release Date: ${i}</h3>
        <h3>⭐ Rating: ${t}</h3>
        <button class="trailer-btn" data-id="${n}">
                🎥 Watch Trailer
            </button>
        </div>
    </li>
    `).join("")}async function b(e){c++,a.disabled=!0;try{console.log("кількість кліків: ",c);const o=await f(c);console.log(o),l.insertAdjacentHTML("beforeend",p(o.results));const s=document.querySelector(".movie-card").getBoundingClientRect().height;console.log("висота картки:",s),window.scrollBy({left:0,top:s*5,behavior:"smooth"}),o.page>=o.total_pages&&a.classList.replace("js-load-more","load-more-hidden")}catch(o){alert(o.message)}finally{a.disabled=!1}}const d=document.getElementById("trailer-modal"),g=document.getElementById("trailer-frame"),L=document.querySelector(".close-btn");function w(e){g.src=`https://www.youtube.com/embed/${e}`,d.style.display="flex"}function y(){g.src="",d.style.display="none"}L.addEventListener("click",y);window.addEventListener("click",e=>{e.target===d&&y()});async function E(e){return(await u.get(`https://api.themoviedb.org/3/movie/${e}/videos`,{params:{api_key:m}})).data.results}l.addEventListener("click",async e=>{if(e.target.classList.contains("trailer-btn")){const o=e.target.dataset.id;try{const s=(await E(o)).find(t=>t.type==="Trailer"&&t.site==="YouTube");s?w(s.key):alert("Trailer not found")}catch(n){alert(n.message)}}});
//# sourceMappingURL=index.js.map

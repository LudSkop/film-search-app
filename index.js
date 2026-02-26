import{a as f}from"./assets/vendor-BJ9gahTP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m="https://api.themoviedb.org/3/",p="trending/movie/week",g=void 0,l=document.querySelector(".js-movie-list"),c=document.querySelector(".js-load-more");c.addEventListener("click",h);let a=1;async function d(r=1){return(await f.get(`${m}${p}`,{params:{api_key:g,page:r}})).data}d().then(r=>{console.log(r),l.insertAdjacentHTML("beforeend",u(r.results)),r.page<r.total_pages&&c.classList.replace("load-more-hidden","js-load-more")}).catch(r=>{console.log(r)});function u(r){const o="https://image.tmdb.org/t/p/w500";return r.map(({original_title:n,vote_average:s,poster_path:e,release_date:t})=>`
    <li class="movie-card">
        <img src="${o}${e}" alt="${n}"/>
        <div class="movie-info">
       
        <h2> 🎬 ${n}</h2>
        <h3>📅 Release Date: ${t}</h3>
        <h3>⭐ Rating: ${s}</h3>
        </div>
    </li>
    `).join("")}async function h(r){a++,c.disabled=!0;try{console.log("кількість кліків: ",a);const o=await d(a);console.log(o),l.insertAdjacentHTML("beforeend",u(o.results));const s=document.querySelector(".movie-card").getBoundingClientRect().height;console.log("висота картки:",s),window.scrollBy({left:0,top:s*5,behavior:"smooth"}),o.page>=o.total_pages&&c.classList.replace("js-load-more","load-more-hidden")}catch(o){alert(o.message)}finally{c.disabled=!1}}
//# sourceMappingURL=index.js.map

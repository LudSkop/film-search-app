import{a as p}from"./assets/vendor-BJ9gahTP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="https://api.themoviedb.org/3/",m="trending/movie/week",g=void 0,l=document.querySelector(".js-movie-list"),a=document.querySelector(".js-load-more");a.addEventListener("click",h);let i=1;async function d(r=1){return(await p.get(`${f}${m}`,{params:{api_key:g,page:r}})).data}d().then(r=>{console.log(r),l.insertAdjacentHTML("beforeend",u(r.results)),r.page<r.total_pages&&a.classList.replace("load-more-hidden","js-load-more")}).catch(r=>{console.log(r)});function u(r){const o="https://image.tmdb.org/t/p/w500";return r.map(({original_title:s,vote_average:n,poster_path:e,release_date:t})=>`
    <li class="movie-card">
        <img src="${o}${e}" alt="${s}"/>
        <div class="movie-info">
        <h2>${s}</h2>
        <p>Release Date: ${t}</p>
        <p>vote Average: ${n}</p>
        </div>
    </li>
    `).join("")}async function h(r){i++;try{console.log("кількість кліків: ",i);const o=await d(i);console.log(o),l.insertAdjacentHTML("beforeend",u(o.results)),o.page>=o.total_pages&&a.classList.replace("js-load-more","load-more-hidden")}catch(o){alert(o.messag)}}
//# sourceMappingURL=index.js.map

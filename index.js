import{a as c}from"./assets/vendor-BJ9gahTP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a="https://api.themoviedb.org/3/",l="trending/movie/week",u=void 0,d=document.querySelector(".js-movie-list");document.querySelector(".js-load-more");const f=1;async function p(){return(await c.get(`${a}${l}`,{params:{api_key:u,page:f}})).data}p().then(o=>{console.log(o),d.insertAdjacentHTML("beforeend",m(o.results))}).catch(o=>{console.log(o)});function m(o){const r="https://image.tmdb.org/t/p/w500";return o.map(({original_title:s,vote_average:n,poster_path:e,release_date:t})=>`
    <li class="movie-card">
        <img src="${r}${e}" alt="${s}"/>
        <div class="movie-info">
        <h2>${s}</h2>
        <p>Release Date :${t}</p>
        <p>vote Average :${n}</p>
        </div>
    </li>
    `).join("")}
//# sourceMappingURL=index.js.map

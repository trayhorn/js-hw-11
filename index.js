import{S as c,i}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const l=document.querySelector(".form"),u=document.querySelector(".gallery"),m=new c(".item-link",{captions:!0,captionsData:"alt",captionDelay:250});l.addEventListener("submit",p);function p(a){a.preventDefault();const e=a.currentTarget.elements.query;e.value===""?i.error({message:"Please enter a value!"}):f(e.value).then(s=>{s.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(u.innerHTML=d(s.hits),m.refresh())}).catch(s=>console.log(s))}function f(a){const e=new URLSearchParams({key:"29734383-6ec437d7a0c5df52cef54a0f9",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function d(a){return a.map(e=>`<li class="gallery-item">
            <a class="item-link" href="${e.largeImageURL}">
              <img
                class="item-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
              >
            </a>
            <div class="item-stats_container">
              <p class="item-stats"><span>Likes</span>${e.likes}</p>
              <p class="item-stats"><span>Views</span>${e.views}</p>
              <p class="item-stats"><span>Comments</span>${e.comments}</p>
              <p class="item-stats"><span>Downloads</span>${e.downloads}</p>
            </div>
          </li>`).join("")}
//# sourceMappingURL=index.js.map

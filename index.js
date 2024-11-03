import{S as u,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m=document.querySelector(".form"),l=document.querySelector(".gallery"),n=document.querySelector(".loading"),d=new u(".item-link",{captions:!0,captionsData:"alt",captionDelay:250});m.addEventListener("submit",p);function p(a){a.preventDefault();const e=a.currentTarget.elements.query;e.value===""?c.error({message:"Please enter a value!"}):f(e.value).then(r=>{r.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(n.classList.add("is-hidden"),l.innerHTML=g(r.hits),d.refresh())}).catch(r=>{n.classList.add("is-hidden"),console.log(r)})}function f(a){const e=new URLSearchParams({key:"29734383-6ec437d7a0c5df52cef54a0f9",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return n.classList.remove("is-hidden"),l.innerHTML="",fetch(`https://pixabay.com/api/?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(a){return a.map(e=>`<li class="gallery-item">
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

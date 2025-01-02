import{S as h,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const g=document.querySelector(".form"),u=document.querySelector(".gallery"),i=document.querySelector(".loading"),y=document.querySelector(".js-guard");let d=1,n="";const m=new h(".item-link",{captions:!0,captionsData:"alt",captionDelay:250}),L={root:null,rootMargin:"200px",threshold:1},b=r=>{r.forEach(e=>{e.isIntersecting&&(d++,p(n).then(o=>{u.insertAdjacentHTML("beforeend",f(o.hits)),m.refresh()}).catch(o=>{console.log(o)}))})},v=new IntersectionObserver(b,L);g.addEventListener("submit",w);function w(r){r.preventDefault(),n=r.currentTarget.elements.query.value,n===""?l.error({message:"Please enter a value!"}):p(n).then(e=>{e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(i.classList.add("is-hidden"),u.insertAdjacentHTML("beforeend",f(e.hits)),v.observe(y),m.refresh())}).catch(e=>{i.classList.add("is-hidden"),console.log(e)})}function p(r){const e=new URLSearchParams({key:"29734383-6ec437d7a0c5df52cef54a0f9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d});return i.classList.remove("is-hidden"),fetch(`https://pixabay.com/api/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function f(r){return r.map(e=>`<li class="gallery-item">
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

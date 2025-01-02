import{S as g,i as u}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function d(s){return s.map(e=>`<li class="gallery-item">
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
        </li>`).join("")}function m(s,e){const o=new URLSearchParams({key:"29734383-6ec437d7a0c5df52cef54a0f9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e});return fetch(`https://pixabay.com/api/?${o}`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const h=document.querySelector(".form"),f=document.querySelector(".gallery"),i=document.querySelector(".loading"),y=document.querySelector(".js-guard");let l=1,a="";const p=new g(".item-link",{captions:!0,captionsData:"alt",captionDelay:250}),L={root:null,rootMargin:"200px",threshold:1},b=s=>{s.forEach(e=>{e.isIntersecting&&(l++,m(a,l).then(({hits:o})=>{i.classList.remove("is-hidden"),f.insertAdjacentHTML("beforeend",d(o)),p.refresh()}).catch(o=>{console.log(o)}).finally(()=>{i.classList.add("is-hidden")}))})},v=new IntersectionObserver(b,L);h.addEventListener("submit",w);function w(s){if(s.preventDefault(),a=s.currentTarget.elements.query.value,a===""){u.error({message:"Please enter a value!"});return}m(a,l).then(({hits:e})=>{e.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(i.classList.remove("is-hidden"),f.insertAdjacentHTML("beforeend",d(e)),v.observe(y),p.refresh())}).catch(e=>{console.log(e)}).finally(()=>{i.classList.add("is-hidden")})}
//# sourceMappingURL=index.js.map

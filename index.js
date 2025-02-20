import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function u(o){return o.map(e=>`<li class="gallery-item">
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
        </li>`).join("")}function d(o,e){const n=new URLSearchParams({key:"29734383-6ec437d7a0c5df52cef54a0f9",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e.toString()});return fetch(`https://pixabay.com/api/?${n}`).then(r=>{if(!r.ok)throw new Error(r.status.toString());return r.json()})}const g=document.querySelector(".form"),m=document.querySelector(".gallery"),a=document.querySelector(".loading"),h=document.querySelector(".js-guard");let c=1,y="";const p=new f(".item-link",{captions:!0,captionsData:"alt",captionDelay:250}),L={root:null,rootMargin:"200px",threshold:1},b=o=>{console.log(o),o.forEach(e=>{e.isIntersecting&&(c++,d(y,c).then(({hits:n})=>{a.classList.remove("is-hidden"),m.insertAdjacentHTML("beforeend",u(n)),p.refresh()}).catch(n=>{console.log(n)}).finally(()=>{a.classList.add("is-hidden")}))})},v=new IntersectionObserver(b,L);g.addEventListener("submit",S);function S(o){o.preventDefault();const n=o.currentTarget.elements.namedItem("query").value;if(n===""){l.error({message:"Please enter a value!"});return}d(n,c).then(({hits:r})=>{r.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(a.classList.remove("is-hidden"),m.insertAdjacentHTML("beforeend",u(r)),v.observe(h),p.refresh())}).catch(r=>{console.log(r)}).finally(()=>{a.classList.add("is-hidden")})}
//# sourceMappingURL=index.js.map

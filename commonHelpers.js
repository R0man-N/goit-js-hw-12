import{a as g,i as m,S as y}from"./assets/vendor-483db976.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function d(r){const e="https://pixabay.com/api/";return(await g.get(e,{params:r})).data}const h="/vanilla-app-template/assets/octagon-32654740.svg",L="/vanilla-app-template/assets/close-22ff606a.svg";function b(r){return`<li class="gallery-card">
        <a href="${r.largeImageURL}"
          ><img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
            title=""
          />
        </a>
        <div class="gallery-card-items">
          <p class="gallery-card-info">
            Likes
            <span class="gallery-card-data">${r.likes}</span>
          </p>

          <p class="gallery-card-info">
            Views
            <span class="gallery-card-data">${r.views}</span>
          </p>

          <p class="gallery-card-info">
            Comments
            <span class="gallery-card-data">${r.comments}</span>
          </p>

          <p class="gallery-card-info">
            Downloads
            <span class="gallery-card-data">${r.downloads}</span>
          </p>
        </div>
      </li>`}function f(r){return r.map(b).join("")}function l(r){m.error({message:r,position:"topRight",messageColor:"#ffffff",messageSize:"16px",backgroundColor:"#ef4040",iconColor:"#ffffff",iconUrl:h,timeout:5e3,close:!1,closeOnEscape:!0,buttons:[[`<button type="button" style="background-color: transparent" ><img src=${L}></button>`,function(e,s){e.hide({transitionOut:"fadeOut"},s)}]]})}function u(r,e,s){Math.ceil(r.totalHits/e.per_page)===e.page?(s.classList.add("hidden"),l("We're sorry, but you've reached the end of search results.")):s.classList.remove("hidden")}function v(r){const s=r.getBoundingClientRect();scrollBy({behavior:"smooth",top:s.height*2})}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchMore:document.querySelector(".search-more")},n={key:"42141224-180b0a56c10fd436e302d680a",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,page:"",per_page:15};let p=new y(".gallery a");a.form.addEventListener("submit",S);a.searchMore.addEventListener("click",w);async function S(r){if(r.preventDefault(),n.q=r.target.elements.search.value,n.page=1,a.gallery.innerHTML="",a.searchMore.classList.add("hidden"),!n.q.trim())l("Please put searching image name");else{a.loader.classList.remove("hidden");try{const e=await d(n);if(e.totalHits===0){a.loader.classList.add("hidden"),l("Sorry, there are no images matching <br/> your search query. Please try again!");return}const s=f(e.hits);a.gallery.innerHTML=s,p.refresh(),u(e,n,a.searchMore)}catch(e){l(e)}a.loader.classList.add("hidden")}a.form.reset()}async function w(r){n.page+=1,a.loader.classList.remove("hidden");try{const e=await d(n);if(e.totalHits===0)return l();const s=f(e.hits);a.gallery.insertAdjacentHTML("beforeend",s),p.refresh(),u(e,n,a.searchMore)}catch(e){l(e)}a.loader.classList.add("hidden"),v(a.gallery.firstElementChild)}
//# sourceMappingURL=commonHelpers.js.map

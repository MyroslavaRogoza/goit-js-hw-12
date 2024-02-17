import{a as p,i as u,S as h}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const f=document.querySelector(".loader"),y=document.querySelector(".loadBtn");class L{constructor(){this.url="https://pixabay.com/api/?",this.page=1,this.per_page=15}async getDataImg(e){const r=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.page,per_page:this.per_page});try{const s=await p.get(this.url+r);return f.classList.add("loader-hide"),y.classList.remove("btn-hidden"),s.data}catch(s){console.log(s)}}}const b="/goit-js-hw-12/assets/iconError-cf0f8f06.svg",S=document.querySelector("form"),c=document.querySelector(".gallery"),v=document.querySelector(".loader"),l=document.querySelector(".loadBtn"),i=new L;let m=null,d=0;S.addEventListener("submit",w);function w(o){o.preventDefault();const e=o.target.elements.userInput.value.trim();m=e,i.page=1,v.classList.remove("loader-hide"),l.classList.add("btn-hidden"),i.getDataImg(e).then(r=>(r.hits.length===0&&(u.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:b,iconColor:"#fff",maxWidth:"350px"}),c.innerHTML="",l.classList.add("btn-hidden")),r.hits)).then(q),o.target.reset()}function g({webformatURL:o,largeImageURL:e,tags:r,likes:s,views:t,comments:a,downloads:n}){return`<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${e}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${r}"
      />
    </a>
</div>
    <ul class='img-data-container'>
    <li class='img-data-item'>
    <h3>Likes</h3>
    <p>${s}</p>
    </li>

    <li class='img-data-item'>
    <h3>Views</h3>
    <p>${t}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments</h3>
    <p>${a}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${n}</p>
    </li> 

    </ul>
  </li>`}function q(o){const e=o.map(g).join("");c.innerHTML=e,new h(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh()}l.addEventListener("click",$);async function $(){i.page++;const o=await i.getDataImg(m);d=o.totalHits,I(o.hits),x(d)}function x(o){const e=Math.ceil(o/i.per_page);console.log(i.page,"<",e),i.page<e?l.classList.remove("btn-hidden"):(l.classList.add("btn-hidden"),u.show({position:"topRight",message:"We're sorry, but you've reached the end of search results.",theme:"dark",messageColor:"#fafafb",backgroundColor:"#8f7dff",maxWidth:"350px"}))}function I(o){const e=o.map(g).join("");c.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers.js.map

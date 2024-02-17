import{a as y,i as u,S as g}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const L=document.querySelector(".loader");document.querySelector(".loadBtn");class b{constructor(){this.url="https://pixabay.com/api/?",this.page=1,this.per_page=15}async getDataImg(o){const r=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.page,per_page:this.per_page});try{const s=await y.get(this.url+r);return L.classList.add("hidden"),s.data}catch(s){console.log(s)}}}const S="/goit-js-hw-12/assets/iconError-cf0f8f06.svg",w=document.querySelector("form"),c=document.querySelector(".gallery"),v=document.querySelector(".loader"),i=document.querySelector(".loadBtn"),d=document.querySelector(".load-more"),n=new b;let p=null,m=0,h;w.addEventListener("submit",q);function q(t){t.preventDefault();const o=t.target.elements.userInput.value.trim();p=o,n.page=1,v.classList.remove("hidden"),i.classList.add("hidden"),n.getDataImg(o).then(r=>(r.hits.length===0&&(u.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:S,iconColor:"#fff",maxWidth:"350px"}),c.innerHTML=""),r.hits)).then(I),i.classList.remove("hidden"),t.target.reset()}function f({webformatURL:t,largeImageURL:o,tags:r,likes:s,views:e,comments:a,downloads:l}){return`<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${t}"
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
    <p>${e}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments</h3>
    <p>${a}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${l}</p>
    </li> 

    </ul>
  </li>`}function I(t){const o=t.map(f).join("");c.innerHTML=o,new g(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh(),h=document.querySelector(".gallery-item").getBoundingClientRect().height}i.addEventListener("click",D);async function D(){i.classList.add("hidden"),d.classList.remove("hidden"),n.page++;const t=await n.getDataImg(p);m=t.totalHits,d.classList.add("hidden"),k(t.hits),P(m),window.scrollBy({top:h*2,behavior:"smooth"})}function P(t){const o=Math.ceil(t/n.per_page);n.page<o?i.classList.remove("hidden"):(i.classList.add("hidden"),u.show({position:"topRight",message:"We're sorry, but you've reached the end of search results.",theme:"dark",messageColor:"#fafafb",backgroundColor:"#8f7dff",maxWidth:"350px"}))}function k(t){const o=t.map(f).join("");c.insertAdjacentHTML("beforeend",o),new g(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map

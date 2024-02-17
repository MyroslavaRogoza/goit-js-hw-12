import{a as p,i as u,S as f}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y=document.querySelector(".loader"),b=document.querySelector(".loadBtn");class L{constructor(){this.url="https://pixabay.com/api/?",this.page=1,this.per_page=15}async getDataImg(o){const a=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.page,per_page:this.per_page});try{const s=await p.get(this.url+a);return y.classList.add("loader-hide"),b.classList.remove("btn-hidden"),s.data}catch(s){console.log(s)}}}const S="/goit-js-hw-12/assets/iconError-cf0f8f06.svg",w=document.querySelector("form"),d=document.querySelector(".gallery"),v=document.querySelector(".loader"),l=document.querySelector(".loadBtn"),i=new L;let g=null,m=0,c;w.addEventListener("submit",I);function I(t){t.preventDefault();const o=t.target.elements.userInput.value.trim();g=o,i.page=1,v.classList.remove("loader-hide"),l.classList.add("btn-hidden"),i.getDataImg(o).then(a=>(a.hits.length===0&&(u.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:S,iconColor:"#fff",maxWidth:"350px"}),d.innerHTML="",l.classList.add("btn-hidden")),a.hits)).then(q),t.target.reset()}function h({webformatURL:t,largeImageURL:o,tags:a,likes:s,views:e,comments:r,downloads:n}){return`<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${t}"
        alt="${a}"
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
    <p>${r}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${n}</p>
    </li> 

    </ul>
  </li>`}function q(t){const o=t.map(h).join("");d.innerHTML=o,c=document.querySelector(".gallery-item").getBoundingClientRect().height,console.log(c),new f(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh()}l.addEventListener("click",B);async function B(){i.page++;const t=await i.getDataImg(g);m=t.totalHits,x(t.hits),$(m),window.scrollBy({top:c*2,behavior:"smooth"})}function $(t){const o=Math.ceil(t/i.per_page);i.page<o?l.classList.remove("btn-hidden"):(l.classList.add("btn-hidden"),u.show({position:"topRight",message:"We're sorry, but you've reached the end of search results.",theme:"dark",messageColor:"#fafafb",backgroundColor:"#8f7dff",maxWidth:"350px"}))}function x(t){const o=t.map(h).join("");d.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map

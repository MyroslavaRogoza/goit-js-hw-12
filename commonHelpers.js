import{a as y,i as g,S as L}from"./assets/vendor-483db976.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const b=document.querySelector(".loader");document.querySelector(".loadBtn");class S{constructor(){this.url="https://pixabay.com/api/?",this.page=1,this.per_page=15}async getDataImg(o){const a=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.page,per_page:this.per_page});try{const s=await y.get(this.url+a);return b.classList.add("hidden"),s.data}catch(s){console.log(s)}}}const v="/goit-js-hw-12/assets/iconError-cf0f8f06.svg",w=document.querySelector("form"),d=document.querySelector(".gallery"),q=document.querySelector(".loader"),i=document.querySelector(".loadBtn"),m=document.querySelector(".load-more");let c;const n=new S;let h=null,u=0,p;w.addEventListener("submit",I);function I(t){t.preventDefault();const o=t.target.elements.userInput.value.trim();h=o,n.page=1,q.classList.remove("hidden"),i.classList.add("hidden"),n.getDataImg(o).then(a=>(a.hits.length===0&&(g.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:v,iconColor:"#fff",maxWidth:"350px"}),d.innerHTML=""),a.hits)).then(M),i.classList.remove("hidden"),t.target.reset()}function f({webformatURL:t,largeImageURL:o,tags:a,likes:s,views:e,comments:r,downloads:l}){return`<li class="gallery-item">
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
    <p>${l}</p>
    </li> 

    </ul>
  </li>`}function M(t){const o=t.map(f).join("");d.innerHTML=o,c=new L(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}),c.refresh(),p=document.querySelector(".gallery-item").getBoundingClientRect().height}i.addEventListener("click",P);async function P(){i.classList.add("hidden"),m.classList.remove("hidden"),n.page++;const t=await n.getDataImg(h);u=t.totalHits,m.classList.add("hidden"),k(t.hits),$(u),window.scrollBy({top:p*2,behavior:"smooth"})}function $(t){const o=Math.ceil(t/n.per_page);n.page<o?i.classList.remove("hidden"):(i.classList.add("hidden"),g.show({position:"topRight",message:"We're sorry, but you've reached the end of search results.",theme:"dark",messageColor:"#fafafb",backgroundColor:"#8f7dff",maxWidth:"350px"}))}function k(t){const o=t.map(f).join("");d.insertAdjacentHTML("beforeend",o),c.refresh()}
//# sourceMappingURL=commonHelpers.js.map

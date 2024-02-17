import{a as p,i as g,S as f}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const h=document.querySelector(".loader"),y=document.querySelector(".loadBtn");class L{constructor(){this.url="https://pixabay.com/api/?",this.page=1,this.per_page=15}async getDataImg(r){const a=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:this.page,per_page:this.per_page});try{const s=await p.get(this.url+a);return h.classList.add("loader-hide"),y.classList.remove("btn-hidden"),s.data}catch(s){console.log(s)}}}const b="/goit-js-hw-12/assets/iconError-cf0f8f06.svg",S=document.querySelector("form"),c=document.querySelector(".gallery"),q=document.querySelector(".loader"),l=document.querySelector(".loadBtn"),n=new L;let u=null,d=0;S.addEventListener("submit",w);function w(t){t.preventDefault();const r=t.target.elements.userInput.value.trim();u=r,n.page=1,q.classList.remove("loader-hide"),l.classList.add("btn-hidden"),n.getDataImg(r).then(a=>(a.hits.length===0&&(g.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:b,iconColor:"#fff",maxWidth:"350px"}),c.innerHTML="",l.classList.add("btn-hidden")),a.hits)).then($),t.target.reset()}function m({webformatURL:t,largeImageURL:r,tags:a,likes:s,views:e,comments:o,downloads:i}){return`<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${r}">
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
    <p>${o}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${i}</p>
    </li> 

    </ul>
  </li>`}function $(t){const r=t.map(m).join("");c.innerHTML=r,new f(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh()}l.addEventListener("click",v);async function v(){n.page++;const t=await n.getDataImg(u);if(d=t.totalHits,d/n.per_page>=0)I(t.hits);else return}function I(t){const r=t.map(m).join("");c.insertAdjacentHTML("beforeend",r)}
//# sourceMappingURL=commonHelpers.js.map

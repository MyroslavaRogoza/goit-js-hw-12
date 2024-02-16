import{a as l,i as c,S as m}from"./assets/vendor-527658dd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".loader");class d{constructor(){this.url="https://pixabay.com/api/?"}async getDataImg(r){const s=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15});try{const o=await l.get(this.url+s);return u.classList.add("loader-hide"),o.data}catch(o){console.log(o)}}}const g="/goit-js-hw-12/assets/iconError-cf0f8f06.svg",f=document.querySelector("form"),n=document.querySelector(".gallery"),p=document.querySelector(".loader");f.addEventListener("submit",h);function h(a){a.preventDefault();const r=a.target.elements.userInput.value.trim();p.classList.remove("loader-hide"),new d().getDataImg(r).then(o=>(o.hits.length===0&&(c.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:g,iconColor:"#fff",maxWidth:"350px"}),n.innerHTML=""),o.hits)).then(L),a.target.reset()}function y({webformatURL:a,largeImageURL:r,tags:s,likes:o,views:e,comments:t,downloads:i}){return`<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${a}"
        alt="${s}"
      />
    </a>
</div>
    <ul class='img-data-container'>
    <li class='img-data-item'>
    <h3>Likes</h3>
    <p>${o}</p>
    </li>

    <li class='img-data-item'>
    <h3>Views</h3>
    <p>${e}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments</h3>
    <p>${t}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${i}</p>
    </li> 

    </ul>
  </li>`}function L(a){const r=a.map(y).join("");n.innerHTML=r,new m(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map

const cards=document.getElementById("cards"),search=document.getElementById("search"),count=document.getElementById("count"),noResult=document.getElementById("noResult"),detail=document.getElementById("detail"),detailBody=document.getElementById("detailBody");
let district="全部",term="";
const sorted=[...window.cafes].sort((a,b)=>b.rating-a.rating||b.reviews-a.reviews);
function render(){
 const rows=sorted.filter(c=>(district==="全部"||c.district===district)&&[c.name,c.district,c.category,c.description,c.address].join(" ").toLowerCase().includes(term.toLowerCase()));
 cards.innerHTML=rows.map((c,i)=>`<article class="cafe-card" data-id="${c.id}" tabindex="0" role="button" aria-label="查看${c.name}詳細資訊">
 <div class="card-image"><img src="${c.image}" alt="日系咖啡氛圍示意圖，非${c.name}實景" loading="lazy"><span class="rank">NO. ${String(i+1).padStart(2,"0")}</span><span class="rating-pill">★ ${c.rating.toFixed(1)}</span></div>
 <div class="card-body"><div class="card-meta"><span>${c.district} · ${c.category}</span><span>↗</span></div><h3>${c.name}</h3><div><span class="stars">★★★★★</span><span class="review-count">${c.reviews.toLocaleString()} 則評論</span></div><p>${c.description}</p><div class="address">⌖ ${c.address}</div><div class="card-actions"><button type="button" data-detail="${c.id}">店家資訊</button><a class="map-link" href="${c.maps}" target="_blank" rel="noopener">Google Maps 照片 ↗</a></div></div></article>`).join("");
 count.textContent=`${rows.length} 間店家`;
 noResult.hidden=rows.length>0;
}
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("[data-district]");if(!b)return;district=b.dataset.district;document.querySelectorAll("[data-district]").forEach(x=>x.classList.toggle("active",x===b));render()});
search.addEventListener("input",e=>{term=e.target.value.trim();render()});
function openDetail(id){const c=window.cafes.find(x=>x.id===id);if(!c)return;detailBody.innerHTML=`<img class="detail-photo" src="${c.image}" alt="日系咖啡氛圍示意圖"><div class="detail-content"><span class="section-no">${c.district} / ${c.category}</span><h2>${c.name}</h2><div class="stars">★ ${c.rating.toFixed(1)}　<span class="review-count">${c.reviews.toLocaleString()} 則評論</span></div><p>${c.description}</p><div class="detail-data"><span>地址</span><span>${c.address}</span><span>營業時間</span><span>${c.hours}</span><span>電話</span><span>${c.phone}</span><span>資料來源</span><span>${c.sourceLabel}</span></div><p>評分、評論數及營業資訊可能變動，請在出發前查看最新公告。上方圖片是網站氣氛示意，非店家實景。</p><a class="detail-map" href="${c.maps}" target="_blank" rel="noopener">前往 Google Maps 查看實景照片與最新評論 ↗</a></div>`;detail.showModal()}
cards.addEventListener("click",e=>{const map=e.target.closest("a");if(map)return;const btn=e.target.closest("[data-detail]");const card=e.target.closest("[data-id]");if(btn)openDetail(btn.dataset.detail);else if(card)openDetail(card.dataset.id)});
cards.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches("[data-id]")){e.preventDefault();openDetail(e.target.dataset.id)}});
document.getElementById("close").addEventListener("click",()=>detail.close());detail.addEventListener("click",e=>{if(e.target===detail)detail.close()});
render();
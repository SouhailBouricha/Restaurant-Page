(()=>{"use strict";var e={d:(t,a)=>{for(var d in a)e.o(a,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:a[d]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var d=a.getElementsByTagName("script");d.length&&(t=d[d.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.d({},{k:()=>o});const t=e.p+"5759589f026baa86e75a.svg",a=e.p+"9f6b40b263827ecffca7.svg",d=e.p+"25d67ed4fcda8007b0d7.jpg",n=e.p+"8239c872463812a9ceb3.jpg",s=e.p+"46b097a90b2e46667597.jpg",c=e.p+"55adf94046e281ceb254.jpg";function r(e,t,a,d,n){const s=document.createElement("div");s.classList.add("product");const c=document.createElement("div");c.classList.add("insideProduct"),s.appendChild(c);const r=document.createElement("p");r.classList.add("ProductName"),r.innerText=e;const i=document.createElement("p");i.classList.add("Productpara"),i.innerText=t;const o=document.createElement("div");o.classList.add("price");const l=document.createElement("div");l.classList.add("priceLabel"),l.innerText=a;const p=document.createElement("div");p.classList.add("imgwrapper"),o.appendChild(l),o.appendChild(p);const h=new Image;h.src=d,h.classList.add("productImg"),p.appendChild(h);const m=new Image;return m.src=n,m.classList.add("beex"),m.classList.add("bee"),c.appendChild(r),c.appendChild(i),c.appendChild(o),c.appendChild(m),s}function i(e,t){const a=document.createElement("div");a.classList.add("head"),a.classList.add("new");const d=document.createElement("h1");d.classList.add("headInfo"),d.innerText=e;const n=new Image;return n.src=t,n.classList.add("bee1"),a.appendChild(d),a.appendChild(n),a}const o=document.querySelector("#content");!function(){const e=document.createElement("div");e.classList.add("head");const l=new Image;l.src=t,l.classList.add("bee");const p=document.createElement("h1");p.classList.add("headInfo"),p.innerText="Menu";const h=new Image;h.src=t,h.classList.add("bee1"),e.appendChild(l),e.appendChild(p),e.appendChild(h),o.appendChild(e);const m=i("Beverages",a),u=i("Sides",a),f=i("Main Dishes",a);o.appendChild(m);const b=r("Honey Tea","A warm, sweet tea made with the highest quality honey and a bit oflemon to start your day off right!","$2",d,t),g=r("Beary Tea","A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.","$3",n,t),w=r("Toast and Jam","A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.","$1",s,t),C=r("Fresh Fruit","A small bowl of fresh fruit, whatever we find at the market for the day.","$3",c,t);o.appendChild(b),o.appendChild(g),o.appendChild(u),o.appendChild(w),o.appendChild(C),o.appendChild(f)}()})();
"use strict";!function(){let t=[],e=document.querySelectorAll("[data-da]"),n=[],i=[];if(e.length>0){let s=0;for(let i=0;i<e.length;i++){const r=e[i],l=r.getAttribute("data-da");if(""!=l){const e=l.split(","),i=e[1]?e[1].trim():"last",c=e[2]?e[2].trim():"767",d="min"===e[3]?e[3].trim():"max",u=document.querySelector("."+e[0].trim());e.length>0&&u&&(r.setAttribute("data-da-index",s),t[s]={parent:r.parentNode,index:(a=r,o=void 0,o=Array.prototype.slice.call(a.parentNode.children),o.indexOf(a))},n[s]={element:r,destination:document.querySelector("."+e[0].trim()),place:i,breakpoint:c,type:d},s++)}}(r=n).sort((function(t,e){return t.breakpoint>e.breakpoint?-1:1})),r.sort((function(t,e){return t.place>e.place?1:-1}));for(let t=0;t<n.length;t++){const e=n[t],r=e.breakpoint,a=e.type;i.push(window.matchMedia("("+a+"-width: "+r+"px)")),i[t].addListener(l)}}var r,a,o;function l(t){for(let t=0;t<n.length;t++){const e=n[t],r=e.element,a=e.destination,o=e.place,l="_dynamic_adapt_"+e.breakpoint;if(i[t].matches){if(!r.classList.contains(l)){let t=c(a)[o];"first"===o?t=c(a)[0]:"last"===o&&(t=c(a)[c(a).length]),a.insertBefore(r,a.children[t]),r.classList.add(l)}}else r.classList.contains(l)&&(s(r),r.classList.remove(l))}}function s(e){const n=e.getAttribute("data-da-index"),i=t[n],r=i.parent,a=i.index,o=c(r,!0)[a];r.insertBefore(e,r.children[o])}function c(t,e){const n=t.children,i=[];for(let t=0;t<n.length;t++){const r=n[t];(e||null==r.getAttribute("data-da"))&&i.push(t)}return i}l()}();
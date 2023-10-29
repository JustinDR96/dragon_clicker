(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();function f(){let e=document.getElementById("cb-cookie-banner");e.style.display="block"}function b(){localStorage.setItem("cb_isCookieAccepted","yes");let e=document.getElementById("cb-cookie-banner");e.style.display="none"}function y(){let e=localStorage.getItem("cb_isCookieAccepted");e===null&&(localStorage.setItem("cb_isCookieAccepted","no"),f()),e==="no"&&f()}window.onload=y();window.cb_hideCookieBanner=b;let t=0,a=0,d=1,C=[{name:"Fleche",description:"Augmente le nombre d'oeufs par clic (2)",price:50,level:0,src:"assets/farming_icon/arrow.jpg",effect:function(){t-=this.price,this.level++,document.getElementById("arrow-nb").textContent=this.level,d+=2}},{name:"Vitamines",description:"Augmente le nombre d'oeufs par seconde (2)",price:100,level:0,src:"assets/farming_icon/vitamin.png",effect:function(){t=t-this.price,a+=2,this.level++,document.getElementById("vit-nb").textContent=this.level}},{name:"Forgeron",description:"multiplie les oeufs par seconde par 1.5",price:200,level:0,src:"assets/farming_icon/forge.jpg",effect:function(){t=t-this.price,a=a+a*1.5,this.level++,document.getElementById("forge-nb").textContent=this.level}}],I=[{name:"Dragon Ball",description:"multiply your egg per second by 1.5",price:500,level:0,src:"assets/bonus_icon/dragon-ball.png",effect:function(){t=t-this.price,a*=1.5,this.level++,document.getElementById("dball-number").textContent=this.level}},{name:"Dragon Trainer",description:"multiply your egg per second by 5",price:1e3,level:0,src:"assets/bonus_icon/dragon_trainer.jpg",effect:function(){t=t-this.price,a*=2,this.level++,document.getElementById("trainer-number").textContent=this.level}}];function E(){let e=document.getElementById("egg-image");switch(!0){case t<0:e.src="assets/dragon_egg/oeuf_dragon_1.png";break;case t<100:e.src="assets/dragon_egg/oeuf_dragon_5.png";break;case t<5e3:e.src="assets/dragon_egg/oeuf_dragon_4.png";break;case t<1e4:e.src="assets/dragon_egg/oeuf_dragon_6.png";break;case t<2e4:e.src="assets/dragon_egg/oeuf_dragon_7.png";break;case t<5e4:e.src="assets/dragon_egg/oeuf_dragon_9.png";break;case t<8e4:e.src="assets/dragon_egg/oeuf_dragon_10.png";break;case t<1e5:e.src="assets/dragon_egg/oeuf_dragon_8.png";break;case t<15e4:e.src="assets/dragon_egg/oeuf_dragon_3.png";break;case t<2e5:e.src="assets/dragon_egg/oeuf_dragon_12.png";break;case t<25e4:e.src="assets/dragon_egg/oeuf_dragon_2.png";break;case t>5e5:e.src="assets/dragon_egg/oeuf_dragon_11.png";break}}function p(e){t+=e,u(),E(),S(),m(),B()}function _(){setInterval(p(a),1e3)}function v(){setInterval(()=>{_()},1e3)}function S(){document.title="Eggs: "+t}function B(){localStorage.setItem("eggs",t),localStorage.setItem("eggPerSecond",a),localStorage.setItem("eggPerClick",d),localStorage.setItem("dragonBallCount",document.getElementById("dball-number").textContent),localStorage.setItem("trainerCount",document.getElementById("trainer-number").textContent),localStorage.setItem("arrowCount",document.getElementById("arrow-nb").textContent),localStorage.setItem("forgeCount",document.getElementById("forge-nb").textContent),localStorage.setItem("vitCount",document.getElementById("vit-nb").textContent)}function h(){const e=localStorage.getItem("eggs"),s=localStorage.getItem("eggPerSecond"),c=localStorage.getItem("eggPerClick"),o=localStorage.getItem("dragonBallCount"),n=localStorage.getItem("trainerCount"),r=localStorage.getItem("arrowCount"),l=localStorage.getItem("forgeCount"),g=localStorage.getItem("vitCount");e!==null&&(t=parseInt(e)),s!==null&&(a=parseInt(s)),c!==null&&(d=parseInt(c)),o!==null&&(document.getElementById("dball-number").textContent=o),n!==null&&(document.getElementById("trainer-number").textContent=n),r!==null&&(document.getElementById("arrow-nb").textContent=r),l!==null&&(document.getElementById("forge-nb").textContent=l),g!==null&&(document.getElementById("vit-nb").textContent=g)}function u(){const e=document.getElementById("egg-count"),s=document.getElementById("eggPerSec-count"),c=document.getElementById("eggPerClick-count");e.innerHTML="Eggs : "+t,s.innerHTML="Eggs/second: "+a,c.innerHTML="Eggs/click: "+d}function k(){setInterval(function(){const e=Math.floor(Math.random()*901)+100;t+=e;const s=document.getElementById("egg-notification"),c=document.getElementById("bonus-eggs");c.textContent=e,s.style.display="block",setTimeout(function(){s.style.display="none"},2e3)},12e4)}function m(){const e=Array.from(document.querySelectorAll(".farming_button")),s=Array.from(document.querySelectorAll(".bonus_button"));function c(o,n){t>=n?o.removeAttribute("disabled"):o.setAttribute("disabled","disabled")}e.forEach(o=>{const n=parseInt(o.dataset.price);c(o,n),o.addEventListener("click",()=>{o.hasAttribute("disabled")||(o.setAttribute("disabled","disabled"),t>=cardData.price&&(cardData.effect(),t-=cardData.price,u(),m()),o.removeAttribute("disabled"))})}),s.forEach(o=>{const n=parseInt(o.dataset.price);c(o,n),o.addEventListener("click",()=>{o.hasAttribute("disabled")||(o.setAttribute("disabled","disabled"),t>=cardData.price&&(cardData.effect(),t-=cardData.price,u(),m()),o.removeAttribute("disabled"))})})}function A(){C.forEach(e=>{const s=document.querySelector(".farming"),c=document.getElementById("card-template"),o=document.importNode(c.content,!0),n=o.querySelector(".card"),r=n.querySelector(".farming_img"),l=n.querySelector(".farming_title"),g=n.querySelector(".farming_desc"),i=n.querySelector(".farming_button");r.src=e.src,l.textContent=e.name,g.textContent=e.description,i.textContent=`Price: ${e.price}`,i.dataset.price=e.price,t>=e.price?i.removeAttribute("disabled"):i.setAttribute("disabled","disabled"),i.addEventListener("click",()=>{i.hasAttribute("disabled")||(e.price*=1.5,i.textContent=`Price: ${e.price}`,e.effect())}),s.appendChild(o)}),I.forEach(e=>{const s=document.querySelector(".bonus"),c=document.getElementById("bonus-card-template"),o=document.importNode(c.content,!0),n=o.querySelector(".card"),r=n.querySelector(".bonus_img"),l=n.querySelector(".bonus_title"),g=n.querySelector(".bonus_desc"),i=n.querySelector(".bonus_button");r.src=e.src,l.textContent=e.name,g.textContent=e.description,i.textContent=`Price: ${e.price}`,i.dataset.price=e.price,t>=e.price?i.removeAttribute("disabled"):i.setAttribute("disabled","disabled"),i.addEventListener("click",()=>{i.hasAttribute("disabled")||(e.price*=1.5,i.textContent=`Price: ${e.price}`,e.effect())}),s.appendChild(o)})}document.addEventListener("DOMContentLoaded",function(){A(),v(),h(),k();const e=document.getElementById("egg-image");e.addEventListener("mousedown",()=>{e.style.transform="scale(0.95)"}),e.addEventListener("mouseup",()=>{e.style.transform="scale(1)"}),e.addEventListener("click",function(){console.log("click : "+t),p(d)})});

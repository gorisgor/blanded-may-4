import"./assets/modulepreload-polyfill-3cfb730f.js";const e={counterValue:document.querySelector(".counter-value"),incrementBtn:document.querySelector('button[data-action="increment"]'),decrementBtn:document.querySelector('button[data-action="decrement"]')};let t=0;function c(n){clearInterval(t),t=setInterval(()=>{e.counterValue.textContent=+e.counterValue.textContent+1},1e3)}function r(n){clearInterval(t),t=setInterval(()=>{e.counterValue.textContent=+e.counterValue.textContent-1},1e3)}e.incrementBtn.addEventListener("click",c);e.decrementBtn.addEventListener("click",r);
//# sourceMappingURL=commonHelpers3.js.map
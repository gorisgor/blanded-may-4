import { refs } from './refs';

let intervalId = 0;

export function onIncrementBtnClick(event) {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    refs.counterValue.textContent = +refs.counterValue.textContent + 1;
  }, 1000);
}
export function onDecrementBtnClick(event) {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    refs.counterValue.textContent = +refs.counterValue.textContent - 1;
  }, 1000);
}

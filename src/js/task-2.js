// Кнопка increment повинна кожну секунду збільшувати значення на 1

import { onDecrementBtnClick, onIncrementBtnClick } from './hendlers';
import { refs } from './refs';

// Кнопка decrement має кожну секунду зменшувати значення на 1

refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);

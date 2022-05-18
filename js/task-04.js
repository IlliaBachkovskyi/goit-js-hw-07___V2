const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');
const btnIncrementRef = document.querySelector('[data-action="increment"]');
console.log(btnDecrementRef);
console.log(btnIncrementRef);
console.log(valueRef);

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);

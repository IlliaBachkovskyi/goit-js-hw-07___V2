const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const listRef = document.querySelector('#ingredients');
console.log(listRef);

listRef.append(
  ...ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  }),
);

listRef.style.listStyle = 'none';

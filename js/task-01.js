const allCategoriesRef = document.querySelectorAll(".js-item");
console.log(`В списке ${allCategoriesRef.length} категории`);

allCategoriesRef.forEach(
    elem => {
        console.log(`Категория: ${elem.children[0].textContent}`);
        console.log(`Количество элементов: ${elem.children[1].childElementCount}`);
    }
);
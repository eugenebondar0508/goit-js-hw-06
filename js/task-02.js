const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients')
const result = [];

ingredients.forEach(item => {
  let el = document.createElement('li');
  el.classList = 'item';
  el.textContent = item;
  result.push(el)
});

ul.append(...result)
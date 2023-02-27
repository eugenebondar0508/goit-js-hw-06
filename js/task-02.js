const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients')
const result = ingredients.map(item => {
  let el = document.createElement('li');
  el.classList = 'item';
  el.textContent = item;
  ul.append(el)
});



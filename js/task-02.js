const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients')

const ingredientsList = []
  
  for (let item of ingredients) {
    let liTag = document.createElement('li');
    liTag.textContent = item
    liTag.classList ='item'
    ingredientsList.push(liTag)
  }

ingredientsUl.append(...ingredientsList)






// // Напиши скрипт,
//  який для кожного елемента масиву ingredients:

// // Створить окремий елемент <li>. Обов'язково
//  використовуй метод document.createElement().
// // Додасть назву інгредієнта як його текстовий вміст.
// // Додасть елементу клас item.
// // Після чого, вставить усі <li> за одну
//  операцію у список ul#ingredients.
async function diningData() {
  // fetch request
  const request = await fetch('/api/dining');
  const dining = await request.json();
  const arrayDining = dining.data;
  console.log(arrayDining);
  const tableDining = document.querySelector('.table');
  console.table(tableDining);

  arrayDining.forEach((item) => {
    const appendItem = document.createElement('tr');
    appendItem.innerHTML = `
        <td>${item.hall_id}</td>
        <td>${item.hall_name}</td>
        <td>${item.hall_address}</td>
    `;
    tableDining.append(appendItem);
  });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function mealsData() {
  const diningRequest = await fetch('/api/wholeMeal');
  const dineData = await diningRequest.json();
  return dineData;
}

async function windowActions() {
  const results = await mealsData();
  const meals = results.data;

  const data = await diningData();
  console.table(data);

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chosen = mealArray.map(element => {
    const random = getRandomIntInclusive(0, (meals.length) - 1);
    return meals[random];
  });
  console.table(chosen);
}

window.onload = windowActions();
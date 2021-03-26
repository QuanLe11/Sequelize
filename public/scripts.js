async function diningData() {
  // fetch request
  const request = await fetch('/api/macros');
  const data = request.json();
  console.table(data);

  const diningHall = data;
  console.log(typeof diningHall);
  const target = document.querySelector('#target');
  for(Object.entries(diningHall)) {
    const mealID = item.meal_id;
    /* const name = item.hall_name; */
    const calories = item.calories;
    const carbs = item.carbs;
    const sodium = item.sodium;
    const protein = item.protein;
    const fat = item.fat;
    const cholesterol = item.cholesterol;
    target.innerHTML += `
            <tr>
                <th>${mealID}</th>
                <td>${calories}</td>
                <td>${carbs}</td>
                <td>${sodium}</td>
                <td>${protein}</td>
                <td>${fat}</td>
                <td>${cholesterol}</td>
            </tr>
            `;
  };
}

diningData();
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

  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Meals and Their Macros'
    },
    axisX: {
      title: 'Meals'
    },
    axisY: {
      title: 'Macros'
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: 'pointer',
      // eslint-disable-next-line no-use-before-define
      itemclick: toggleDataSeries
    },
    data: [{
      type: 'stackedBar',
      name: 'Calories',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].meal_name, y: chosen[0].calories },
        { label: chosen[1].meal_name, y: chosen[1].calories },
        { label: chosen[2].meal_name, y: chosen[2].calories },
        { label: chosen[3].meal_name, y: chosen[3].calories },
        { label: chosen[4].meal_name, y: chosen[4].calories },
        { label: chosen[5].meal_name, y: chosen[5].calories },
        { label: chosen[6].meal_name, y: chosen[6].calories },
        { label: chosen[7].meal_name, y: chosen[7].calories },
        { label: chosen[8].meal_name, y: chosen[8].calories },
        { label: chosen[9].meal_name, y: chosen[9].calories }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Serving Size',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].meal_name, y: chosen[0].serving_size },
        { label: chosen[1].meal_name, y: chosen[1].serving_size },
        { label: chosen[2].meal_name, y: chosen[2].serving_size },
        { label: chosen[3].meal_name, y: chosen[3].serving_size },
        { label: chosen[4].meal_name, y: chosen[4].serving_size },
        { label: chosen[5].meal_name, y: chosen[5].serving_size },
        { label: chosen[6].meal_name, y: chosen[6].serving_size },
        { label: chosen[7].meal_name, y: chosen[7].serving_size },
        { label: chosen[8].meal_name, y: chosen[8].serving_size },
        { label: chosen[9].meal_name, y: chosen[9].serving_size }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Cholesterol',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].meal_name, y: chosen[0].cholesterol },
        { label: chosen[1].meal_name, y: chosen[1].cholesterol },
        { label: chosen[2].meal_name, y: chosen[2].cholesterol },
        { label: chosen[3].meal_name, y: chosen[3].cholesterol },
        { label: chosen[4].meal_name, y: chosen[4].cholesterol },
        { label: chosen[5].meal_name, y: chosen[5].cholesterol },
        { label: chosen[6].meal_name, y: chosen[6].cholesterol },
        { label: chosen[7].meal_name, y: chosen[7].cholesterol },
        { label: chosen[8].meal_name, y: chosen[8].cholesterol },
        { label: chosen[9].meal_name, y: chosen[9].cholesterol }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Sodium',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].meal_name, y: chosen[0].sodium },
        { label: chosen[1].meal_name, y: chosen[1].sodium },
        { label: chosen[2].meal_name, y: chosen[2].sodium },
        { label: chosen[3].meal_name, y: chosen[3].sodium },
        { label: chosen[4].meal_name, y: chosen[4].sodium },
        { label: chosen[5].meal_name, y: chosen[5].sodium },
        { label: chosen[6].meal_name, y: chosen[6].sodium },
        { label: chosen[7].meal_name, y: chosen[7].sodium },
        { label: chosen[8].meal_name, y: chosen[8].sodium },
        { label: chosen[9].meal_name, y: chosen[9].sodium }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Carbs',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].meal_name, y: chosen[0].carbs },
        { label: chosen[1].meal_name, y: chosen[1].carbs },
        { label: chosen[2].meal_name, y: chosen[2].carbs },
        { label: chosen[3].meal_name, y: chosen[3].carbs },
        { label: chosen[4].meal_name, y: chosen[4].carbs },
        { label: chosen[5].meal_name, y: chosen[5].carbs },
        { label: chosen[6].meal_name, y: chosen[6].carbs },
        { label: chosen[7].meal_name, y: chosen[7].carbs },
        { label: chosen[8].meal_name, y: chosen[8].carbs },
        { label: chosen[9].meal_name, y: chosen[9].carbs }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Protein',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].meal_name, y: chosen[0].protein },
        { label: chosen[1].meal_name, y: chosen[1].protein },
        { label: chosen[2].meal_name, y: chosen[2].protein },
        { label: chosen[3].meal_name, y: chosen[3].protein },
        { label: chosen[4].meal_name, y: chosen[4].protein },
        { label: chosen[5].meal_name, y: chosen[5].protein },
        { label: chosen[6].meal_name, y: chosen[6].protein },
        { label: chosen[7].meal_name, y: chosen[7].protein },
        { label: chosen[8].meal_name, y: chosen[8].protein },
        { label: chosen[9].meal_name, y: chosen[9].protein }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Fats',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].meal_name, y: chosen[0].fat },
        { label: chosen[1].meal_name, y: chosen[1].fat },
        { label: chosen[2].meal_name, y: chosen[2].fat },
        { label: chosen[3].meal_name, y: chosen[3].fat },
        { label: chosen[4].meal_name, y: chosen[4].fat },
        { label: chosen[5].meal_name, y: chosen[5].fat },
        { label: chosen[6].meal_name, y: chosen[6].fat },
        { label: chosen[7].meal_name, y: chosen[7].fat },
        { label: chosen[8].meal_name, y: chosen[8].fat },
        { label: chosen[9].meal_name, y: chosen[9].fat }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
}

window.onload = windowActions();
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
        { label: chosen[0].dataValues.meal_name, y: chosen[0].dataValues.calories },
        { label: chosen[1].dataValues.meal_name, y: chosen[1].dataValues.calories },
        { label: chosen[2].dataValues.meal_name, y: chosen[2].dataValues.calories },
        { label: chosen[3].dataValues.meal_name, y: chosen[3].dataValues.calories },
        { label: chosen[4].dataValues.meal_name, y: chosen[4].dataValues.calories },
        { label: chosen[5].dataValues.meal_name, y: chosen[5].dataValues.calories },
        { label: chosen[6].dataValues.meal_name, y: chosen[6].dataValues.calories },
        { label: chosen[7].dataValues.meal_name, y: chosen[7].dataValues.calories },
        { label: chosen[8].dataValues.meal_name, y: chosen[8].dataValues.calories },
        { label: chosen[9].dataValues.meal_name, y: chosen[9].dataValues.calories }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Serving Size',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].dataValues.meal_name, y: chosen[0].dataValues.serving_size },
        { label: chosen[1].dataValues.meal_name, y: chosen[1].dataValues.serving_size },
        { label: chosen[2].dataValues.meal_name, y: chosen[2].dataValues.serving_size },
        { label: chosen[3].dataValues.meal_name, y: chosen[3].dataValues.serving_size },
        { label: chosen[4].dataValues.meal_name, y: chosen[4].dataValues.serving_size },
        { label: chosen[5].dataValues.meal_name, y: chosen[5].dataValues.serving_size },
        { label: chosen[6].dataValues.meal_name, y: chosen[6].dataValues.serving_size },
        { label: chosen[7].dataValues.meal_name, y: chosen[7].dataValues.serving_size },
        { label: chosen[8].dataValues.meal_name, y: chosen[8].dataValues.serving_size },
        { label: chosen[9].dataValues.meal_name, y: chosen[9].dataValues.serving_size }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Cholesterol',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].dataValues.meal_name, y: chosen[0].dataValues.cholesterol },
        { label: chosen[1].dataValues.meal_name, y: chosen[1].dataValues.cholesterol },
        { label: chosen[2].dataValues.meal_name, y: chosen[2].dataValues.cholesterol },
        { label: chosen[3].dataValues.meal_name, y: chosen[3].dataValues.cholesterol },
        { label: chosen[4].dataValues.meal_name, y: chosen[4].dataValues.cholesterol },
        { label: chosen[5].dataValues.meal_name, y: chosen[5].dataValues.cholesterol },
        { label: chosen[6].dataValues.meal_name, y: chosen[6].dataValues.cholesterol },
        { label: chosen[7].dataValues.meal_name, y: chosen[7].dataValues.cholesterol },
        { label: chosen[8].dataValues.meal_name, y: chosen[8].dataValues.cholesterol },
        { label: chosen[9].dataValues.meal_name, y: chosen[9].dataValues.cholesterol }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Sodium',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].dataValues.meal_name, y: chosen[0].dataValues.sodium },
        { label: chosen[1].dataValues.meal_name, y: chosen[1].dataValues.sodium },
        { label: chosen[2].dataValues.meal_name, y: chosen[2].dataValues.sodium },
        { label: chosen[3].dataValues.meal_name, y: chosen[3].dataValues.sodium },
        { label: chosen[4].dataValues.meal_name, y: chosen[4].dataValues.sodium },
        { label: chosen[5].dataValues.meal_name, y: chosen[5].dataValues.sodium },
        { label: chosen[6].dataValues.meal_name, y: chosen[6].dataValues.sodium },
        { label: chosen[7].dataValues.meal_name, y: chosen[7].dataValues.sodium },
        { label: chosen[8].dataValues.meal_name, y: chosen[8].dataValues.sodium },
        { label: chosen[9].dataValues.meal_name, y: chosen[9].dataValues.sodium }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Carbs',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].dataValues.meal_name, y: chosen[0].dataValues.carbs },
        { label: chosen[1].dataValues.meal_name, y: chosen[1].dataValues.carbs },
        { label: chosen[2].dataValues.meal_name, y: chosen[2].dataValues.carbs },
        { label: chosen[3].dataValues.meal_name, y: chosen[3].dataValues.carbs },
        { label: chosen[4].dataValues.meal_name, y: chosen[4].dataValues.carbs },
        { label: chosen[5].dataValues.meal_name, y: chosen[5].dataValues.carbs },
        { label: chosen[6].dataValues.meal_name, y: chosen[6].dataValues.carbs },
        { label: chosen[7].dataValues.meal_name, y: chosen[7].dataValues.carbs },
        { label: chosen[8].dataValues.meal_name, y: chosen[8].dataValues.carbs },
        { label: chosen[9].dataValues.meal_name, y: chosen[9].dataValues.carbs }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Protein',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].dataValues.meal_name, y: chosen[0].dataValues.protein },
        { label: chosen[1].dataValues.meal_name, y: chosen[1].dataValues.protein },
        { label: chosen[2].dataValues.meal_name, y: chosen[2].dataValues.protein },
        { label: chosen[3].dataValues.meal_name, y: chosen[3].dataValues.protein },
        { label: chosen[4].dataValues.meal_name, y: chosen[4].dataValues.protein },
        { label: chosen[5].dataValues.meal_name, y: chosen[5].dataValues.protein },
        { label: chosen[6].dataValues.meal_name, y: chosen[6].dataValues.protein },
        { label: chosen[7].dataValues.meal_name, y: chosen[7].dataValues.protein },
        { label: chosen[8].dataValues.meal_name, y: chosen[8].dataValues.protein },
        { label: chosen[9].dataValues.meal_name, y: chosen[9].dataValues.protein }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Fats',
      showInLegend: 'true',
      dataPoints: [
        { label: chosen[0].dataValues.meal_name, y: chosen[0].dataValues.fat },
        { label: chosen[1].dataValues.meal_name, y: chosen[1].dataValues.fat },
        { label: chosen[2].dataValues.meal_name, y: chosen[2].dataValues.fat },
        { label: chosen[3].dataValues.meal_name, y: chosen[3].dataValues.fat },
        { label: chosen[4].dataValues.meal_name, y: chosen[4].dataValues.fat },
        { label: chosen[5].dataValues.meal_name, y: chosen[5].dataValues.fat },
        { label: chosen[6].dataValues.meal_name, y: chosen[6].dataValues.fat },
        { label: chosen[7].dataValues.meal_name, y: chosen[7].dataValues.fat },
        { label: chosen[8].dataValues.meal_name, y: chosen[8].dataValues.fat },
        { label: chosen[9].dataValues.meal_name, y: chosen[9].dataValues.fat }
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
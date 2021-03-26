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

async function windowActions() {
  const data = await diningData();
  console.table(data);
}

window.onload = windowActions();
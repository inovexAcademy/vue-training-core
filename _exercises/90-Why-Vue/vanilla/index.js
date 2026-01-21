import groceriesData from '../data.json' with { type: 'json' };

const mainAppEl = document.querySelector('#app');

const setupCounterApp = () => {
  addLogo();
  addHeadline();

  for (const grocery of groceriesData) {
    addGroceryRow(grocery.name, grocery.quantity);
  }

  addTotalSum();
};

const addTotalSum = () => {
  const totalSumEl = document.createElement('div');
  totalSumEl.className = 'total-sum-counter';
  totalSumEl.textContent = 'Total Sum: 0';
  mainAppEl.appendChild(totalSumEl);

  updateTotalSum();
};

// 🚨 TODO: implement updateTotalSum
const updateTotalSum = () => {
  console.warn('not implemented yet');
};

const addGroceryRow = (item, quantity) => {
  const groceryRow = document.createElement('div');
  groceryRow.className = 'grocery-row';
  const label = document.createElement('div');
  label.className = 'grocery-label';
  label.textContent = `${item}`;
  mainAppEl.appendChild(groceryRow);
  groceryRow.appendChild(label);

  appendCounterToEntry(groceryRow, quantity);
};

// 🚨 TODO: implement
const appendCounterToEntry = (entryEl, defaultValue) => {
  console.warn('not implemented yet');
};

const addLogo = () => {
  const logo = document.createElement('img');
  logo.src = 'https://vuejs.org/images/logo.png';
  logo.alt = 'Vue.js Logo';
  mainAppEl.appendChild(logo);
};

const addHeadline = () => {
  const headline = document.createElement('h1');
  headline.textContent = 'Counter App';
  mainAppEl.appendChild(headline);
};

setupCounterApp();

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
  totalSumEl.className = 'total-sum';
  totalSumEl.textContent = 'Total Sum: 0';
  mainAppEl.appendChild(totalSumEl);
  updateTotalSum();
};

const updateTotalSum = () => {
  const totalSumEl = document.querySelector('.total-sum');
  if (!totalSumEl) return;

  const groceryRows = document.querySelectorAll('.grocery-row');
  let totalSum = 0;

  groceryRows.forEach(row => {
    const counter = row.querySelector('.counter-wrapper div');
    if (counter) {
      totalSum += parseInt(counter.textContent, 10);
    }
  });
  totalSumEl.textContent = `Total Sum: ${totalSum}`;
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

const appendCounterToEntry = (el, defaultValue) => {
  const counterWrapperEl = document.createElement('div');
  counterWrapperEl.className = 'counter-wrapper';
  el.appendChild(counterWrapperEl);

  const counterEl = document.createElement('div');
  counterEl.textContent = defaultValue;

  addDecrementButton(counterWrapperEl, counterEl);
  counterWrapperEl.appendChild(counterEl);
  addIncrementButton(counterWrapperEl, counterEl);
};

const addIncrementButton = (counterWrapperEl, counterEl) => {
  const incrementButton = document.createElement('button');
  incrementButton.className = 'increment';
  incrementButton.textContent = '+';
  incrementButton.addEventListener('click', () => {
    const currentCount = parseInt(counterEl.textContent, 10);
    counterEl.textContent = currentCount + 1;
    updateTotalSum(); // 🍭 update total sum because dependecy changed
  });
  counterWrapperEl.appendChild(incrementButton);
};

const addDecrementButton = (counterWrapperEl, counterEl) => {
  const decrementButton = document.createElement('button');
  decrementButton.className = 'decrement';
  decrementButton.textContent = '-';
  decrementButton.addEventListener('click', () => {
    const currentCount = parseInt(counterEl.textContent, 10);
    counterEl.textContent = Math.max(currentCount - 1, 0);
    updateTotalSum(); // 🍭 update total sum because dependecy changed
  });
  counterWrapperEl.appendChild(decrementButton);
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

// Web Components version of the Counter App
import groceriesData from '../data.json' with { type: 'json' };

// Template for counter element
const counterTemplate = document.createElement('template');
counterTemplate.innerHTML = `
  <style>
    .counter-wrapper { display: inline-flex; align-items: center; gap: 0.5em; }
    .counter { min-width: 2em; text-align: center; display: inline-block; }
    button { width: 2em; height: 2em; }
  </style>
  <div class="counter-wrapper">
    <button class="decrement">-</button>
    <div class="counter"></div>
    <button class="increment">+</button>
  </div>
`;

class CounterElement extends HTMLElement {
  static get observedAttributes() {
    return ['value'];
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(counterTemplate.content.cloneNode(true));
    this._counterEl = this.shadowRoot.querySelector('.counter');
    this._incBtn = this.shadowRoot.querySelector('.increment');
    this._decBtn = this.shadowRoot.querySelector('.decrement');
    this._value = 0;
  }
  connectedCallback() {
    this.value = parseInt(this.getAttribute('value')) || 0;
    this._render();
    this._incBtn.addEventListener('click', () => this.value++);
    this._decBtn.addEventListener(
      'click',
      () => (this.value = Math.max(this.value - 1, 0)),
    );
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'value') {
      this.value = parseInt(newVal);
    }
  }
  set value(val) {
    this._value = val;
    this._render();
    this.dispatchEvent(
      new CustomEvent('counter-change', {
        detail: { value: this._value },
        bubbles: true,
        composed: true,
      }),
    );
  }
  get value() {
    return this._value;
  }
  _render() {
    this._counterEl.textContent = this._value;
  }
}
customElements.define('counter-element', CounterElement);

// Template for grocery row
const rowTemplate = document.createElement('template');
rowTemplate.innerHTML = `
  <style>
    .grocery-row { display: flex; align-items: center; gap: 1em; margin-bottom: 0.5em; }
    .item-label { min-width: 6em; }
  </style>
  <div class="grocery-row">
    <span class="item-label"></span>
    <counter-element></counter-element>
  </div>
`;

class GroceryRow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(rowTemplate.content.cloneNode(true));
    this._label = this.shadowRoot.querySelector('.item-label');
    this._counter = this.shadowRoot.querySelector('counter-element');
  }
  connectedCallback() {
    this._label.textContent = this.getAttribute('item') || '';
    this._counter.setAttribute('value', this.getAttribute('quantity') || '0');
    this._counter.addEventListener('counter-change', e => {
      this.dispatchEvent(
        new CustomEvent('row-counter-change', {
          detail: { value: e.detail.value },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }
  get value() {
    return this._counter.value;
  }
}
customElements.define('grocery-row', GroceryRow);

// Template for the main app
const appTemplate = document.createElement('template');
appTemplate.innerHTML = `
  <style>
    :host { display: block; font-family: sans-serif; }
    .logo { width: 64px; display: block; margin-bottom: 1em; }
    h1 { margin: 0 0 1em 0; }
    .total-sum-counter { font-weight: bold; margin-top: 1em; }
  </style>
  <img class="logo" src="https://vuejs.org/images/logo.png" alt="Vue.js Logo">
  <h1>Counter App</h1>
  <div class="grocery-list"></div>
  <div class="total-sum-counter">Total Sum: 0</div>
`;

class GroceryApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(appTemplate.content.cloneNode(true));
    this._list = this.shadowRoot.querySelector('.grocery-list');
    this._total = this.shadowRoot.querySelector('.total-sum-counter');
  }
  connectedCallback() {
    this._renderRows();
    this.shadowRoot.addEventListener('row-counter-change', () =>
      this._updateTotal(),
    );
    this._updateTotal();
  }
  _renderRows() {
    this._list.innerHTML = '';
    groceriesData.forEach(grocery => {
      const row = document.createElement('grocery-row');
      row.setAttribute('item', grocery.name);
      row.setAttribute('quantity', grocery.quantity);
      this._list.appendChild(row);
    });
  }
  _updateTotal() {
    const sum = Array.from(this._list.querySelectorAll('grocery-row')).reduce(
      (acc, row) => acc + row.value,
      0,
    );
    this._total.textContent = `Total Sum: ${sum}`;
  }
}
customElements.define('grocery-app', GroceryApp);

// Mount the app
const mainAppEl = document.querySelector('#app');
mainAppEl.innerHTML = '';
const app = document.createElement('grocery-app');
mainAppEl.appendChild(app);

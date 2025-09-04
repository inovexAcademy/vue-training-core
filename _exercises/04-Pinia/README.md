# Exercise 05 Pinia

The goal of this exercise is to move the shopping cart state and its management into a global Pinia store.

## 📝 Tasks

> ⚠️ Make sure to use the [Setup Store](<(https://pinia.vuejs.org/core-concepts/#Setup-Stores)>) syntax, not Option Store!

- [ ] Add a Pinia store that manages the shopping cart state. It should at least have the following properties:
  - [ ] A list of all `ShoppingCartItem`s in the cart
    > - [ ] 💪 Bonus challenge: Ensure that the list is immutable and can only be modified using the store's methods
  - [ ] A function that adds items to the cart, e.g.`addToCart`
  - [ ] A function that removes items from the cart, e.g. `removeFromCart`
  - [ ] The total price of all items in the cart
- [ ] Use the created Pinia store instead of the local state associated with the shopping cart

## 🖼️ Example Result

![Example Result](src/assets/result.png)

## 💡 Help

- Pinia documentation: [Defining a Setup Store](https://pinia.vuejs.org/core-concepts/#Setup-Stores)

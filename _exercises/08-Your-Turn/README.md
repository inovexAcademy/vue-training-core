# Exercise 08 Your Turn

The goal of this exercise is to use what you have learned in this course.

## 📝 Tasks

Implement the following features:

### Product List:

Extend the product lists page to support the following.

- [ ] Add the number of available products to the header
- [ ] Add a `OnyxButtonGroup` which lets the user sort the product list by price
- [ ] Add a `OnyxInput` which lets you filter products by name

### Shopping Cart:

Adjust the shopping cart sidebar to work like the following.

- [ ] Add a number of the products in the shopping cart to the header
- [ ] The quantity is converted to a `OnyxStepper` which allows to adjust the amount right from the shopping cart component
- [ ] A click on the trash icon does not reduce the amount, but removes the whole product from the shopping cart now

### Checkout:

On the checkout page the following can be seen

- [ ] All products are listed with their price and quantity
- [ ] The subtotal price per product and quantity is shown
- [ ] A tax of 19% is added to the subtotal and also shown below it
- [ ] The total price of all products with the tax included is shown
- [ ] When clicking the 'Complete Purchase' button, an `OnyxToast` pops up that says: 'Congratulations: Your order is confirmed!'
- [ ] After that click, all products are removed from the shopping cart

### User Account page:

Create a new page for users to keep their account data and settings.

- [ ] Add a login page with a username and password field
- [ ] Find a way to store the logged in user
- [ ] Use the `OnyxNavBar` to add a user account page
- [ ] On the user account page
  - [ ] The user data can be seen in plain text (username, password)
  - [ ] All products of the shopping cart are listed
  - [ ] The user can define a price range which is used to hide all products outside of that range
  - [ ] This price range is also rendered on the `ProductList` (near the title)
  - [ ] New products can be added to the inventory
    - [ ] A `OnyxForm` is shown with a product name and price field
    - [ ] A button to submit a product is shown, which adds the defined product to the inventory
    - [ ] Invalid prices (negative or not even numbers) are recognized and the user is presented a hint to please enter only valid price values.

### 💪 Bonus challenges:

- [ ] Add tests for everything you implemented
- [ ] Add 1.000 products to the list and implement an infinite scroll mechanism

## 💡 Help

- Vitest documentation: [Writing Tests](https://vitest.dev/guide/#writing-tests)
- Vue documentation: [Unit Testing](https://vuejs.org/guide/scaling-up/testing#unit-testing)
- Pinia documentation: [Testing Stores](https://pinia.vuejs.org/cookbook/testing.html)

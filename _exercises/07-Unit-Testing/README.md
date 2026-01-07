# Exercise 07 Unit Testing

The goal of this exercise is to write basic unit tests using vitest and vue test utils.

## 📝 Tasks

- [ ] Come up with meaningful test cases for the `ProductList` component and implement them

  > 💡 Don't be afraid to draw inspiration from the unit tests of `ProductCard` and `ShoppingCart` 🙂

- 💪 Bonus challenges:
  - [ ] It seems like the discounted price function could be used in many different components. We want to make it future proof. Extract the calculation within the `discountedPrice` of the `ProductCard.vue` component into a calculation helper file. Then, create meaningful isolated unit tests for it. <br />
        Still want a task? Use a table test to raise readability.
  - [ ] Add unit tests for the shopping cart store (find help [here](https://pinia.vuejs.org/cookbook/testing.html))

## 💡 Help

- Vitest documentation: [Writing Tests](https://vitest.dev/guide/#writing-tests)
- Vue documentation: [Unit Testing](https://vuejs.org/guide/scaling-up/testing#unit-testing)
- Pinia documentation: [Testing Stores](https://pinia.vuejs.org/cookbook/testing.html)

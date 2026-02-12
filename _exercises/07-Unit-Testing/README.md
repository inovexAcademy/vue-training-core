# Exercise 07 Unit Testing

The goal of this exercise is to write basic unit tests using vitest and component tests using playwright.

## 📝 Task

- [ ] It seems like the discounted price function could be used in many different components. We want to make it future proof. Extract the calculation within the `discountedPrice` of the `ProductCard.vue` component into a calculation helper file. Then, create meaningful isolated unit tests for it.

- [ ] Come up with meaningful unit test cases for the `ProductCard` component and implement them

  > 💡 Don't be afraid to draw inspiration from the unit tests of [ProductCard.spec.ts](./tests/components/ProductCard.spec.ts) and [ShoppingCart.spec.ts](./tests/components/ShoppingCart.spec.ts) 🙂

### 💪 Bonus challenge:

- [ ] Add unit tests for the shopping cart store (find help [here](https://pinia.vuejs.org/cookbook/testing.html))

## 💡 Help

- Vitest documentation: [Writing Tests](https://vitest.dev/guide/#writing-tests)
- Vue documentation: [Unit Testing](https://vuejs.org/guide/scaling-up/testing#unit-testing)
- Playwright Component Testing documentation: [Playwright Components](https://playwright.dev/docs/test-components)

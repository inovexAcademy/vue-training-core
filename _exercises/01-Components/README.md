# Exercise 01 Components

The goal of this exercise is to create your own components and display them on the home page.

## Getting Started

- For the incremental step by step experience of this workshop, the OnyxLibrary and the Router are already set up in this project.
- This should get used to you for working with Vue with your project bootstrapper.
- See [\./src/views/HomeView.vue](./src/views/HomeView.vue) to find your starting point.
- From here replace the content 'Hello World!' with your defined components, imported from '/components'.

## 📝 Tasks

- [ ] We created an empty Vue component called `ProductCard` for you. Fill it with content by adding static arbitrary title, description, price, and "Add to cart"-button
  > - ℹ️ See [\./src/components/ProductCard.vue](./src/components/ProductCard.vue)
  > - [ ] 💪 Bonus challenge: Use `OnyxHeadline`, `OnyxCard`, and `OnyxButton` where possible!
- [ ] Fill in the content for another component `ProductList` which we created. Add a title "Available Products" and render two `ProductCard` components
- [ ] Display `ProductList` on the home page (see `HomeView`)

## 🖼️ Example Result

![Example Result](src/assets/result.png)

## 💡 Help

- [Available HTML Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- Onyx design system / components:
  - [General Documentation](https://onyx.schwarz)
  - [Components Demo / Storybook](https://storybook.onyx.schwarz/)
- Vue Documentation: [Component Basics](https://vuejs.org/guide/essentials/component-basics)
  > ⚠️ Always ensure that the Vue docs are configured for the **Composition API**, not Options API!
  >
  > ![Vue Docs API Toggle](src/assets/vue-docs-api-toggle.png)

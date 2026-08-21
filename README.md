# 🧪 Vue Core – 2-Day Beginner Workshop

Welcome to the **Vue Workshop**! 🎉
This hands-on 2-day course is designed for **web developers new to Vue**. Together, we’ll learn the **core concepts** of Vue 3 with the Composition API (`<script setup>`) – by building real components, writing clean code, and having fun!

---

## 📅 Workshop Overview

**Target Audience:** Web developers new to Vue (basic HTML, JS/TS experience required)

**Duration:** 2 days (3-4 exercises per day)

**Tech:** Vue 3, Vite, Vitest, TypeScript, Composition API (`<script setup>`)

By the end of this course, you’ll:

- Understand reactivity, components, props, and emits
- Build and structure a Vue app from scratch
- Be able to read and write Vue code confidently

---

## 🚀 Getting Started

> 📦 This repo is a monorepo using [`pnpm`](https://pnpm.io) for managing all exercises and solutions.

### ✅ 1. Clone the repository

```bash
git clone https://github.com/inovexAcademy/vue-training-core.git
cd vue-training-core
```

### ✅ 2. Install dependencies (all at once)

```bash
pnpm install
```

> This installs all exercises and solutions in one go via `pnpm-workspace.yaml`.

### ✅ 3. Open the exercises README file to get started

Go into the desired exercise folder open README

```bash
cd _exercises/01-Components/README.md
```

### ✅ 4. Execute the command you need

Either

- Run the vite dev server with

  ```bash
  pnpm dev
  ```

- Run the tests with vitest with
  ```bash
  pnpm test:unit
  ```

> You can work on exercises one-by-one. They’re isolated and ready-to-run.
> You can also try to build everything yourself, all within one folder instead of switching by using the

---

## 📝 Exercises

Choose an exercise below to open its instructions and get started.

- [01 – Components](_exercises/01-Components/README.md)
- [02 – Input & Output](_exercises/02-Input-Output/README.md)
- [03A – Reactivity: Computed Properties](_exercises/03-Reactivity/A-ComputedProperties/README.md)
- [03B – Reactivity: Directives](_exercises/03-Reactivity/B-Directives/README.md)
- [04 – Pinia](_exercises/04-Pinia/README.md)
- [05 – Router](_exercises/05-Router/README.md)
- [06 – Dynamic Routes](_exercises/06-Dynamic-Routes/README.md)
- [07 – Unit Testing](_exercises/07-Unit-Testing/README.md)
- [08 – Your Turn](_exercises/08-Your-Turn/README.md)

---

## 🧩 Structure of the Repository

```text
vue-training-core/
├── _examples/        → Examples from the slides can be found here
│   ├── 01-Components/
│   ├── 02-Databinding-And-Reactivity/
│   └── ...
├── _exercises/        → Your playground - each step builds on the last.
│   ├── 01-Components/
│   │   ├── README
│   ├── 02-Input-Output/
│   └── ...
├── _solutions/        → Complete solutions for each exercise
│   ├── 01-Components/
│   ├── 02-Input-Output/
│   └── ...
├── tsconfig.json     → Shared TypeScript config
└── pnpm-workspace.yaml
└── ...
```

---

## ⏩ Skipping Ahead / Catching Up

If you fall behind or want to peek at the next step:

1. Find the corresponding folder in `_solutions/`
2. Copy the contents into your `_exercises/XX-*` folder

---

## Further Resources

- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html) (Composition API)
- [Sit Onyx Design System](https://onyx.schwarz) (used in this workshop)
- [Vitest Documentation](https://vitest.dev/) (unit testing framework)
- [Vue CheatSheet](https://learnvue.co/LearnVue-Vue-3-Cheatsheet.pdf) (handy reference)

## 🤝 Code Together, Learn Together

Feel free to experiment, break things, and ask questions.
Vue is a friendly framework — and so are we! 😄

Happy learning,
— The Workshop Team 💚

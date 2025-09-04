# 🧪 Vue Fundamentals – 2-Day Beginner Workshop

Welcome to the **Vue Workshop**! 🎉
This hands-on 2-day course is designed for **web developers new to Vue**. Together, we’ll learn the **core concepts** of Vue 3 with the Composition API (`<script setup>`) – by building real components, writing clean code, and having fun!

---

## 📅 Workshop Overview

**Target Audience:** Web developers new to Vue (basic HTML, JS/TS experience required)

**Duration:** 2 days (3-4 exercises per day)

**Tech:** Vue 3, Vite, TypeScript, Composition API (`<script setup>`)

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

### ✅ 2. Create a .env from the `env.example`

Copy and paste the `.env.example` as `.env` in the root folder.

```bash
cp .env.example .env
```

### ✅ 3. Install dependencies (all at once)

```bash
pnpm install
```

> This installs all exercises and solutions in one go via `pnpm-workspace.yaml`.

### ✅ 4. Start an exercise

Go into the desired exercise folder and run the dev server:

```bash
cd _exercises/01-Components
pnpm dev
```

> You can work on exercises one-by-one. They’re isolated and ready-to-run.
> The instructions for the exercise can be found in the according `README.md`

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
│   ├── 02-Input-Output/
│   └── ...
├── _solutions/        → Complete solutions for each exercise
│   ├── 01-Components/
│   └── ...
├── vite.config.ts    → Shared Vite config
├── tsconfig.json     → Shared TypeScript config
└── pnpm-workspace.yaml
```

---

## ⏩ Skipping Ahead / Catching Up

If you fall behind or want to peek at the next step:

1. Find the corresponding folder in `_solutions/`
2. Copy the contents into your `_exercises/XX-*` folder

---

## 🤝 Code Together, Learn Together

Feel free to experiment, break things, and ask questions.
Vue is a friendly framework — and so are we! 😄

Happy learning,
— The Workshop Team 💚

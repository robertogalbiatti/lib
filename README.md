# React Component Library

A reusable React component library built with **React, TypeScript, and SCSS Modules**, designed to create consistent, accessible, and maintainable user interfaces across projects.

This project is also a hands-on exploration of component architecture, reusable UI patterns, and Atomic Design principles.

## ✨ Features

- Reusable and customizable React components
- TypeScript for type safety
- SCSS Modules for scoped component styles
- Native HTML attributes support where applicable
- Consistent styling and interaction patterns
- Atomic Design architecture
- Accessibility-focused development

## 🛠️ Tech Stack

- React
- TypeScript
- SCSS Modules
- Vite
- ESLint
- Prettier

## 📦 Components

The library is organized using the Atomic Design methodology.

| Component | Category | Status |
|---|---|---|
| Button | Atom | Completed |
| Chip | Atom | Completed |
| Checkbox | Atom | Completed |
| RadioButton | Atom | Completed |
| TextField | Atom | Completed |
| TextArea | Atom | Completed |
| Select | Atom | Completed |
| Loading Spinner | Atom | Completed |

*The component list and development status will evolve as the library grows.*

## 🏗️ Architecture

Components are organized according to Atomic Design principles:

```text
src/
├── components/
│   ├── atoms/
│   │   ├── button/
│   │   ├── chip/
│   │   ├── checkbox/
│   │   ├── radio-button/
│   │   ├── text-field/
│   │   ├── select/
│   │   └── loading-spinner/
│   ├── molecules/
│   └── organisms/
├── styles/
└── index.ts
```

- **Atoms:** Basic building blocks, such as buttons, inputs, and checkboxes.
- **Molecules:** Combinations of atoms that form functional UI elements, such as a labeled input with validation feedback.
- **Organisms:** More complex UI sections composed of multiple components, such as filter panels and form sections.

The structure may evolve as the library develops.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Basic knowledge of React

### Installation

Clone the repository:

```bash
git clone https://github.com/robertogalbiatti/lib.git
cd lib
npm install
```

Start the development environment:

```bash
npm run dev
```

> The commands above assume the repository uses Vite and defines the corresponding npm scripts. Adjust them if your project configuration differs.

## 💻 Usage

Once the components are exported from the library, they can be imported and used in React applications.

For example:

```tsx
import { LibButton } from './components/atoms/button';

export function App() {
  return (
    <LibButton>
      Click me
    </LibButton>
  );
}
```

The exact import path depends on the project's exports and how the library is consumed.

## 🎯 Project Goals

- Build a reusable component system for multiple React applications.
- Apply Atomic Design principles consistently.
- Improve accessibility and keyboard navigation.
- Establish consistent component APIs and styling conventions.
- Practice scalable frontend architecture and TypeScript.
- Document component behavior and usage examples.
- Add automated tests and component previews.

## 🗺️ Roadmap

- [x] Button
- [x] Chip
- [x] Checkbox
- [x] RadioButton and RadioGroup
- [x] TextField and TextArea
- [x] Select with clearable functionality
- [x] Loading Spinner
- [ ] Form validation patterns
- [ ] Unit and interaction tests
- [ ] Component documentation and interactive examples
- [ ] Package build and distribution
- [ ] Publish to npm

## 🤝 Contributing

This project is currently under active development.

Suggestions, feedback, and ideas for improving component APIs, accessibility, and architecture are welcome.

## 📄 License

A license has not yet been specified. Licensing terms will be added when the project is ready for distribution.

---

**Built as a practical exploration of reusable React components, frontend architecture, and design systems.**

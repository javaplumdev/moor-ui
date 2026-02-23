# Moor UI

A lightweight React component library with a collection of reusable UI components.

## Installation

Install the package from npm:

```bash
npm install @javaplum/moor-ui
```

Or with yarn:

```bash
yarn add @javaplum/moor-ui
```

## Usage

### Button

A customizable button component with support for multiple variants.

```jsx
import { Button } from "@javaplum/moor-ui";

export default function App() {
  return (
    <div>
      <Button label="Click me" onClick={() => alert("Clicked!")} />
      <Button label="Secondary" variant="secondary" />
    </div>
  );
}
```

#### Button Props

| Prop      | Type                      | Default   | Description               |
|-----------|---------------------------|-----------|---------------------------|
| `label`   | `string`                  | required  | Button text label         |
| `onClick` | `() => void`              | optional  | Click handler function    |
| `variant` | `"primary" \| "secondary"` | "primary" | Button style variant      |

**Variants:**
- **primary**: Purple background (#6200ea)
- **secondary**: Teal background (#03dac6)

## Features

- 📦 Lightweight and tree-shakeable
- ⚛️ Built with React and TypeScript
- 🎨 Pre-styled components with customizable variants
- 📚 Easy to integrate into any React project

## Development

### Build

Build the library for distribution:

```bash
npm run build
```

This generates:
- CommonJS distribution (`dist/index.cjs.js`)
- ES Module distribution (`dist/index.esm.js`)
- TypeScript type definitions (`dist/types/index.d.ts`)

### Testing

```bash
npm test
```

## Requirements

- React >= 17.0.0
- React DOM >= 17.0.0

## License

ISC

## Repository

https://github.com/javaplumdev/moor-ui

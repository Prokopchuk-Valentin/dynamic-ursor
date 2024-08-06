# Dynamic Cursor

Dynamic Cursor is a lightweight JavaScript utility that dynamically adjusts the font weight of text elements based on the cursor's proximity. This creates a visually engaging effect that responds to user interaction.

## Features

- Dynamically adjusts the font weight of text elements.
- Configurable options for animation speed, cursor radius, and font weight range.
- Supports custom HTML element types and class names.
- Designed to work seamlessly with variable fonts.

## Installation

To get started with Dynamic Cursor, clone the repository and install the dependencies using npm or yarn.

```bash
git clone <repository-url>
cd dynamic-cursor
npm install
```

## Usage

### Importing the Function

Import the `setDynamicCursor` function into your JavaScript or TypeScript file.

```javascript
import { setDynamicCursor } from './path/to/dynamicCursor';
```

### Setting Up Dynamic Cursor

Call the `setDynamicCursor` function with the required parameters to enable the dynamic cursor effect on your target element.

```javascript
setDynamicCursor('app', 'letterInDynamicCursor', 'span', {
  fontWeightDelta: 1,
  animationSpeed: 1.5,
  cursorRadius: 850,
  minFontWeight: 200,
  maxFontWeight: 800,
});
```

### Parameters

- `id`: The ID of the target HTML element.
- `className`: The class name to assign to each newly created element.
- `elementType`: The type of element to create for each character (default: `'span'`).
- `options`: An optional object to configure the dynamic cursor effect:
  - `fontWeightDelta` (number): The increment in font weight.
  - `animationSpeed` (number): The speed of the animation.
  - `cursorRadius` (number): The radius of the cursor effect.
  - `minFontWeight` (number): The minimum font weight.
  - `maxFontWeight` (number): The maximum font weight.

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Dynamic Cursor</title>
</head>
<body>
  <div id="app">Hello, World!</div>
  <script type="module" src="main.js"></script>
</body>
</html>
```

In `main.js`:

```javascript
import { setDynamicCursor } from './path/to/dynamicCursor';

setDynamicCursor('app', 'letterInDynamicCursor', 'span', {
  fontWeightDelta: 1,
  animationSpeed: 1.5,
  cursorRadius: 850,
  minFontWeight: 200,
  maxFontWeight: 800,
});
```

## Customization

Dynamic Cursor allows you to use variable fonts for a more customizable experience. To use a variable font, include the font in your CSS and apply it to the target elements.

### Example with Variable Font

```css
@font-face {
  font-family: 'LilexVf';
  src: url('./assets/fonts/variable/Lilex[wght].ttf');
}

.letterInDynamicCursor {
  font-family: 'LilexVf', sans-serif;
}
```

## Development

To start the development server, run:

```bash
npm run dev
```

To build the project for production, run:

```bash
npm run build
```

To preview the production build, run:

```bash
npm run preview
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to contribute to this project.

## Acknowledgements

Dynamic Cursor was inspired by the need for interactive and engaging web experiences. Special thanks to the developers and designers who continually push the boundaries of web design and user experience.

---

Feel free to adjust the examples and parameters to fit your specific use case and design preferences. Enjoy creating dynamic and engaging text effects with Dynamic Cursor!
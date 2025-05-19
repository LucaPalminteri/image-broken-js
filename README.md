# Image Broken JS

A lightweight JavaScript utility that automatically replaces broken images on your webpage with placeholder images.

## Features

- Detects and replaces broken images automatically
- Supports retina/high-DPI displays with proper scaling
- Maintains original image dimensions
- Uses [placehold.co](https://placehold.co) service for placeholder generation
- Customizable font for placeholder text

## Usage

1. Include the script in your HTML:

    ```html
    <script src="script.js" defer></script>
    ```

2. That's it! The script will automatically detect and replace any broken images on your page.

## How It Works

The script checks all `<img>` elements on the page and:

- Attaches error event listeners to each image
- Immediately processes images that are already broken
- Replaces broken images with properly sized placeholders from placehold.co
- Preserves original image dimensions to maintain layout
- Adjusts placeholder resolution based on device pixel ratio for retina displays

## Customization

You can modify the following variables at the top of the script:

- `placeholderFont`: Change the font used for the placeholder text (default: "montserrat")
- Default dimensions: If an image doesn't have defined dimensions, defaults of 300×200 are used

## Browser Compatibility

This script works in all modern browsers that support:

- `querySelectorAll`
- `forEach` on NodeList
- Dataset API
- `window.devicePixelRatio`

## License

[MIT License](https://opensource.org/licenses/MIT)

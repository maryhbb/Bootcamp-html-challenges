/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.
– [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: You need to work with the hsl() functional notation for colors.
– [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the control reaches the right end, make the box look like a circle.
– [ ] When the slider control of inputRotation is moved, rotate the box. Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

const boxElement = document.querySelector('[data-js="box"]');

inputColor.addEventListener("input", () => {
  const currentColor = inputColor.value;
  boxElement.style.backgroundColor = `hsl(${currentColor}, 100%, 50%)`;
});

/*
The hsl() function takes three parameters:

h (Hue): Represents the color itself and ranges from 0 to 360 degrees. It specifies the type of color, such as red, green, blue, etc.
s (Saturation): Represents the intensity or purity of the color and ranges from 0% to 100%. A saturation of 0% will give you grayscale (no color), and a saturation of 100% will give you the full color.
l (Lightness): Represents the brightness of the color and ranges from 0% (black) to 100% (white).

*/

inputRadius.addEventListener("change", () => {
  boxElement.style.borderRadius = `${inputRadius.value}%`;
});

inputRotation.addEventListener("change", () => {
  boxElement.style.transform = `rotate(${inputRotation.value}deg)`;
});

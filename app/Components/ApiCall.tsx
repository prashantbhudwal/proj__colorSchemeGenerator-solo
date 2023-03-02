export default function asyncAwait() {
  const modes = [
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
    "complement",
    "analogic-complement",
    "triad",
    "quad",
  ];

  const callParameters = {
    format: "hex",
    mode: modes[1],
    numberOfColors: "6",
    seed: "283848",
  };

  const { format, mode, numberOfColors, seed } = callParameters;

  const baseUrl = `https://www.thecolorapi.com`;
  const endpoint = `/scheme?${format}=${seed}&mode=${mode}&count=${numberOfColors}`;

  console.log(baseUrl + endpoint);
  fetch(baseUrl + endpoint)
    .then((response) => response.json())
    .then((data) => {
      const colorArray = data.colors;
      const colorCodes = colorArray.map((color: any) => color.hex.value);
      console.log(colorCodes);
    });
}

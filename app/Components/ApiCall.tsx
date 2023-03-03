"use client";
import useSWR from "swr";
import { useState } from "react";

export default function Profile() {
  const [fetchData, setFetchData] = useState(false);
  const endpoint =
    "https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6";
  const fetcher = (url: any) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) => data);
  const { data, error } = useSWR(fetchData ? endpoint : null, fetcher);

  const handleClick = () => {
    setFetchData((prevState) => !prevState);
  };
  
  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <button onClick={handleClick}>Load data</button>
      </div>
    );
  return <div>{data.colors[0].hex.value}</div>;
}

// export default function asyncAwait() {
//   const modes = [
//     "monochrome",
//     "monochrome-dark",
//     "monochrome-light",
//     "analogic",
//     "complement",
//     "analogic-complement",
//     "triad",
//     "quad",
//   ];

//   const callParameters = {
//     format: "hex",
//     mode: modes[1],
//     numberOfColors: "6",
//     seed: "283848",
//   };

//   const { format, mode, numberOfColors, seed } = callParameters;

//   const baseUrl = `https://www.thecolorapi.com`;
//   const endpoint = `/scheme?${format}=${seed}&mode=${mode}&count=${numberOfColors}`;

//   console.log(baseUrl + endpoint);
//   fetch(baseUrl + endpoint)
//     .then((response) => response.json())
//     .then((data) => {
//       const colorArray = data.colors;
//       const colorCodes = colorArray.map((color: any) => color.hex.value);
//       console.log(colorCodes);
//     });
// }



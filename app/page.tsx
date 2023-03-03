"use client";
import styled from "styled-components";
import Button from "./Components/Button";
import StyledTopBar from "./Components/StyledTopBar";
import StyledBottomBar from "./Components/StyledBottomBar";
import { useEffect, useState } from "react";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ColorInput = styled.input`
  border: 1px solid #d1d5d8;
  border-radius: 4px;
  height: 90%;
  width: 10em;
`;

const PaletteSelector = styled.select`
  padding: 0.5em 0.5em;
  font-size: 1.5rem;
  width: 15em;
  border: 1px solid #d1d5d8;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

const Palette = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1em;
  height: 50vh;
  background-color: #f6f8fa;
  border-top: 1px solid #d1d5d8;
  border-bottom: 1px solid #d1d5d8;
`;

interface ColorStripProps {
  code: string;
}

const ColorStrip = styled.div<ColorStripProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.code};
`;

export default function Home() {
const schemes = ["analogic", "monochrome", "triad", "complement"];
  const [colors, setColors] = useState([
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
  ]);
  const [scheme, setScheme] = useState("analogic");
  const [seed, setSeed] = useState("000000");
  const [url, setUrl] = useState(
    `https://www.thecolorapi.com/scheme?hex=283848&mode=analogic&count=9`
  );

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const colorArray = data.colors;
        const colorCodes = colorArray.map((color: any) => color.hex.value);
        setColors(colorCodes);
      });
  }, [url]);

  const handleClick = () => {
    setUrl(
      `https://www.thecolorapi.com/scheme?hex=${seed}&mode=${scheme}&count=6`
    );
  };

  const colorCodes = colors.map((color) => <p key={color}>{color}</p>);

  const colorPallette = colors.map((color) => (
    <ColorStrip code={color} key={color} />
  ));

  const schemeOptions = schemes.map((scheme) => (
    <option key={scheme} value={scheme}>
      {scheme}
    </option>
  ));

  const handleSchemeChange = (e: any) => {
    setScheme(e.target.value);
  };
  const handleSeedChange = (e: any) => {
    const color = e.target.value;
    const hex = color.substring(1);
    setSeed(hex);
  };

  return (
    <StyledApp>
      <StyledTopBar>
        <ColorInput
          type={"color"}
          onChange={handleSeedChange}
          value={`#${seed}`}
        ></ColorInput>
        <PaletteSelector onChange={handleSchemeChange} value={scheme}>
          {schemeOptions}
        </PaletteSelector>
        <Button onClick={handleClick}>Get Color Scheme</Button>
      </StyledTopBar>
      <Palette>{colorPallette}</Palette>
      <StyledBottomBar>{colorCodes}</StyledBottomBar>
    </StyledApp>
  );
}

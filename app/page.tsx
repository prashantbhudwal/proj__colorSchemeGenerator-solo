"use client";
import styled from "styled-components";
import Button from "./Components/Button";
import StyledTopBar from "./Components/StyledTopBar";
import StyledBottomBar from "./Components/StyledBottomBar";
import { useEffect, useState } from "react";
import useSWR from "swr";

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
  const schemes = ["analogous", "monochromatic", "triad", "complementary"];
  const cols = ["red", "blue", "green", "yellow", "orange", "purple"];
  const [colors, setColor] = useState(cols);
  const [scheme, setScheme] = useState("analogous");
  const [seed, setSeed] = useState("red");

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
    setSeed(e.target.value);
  };

  return (
    <StyledApp>
      <StyledTopBar>
        <ColorInput
          type={"color"}
          onChange={handleSeedChange}
          value={seed}
        ></ColorInput>
        <PaletteSelector onChange={handleSchemeChange} value={scheme}>
          {schemeOptions}
        </PaletteSelector>
        <Button>Get Color Scheme</Button>
      </StyledTopBar>
      <Palette>{colorPallette}</Palette>
      <StyledBottomBar>{colorCodes}</StyledBottomBar>
    </StyledApp>
  );
}

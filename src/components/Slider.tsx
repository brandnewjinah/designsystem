import React, { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  initialSize?: number;
  minSize?: number;
  maxSize?: number;
  step?: number;
}

const Slider: FC<Props> = ({ initialSize, minSize, maxSize, step }) => {
  const [ballsize, setBallSize] = useState(initialSize);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBallSize(e.target.valueAsNumber);
  };

  return (
    <>
      <div>{ballsize}</div>
      <Input
        type="range"
        min={minSize}
        max={maxSize}
        step={step}
        value={ballsize}
        onChange={handleChange}
      />
    </>
  );
};

const Input = styled.input`
  width: 300px;
  height: 10px;
  border-radius: 5px;
  background: #ccc;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export default Slider;

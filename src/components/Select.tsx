import React, { FC } from "react";
import styled from "styled-components";

//comp
import { ChevronDown } from "../assets/Icons";
import { breakpoint } from "./Token";

interface Props {
  gap?: number;
}

const Select: FC<Props> = ({ children, gap }) => {
  return (
    <Wrapper gap={gap}>
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
        <option value="mango">Mango2</option>
        <option value="mango">Mango3</option>
        <option value="mango">Mango4</option>
        <option value="mango">Mango5</option>
        <option value="mango">Mango6</option>
        <option value="mango">Mango7</option>
        <option value="mango">Mango8</option>
        <option value="mango">Mango9</option>
        <option value="mango">Mango10</option>
        <option value="mango">Mango11</option>
        <option value="mango">Mango12</option>
        <option value="mango">Mango13</option>
        <option value="mango">Mango14</option>
        <option value="mango">Mango15</option>
      </select>
      <span>
        <ChevronDown width={20} height={20} color="#000" stroke={2} />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  position: relative;

  select {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    padding: 0 1rem;

    /* reset */
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  span {
    position: absolute;
    top: 0.875rem;
    right: 1rem;
    pointer-events: none;
  }
`;

export default Select;

import React, { FC, ChangeEvent } from "react";

//import libraries
import styled from "styled-components";

import { fontSize, lineHeight, neutral } from "./Token";

interface Props {
  label?: string;
  value?: boolean;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = ({
  value,
  name,
  checked,
  onChange,
  label,
  indeterminate,
  disabled,
}) => {
  return (
    <Wrapper>
      <input type="checkbox" id={label} />
      <Label htmlFor={label}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    cursor: pointer;
    opacity: 0;
    position: absolute;

    &:hover + label::before {
      background-color: #35e07d;
    }

    &:checked + label::before {
      background-color: #27ae60;
    }
  }
`;

const Label = styled.label`
  cursor: pointer;
  display: flex;

  &:before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 0.15rem;
    margin-right: 0.5rem;
    border: 0.05rem solid black;
  }

  &:hover::before {
    background-color: #35e07d;
  }

  &:after {
    content: "";
    border: 2.875px solid #fff;
    border-left: 0;
    border-top: 0;
    width: 0.15rem;
    height: 0.45rem;
    position: absolute;
    top: 0.25rem;
    left: 0.45rem;
    opacity: 0;
    transform: rotate(45deg);
    transition: opacity 0.2s ease-in-out;
  }

  &:checked::after {
    opacity: 1;
  }
`;

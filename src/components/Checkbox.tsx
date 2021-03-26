import React, { FC, ChangeEvent } from "react";

//import libraries
import styled from "styled-components";

import { neutral } from "./Token";

interface Props {
  label?: string;
  value?: boolean;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = ({
  value,
  name,
  checked,
  onChange,
  label,
  disabled,
}) => {
  return (
    <Wrapper>
      <Input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
      <label htmlFor={label}>
        {disabled ? (
          <span className="disabled">{label}</span>
        ) : (
          <span>{label}</span>
        )}
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0.5rem 0;

  .disabled {
    color: ${neutral[300]};
  }
`;

const Input = styled.input`
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  + label {
    padding: 0 0 0 2em;
    cursor: pointer;
  }

  + label::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid #888;
    border-radius: 0.25em;
    content: "";
    /* transition: all 0.1s ease-in-out; */
  }

  + label::after {
    content: "";
    border: 3px solid #fff;
    border-left: 0;
    border-top: 0;
    width: 0.3em;
    height: 0.7em;
    position: absolute;
    top: 0.2rem;
    left: 0.5em;
    opacity: 0;
    transform: rotate(45deg);
    transition: opacity 0.2s ease-in-out;
  }

  &:checked + label::before {
    background-color: #0a3ddb;
    border-color: #0a3ddb;
  }

  &:checked + label::after {
    opacity: 1;
  }

  &:focus + label::before {
    box-shadow: 0 0 0 3px #c6d0f7;
    outline: 3px solid transparent;
  }

  &:disabled + label::before {
    background-color: #cdcdcd;
    border-color: #cdcdcd;
  }
`;

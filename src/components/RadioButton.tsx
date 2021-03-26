import React, { FC, ChangeEvent } from "react";

//import libraries
import styled from "styled-components";

import { neutral } from "./Token";

interface Props {
  label?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<Props> = ({
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
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
        value={value}
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
  margin: 0.25rem 0;

  .disabled {
    color: ${neutral[300]};
  }
`;

const Input = styled.input`
  width: 1em;
  height: 1em;
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
    width: 1em;
    height: 1em;
    border: 2px solid #888;
    border-radius: 50%;
    content: "";
    /* transition: all 0.1s ease-in-out; */
  }

  + label::after {
    content: "";
    border: 4px solid #fff;
    border-radius: 50%;
    /* width: 0.3em;
    height: 0.7em; */
    position: absolute;
    top: 0.4em;
    left: 0.4em;
    opacity: 0;
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

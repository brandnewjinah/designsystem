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
      <Input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
      <Label htmlFor={label} indeterminate={indeterminate}>
        {disabled ? (
          <span className="disabled">{label}</span>
        ) : (
          <span>{label}</span>
        )}
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  .disabled {
    color: ${neutral[300]};
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

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

const Label = styled.label<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: ${fontSize.sm1};

  &:before {
    content: "";
    width: 1.15rem;
    height: 1.15rem;
    border: 0.05rem solid #888;
    border-radius: 0.15rem;
    margin-right: 0.5rem;
    /* transition: all 0.1s ease-in-out; */
  }

  &:after {
    content: "";
    border: 0.175rem solid #fff;
    border-left: 0;
    border-top: 0;
    border-right: ${(props) => props.indeterminate && 0};
    width: ${(props) => (props.indeterminate ? `.5rem` : `0.15rem`)};
    height: 0.45rem;
    position: absolute;
    top: ${(props) => (props.indeterminate ? `.25rem` : `0.45rem`)};
    left: ${(props) => (props.indeterminate ? `.35rem` : `0.45rem`)};
    opacity: 0;
    transform: ${(props) =>
      props.indeterminate ? `rotate(0)` : `rotate(45deg)`};
    transition: opacity 0.2s ease-in-out;
  }
`;

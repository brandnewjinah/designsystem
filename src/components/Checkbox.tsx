import React, { FC, ChangeEvent, useEffect, useRef } from "react";

//import libraries
import styled from "styled-components";

import { fontSize, lineHeight, neutral } from "./Token";

interface Props {
  label?: string;
  checked?: boolean;
  name?: string;
  disabled?: boolean;
  indeterminate?: boolean | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = ({
  checked,
  name,
  onChange,
  label,
  indeterminate,
  disabled,
}) => {
  const checkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (indeterminate && checkRef.current !== null && indeterminate === true) {
      checkRef.current.indeterminate = true;
      checkRef.current.checked = false;
    } else if (
      checkRef.current !== null &&
      indeterminate === false &&
      checked
    ) {
      checkRef.current.indeterminate = false;
      checkRef.current.checked = true;
    }
  }, [indeterminate]);

  return (
    <Wrapper>
      <Input
        ref={checkRef}
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

  &:indeterminate + label::before {
    border-color: #0a3ddb;
  }

  &:indeterminate + label::after {
    opacity: 1;
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

  &:hover:disabled + label::before {
    box-shadow: none;
    outline: none;
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

  &:hover::before {
    box-shadow: 0 0 0 3px #c6d0f7;
    outline: 3px solid transparent;
  }

  &:after {
    content: "";
    border: ${(props) =>
      props.indeterminate ? `0.175rem solid #0a3ddb` : `0.175rem solid #fff`};
    border-left: 0;
    border-top: 0;
    border-right: ${(props) => props.indeterminate && 0};
    width: ${(props) => (props.indeterminate ? `.6rem` : `0.15rem`)};
    height: 0.45rem;
    position: absolute;
    top: ${(props) => (props.indeterminate ? `.25rem` : `0.45rem`)};
    left: ${(props) => (props.indeterminate ? `.35rem` : `0.45rem`)};
    opacity: 0;
    transform: ${(props) =>
      props.indeterminate ? `rotate(0)` : `rotate(45deg)`};
    transition: opacity 0.2s ease-in-out;
  }

  /* &:after {
    content: "";
    border: 0.175rem solid #fff;
    border-left: 0;
    border-top: 0;
    width: 0.15rem;
    height: 0.45rem;
    position: absolute;
    top: 0.45rem;
    left: 0.45rem;
    opacity: 0;
    transform: rotate(45deg);
    transition: opacity 0.2s ease-in-out;
  } */
`;

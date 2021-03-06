import React, { FC, ChangeEvent } from "react";

//import libraries
import styled, { keyframes } from "styled-components";

interface Props {
  label?: string;
  value?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = ({
  value,
  checked,
  onChange,
  label,
  disabled,
}) => {
  return (
    <Label disabled={disabled}>
      {label}
      <Input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator checked={checked}>
        <Icon viewBox="0 0 24 24">
          <path d="M20 6L9 17l-5-5" />
        </Icon>
      </Indicator>
    </Label>
  );
};

const Input = styled.input<Props>`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`;

const Label = styled.label<Props>`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6em 1em;
`;

const Indicator = styled.div<Props>`
  width: 1.2em;
  height: 1.2em;
  background: #e6e6e6;
  position: absolute;
  top: 0em;
  left: -1.6em;
  border: 1px solid #757575;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }

  ${Label}:hover & {
    background: #ccc;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    /* display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0; */
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

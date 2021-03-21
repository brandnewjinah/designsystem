import React, { FC } from "react";
import { shade } from "polished";
import { defaultTheme } from "./Token";

//import libraries
import styled from "styled-components";

export interface Props {
  label?: string;
  color?: string;
  disabled?: boolean;
  shape?: "pill" | "rounded" | "sharp";
  fullwidth?: boolean;
  icon?: boolean;
  handleClick?: () => void;
}

export const FilledButton: FC<Props> = ({
  label,
  color,
  disabled,
  shape,
  fullwidth,
  icon,
  handleClick,
  children,
}) => {
  return (
    <FilledContainer
      aria-label={label}
      role="button"
      color={color}
      shape={shape}
      disabled={disabled}
      fullwidth={fullwidth}
      onClick={handleClick}
    >
      <Flex>
        {icon && children}
        <p>{label}</p>
      </Flex>
    </FilledContainer>
  );
};

export const TextButton: FC<Props> = ({
  label,
  color,
  disabled,
  handleClick,
}) => {
  return (
    <TextButtonContainer
      aria-label={label}
      color={color}
      disabled={disabled}
      onClick={handleClick}
    >
      <p>{label}</p>
    </TextButtonContainer>
  );
};

export const OutlinedButton: FC<Props> = ({
  label,
  color,
  disabled,
  shape,
  fullwidth,
  icon,
  children,
  handleClick,
}) => {
  return (
    <OutlinedContainer
      aria-label={label}
      color={color}
      shape={shape}
      disabled={disabled && true}
      fullwidth={fullwidth}
      onClick={handleClick}
    >
      <Flex>
        {icon && children}
        <p>{label}</p>
      </Flex>
    </OutlinedContainer>
  );
};

export const IconButton: FC<Props> = ({
  label,
  color,
  children,
  disabled,
  handleClick,
}) => {
  return (
    <IconContainer
      aria-label={label}
      title={label}
      color={color}
      disabled={disabled && true}
      onClick={handleClick}
    >
      {children}
    </IconContainer>
  );
};

const Button = styled.button<Props>`
  font-weight: 600;
  width: ${(props) => (props.fullwidth ? "100%" : null)};
  border-radius: ${(props) =>
    props.shape === "pill" ? "2em" : props.shape === "rounded" ? ".5em" : 0};
  padding: 0.875em 1.5em;
  transition: opacity 0.3s ease-out;

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
  }
`;

const FilledContainer = styled(Button)<Props>`
  background-color: ${(props) => props.color};
  border: none;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
    /* background: ${(props) => shade(0.15, "#000")}; */
  }

  &:disabled {
    background-color: ${defaultTheme.disalbed};
  }
`;

const OutlinedContainer = styled(Button)<Props>`
  background-color: transparent;
  border: ${(props) => `2px solid ${props.color}`};
  color: ${(props) => props.color};

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 1;
    /* border-color: ${(props) => shade(0.15, `${props.color}`)}; */
  }

  &:disabled {
    border-color: ${defaultTheme.disalbed};
    color: ${defaultTheme.disalbed};
  }
`;

const TextButtonContainer = styled.button<Props>`
  font-weight: 600;
  background: transparent;
  color: ${(props) => props.color};
  border: 0;

  border-bottom: ${(props) =>
    props.color ? `2px solid ${props.color}` : `2px solid black`};
  transition: 0.2s;

  &:hover {
    border-bottom-color: transparent;
  }

  &:active {
    opacity: 1;
    color: ${(props) => shade(0.5, `${props.color}`)};
  }

  &:disabled {
    color: ${defaultTheme.disalbed};
    border-bottom-color: transparent;
    cursor: not-allowed;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 0.5em;
  }
`;

const IconContainer = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  padding: 0.75em;
  border-radius: 100%;
  border: none;
  outline: transparent;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 0.65;
  }

  &:active {
    opacity: 0.85;
  }

  &:disabled {
    background-color: #b0b0b0;
    color: #b0b0b0;
    opacity: 1;
    cursor: not-allowed;
  }
`;

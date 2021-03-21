import React, { FC } from "react";
import { defaultTheme } from "./Token";

//import libraries
import styled from "styled-components";

export interface Props {
  label?: string;
  color?: string;
  fullwidth?: boolean;
  shape?: "pill" | "rounded" | "sharp";
  handleClick?: () => void;
}

export const PrimaryButton: FC<Props> = ({
  label,
  color,
  fullwidth,
  shape,
  handleClick,
}) => {
  return (
    <PrimaryContainer
      color={color}
      fullwidth={fullwidth}
      shape={shape}
      onClick={handleClick}
    >
      {label}
    </PrimaryContainer>
  );
};

export const SecondaryButton: FC<Props> = ({
  label,
  color,
  fullwidth,
  shape,
  handleClick,
}) => {
  return (
    <SecondaryContainer
      color={color}
      fullwidth={fullwidth}
      shape={shape}
      onClick={handleClick}
    >
      {label}
    </SecondaryContainer>
  );
};

export const TertiaryButton: FC<Props> = ({ label, color, handleClick }) => {
  return (
    <TertiaryContainer color={color} onClick={handleClick}>
      {label}
    </TertiaryContainer>
  );
};

const Button = styled.button<Props>`
  width: ${(props) => (props.fullwidth ? "100%" : null)};
  border-radius: ${(props) =>
    props.shape === "pill" ? "2em" : props.shape === "rounded" ? ".5em" : 0};
  font-weight: 600;
  padding: 0.875em 1.5em;
  cursor: pointer;
`;

const PrimaryContainer = styled(Button)<Props>`
  background-color: ${(props) => (props.color ? props.color : "blue")};
  border: none;
  color: #fff;
`;

const SecondaryContainer = styled(Button)<Props>`
  background-color: transparent;
  border: ${(props) => `2px solid ${props.color}`};
  color: ${(props) => props.color};
`;

const TertiaryContainer = styled.button<Props>`
  font-weight: 600;
  background: transparent;
  color: ${(props) => props.color};
  border: 0;
  cursor: pointer;

  border-bottom: ${(props) =>
    props.color ? `2px solid ${props.color}` : `2px solid black`};
  transition: 0.2s;
`;

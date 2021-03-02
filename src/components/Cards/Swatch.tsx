import React, { FC } from "react";

//import libraries
import styled from "styled-components";

//import tokens
import { neutral } from "../Token";

interface Props {
  name?: string;
  value?: string;
  textInverted?: boolean;
}

const Swatch: FC<Props> = ({ name, value, textInverted }) => {
  return (
    <Wrapper value={value} textInverted={textInverted}>
      <p>{name}</p>
      <p>{value}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div<Props>`
  width: 100%;
  border-radius: 0.5em;
  padding-top: 30%;
  padding-left: 1em;
  padding-bottom: 1em;
  background-color: ${(props) => props.value};
  color: ${(props) => (props.textInverted ? neutral.n000 : neutral.n700)};

  p {
    font-size: 0.8rem;
    line-height: 1.25rem;
  }
`;

export default Swatch;

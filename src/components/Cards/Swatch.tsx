import React, { FC } from "react";

//import libraries
import styled from "styled-components";

//import tokens
import { neutral } from "../Token";

interface Props {
  name?: string;
  value?: string;
  textInverted?: boolean;
  main?: boolean;
  lightText?: boolean;
  darkText?: boolean;
}

export const Swatch: FC<Props> = ({ name, value, textInverted, main }) => {
  return (
    <WrapperColumn value={value} textInverted={textInverted}>
      <p>{name}</p>
      <p>{value}</p>
    </WrapperColumn>
  );
};

export const SwatchWCAG: FC<Props> = ({ value, lightText, darkText }) => {
  return (
    <Wrapper value={value}>
      <WCAG>
        <div>
          <div className="light">A</div>
          <div className="result">{lightText ? "pass" : "fail"}</div>
        </div>
        <div>
          <div className="dark">A</div>
          <div className="result">{darkText ? "pass" : "fail"}</div>
        </div>
      </WCAG>
    </Wrapper>
  );
};

const WCAG = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;

  .light {
    color: ${neutral[10]};
  }

  .dark {
    color: ${neutral[700]};
  }

  .result {
    font-size: 0.75rem;
    line-height: 1.5rem;
    background-color: ${neutral[600]};
    color: ${neutral[10]};
    border-radius: 0.25em;
    padding: 0 0.875em;
    margin: 0 0.25em;
  }
`;

const Wrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 0;
  border-radius: 0.5em;
  background-color: ${(props) => props.value};
  color: ${(props) => (props.textInverted ? neutral[10] : neutral[700])};

  p {
    font-size: 0.8rem;
    line-height: 1.15rem;
  }
`;

const WrapperColumn = styled(Wrapper)<Props>`
  flex-direction: column;
  /* padding-top: 50%; */
  /* padding-bottom: 1em; */
`;

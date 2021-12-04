import React, { FC } from "react";
import styled from "styled-components";
import { fontSize, neutral } from "../Token";

interface Props {
  title?: string;
  subtitle?: string;
  divider?: boolean;
}

export const Header: FC<Props> = ({ title, subtitle, divider }) => {
  return (
    <Wrapper divider={divider}>
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}
    </Wrapper>
  );
};

const Wrapper = styled.header<Props>`
  border-bottom: ${(props) =>
    props.divider ? null : `1px solid ${neutral[100]}`};
  padding-bottom: 2.5rem;

  h1 {
    font-size: ${fontSize.lg4};
  }
`;

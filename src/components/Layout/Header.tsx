import React, { FC } from "react";
import styled from "styled-components";
import Text from "../Text";
import { neutral } from "../Token";

interface Props {
  title?: string;
  subtitle?: string;
  divider?: boolean;
}

export const Header: FC<Props> = ({ title, subtitle, divider }) => {
  return (
    <Wrapper divider={divider}>
      {title && <Text variant="h1">{title}</Text>}
      {subtitle && <Text variant="body_small">{subtitle}</Text>}
    </Wrapper>
  );
};

const Wrapper = styled.header<Props>`
  border-bottom: ${(props) =>
    props.divider ? null : `1px solid ${neutral[100]}`};
  padding-bottom: 2.5rem;
`;

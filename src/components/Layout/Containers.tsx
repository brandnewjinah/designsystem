import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  gap?: string;
}

export const Flex: FC<Props> = ({ gap, children }) => {
  return <Wrapper gap={gap}>{children}</Wrapper>;
};

const Wrapper = styled.div<Props>`
  display: flex;
  gap: ${(props) => props.gap && props.gap};
  align-items: center;
  justify-content: center;
`;

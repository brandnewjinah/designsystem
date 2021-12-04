import React, { FC } from "react";
import styled from "styled-components";

//import styles and assets

import { breakpoint } from "./Token";

interface Props {
  gap?: number;
}

const Boiler: FC<Props> = ({ children, gap }) => {
  return <Wrapper gap={gap}>{children}</Wrapper>;
};

const Wrapper = styled.div<Props>`
  display: grid;

  @media ${breakpoint.lg} {
  }
`;

export default Boiler;

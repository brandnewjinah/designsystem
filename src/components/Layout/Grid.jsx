import React from "react";
import styled from "styled-components";

//token
import { breakpoint } from "../Token";

const Grid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  @media ${breakpoint.m} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
`;

export default Grid;

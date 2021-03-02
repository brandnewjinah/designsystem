import React, { FC } from "react";

//import styles and assets
import styled from "styled-components";

interface Props {}

const Grid: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  div {
  }

  .span {
    background-color: #ebdada;
    margin: 0.5em 0;
  }

  .span2 {
    grid-column: span 2;
  }

  .span3 {
    grid-column: span 3;
  }

  .span4 {
    grid-column: span 4;
  }

  .span6 {
    grid-column: span 6;
  }

  .span8 {
    grid-column: span 8;
  }

  .span12 {
    grid-column: span 12;
  }

  .tablet {
    display: none;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(8, 1fr);

    .mobile {
      display: none;
    }

    .tablet {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 22px;

    .tablet {
      display: none;
    }

    .desktop {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 26px;
  }
`;

export default Grid;

import React, { FC, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

//import assets
import { neutral, blue, defaultTheme } from "./Token";
import { ChevronLeft, ChevronRight } from "../assets/Icons";
import { Button } from "./Buttons/Button";

interface Props {
  pageSize: number;
  currentPage: number;
  // onPageChange: (page: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const SimplePagination: FC<Props> = ({
  currentPage,
  pageSize,
  handlePrev,
  handleNext,
}) => {
  return (
    <Nav aria-label="pagination">
      <ul>
        <li>
          <Button
            label="Prev"
            color={blue[400]}
            variant="tertiary"
            disabled={currentPage === 1 ? true : false}
            handleClick={handlePrev}
          />
        </li>
        <li>
          <Button
            label="Next"
            color={blue[400]}
            variant="tertiary"
            disabled={currentPage === pageSize ? true : false}
            handleClick={handleNext}
          />
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    text-indent: 0;
    padding-left: 0;
  }

  li {
    text-decoration: underline;
    padding: 0 0.25rem;
  }
`;

export default SimplePagination;

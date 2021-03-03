import React, { FC, useState } from "react";

//import libraries
import styled from "styled-components";
import _ from "lodash";

//import assets
import { neutral, blue, defaultTheme } from "./Token";
import { ChevronLeft, ChevronRight } from "../assets/Icons";

interface Props {
  dataLength: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const Pagination: FC<Props> = ({
  dataLength,
  pageSize,
  currentPage,
  handleNext,
  handlePrev,
  onPageChange,
}) => {
  const numberOfPages = Math.ceil(dataLength / pageSize);
  if (numberOfPages === 1) return null; //if there's only 1 page, do not show pagination
  const pages = _.range(1, numberOfPages + 1); //creates an array with numbers [1, 2, 3... number of pages]

  return (
    <Wrapper>
      <nav>
        <ul className="pagination">
          <li>
            <a className="arrow" onClick={() => handlePrev()}>
              <ChevronLeft width={20} height={20} color="#000" stroke={2} />
            </a>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <a
                className={
                  page === currentPage ? "pageLink active" : "pageLink"
                }
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
          <li>
            <a className="arrow" onClick={() => handleNext()}>
              <ChevronRight width={20} height={20} color="#000" stroke={2} />
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
  }

  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5em;
  }

  .pageLink {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    margin: 0 0.5em;

    &:hover {
      background-color: ${defaultTheme.neutralHover};
    }
  }

  .active {
    background-color: ${defaultTheme.secondaryColor};
    border-radius: 100%;
    color: #fff;
  }
`;

export default Pagination;

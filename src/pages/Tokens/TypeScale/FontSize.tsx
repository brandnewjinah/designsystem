import React from "react";
import styled from "styled-components";
import { fontSize, neutral } from "../../../components/Token";

const Table = () => {
  return (
    <Wrapper>
      <table className="table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Example</th>
            <th>px</th>
            <th>rem</th>
            <th>variable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sm3</td>
            <td className="sm3">Font Size</td>
            <td>12px</td>
            <td>0.75rem</td>
            <td>$fontSize.sm3</td>
          </tr>
          <tr>
            <td>sm2</td>
            <td className="sm2">Font Size</td>
            <td>14px</td>
            <td>0.875rem</td>
            <td>$fontSize.sm2</td>
          </tr>
          <tr>
            <td>sm1</td>
            <td className="sm1">Font Size</td>
            <td>15px</td>
            <td>0.9375rem</td>
            <td>$fontSize.sm1</td>
          </tr>
          <tr>
            <td>base</td>
            <td className="base">Font Size</td>
            <td>16px</td>
            <td>1rem</td>
            <td>$fontSize.base</td>
          </tr>
          <tr>
            <td>lg1</td>
            <td className="lg1">Font Size</td>
            <td>18px</td>
            <td>1.125rem</td>
            <td>$fontSize.lg1</td>
          </tr>
          <tr>
            <td>lg2</td>
            <td className="lg2">Font Size</td>
            <td>24px</td>
            <td>1.5rem</td>
            <td>$fontSize.lg2</td>
          </tr>
          <tr>
            <td>lg3</td>
            <td className="lg3">Font Size</td>
            <td>32px</td>
            <td>2rem</td>
            <td>$fontSize.lg3</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${neutral[500]};

  table {
    width: 100%;
    display: flex;
    border-collapse: collapse;

    @media (min-width: 1024px) {
      display: table;
    }
  }

  thead tr {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      display: table-row;
    }
  }

  thead th {
    font-size: 0.75rem;
    line-height: 2rem;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid ${neutral[200]};
    overflow-x: hidden;
    overflow-y: auto;
    background: ${neutral[100]};
    padding: 0.75rem 1rem;
    cursor: pointer;

    @media (min-width: 1024px) {
      background: transparent;
      padding: 0.75em 0;
    }
  }

  tbody {
    width: 100%;
    display: flex;
    overflow-x: auto;

    @media (min-width: 1024px) {
      display: table-row-group;
    }
  }

  tbody tr {
    width: 100%;
    white-space: nowrap;
  }

  tbody td {
    display: block;
    line-height: 2rem;
    border-bottom: 1px solid ${neutral[100]};
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0.75rem 1rem;

    @media (min-width: 1024px) {
      display: table-cell;
      padding: 0.75em 0;
    }
  }

  .sm3 {
    font-size: ${fontSize.sm3};
  }

  .sm2 {
    font-size: ${fontSize.sm2};
  }

  .sm1 {
    font-size: ${fontSize.sm1};
  }

  .base {
    font-size: ${fontSize.base};
  }

  .lg1 {
    font-size: ${fontSize.lg1};
  }

  .lg2 {
    font-size: ${fontSize.lg2};
  }

  .lg3 {
    font-size: ${fontSize.lg3};
  }
`;

export default Table;

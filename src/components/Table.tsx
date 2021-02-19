import React, { FC, useState } from "react";

//import libraries
import styled from "styled-components";

//import assets
import { colors } from "../components/Colors";

// interface Data {
//   id: number;
//   platform: string;
//   device?: string;
//   os?: string;
//   browser?: string;
//   resolution?: string;
// }

// interface Props {
//   data: Data[];
// }

interface Props {
  data: any;
  keys: string[];
  showId?: boolean;
}

const Table: FC<Props> = ({ data, keys, showId }) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            {keys.map((item, idx) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: {}, idx: number) => (
            <tr>
              {!showId
                ? Object.values(item)
                    .slice(1)
                    .map((it: any, idx: number) => <td key={idx}>{it}</td>)
                : Object.values(item).map((it: any, idx: number) => (
                    <td key={idx}>{it}</td>
                  ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  th {
    color: ${colors.lightgray};
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    padding: 0.5em 0;
  }

  tr {
    border-bottom: 1px solid ${colors.lightergray};
  }

  td {
    font-size: 0.875rem;
    color: ${colors.gray};
    padding: 0.75em 0;
  }
`;

export default Table;

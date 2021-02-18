import React, { FC, useState } from "react";

//import libraries
import styled from "styled-components";

//import data
import { navData } from "../data/navData";

interface Props {}

const Navigation: FC<Props> = () => {
  const [open, setOpen] = useState(1000);
  const [active, setActive] = useState<string>();

  return (
    <Wrapper>
      <div className="navheader">header</div>
      <div className="navigation">
        <ul>
          {navData.map((cat, idx) => (
            <li>
              <div
                className="main"
                onClick={() => setOpen(idx === open ? 1000 : idx)}
              >
                {cat.name}
              </div>
              <ul className={idx === open ? "" : "hide"}>
                {cat.subcategory.map((sub) => (
                  <li
                    className={sub.name === active ? "sub active" : "sub"}
                    onClick={() => setActive(sub.name)}
                  >
                    <div>{sub.name}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .navheader {
    padding: 2em 2.75em;
  }

  .navigation {
    font-size: 1rem;
    flex: 1;
    flex-grow: 1;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 2em;
  }

  .main {
    font-weight: 700;
    padding: 0.5em 0.75em;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 0.35em;
    }
  }

  .sub {
    padding: 0.5em 0 0.5em 2em;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      border-radius: 0.35em;
    }
  }

  .active {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 0.35em;
  }

  .hide {
    display: none;
  }
`;

export default Navigation;

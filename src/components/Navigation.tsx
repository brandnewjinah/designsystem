import React, { FC, useState } from "react";

//import libraries
import { Link } from "react-router-dom";
import styled from "styled-components";

//import styles and assets
import { neutral } from "./Token";

//import data
import { navData } from "../data/navData";

interface Props {}

const Navigation: FC<Props> = () => {
  const [open, setOpen] = useState(1000);
  const [active, setActive] = useState<string>();

  return (
    <Wrapper>
      <Link to="/">
        <div className="navheader">System</div>
      </Link>

      <div className="navigation" aria-label="Navigation">
        <ul>
          {navData.map((cat, idx) => (
            <li key={idx}>
              <a
                aria-haspopup="true"
                aria-expanded={idx === open ? true : false}
                onClick={() => setOpen(idx === open ? 1000 : idx)}
              >
                <div className="main">{cat.name}</div>
              </a>

              <ul className={idx === open ? "" : "hide"}>
                {cat.subcategory.map((sub, idx) => (
                  <li key={idx}>
                    <Link to={sub.link} onClick={() => setActive(sub.name)}>
                      <div
                        className={sub.name === active ? "sub active" : "sub"}
                      >
                        {sub.name}
                      </div>
                    </Link>
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
  a {
    color: ${neutral[600]};
  }

  ul {
    list-style-type: none;
    text-indent: 0;
    padding-left: 0;
  }

  ul,
  li {
    width: 100%;
  }

  .navheader {
    padding: 2em 2.75em;
  }

  .navigation {
    font-size: 0.9rem;
    flex: 1;
    flex-grow: 1;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 2em;
  }

  .main {
    width: 100%;
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

import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//import styles and assets
import { breakpoint, neutral } from "../Token";

//import data
import { navData } from "../../data/navData";

const Navigation = ({ sideOpen, handleOpen }) => {
  const [open, setOpen] = useState(1000);
  const [active, setActive] = useState();

  const handleSubcategory = (sub) => {
    setActive(sub);
    handleOpen((prev) => !prev);
  };

  const mobileHeight = window.innerHeight;

  return (
    <Container sideOpen={sideOpen} mobileHeight={mobileHeight}>
      <Nav>
        <ul>
          {navData.map((category, idx) => (
            <li key={idx}>
              <a
                aria-haspopup="true"
                aria-expanded={idx === open ? true : false}
                onClick={() => setOpen(idx === open ? 1000 : idx)}
              >
                <div className="main">{category.name}</div>
              </a>

              <ul className={idx === open ? "" : "hide"}>
                {category.subcategory.map((sub, idx) => (
                  <li key={idx}>
                    <Link
                      to={sub.link}
                      onClick={() => handleSubcategory(sub.name)}
                    >
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
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  display: block;
  min-width: 280px;
  height: 100vh;
  background-color: #fafafa;
  position: sticky;
  top: 0px;
  overflow-y: auto;
  z-index: 100;
  transform: ${(props) =>
    props.isOpen ? "translateX(100%)" : "translateX(0)"};
  transition: transform 0.2s ease-in-out;
  padding: 1rem;

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

  @media ${breakpoint.lg} {
    display: ${(props) => (props.sideOpen ? "block" : "none")};
    min-height: 0px;
    max-height: 100%;
  }
`;

const Nav = styled.nav`
  font-size: 0.9rem;

  .hide {
    display: none;
  }
`;

export default Navigation;

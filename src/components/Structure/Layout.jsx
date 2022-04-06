import React, { useState, useEffect } from "react";
import styled from "styled-components";

//import components
import { Div } from "../Containers/Divs";
import Header from "./Header";
import Navigation from "./Navigation";

//import tokens
import { breakpoint } from "../Token";

const Layout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false);

  useEffect(() => {
    //disable body scroll when mobile menu is open
    const width = window.innerWidth;
    const body = document.querySelector("body");
    body.style.overflow = width < 1025 && sideOpen ? "hidden" : "auto";
  }, [sideOpen]);

  return (
    <Div>
      <Header handleOpen={setSideOpen} />
      <Main>
        <Navigation sideOpen={sideOpen} handleOpen={setSideOpen} />
        <Content sideOpen={sideOpen}>{children}</Content>
      </Main>
    </Div>
  );
};

const Main = styled.main`
  display: flex;
`;

const Content = styled.div`
  flex: 4;
  width: 100%;
  padding: 2rem;

  @media ${breakpoint.lg} {
    flex: 1;
    display: ${(props) => props.sideOpen && "none"};
  }
`;

export default Layout;

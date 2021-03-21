import React, { FC, useState } from "react";

//import libraries
import styled from "styled-components";

//import components
import Navigation from "./Navigation";

//import tokens
import { neutral, breakpoint } from "./Token";

type LinksProps = {
  isOpen: boolean;
};

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Main>
        <Overlay isOpen={open} onClick={() => setOpen(!open)}></Overlay>
        <Header>
          <button onClick={() => setOpen(!open)}>header</button>
        </Header>
        <Side isOpen={open}>
          <Navigation />
        </Side>
        <Content>{children}</Content>
        <Footer>© 2021 Jinah Lee</Footer>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  height: 100%;
  width: 100%;
  padding: 56px 0 0 0;

  @media (min-width: 1024px) {
    padding-left: 280px;
  }
`;

const Overlay = styled.div<LinksProps>`
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

const Header = styled.nav`
  height: 56px;
  background-color: #fff;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  padding-left: 8px;
  z-index: 10;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Side = styled.div<LinksProps>`
  background-color: #fafafa;
  position: fixed;
  min-width: 280px;
  left: auto;
  bottom: 0px;
  right: 100%;
  top: 0px;
  z-index: 100;
  transform: ${(props) =>
    props.isOpen ? "translateX(100%)" : "translateX(0)"};
  transition: transform 0.2s ease-in-out;

  @media (min-width: 1024px) {
    left: 0px;
  }
`;

const Content = styled.div`
  padding: 2em;
  margin: 0 auto;
  max-width: 1280px;

  @media ${breakpoint.lg} {
    padding: 2rem 3rem;
  }
`;

const Footer = styled.div`
  border-top: 1px solid ${neutral[100]};
  font-size: 0.675rem;
  color: ${neutral[500]};
  text-align: center;
  padding: 3em 2em;
  margin: 0 auto;
  /* max-width: 1280px; */

  @media (min-width: 1024px) {
    padding: 3em;
  }
`;

export default Layout;

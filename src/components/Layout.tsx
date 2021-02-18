import React, { FC, useState } from "react";

//import libraries
import styled from "styled-components";

//import components
import Navigation from "./Navigation";

//import data
import { navData } from "../data/navData";

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
        <Content>
          {children}
          <Footer>footer</Footer>
        </Content>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 248px;

  @media screen and (max-width: 960px) {
    padding-left: 0;
  }
`;

const Header = styled.nav`
  display: none;

  @media screen and (max-width: 960px) {
    height: 48px;
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
  }
`;

const Overlay = styled.div<LinksProps>`
  @media screen and (max-width: 960px) {
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
  }
`;

const Side = styled.div<LinksProps>`
  background-color: #fafafa;
  min-width: 280px;
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 12;

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
      background-color: rgba(44, 44, 44, 0.06);
      border-radius: 0.25em;
    }
  }

  .sub {
    padding: 0.5em 0 0.5em 2em;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background-color: rgba(44, 44, 44, 0.06);
      border-radius: 0.25em;
    }
  }

  .active {
    background-color: rgba(44, 44, 44, 0.06);
  }

  .hide {
    display: none;
  }

  @media screen and (max-width: 960px) {
    left: auto;
    right: 100%;
    z-index: 100;
    transform: ${(props) =>
      props.isOpen ? "translateX(100%)" : "translateX(0)"};
    transition: transform 0.2s ease-in-out;
  }
`;

const Content = styled.div`
  background-color: lavenderblush;
  padding: 40px 52px 0px 52px;
  margin: 0 auto;
  max-width: 1080px;

  .block {
    width: 400px;
    height: 400px;
    margin: 1em;
  }
`;

const Footer = styled.div`
  background-color: gainsboro;
`;

export default Layout;

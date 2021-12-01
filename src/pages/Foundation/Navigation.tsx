import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";

//import assets
import Anatomy from "../../assets/foundation/Navigation_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";

const NavigationPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Navigation</h1>
        <p>
          Navigation, typically placed in the header or side, helps users
          identify where they are on the site, and move between pages.
        </p>
        <Main>
          <Section title="Header Navigation Anatomy" image={Anatomy} />
          <Section title="Accessibility">
            <Article
              title="Label"
              text={
                <p>
                  Label should be short and clearly explain what will happen
                  when button is pressed. Icon button should also have a label
                  as it is used for{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>aria-label</code>
                  .
                </p>
              }
              divider={false}
            />
          </Section>
        </Main>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.header`
  margin-bottom: 4em;
`;

const Main = styled.main``;

export default NavigationPage;

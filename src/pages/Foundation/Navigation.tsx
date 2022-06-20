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
import { Header } from "../../components/Layout/Header";

const NavigationPage = () => {
  return (
    <Wrapper>
      <Header
        title="Global Header"
        subtitle="Global header, typically placed on the top or side, helps users
          identify where they, and gives quick access to main sections of a site."
      />
      <Main>
        <Section title="Anatomy" image={Anatomy} />
        <Section title="Accessibility">
          <Article
            text={
              <ul>
                <li>
                  Global header is marked up with{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    header role="banner"
                  </code>
                  .
                </li>
                <li>
                  Global navigation is nested into{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>header</code> as{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    nav role="navigation"
                  </code>
                  .
                </li>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    aria-label="global header"
                  </code>{" "}
                  attribute is included in the{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>nav</code> tag.
                </li>
                <li>
                  Current page is indicated with{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    aria-current="page"
                  </code>{" "}
                  attribute.
                </li>
              </ul>
            }
            divider={false}
          />
          <Article
            title="Responsive"
            text={
              <ul>
                <li>
                  The hamburger menu is marked with a{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>button</code>{" "}
                  tag.
                </li>
                <li>
                  The
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    aria-expanded
                  </code>{" "}
                  attribute is applied to the hamburger menu. Its value changes
                  dynamically:
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    aria-expanded="true"
                  </code>{" "}
                  when the menu is expanded, and{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    aria-expanded="false"
                  </code>
                  when the menu is collapsed.
                </li>
              </ul>
            }
          />
          <Article
            title="Guidelines"
            text={
              <ul>
                <li>
                  Include{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>aria-label</code>
                  for buttons that only has image so that screen reader can
                  communicate purpose of the button.
                </li>
                <li>
                  Make sure the label is short and clearly explain what will
                  happen when button is pressed .
                </li>
              </ul>
            }
          />
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default NavigationPage;

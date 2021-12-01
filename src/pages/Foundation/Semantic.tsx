import React, { useState } from "react";
import styled from "styled-components";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//comps
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Header } from "../../components/Layout/Header";

const NavigationPage = () => {
  return (
    <Wrapper>
      <Header
        title="Semantic HTML"
        subtitle="Semantic HTML is the correct use of HTML to convey information about
          the type of content contained inside the tag."
      />
      <Main>
        <Section title="Why is it important?">
          <Article
            title="Accessibility"
            text={
              <p>
                It helps screen readers and other user devices determine the
                significance and context of each element.
              </p>
            }
            divider={false}
          />
          <Article
            title="SEO"
            text={
              <p>
                It helps search engines better understand the purpose of the
                page.
              </p>
            }
            divider={false}
          />
          <Article
            title="Maintenance"
            text={<p>It makes code clearer and easier to maintin.</p>}
            divider={false}
          />
        </Section>
        <Section title="Document Structure">
          <Article
            text={
              <ul>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>header</code>:
                  Use to contain the site logo, heading elements and navigation.
                </li>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>nav</code>: Use
                  to contain navigation links.
                </li>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>main</code>: Use
                  to contain the dominant content of the body.
                </li>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>section</code>:
                  Use to define a section in a document.
                </li>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>article</code>:
                  Use to contain independent content that makes sense on its
                  own.
                </li>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>aside</code>: Use
                  to contain contents that is related to the main content but
                  not part of the primary flow.
                </li>
                <li>
                  <code style={{ backgroundColor: "#f4f3ec" }}>footer</code>:
                  Use to contain footer information like author, copyright data
                  or links.
                </li>
              </ul>
            }
          />
        </Section>
        <Section title="Heading" divider={false}>
          <Article
            text={
              <ul>
                <li>
                  Use one<code style={{ backgroundColor: "#f4f3ec" }}>h1</code>
                  per page.
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

const Main = styled.main`
  li {
    line-height: 2.5rem;
  }
`;

export default NavigationPage;

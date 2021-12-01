import React, { useState } from "react";
import styled from "styled-components";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//comps
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";

//data
import { deviceData } from "../../data/deviceData";

const NavigationPage = () => {
  return (
    <Wrapper>
      <Header
        title="Accessibility"
        subtitle="Accessible design lets people of all abilities perceive, understand,
    navigate and interact with the web."
      />
      <Main>
        <Section title="Who benefits from accessibility?">
          <Article
            title="People with disabilities"
            text={
              <ul>
                <li>
                  People with hearing, cognitive, neurological, physical, speech
                  and visual disabilities.
                </li>
              </ul>
            }
            divider={false}
          />
          <Article
            title="People without disabilities"
            text={
              <ul>
                <li>
                  People using mobile devices, small screens and limited device
                  controls, etc.
                </li>
                <li>
                  People with situational limitations such as in different light
                  settings, in noisy environment, etc.
                </li>
                <li>People with slow internet connections.</li>
              </ul>
            }
            divider={false}
          />
        </Section>
        <Section title="Key Considerations">
          <Article
            text={
              <ul>
                <li>Support screen readers</li>
                <li>Outline semantic landmarks and regions</li>
                <li>
                  Provide a concise and unique title for each page. It's always
                  the first piece of information announced by screen readers.
                  <a
                    href="https://www.npmjs.com/package/react-helmet"
                    target="_blank"
                  >
                    {" "}
                    React-helmet
                  </a>
                </li>
                <li>Provide alt text for visual resources</li>
                <li>Readability</li>
                <li>Legible visual contrast</li>
                <li>Support Keyboard-only functionality</li>
                <li>Support touchscreen functionality</li>
                <li>Avoid flashing and repetitive animation</li>
              </ul>
            }
            divider={false}
          />
        </Section>
        <Section title="Testing">
          <Article
            text={
              <ul>
                <li>Test with screen readers</li>
                <li>Test with keyboard-only</li>
                <li>Text with touch-only</li>
                <li>Text across browsers and os</li>
              </ul>
            }
            divider={false}
          />
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default NavigationPage;

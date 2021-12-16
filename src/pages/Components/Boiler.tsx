import React, { useState } from "react";
import styled from "styled-components";

//components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import Table from "../../components/Table";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/avatar";

//import local data
import { linkData } from "../../data/propsData";

const HeaderPage = () => {
  return (
    <Wrapper>
      <Header
        title="Accessibility"
        subtitle="Accessible design lets people of all abilities perceive, understand,
    navigate and interact with the web."
      />
      <Main>
        <Section title="Example">
          <Article center></Article>
        </Section>
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
        <Section title="Implementation for React" divider={false}>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.avatar}
          </SyntaxHighlighter>
        </Section>
        <Section title="Props" divider={false}>
          <Table
            data={linkData}
            listSize={10}
            keys={["property", "type", "default", "required"]}
            showId={false}
          />
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default HeaderPage;

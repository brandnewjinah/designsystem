import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import { Header } from "../../../components/Layout/Header";
import Table from "./FontSize";
import { Section } from "../../../components/Layout/Section";
import { Article } from "../../../components/Layout/Article";
import LineHeight from "./LineHeight";

import * as Code from "../../../data/code/tokens";

const ReduxPage = () => {
  return (
    <Wrapper>
      <Header
        title="Type Scale"
        subtitle="Type scale tokens are set promote clarity, legibility and clear hierarchy."
      />
      <Main>
        <Section title="Font Size" divider={false}>
          <Article
            text={
              <>
                <code style={{ backgroundColor: "#f4f3ec" }}>16px</code> is the
                base size of body.
              </>
            }
            divider={false}
          >
            <Table />
          </Article>
        </Section>
        <Section title="Line Height" divider={false}>
          <Article
            text="Apply the following line height for better legibility"
            divider={false}
          >
            <LineHeight />
          </Article>
        </Section>
        <Section title="Type Scale Usage" divider={false}>
          <SyntaxHighlighter language="javascript" style={arduinoLight}>
            {Code.breakpoint}
          </SyntaxHighlighter>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default ReduxPage;

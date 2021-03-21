import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Sections/Section";

//import assets
import Structure from "../../assets/foundation/Layout_Structure.jpg";
import StructureSide from "../../assets/foundation/Layout_Structure_Side.jpg";

//import local data
import { layoutData } from "../../data/layoutData";
import * as Code from "../../data/code/layout";

const LayoutPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Layout</h1>
        <p>
          A layout is a template that shares the same structural consistency
          across platforms and screen sizes.
        </p>
      </Header>
      <Main>
        <Section
          title="Structure"
          image={Structure}
          imageText="Basic interface consists of header, body and footer."
          image2={StructureSide}
          image2Text="Sidebar interface consists of header, side navigation, body and footer."
        ></Section>
        <Section
          title="Layout Usage"
          text="Render layout component in the Routes file."
        >
          <SyntaxHighlighter language="javascript" style={arduinoLight}>
            {Code.implement}
          </SyntaxHighlighter>
        </Section>
        <Section title="Breakpoints">
          <Table
            data={layoutData}
            listSize={10}
            keys={["breakpoint", "min width", "screens"]}
            showId={false}
          />
        </Section>
        <Section
          title="Breakpoint Usage"
          text="Import breakpoint token to add breakpoints in media queries"
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={arduinoLight}>
            {Code.breakpoint}
          </SyntaxHighlighter>
        </Section>
        <Section
          text="This is how breakpoint token is configured"
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={arduinoLight}>
            {Code.token}
          </SyntaxHighlighter>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.header`
  margin-bottom: 3rem;
`;

const Main = styled.main``;

export default LayoutPage;

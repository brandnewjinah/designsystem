import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import { Main, Wrapper } from "../../components/Layout/Containers";
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import Table from "../../components/Table";

//import assets
import Structure from "../../assets/foundation/Layout_Structure.jpg";
import StructureSide from "../../assets/foundation/Layout_Structure_Side.jpg";

//import local data
import { layoutData } from "../../data/layoutData";
import * as Code from "../../data/code/layout";
import { Article } from "../../components/Layout/Article";

const LayoutPage = () => {
  return (
    <Wrapper>
      <Header
        title="Layout"
        subtitle="A layout is a template that shares the same structural consistency
        across platforms and screen sizes."
      />
      <Main>
        <Section
          title="Structure"
          image={Structure}
          imageText="Basic interface consists of header, body and footer."
          image2={StructureSide}
          image2Text="Sidebar interface consists of header, side navigation, body and footer."
        />
        <Section title="Accessibility">
          <Article
            title="Landmark Regions"
            text={
              <ul>
                <li>
                  ARIA landmarks are used to identify regions of content on the
                  page.
                </li>
                <li>
                  This helps users with assistive technology understand the
                  structure of page and navigate between landmark regions.
                </li>
                <li>
                  HTML5 Elements with default ARIA landmark role are used:
                  <code style={{ backgroundColor: "#f4f3ec" }}>
                    header
                  </code>,{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>main</code>,{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>nav</code>, and
                  <code style={{ backgroundColor: "#f4f3ec" }}>footer</code>.
                </li>
              </ul>
            }
          />
        </Section>
        <Section
          title="Layout Usage"
          text="Render layout component in the Routes file."
        >
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.implement}
          </SyntaxHighlighter>
        </Section>
        <Section title="Breakpoints" divider={false}>
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
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.breakpoint}
          </SyntaxHighlighter>
        </Section>
        <Section
          text="This is how breakpoint token is configured"
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.token}
          </SyntaxHighlighter>
        </Section>
      </Main>
    </Wrapper>
  );
};

export default LayoutPage;

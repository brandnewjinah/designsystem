import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import Section from "../../components/Section";

//import assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";

const ButtonPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Button</h1>
        <Article>
          <p>Buttons allow user to press and take actions.</p>
        </Article>
      </Header>
      <Main>
        <Section title="Interactive Demo">
          <Table
            data={deviceData}
            keys={["platform", "device", "os", "browser", "resolution"]}
            showId={false}
          />
        </Section>

        <Section title="Desktop Anatomy" image={Anatomy}>
          <ul>
            <li>
              <strong>1. Column Header</strong>: Asc and desc sort available on
              click.
            </li>
            <li>
              <strong>2. Rows</strong>
            </li>
            <li>
              <strong>3. Pagination</strong>
            </li>
          </ul>
        </Section>

        <Section title="Responsive Anatomy" image={AnatomyMobile}>
          <ul>
            <li>
              <strong>1. Sticky Header</strong>: Asc and desc sort available on
              click.
            </li>
            <li>
              <strong>2. Rows</strong>: Scrollable
            </li>
            <li>
              <strong>3. Default Browser Scroll</strong>
            </li>
            <li>
              <strong>4. Pagination</strong>
            </li>
          </ul>
        </Section>

        <Section title="Implementation">
          <SyntaxHighlighter language="javascript" style={docco}>
            {`(num) => num + 1`}
          </SyntaxHighlighter>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    font-family: "Lora", serif;
  }
`;

const Header = styled.header`
  margin-bottom: 4em;
`;

const Article = styled.article`
  font-size: 1rem;
  margin: 1em 0;
`;

const Main = styled.main``;

export default ButtonPage;

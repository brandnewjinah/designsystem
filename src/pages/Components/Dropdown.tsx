import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Sections/Section";
import Flex from "../../components/Sections/Flex";
import { Dropdown } from "../../components/Dropdown";

//import assets
import Anatomy from "../../assets/components/Dropdown_Anatomy.jpg";
import Anatomy2 from "../../assets/components/Dropdown_Anatomy2.jpg";

//import styles
import { neutral, sizes } from "../../components/Token";

//import local data
import { profileOptions } from "../../data/profileOptions";
import * as Code from "../../data/code/dropdown";

const DropdownPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Dropdown</h1>
        <Article>
          <p>
            A dropdown displays a list of options from which a user can select
            one or more option(s). A selected option can represent a value in a
            form or can be used to filter content.
          </p>
        </Article>
      </Header>
      <Main>
        <Section title="Interactive Demo" maxWidth={true}>
          <Dropdown
            label="Select one"
            placeholder="Select one"
            data={profileOptions}
            style="underline"
            margin={sizes.xxl}
          />

          <Dropdown
            isMulti
            label="Select multi"
            placeholder="Select all that apply"
            data={profileOptions}
            margin={sizes.xl}
            color="#E1EDFF"
          />
        </Section>
        <Section title="Anatomy" image={Anatomy} image2={Anatomy2}></Section>

        <Section title="Best Practices"></Section>

        <Section
          title="My Code Process"
          text="I used and customized react-select for the dropdown component as it provides flexible and robust solution."
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.install}
          </SyntaxHighlighter>
        </Section>
        <Section
          subtitle="Label"
          text="Dropdown component will always have a label, "
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.label}
          </SyntaxHighlighter>
        </Section>
        <Section
          subtitle="Props"
          text={
            <>
              It primarily uses the following props. To add more options, refer
              to the{" "}
              <a href="https://react-select.com/" target="_blank">
                react-select document
              </a>
              .
            </>
          }
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.props}
          </SyntaxHighlighter>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.header`
  margin-bottom: 4em;
`;

const Article = styled.article`
  font-size: 1rem;
  margin: 1em 0;
`;

const Main = styled.main``;

export default DropdownPage;

import React, { useState } from "react";
import styled from "styled-components";

//import components
import { Header } from "../../components/Layout/Header";
import Table from "../../components/Table";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Dropdown } from "../../components/Dropdown";
import Select from "../../components/Select";

//import assets
import Anatomy from "../../assets/components/Dropdown_Anatomy.jpg";
import Anatomy2 from "../../assets/components/Dropdown_Anatomy2.jpg";

//import styles
import { neutral, spacing } from "../../components/Token";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import local data
import { profileOptions } from "../../data/profileOptions";
import * as Code from "../../data/code/dropdown";

const DropdownPage = () => {
  return (
    <Wrapper>
      <Header
        title="Dropdown"
        subtitle="A dropdown displays a list of options from which a user can select
        one or more option(s). A selected option can represent a value in a
        form or can be used to filter content."
      />
      <Main>
        <Section title="Example">
          <Article center>
            <Select />
          </Article>
        </Section>
        <Section title="Interactive Demo" maxWidth={true}>
          <Dropdown
            label="Select one"
            placeholder="Select one"
            data={profileOptions}
            style="underline"
            margin={spacing.xxl}
          />

          <Dropdown
            isMulti
            label="Select multi"
            placeholder="Select all that apply"
            data={profileOptions}
            margin={spacing.xl}
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

const Main = styled.main``;

export default DropdownPage;

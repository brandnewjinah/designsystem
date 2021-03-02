import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import Section from "../../components/Section";
import { Dropdown } from "../../components/Dropdown";

//import assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import styles
import { neutral, sizes } from "../../components/Token";

//import local data
import { profileOptions } from "../../data/profileOptions";

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
        <Main>
          <Section title="Interactive Demo" maxWidth={true}>
            <Dropdown
              label="Select one"
              placeholder="Select one"
              data={profileOptions}
              style="underline"
              margin={sizes.xl}
            />
            <Dropdown
              isMulti
              label="Select multi"
              placeholder="Select all that apply"
              data={profileOptions}
              margin={sizes.xl}
              color="#de576d"
            />
          </Section>
          <Section title="Implementation for React">
            <SyntaxHighlighter
              language="javascript"
              style={atelierEstuaryLight}
            >
              {`
    npm i react-select
    npm i @types/react-select 
  `}
            </SyntaxHighlighter>
          </Section>
          <Section
            title="My Code Process"
            text="I used and customized react-select for the dropdown component as it provides flexible and robust solution."
            divider={false}
          >
            <SyntaxHighlighter
              language="javascript"
              style={atelierEstuaryLight}
            >
              {`
    npm i react-select
    npm i @types/react-select 
  `}
            </SyntaxHighlighter>
          </Section>
          <Section
            subtitle="fff"
            text="Dropdown component will always have a label, "
            divider={false}
          >
            <SyntaxHighlighter
              language="javascript"
              style={atelierEstuaryLight}
            >
              {`
    import Select from "react-select";

    <div>
      <p>{label}</p>
      <Select />
    </div>
  `}
            </SyntaxHighlighter>
          </Section>
          <Section
            subtitle="fff"
            text="This is where customizatio happens. I created a dropdown component file, imported the library and gave it the following layout"
            divider={false}
          >
            <SyntaxHighlighter
              language="javascript"
              style={atelierEstuaryLight}
            >
              {`
    import Select from "react-select";

    <div>
      <p>{label}</p>
      <Select 
        options={data}
        isMulti={isMulti}
        placeholder={placeholder}
        styles={customStyles}
        components={{
          IndicatorSeparator: () => null,
          ClearIndicator: () => null,
        }}
      />
    </div>
  `}
            </SyntaxHighlighter>
          </Section>
        </Main>
      </Header>
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

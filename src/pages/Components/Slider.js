import React, { ChangeEvent, useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Slider from "../../components/Slider";
import { Section } from "../../components/Sections/Section";

//import assets
import States from "../../assets/components/Radio_States.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";
import * as Code from "../../data/code/select";

const RadioButton = () => {
  const [selection, setSelection] = useState("one");

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <Wrapper>
      <Header>
        <h1>Slider</h1>
        <Article>
          <p>
            Checkboxes are used when there are one or more options to select in
            a list.
          </p>
        </Article>
      </Header>
      <Main>
        <Section title="Interactive Demo">
          <Slider initialSize={5} minSize={1} maxSize={10} step={1} />
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

const Main = styled.main`
  .demo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default RadioButton;

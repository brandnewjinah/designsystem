import React, { ChangeEvent, useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Sections/Section";
import { Radio } from "../../components/RadioButton";

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
        <h1>Radio Button</h1>
        <Article>
          <p>
            Checkboxes are used when there are one or more options to select in
            a list.
          </p>
        </Article>
      </Header>
      <Main>
        <Section title="Interactive Demo">
          <div className="demo">
            <Radio
              label="label 1"
              name="group"
              value="one"
              checked={selection === "one"}
              // disabled={true}
              onChange={handleChange}
            />
            <Radio
              label="label 2"
              name="group"
              value="two"
              checked={selection === "two"}
              // disabled={true}
              onChange={handleChange}
            />
            <Radio
              label="label 3"
              name="group"
              value="three"
              checked={selection === "three"}
              disabled={true}
              onChange={handleChange}
            />
          </div>
        </Section>
        <Section title="States" image={States}></Section>
        <Section title="Accessibility">
          <Section
            subtitle="Customization"
            text={
              <p>
                Checkboxes are customized on top of default <code>input</code>{" "}
                with opacity set to 0, to make it accessible by AT users.
              </p>
            }
            divider={false}
          />
        </Section>
        <Section title="Implementation for React" divider={false}>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.radio}
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

const Main = styled.main`
  .demo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default RadioButton;

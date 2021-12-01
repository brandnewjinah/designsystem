import React, { ChangeEvent, useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Layout/Section";
import { Checkbox } from "../../components/Checkbox";

//import assets
import States from "../../assets/components/Checkbox_States.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";
import * as Code from "../../data/code/select";

const Selection = () => {
  const [data, setData] = useState({
    one: true,
    two: false,
    three: true,
  });

  const handleChange = (e) => {
    const userInput = { ...data };
    userInput[e.target.name] = e.target.checked;
    setData(userInput);
  };

  return (
    <Wrapper>
      <Header>
        <h1>Checkbox</h1>
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
            <Checkbox
              label="label 1"
              name="one"
              value={data.one}
              checked={data.one}
              onChange={handleChange}
            />
            <Checkbox
              label="label 2"
              name="two"
              value={data.two}
              checked={data.two}
              onChange={handleChange}
            />
            <Checkbox
              label="label 3"
              name="three"
              value={data.three}
              checked={data.three}
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
            {Code.checkbox}
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

export default Selection;

import React, { FC, useState, FormEvent, ChangeEvent } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Section from "../../components/Sections/Section";
import Table from "../../components/Table";
import { Input, FloatingInput } from "../../components/Input";

//import assets
import Anatomy from "../../assets/components/Input_Anatomy.jpg";

//import tokesn
import { sizes, neutral } from "../../components/Token";

//import local data
import { inputData } from "../../data/propsData";

const TextField = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
    error: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...data };
    userInput[input.name] = input.value;
    setData(userInput);
  };

  return (
    <Wrapper>
      <Header>
        <h1>Text Field</h1>
        <Article>
          <p>Text fields allow users to enter or edit text entries.</p>
        </Article>
        <Main>
          <Section title="Anatomy" image={Anatomy} />
          <Section title="Options">
            <Flex>
              <div className="example">
                <Input
                  label="Label"
                  name="label"
                  handleChange={handleChange}
                  margin={sizes.l}
                />
              </div>
              <div className="description">
                <h5>Default</h5>
                <p>
                  <code>Input</code> requires a <code>label</code> and{" "}
                  <code>name</code>. is required and is used as a Label that is
                  top aligned. is required and is used as{" "}
                  <code>e.target.name</code> and <code>aria-label</code>
                </p>
              </div>
            </Flex>
            <Flex>
              <div className="example">
                <Input
                  label="Label"
                  name="label"
                  required={true}
                  handleChange={handleChange}
                  margin={sizes.l}
                />
              </div>
              <div className="description">
                <h5>Required</h5>
                <p>
                  <code>required=true</code> adds an asterisk next to a label
                  and a <code>aria-required=true</code> as a cue to let users
                  know it's a required field. It's always better to include a
                  hint text to explain what the asterisk means.
                </p>
              </div>
            </Flex>
            <Flex>
              <div className="example">
                <Input
                  label="Label"
                  name="label"
                  required={true}
                  placeholder="e.g. Placeholder"
                  handleChange={handleChange}
                  margin={sizes.l}
                />
              </div>
              <div className="description">
                <h5>Placeholder</h5>
                <p>
                  The placeholder text is not a replacement for labels as some
                  screen readers don't support it. It should only be used to
                  instruct users how to complete an input. Once a value is
                  entered, placeholder text disappears.
                </p>
              </div>
            </Flex>
            <Flex>
              <div className="example">
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  handleChange={handleChange}
                  margin={sizes.l}
                />
              </div>
              <div className="description">
                <h5>Password</h5>
                <p>
                  <code>type="password"</code> adds a show/hide icon that
                  enables or disables visibility of password value entered.
                </p>
              </div>
            </Flex>
            <Flex>
              <div className="example">
                <Input
                  label="Error"
                  name="error"
                  error="Error message"
                  handleChange={handleChange}
                  margin={sizes.l}
                />
              </div>
              <div className="description">
                <h5>Error</h5>
                <p>
                  When an error message is passed as the prop, text field is
                  highlighted and an error message shows up below the field.
                </p>
              </div>
            </Flex>
            <Flex>
              <div className="example">
                <Input
                  label="Underline"
                  name="underline"
                  shape="underline"
                  placeholder="e.g. Placeholder"
                  handleChange={handleChange}
                  margin={sizes.xl}
                />
              </div>
              <div className="description">
                <h5>Underline</h5>
                <p>Underline text field can work for certain layouts.</p>
              </div>
            </Flex>
            <Flex>
              <div className="example">
                <FloatingInput
                  label="Floating Label"
                  name="label"
                  required={true}
                  handleChange={handleChange}
                  margin={sizes.xxl}
                />
              </div>
              <div className="description">
                <h5>Floating Label</h5>
                <p>
                  Floating label text field can work for some layouts with
                  limited vertical space. Be aware of accessibility issues for
                  users with motion sensitivity and low vision.
                </p>
              </div>
            </Flex>
            <Flex>
              <div className="example">
                <div className="margin" />
                <FloatingInput
                  label="Floating Label"
                  name="label"
                  required={true}
                  handleChange={handleChange}
                />
                <div className="margin" />
              </div>
              <div className="description">
                <h5>Margin</h5>
                <p>
                  Margin adds top and bottom margin to the component for modular
                  spacing. Refer to the StyleVariables file for size variable
                  set.
                </p>
              </div>
            </Flex>
          </Section>
          <Section title="Implementation for React">
            <SyntaxHighlighter
              language="javascript"
              style={atelierEstuaryLight}
            >
              {`
  import { Input, FloatingInput } from "components/Input";
  import { sizes } from "components/StyleVariables";

  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    const userInput = { ...data };
    userInput[input.name] = input.value;
    setData(userInput);
  };

  <Input
    label="Name"
    name="name"
    placeholder="e.g. Enter name"
    required={true}
    value={data.name}
    error={error}
    shape="underline"
    handleChange={handleChange}
    margin={sizes.l}
  />

  <FloatingInput
    label="Password"
    name="password"
    type="password""
    required={true}
    value={data.password}
    error={error} 
    handleChange={handleChange}
    margin={sizes.l}
/>
  `}
            </SyntaxHighlighter>
          </Section>
          <Section title="Props" divider={false}>
            <Table
              data={inputData}
              listSize={10}
              keys={["property", "type", "default", "required"]}
              showId={false}
            />
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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;

  .example {
    width: 50%;
    height: 100%;
    background-color: #fcfcf9;
    padding: 1em 2.5em;

    .margin {
      width: 100%;
      height: 0.5em;
      background-color: rgba(255, 0, 0, 0.125);
    }
  }

  .description {
    width: 50%;
    padding: 1em 2.5em;

    p {
      font-size: 0.875rem;
    }

    code {
      background-color: ${neutral.n100};
      padding: 0.5em 1em;
    }
  }
`;

const Width = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export default TextField;

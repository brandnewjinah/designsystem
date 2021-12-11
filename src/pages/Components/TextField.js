import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import styled from "styled-components";

//import components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import Table from "../../components/Table";
import { Input, FloatingInput } from "../../components/Input";

//import assets
import Anatomy from "../../assets/components/Input_Anatomy.jpg";

//import tokesn
import { spacing, neutral } from "../../components/Token";

//import local data
import { inputData } from "../../data/propsData";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/textfield";

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
      <Header
        title="Text Field"
        subtitle="Text fields allow users to enter or edit text entries."
      />
      <Main>
        <Section title="Anatomy" image={Anatomy} />
        <Section title="Options">
          <Article
            title="Basic"
            text={<p>Label and name properties are required.</p>}
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <Input
                label="Label"
                name="label"
                handleChange={handleChange}
                margin={spacing.l}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.base}
          </SyntaxHighlighter>
          <Article
            title="Label Hidden"
            text={
              <p>
                Add <code className="codeBg">aria-label="label"</code> to the
                input when Label is hidden visually.
              </p>
            }
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <Input
                name="hidden"
                handleChange={handleChange}
                aria-label="label"
                margin={spacing.l}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.labelHidden}
          </SyntaxHighlighter>
          <Article
            title="Required"
            text={
              <p>
                <code className="codeBg">required=true</code> adds an asterisk
                next to a label and a
                <code className="codeBg">aria-required=true</code> as a cue to
                let users know it's a required field.
              </p>
            }
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <Input
                label="Label"
                name="required"
                required={true}
                handleChange={handleChange}
                margin={spacing.l}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.required}
          </SyntaxHighlighter>
          <Article
            title="Placeholder"
            text={
              <p>
                The placeholder text is not a replacement for labels as some
                screen readers don't support it. It should only be used to
                instruct users how to complete an input. Once a value is
                entered, placeholder text disappears.
              </p>
            }
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <Input
                label="Label"
                name="placeholder"
                required={true}
                placeholder="e.g. Placeholder"
                handleChange={handleChange}
                margin={spacing.l}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.placeholder}
          </SyntaxHighlighter>
          <Article
            title="Password"
            text={
              <p>
                <code className="codeBg">type="password"</code> adds a show/hide
                icon that enables or disables visibility of password value
                entered.
              </p>
            }
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <Input
                label="Password"
                name="password"
                type="password"
                handleChange={handleChange}
                margin={spacing.l}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.password}
          </SyntaxHighlighter>
          <Article
            title="Error"
            text={
              <p>
                When an error message is passed as the prop, text field is
                highlighted and an error message shows up below the field.
              </p>
            }
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <Input
                label="Error"
                name="error"
                error="Error message"
                handleChange={handleChange}
                margin={spacing.l}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.error}
          </SyntaxHighlighter>
          <Article
            title="Underline"
            text={<p>Underline text field can work for certain layouts.</p>}
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <Input
                label="Underline"
                name="underline"
                shape="underline"
                placeholder="e.g. Placeholder"
                handleChange={handleChange}
                margin={spacing.xl}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.underline}
          </SyntaxHighlighter>
          <Article
            title="Floating Label"
            text={
              <p>
                Floating label text field can work for some layouts with limited
                vertical space. Be aware of accessibility issues for users with
                motion sensitivity and low vision.
              </p>
            }
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <InputContainer>
              <FloatingInput
                label="Floating Label"
                name="floating"
                required={true}
                handleChange={handleChange}
                margin={spacing.xxl}
              />
            </InputContainer>
          </Article>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.floating}
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
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

const InputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  padding: 1rem 2.5rem;
`;

const Flex = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;

  .margin {
    width: 100%;
    height: 0.5em;
    background-color: rgba(255, 0, 0, 0.125);
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

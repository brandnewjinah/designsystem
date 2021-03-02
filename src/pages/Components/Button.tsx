import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import layout components
import Section from "../../components/Section";
import Flex from "../../components/Sections/Flex";

//import components
import Table from "../../components/Table";

import {
  TextButton,
  OutlinedButton,
  FilledButton,
  IconButton,
} from "../../components/Buttons";

//import assets
import Anatomy from "../../assets/components/Button_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import assets
import { sizes, neutral } from "../../components/Token";
import { Heart } from "../../assets/Icons";

//import local data
import { buttonData } from "../../data/propsData";

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
        <Section title="Anatomy" image={Anatomy} />
        <Section title="Options">
          <Flex
            example={
              <TextButton
                label="Button"
                color="#d35400"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Text Button"
            text="Text Button can be used for actions with low emphasis"
          />
          <Flex
            example={
              <OutlinedButton
                label="Outlined Button"
                color="#d35400"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Outlined Button"
            text="Outlined Button can be used for actions with medium emphasis"
          />
          <Flex
            example={
              <FilledButton
                label="Filled Button"
                color="#d35400"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Text Button"
            text="Filled Button can be used for actions with high emphasis"
          />
          <Flex
            example={
              <OutlinedButton
                label="Button"
                color="#d35400"
                shape="rounded"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Rounded Shape"
            text="Outlined or Filled button can be in rounded shape to fit the style needs."
          />
          <Flex
            example={
              <OutlinedButton
                label="Button"
                color="#d35400"
                shape="pill"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Pill Shape"
            text="Outlined or Filled button can be in pill shape to fit the style needs."
          />
          <Flex
            example={
              <OutlinedButton
                label="Like"
                color="#d35400"
                icon
                handleClick={() => console.log("clicked")}
              >
                <Heart width={18} height={18} stroke={2} color="#d35400" />
              </OutlinedButton>
            }
            title="Optional Icon"
            text="Outlined or Filled button can have an optional icon next to the label. Icon should only be used to clarify what the button does."
          />
          <Flex
            example={
              <FilledButton
                label="Button"
                disabled
                color="#d35400"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Disabled"
            text="Disalbed state can be passed as a boolean property"
          />
          <Flex
            example={
              <IconButton
                label="Icon"
                color="#d35400"
                handleClick={() => console.log("clicked")}
              >
                <Heart
                  width={18}
                  height={18}
                  stroke={2}
                  fill="#fff"
                  // ariaHidden={true}
                />
              </IconButton>
            }
            title="Icon Button"
            text="Icon-only button can be used for simple actions. On hover it displays a tooltip to provide more context."
          />
        </Section>
        <Section title="Implementation for React">
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {`
  import { TextButton, OutlinedButton, FilledButton, IconButton, } from "components/Input";
  import { Heart } from "assets/Icons";

  <TextButton
    label="Button"
    color="#d35400"
    handleClick={() => console.log("clicked")}
  />

  <OutlinedButton
    label="Outlined Button"
    color="#d35400"
    shape="rounded"
    handleClick={() => console.log("clicked")}
  />

  <FilledButton
    label="Button"
    disabled
    color="#d35400"
    shape="pill"
    icon
    handleClick={() => console.log("clicked")}
  >
    <Heart width={18} height={18} stroke={2} color="#d35400" />
  </FilledButton>  

  <IconButton
    label="Button"
    color="#d35400"
    handleClick={() => console.log("clicked")}
  >
    <Heart width={18} height={18} stroke={2} fill="#fff" ariaHidden={true} />
  </IconButton>

  `}
          </SyntaxHighlighter>
        </Section>
        <Section title="Props" divider={false}>
          <Table
            data={buttonData}
            listSize={10}
            keys={["property", "type", "default", "required"]}
            showId={false}
          />
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

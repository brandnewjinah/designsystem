import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import layout components
import { Section } from "../../components/Layout/Section";
import Flex from "../../components/Layout/Flex";

//import components
import Table from "../../components/Table";

import { Button, IconButton } from "../../components/Buttons/Button";

//import assets
import Anatomy from "../../assets/components/Button_Anatomy.jpg";
import States from "../../assets/components/Button_States.jpg";

//import assets
import { spacing, neutral, blue } from "../../components/Token";
import { Heart } from "../../assets/Icons";

//import local data
import { buttonData } from "../../data/propsData";
import * as Code from "../../data/code/button";

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
        <Section title="States" image={States}>
          <ul>
            <li>
              <strong>1. Default</strong>: When it isn't being interacted.
            </li>
            <li>
              <strong>2. Hover</strong>: When user places cursor over.
            </li>
            <li>
              <strong>3. Active</strong>: When user presses.
            </li>
            <li>
              <strong>4. Focus</strong>: When user highlights using keyboard or
              voice.
            </li>
            <li>
              <strong>5. Disabled</strong>: When it's not available for
              interacton.
            </li>
          </ul>
        </Section>
        <Section title="Styles">
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="primary"
                shape="pill"
                labelColor="#fff"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Pill Contained"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                shape="pill"
                variant="secondary"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Pill Outlined"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="primary"
                shape="rounded"
                labelColor="#fff"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Rounded Contained"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                shape="rounded"
                variant="secondary"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Rounded Outlined"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="primary"
                shape="sharp"
                labelColor="#fff"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Sharp Contained"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                shape="sharp"
                variant="secondary"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Sharp Outlined"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="tertiary"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Text Button"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                shape="rounded"
                variant="primary"
                labelColor="#fff"
                icon
                handleClick={() => console.log("clicked")}
              >
                <Heart width={18} height={18} stroke={2} fill={neutral[10]} />
              </Button>
            }
            title="Optional Icon"
            text="Outlined or Filled button can have an optional icon next to the label. Icon should only be used to clarify what the button does."
          />
          <Flex
            example={
              <IconButton
                label="Icon"
                color={blue[400]}
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
        <Section title="Hierarchy">
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="primary"
                shape="rounded"
                labelColor="#fff"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Primary"
            text="high-emphasis"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="secondary"
                shape="rounded"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Secondary"
            text="medium-emphasis"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="tertiary"
                handleClick={() => console.log("clicked")}
              />
            }
            title="Tertiary"
            text="low-emphasis"
          />
        </Section>
        <Section title="Disabled">
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="primary"
                shape="rounded"
                labelColor="#fff"
                disabled
                handleClick={() => console.log("clicked")}
              />
            }
            title="Primary"
            text="disabled"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="secondary"
                shape="rounded"
                disabled
                handleClick={() => console.log("clicked")}
              />
            }
            title="Secondary"
            text="disabled"
          />
          <Flex
            example={
              <Button
                label="Button"
                color={blue[400]}
                variant="tertiary"
                disabled
                handleClick={() => console.log("clicked")}
              />
            }
            title="Tertiary"
            text="disabled"
          />
          <Flex
            example={
              <IconButton
                label="Icon"
                color={blue[400]}
                disabled
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
            title="Icon"
            text="disabled"
          />
        </Section>
        <Section title="Accessibility">
          <Section
            subtitle="Label"
            text={
              <p>
                Label should be short and clearly explain what will happen when
                button is pressed. Icon button should also have a label as it is
                used for{" "}
                <code style={{ backgroundColor: "#f4f3ec" }}>aria-label</code>.
              </p>
            }
            divider={false}
          />
          <Section
            subtitle="Color contrast"
            text={
              <>
                Background color and label color contrast needs to comply with
                the{" "}
                <a href="https://www.w3.org/TR/WCAG/" target="_blank">
                  WCAG AA
                </a>{" "}
                standard. It can be tested on{" "}
                <a
                  href="https://webaim.org/resources/contrastchecker"
                  target="_blank"
                >
                  WebAIM
                </a>
                .
              </>
            }
            divider={false}
          />
        </Section>

        <Section title="Implementation for React">
          <SyntaxHighlighter language="javascript" style={arduinoLight}>
            {Code.implement}
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

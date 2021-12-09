import React, { ChangeEvent, useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components

import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Checkbox } from "../../components/Checkbox";

//import assets
import States from "../../assets/components/Checkbox_States.jpg";

import * as Code from "../../data/code/select";

const Selection = () => {
  const groupData = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];
  const [checked, setChecked] = useState({ default: false, disabled: true });
  const [checkedItems, setCheckedItems] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);

  const handleCheck = (e) => {
    const userInput = { ...checked };
    userInput[e.target.name] = e.target.checked;
    setChecked(userInput);
  };

  const handleCheckOne = (e) => {
    const { name, checked } = e.target;
    const newChecked = checked
      ? [...checkedItems, name]
      : checkedItems.filter((item) => item !== name);
    setCheckedItems(newChecked);
    setIndeterminate(
      newChecked.length > 0 && newChecked.length < groupData.length
    );
    setCheckedAll(newChecked.length === groupData.length);
  };

  const handleCheckAll = (e) => {
    setCheckedAll(!checkedAll);
    setIndeterminate(checkedAll && false);
    setCheckedItems(checkedAll ? [] : groupData.map((item) => item.name));
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
        <Section title="Examples">
          <Article title="Base">
            <div className="demo">
              <Checkbox
                label="Checkbox"
                name="default"
                checked={checked.default}
                onChange={handleCheck}
              />
            </div>
          </Article>
          <Article title="Disabled">
            <div className="demo">
              <Checkbox
                label="Disabled"
                name="disabled"
                checked={checked.disabled}
                disabled
                onChange={handleCheck}
              />
            </div>
          </Article>
          <Article title="Group">
            <fieldset className="demo">
              <legend>Group</legend>
              <Checkbox
                label="Check All"
                name="checkAll"
                checked={checkedAll}
                indeterminate={indeterminate}
                onChange={handleCheckAll}
              />
              <hr />
              {groupData.map((item) => (
                <Checkbox
                  key={item.id}
                  label={item.name}
                  name={item.name}
                  checked={checkedItems.includes(item.name)}
                  onChange={handleCheckOne}
                />
              ))}
            </fieldset>
          </Article>
        </Section>
        <Section title="States" image={States}></Section>
        <Section title="Guidelines">
          <Article
            title="Accessibility"
            text={
              <ul>
                <li>
                  When building a checkbox group, use a
                  <code className="codeBg">fieldset</code> to wrap the group.
                  This tells screen reader users that the group of checkboxes
                  relate to each other and. Add a
                  <code className="codeBg">legend</code>element to title the
                  group. This helps users understand what question they are
                  answering.
                </li>
              </ul>
            }
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

const Main = styled.main`
  .demo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    /* align-items: center; */
  }

  hr {
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 0.5rem 0;
  }

  fieldset {
    border: none;
  }
`;

export default Selection;

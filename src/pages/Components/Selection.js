import React, { ChangeEvent, useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Checkbox } from "../../components/Checkbox";

//import assets
import States from "../../assets/components/Checkbox_States.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";
import * as Code from "../../data/code/select";

const Selection = () => {
  const groupData = [
    { id: 1, name: "one" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ];
  const [check, setCheck] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheck = (e) => {
    setCheck(!check);
  };

  const handleSelect = (e) => {
    const { name, checked } = e.target;
    setCheckedItems([...checkedItems, name]);
    // if (checkedItems.length > 0 && checkedItems.length < groupData.length)
    //   setIndeterminate(true);
    if (!checked) {
      setCheckedItems(checkedItems.filter((item) => item !== name));
    }
  };

  const handleSelectAll = (e) => {
    setCheckAll(!checkAll);
    setCheckedItems(groupData.map((item) => item.name));
    if (checkAll) {
      setCheckedItems([]);
    }
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
        <Section title="Example">
          <Article title="Default">
            <div className="demo">
              <Checkbox
                label="Checkbox"
                name="default"
                checked={check}
                onChange={handleCheck}
              />
            </div>
          </Article>
          <Article title="Group">
            <div className="demo">
              <Checkbox
                label="select all"
                name="all"
                indeterminate={indeterminate}
                checked={checkAll}
                onChange={handleSelectAll}
              />
              <hr />
              {groupData.map((item) => (
                <Checkbox
                  key={item.id}
                  label={item.name}
                  name={item.name}
                  checked={checkedItems.includes(item.name)}
                  onChange={handleSelect}
                />
              ))}

              <Checkbox
                label="disabled"
                name="disabled"
                checked={checkedItems.includes("disabled")}
                onChange={handleSelect}
                disabled={true}
              />
            </div>
          </Article>
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

// const Article = styled.article`
//   font-size: 1rem;
//   margin: 1em 0;
// `;

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
`;

export default Selection;

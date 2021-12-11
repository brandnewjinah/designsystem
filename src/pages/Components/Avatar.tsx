import React, { useState } from "react";
import styled from "styled-components";

//import components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Flex } from "../../components/Layout/Containers";
import Avatar from "../../components/Avatar";
import Table from "../../components/Table";

//import assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/avatar";

//data
import { avatarData } from "../../data/propsData";

const AvatarPage = () => {
  return (
    <Wrapper>
      <Header
        title="Avatar"
        subtitle="Avatar is a visual representation of a user."
      />
      <Main>
        <Section title="Example">
          <Article center>
            <Flex gap="1rem">
              <Avatar
                user="Jinah"
                imgSrc="https://avatars.githubusercontent.com/u/44072645?s=400&u=f980face7db1c48ca1c6cdec9035437239d0d884&v=4"
              />
              <Avatar user="Jinah" color="#006BA6" />
            </Flex>
          </Article>
        </Section>
        <Section title="Guidelines">
          <Article
            title="Appearance"
            text={
              <ul>
                <li>By default, its circular with a user photo.</li>
                <li>
                  When a photo is unavailable, it falls back to the first
                  initial of a user name.
                </li>
              </ul>
            }
          />
          <Article
            title="Accessibility"
            text={
              <ul>
                <li>
                  Image should have an{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>alt</code>{" "}
                  attribute to provide alternative text for the avatar image. By
                  default, it's set as "avatar"
                </li>
                <li>
                  Fallback option has{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>role="img"</code>{" "}
                  and it uses{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>alt</code> prop
                  for{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>aria-label</code>
                  . By default,{" "}
                  <code style={{ backgroundColor: "#f4f3ec" }}>alt</code> is set
                  as "avatar"
                </li>
              </ul>
            }
          />
        </Section>
        <Section title="Implementation for React" divider={false}>
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.avatar}
          </SyntaxHighlighter>
        </Section>
        <Section title="Props" divider={false}>
          <Table
            data={avatarData}
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

export default AvatarPage;

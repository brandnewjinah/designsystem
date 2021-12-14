import React, { useState } from "react";
import styled from "styled-components";

//components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Link } from "../../components/Link";
import Table from "../../components/Table";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/link";

//import local data
import { linkData } from "../../data/propsData";

const LinkPage = () => {
  return (
    <Wrapper>
      <Header
        title="Link"
        subtitle="Links take users to an internal or an external page."
      />
      <Main>
        <Section title="Options">
          <Article
            title="Primary"
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <p>
              This is a <Link label="Primary Link" href="#" />
            </p>
          </Article>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.primary}
          </SyntaxHighlighter>
          <Article
            title="Secondary"
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <p>
              This is a{" "}
              <Link label="Secondary Link" href="#" variant="secondary" />
            </p>
          </Article>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.secondary}
          </SyntaxHighlighter>
          <Article
            title="Tertiary"
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <p>
              This is a{" "}
              <Link label="Tertiary Link" href="#" variant="tertiary" />
            </p>
          </Article>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.tertiary}
          </SyntaxHighlighter>
        </Section>
        <Section title="Behavior">
          <Article
            title="External link"
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <p>
              This is an <Link label="External Link" href="#" external={true} />
            </p>
          </Article>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.external}
          </SyntaxHighlighter>
          <Article
            title="Disabled"
            divider={false}
            childCenter={true}
            childBg={true}
          >
            <p>
              This is a <Link label="Disabled Link" href="#" disabled={true} />
            </p>
          </Article>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.disabled}
          </SyntaxHighlighter>
        </Section>
        <Section title="Usage">
          <Article
            title="When to use"
            text={
              <ul>
                <li>Navigating to a different page within the app.</li>
                <li>Navigating to an external page.</li>
                <li>Jumping to an element on the same page.</li>
              </ul>
            }
            divider={false}
          />
          <Article
            title="When not to use"
            text={
              <ul>
                <li>
                  Performing an action like changing state. Use a button
                  instead.
                </li>
              </ul>
            }
            divider={false}
          />
        </Section>
        <Section title="Accessibility">
          <Article
            text={
              <ul>
                <li>
                  Links must have a <code className="codeBg">href</code> to be
                  considered as true links. It is a required prop.
                </li>
                <li>
                  Use tertiary style only when its interactivity is explicit
                  enough.
                </li>
                <li>
                  Users are able to navigate between links using the "Tab" key.
                  "Enter" key activates the link.
                </li>
              </ul>
            }
          />
        </Section>
        <Section title="Props" divider={false}>
          <Table
            data={linkData}
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

export default LinkPage;

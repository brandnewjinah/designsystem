import React, { useState } from "react";
import styled from "styled-components";

//components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Breadcrumb, BreadcrumbItem } from "../../components/Breadcrumb";
import Table from "../../components/Table";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/breadcrumb";

//data
import { breadcrumbData } from "../../data/propsData";

const BreadcrumbPage = () => {
  return (
    <Wrapper>
      <Header
        title="Breadcrumb"
        subtitle="Breadcrumb is a secondary navigation that helps users understand the current location and hierarchy."
      />
      <Main>
        <Section title="Example">
          <Article center>
            <Breadcrumb>
              <BreadcrumbItem label="item1" path="/button" />
              <BreadcrumbItem label="item2" path="#" />
              <BreadcrumbItem label="current page" current />
            </Breadcrumb>
          </Article>
        </Section>

        <Section
          title="Accessibility Features"
          text={
            <ul>
              <li>
                <a
                  href="https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb"
                  target="_blank"
                >
                  WAI Breadcrumb Design Pattern
                </a>
              </li>
              <li>
                Breadcrumb component is contained in
                <code className="codeBg">nav</code>landmark with
                <code className="codeBg">aria-label="breadcrumb"</code>
              </li>
              <li>
                It uses
                <code className="codeBg">ol</code> and
                <code className="codeBg">li</code>. It allows screen reader
                users understand order/hierarchy of each link.
              </li>
              <li>
                BreadcrumbItem with
                <code className="codeBg">current</code>
                prop gives
                <code className="codeBg">aria-current="page"</code>attribute to
                the link. It informs screen reader users that this is the
                current page.
              </li>
              <li>Separators are hidden from screen readers</li>
            </ul>
          }
        />
        <Section title="Implementation for React">
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.breadcrumb}
          </SyntaxHighlighter>
        </Section>
        <Section title="Props" divider={false}>
          <Table
            data={breadcrumbData}
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

export default BreadcrumbPage;

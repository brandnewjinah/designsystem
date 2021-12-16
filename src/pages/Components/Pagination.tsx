import React, { useState } from "react";
import styled from "styled-components";

//components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import SimplePagination from "../../components/SimplePagination";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/pagination";

//import local data
import { paginationData } from "../../data/propsData";

const PaginationPage = () => {
  const [page, setPage] = useState(1);
  const [numberPage, setNumberPage] = useState(1);
  const length = 20;
  const size = 5;

  const handlePage = (par: String) => {
    par === "next" && setPage(page + 1);
    par === "prev" && page > 1 && setPage(page - 1);
  };

  const handlePageChange = (page: number) => {
    setNumberPage(page);
  };

  const handleNumberPage = (par: String) => {
    const numberOfPages = Math.ceil(length / size);

    par === "next" &&
      numberPage < numberOfPages &&
      setNumberPage(numberPage + 1);
    par === "prev" && numberPage !== 1 && setNumberPage(numberPage - 1);
  };

  return (
    <Wrapper>
      <Header
        title="Pagination"
        subtitle="Pagination breaks up large sets of content across multiple pages."
      />
      <Main>
        <Section title="Options">
          <Article
            title="Simple"
            divider={false}
            childCenter={true}
            childBg={true}
            childColumn={true}
            padding="2rem 0"
            text={
              <ul>
                <li>Use when it's not important to locate current position.</li>
                <li>Use when a user is scanning rather than searching.</li>
              </ul>
            }
          >
            <pre>{JSON.stringify(`current page : ${page}`)}</pre>
            <SimplePagination
              currentPage={page}
              pageSize={3}
              handlePrev={() => handlePage("prev")}
              handleNext={() => handlePage("next")}
            />
          </Article>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.simplePagination}
          </SyntaxHighlighter>
          <Article
            title="Numbered"
            divider={false}
            childCenter={true}
            childBg={true}
            childColumn={true}
            padding="2rem 0"
            text={
              <ul>
                <li>Use when a user has to maintain a sense of position.</li>
                <li>
                  Examples include e-commerce product pages, data tables etc.
                </li>
              </ul>
            }
          >
            <Pagination
              dataLength={length}
              pageSize={size}
              currentPage={numberPage}
              onPageChange={handlePageChange}
              handlePrev={() => handleNumberPage("prev")}
              handleNext={() => handleNumberPage("next")}
            />
          </Article>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.pagination}
          </SyntaxHighlighter>
        </Section>
        <Section
          title="Accessibility"
          text="Inorder to be accessible for screen readers and keyboard navigation, the following rule has been applied"
        >
          <Article
            text={
              <ul>
                <li>
                  The Pagination component uses an
                  <code className="codeBg">ul</code> wrapped in a
                  <code className="codeBg">nav</code> element.
                </li>
                <li>
                  Each page link has <code className="codeBg">aria-label</code>{" "}
                  set to corresponding page number.
                </li>
                <li>
                  Current page has <code className="codeBg">aria-current</code>
                  set to <code className="codeBg">true</code>
                </li>
                <li>
                  The next and previous buttons have
                  <code className="codeBg">aria-label</code> set to "Go to
                  previous page" and "Go to next page" respectively.
                </li>
              </ul>
            }
            divider={false}
          />
        </Section>

        <Section title="Props" divider={false}>
          <Table
            data={paginationData}
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

export default PaginationPage;

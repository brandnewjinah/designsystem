import React, { FC } from "react";

//import libraries
import styled from "styled-components";

//import assets
import { neutral, spacing } from "../Token";

interface Props {
  example: any;
  title: string;
  text?: string;
}

const Flex: FC<Props> = ({ example, title, text }) => {
  return (
    <Wrapper>
      <div className="example">{example}</div>
      <div className="description">
        <h6>{title}</h6>
        {text && <p>{text}</p>}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2em 0;

  .example {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fcfcf9;
    padding: 1em 2.5em;

    .margin {
      width: 100%;
      height: 0.5em;
      background-color: rgba(255, 0, 0, 0.125);
    }
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1em;

    p {
      font-size: 0.875rem;
    }

    code {
      background-color: ${neutral[200]};
      padding: 0.5em 1em;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    .example {
      width: 50%;
    }

    .description {
      width: 50%;
      padding: 0 2.5em 1em;
    }
  }
`;
export default Flex;

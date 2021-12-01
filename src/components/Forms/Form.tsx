import React from "react";
import styled from "styled-components";
import { Button } from "../Buttons/Button";

const FormOne = () => {
  return (
    <Wrapper>
      <Container>
        <Form>
          <InputWrapper>
            <SingleLineInputWrapper>
              <Input
                type="text"
                aria-label="Enter your home address"
                name="CtaInput"
                placeholder="Enter your home address"
                value=""
              />
            </SingleLineInputWrapper>
          </InputWrapper>
          <InputButton>
            <Button
              label="Submit"
              shape="pill"
              color="#1c85e8"
              labelColor="#fff"
              variant="primary"
            >
              <span>
                <span className="css-vy9q5r-hiddenXsDown">
                  Get my free offer
                </span>
                <span className="css-b6v1ha-hiddenXsUp">Go</span>
              </span>
            </Button>
          </InputButton>
        </Form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #f7f9fc;
  border-radius: 10rem;
  padding: 0.75rem;
  box-shadow: 0 3px 15px 2px rgb(0 0 0 / 3%);
`;

const Container = styled.div`
  position: relative;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  appearance: none;
  border-radius: 2px;
  box-sizing: border-box;
  flex: 1;
  border: 0;
  padding: 0;
`;

const SingleLineInputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  border: 0;
  font-size: 16px;
  overflow: hidden;
  padding: 10px 12px;
  transition-duration: 0.3s;
  transition-property: color;
  text-overflow: ellipsis;
  z-index: 1;
  margin: auto;
  width: 100%;
  border-radius: 1000px;
`;

const InputButton = styled.div`
  display: flex;
  align-items: center;
  max-width: 50%;
  overflow: hidden;
  margin-left: 8px;
`;

// const Button = styled.button`
//   border: none;
//   background: none;
//   cursor: pointer;
//   font-weight: 700;
//   width: 100%;
//   padding: 0.5em 1.5em;
//   border-radius: 1000px;
//   background-color: #1c85e8;
//   color: #fff;
//   transition: all 0.3s ease;
//   display: inline-block;
//   margin-top: 0;
//   height: 50px;
//   max-height: 50px;
//   font-size: 14px;
// `;

export default FormOne;

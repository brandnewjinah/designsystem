import React from "react";
import styled from "styled-components";

//components
import { Button } from "../components/Buttons/Button";
import { Input, Floating } from "../components/Input/Input";
import { Cards } from "../components/Cards/Cards";
import { More, Close } from "../assets/Icons";
import Form from "../components/Forms/Form";

const Sketchbook = () => {
  return (
    <>
      <div>
        <Button
          label="Button"
          variant="tertiary"
          color="#6e8a2c"
          labelColor="#fff"
        />
      </div>
      <div>
        <Input label="Label" name="label" required={true} type="password" />
      </div>
      <div>
        <Floating label="Label" name="label" required={true} type="password" />
      </div>
      <Section>
        <Cards
          preview="https://images.unsplash.com/photo-1616740795234-7df71a053587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80"
          title="Card Title"
          subtitle="March 16 2021"
          headerAction={<More width={20} height={20} color="#000" stroke={2} />}
          footerTitle="Footer Title"
          footerSub="Footer Sub"
        >
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </Cards>
      </Section>
      <Section>
        <Form />
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 400px;
  margin: 2rem 0;
`;

export default Sketchbook;

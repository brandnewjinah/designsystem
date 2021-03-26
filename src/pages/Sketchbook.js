import React from "react";
import styled from "styled-components";

//components
import { Button } from "../components/Buttons/Button";
import { Input, Floating } from "../components/Input/Input";
import { Cards } from "../components/Cards/Cards";

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
        <Cards />
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 40%;
  margin: 2rem 0;
`;

export default Sketchbook;

import React from "react";

//components
import { Button } from "../components/Buttons/Button";
import { Input, Floating } from "../components/Input/Input";

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
    </>
  );
};

export default Sketchbook;

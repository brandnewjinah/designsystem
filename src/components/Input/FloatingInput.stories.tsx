import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Floating, Props } from "./Input";
import { MaxWidth } from "../Decorators/Width";

export default {
  title: "Input/Floating Input",
  component: Floating,
  args: {
    label: "Input",
    name: "label",
  },
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    small: {
      table: {
        disable: true,
      },
    },
    shape: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<Props> = (args) => (
  <MaxWidth>
    <Floating {...args} />
  </MaxWidth>
);

export const FloatingInput = Template.bind({});
FloatingInput.args = {
  required: true,
};

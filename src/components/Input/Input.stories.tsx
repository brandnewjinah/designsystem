import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Input, Props } from "./Input";
import { MaxWidth } from "../Decorators/Width";

export default {
  title: "Input/Text Input",
  component: Input,
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
  },
};

const Template: Story<Props> = (args) => (
  <MaxWidth>
    <Input {...args} />
  </MaxWidth>
);

export const TextInput = Template.bind({});
TextInput.args = {
  required: true,
};

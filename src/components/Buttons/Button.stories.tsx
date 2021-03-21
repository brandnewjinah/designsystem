import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, Props } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
    labelColor: { control: "color" },
    shape: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: "Button",
  },
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Sharp = Template.bind({});
Sharp.args = {
  variant: "primary",
  shape: "sharp",
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: "primary",
  shape: "rounded",
};

export const Pill = Template.bind({});
Pill.args = {
  variant: "primary",
  shape: "pill",
};

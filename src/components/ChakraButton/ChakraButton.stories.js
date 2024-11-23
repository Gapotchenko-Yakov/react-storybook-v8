import { Button } from "@chakra-ui/core";
import React from "react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variantColor: {
      control: "color",
    },
    children: {
      control: "text",
    },
    onClick: {
      action: "clicked",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variantColor: "blue",
  children: "Primary",
};

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};

export const Log = Template.bind({});
Log.args = {
  variantColor: "red",
  children: "Log",
  onClick: () => console.log("Button clicked!"),
};

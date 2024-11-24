import { Button } from "@chakra-ui/core";
import React from "react";

export default {
  title: "Chakra/Button",
  component: Button,
  args: { color: "#111111" },
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
  disabled: true,
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};

export const Log = Template.bind({});
Log.args = {
  variantColor: "purple",
  children: "Log",
  onClick: () => console.log("Button Clicked", process.env.STORYBOOK_THEME),
};

export const Test = {
  args: {
    variantColor: "red",
    children: "Test",
  },
};

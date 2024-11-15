import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const SmallInput = () => (
  <Input
    size="sm"
    value="sm"
    changeHandler={(e) => {
      console.log(e.target.value);
    }}
  />
);

export const MediumInput = () => (
  <Input
    size="md"
    value="md"
    changeHandler={(e) => {
      console.log(e.target.value);
    }}
  />
);

export const LargeInput = () => (
  <Input
    size="lg"
    value="lg"
    changeHandler={(e) => {
      console.log(e.target.value);
    }}
  />
);

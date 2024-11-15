import React from "react";
import Input from "./Input";

export default {
  title: "Components/Form/Input",
  component: Input,
};

export const SmallInput = () => <Input size="sm" placeholder="sm" />;

export const MediumInput = () => <Input size="md" placeholder="md" />;

export const LargeInput = () => <Input size="lg" placeholder="lg" />;

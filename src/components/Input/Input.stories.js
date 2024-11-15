import React from "react";
import Input from "./Input";

export default {
  title: "components/form/Input",
  component: Input,
};

export const Small = () => <Input size="sm" placeholder="sm" />;

export const Medium = () => <Input size="md" placeholder="md" />;

export const Large = () => <Input size="lg" placeholder="lg" />;

Small.storyName = "Small Input";
Medium.storyName = "Medium Input";
Large.storyName = "Large Input";

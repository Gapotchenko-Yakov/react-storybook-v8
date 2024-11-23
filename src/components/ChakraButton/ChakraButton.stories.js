import { Button } from "@chakra-ui/core";
import React from "react";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Primary = () => <Button variantColor="blue">Primary</Button>;
export const Success = () => <Button variantColor="green">Success</Button>;
export const Danger = () => <Button variantColor="red">Danger</Button>;

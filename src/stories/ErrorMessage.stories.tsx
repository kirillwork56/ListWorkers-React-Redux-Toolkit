import { ComponentMeta, ComponentStory } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "components/ErrorMessage";
import React from "react";

export default {
  title: "Example/Error",
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const exampleDanger = Template.bind({});
exampleDanger.args = {
  type: "danger",
  text: "error danger",
};

export const exampleInfo = Template.bind({});
exampleInfo.args = {
  type: "info",
  text: "info danger",
};

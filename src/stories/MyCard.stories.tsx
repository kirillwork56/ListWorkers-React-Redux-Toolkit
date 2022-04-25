import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyCard from "components/MyCard";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Example/Card",
  component: MyCard,
} as ComponentMeta<typeof MyCard>;

const Template: ComponentStory<typeof MyCard> = (args) => <MyCard {...args} />;

export const exampleOne = Template.bind({});
exampleOne.args = {
  createdAt: "2022-04-24T05:09:39.686Z",
  name: "Kristina Trantow",
  country: "Tanzania",
  email: "Ludie.Medhurst15@hotmail.com",
  experience: 6,
  jobTitle: "National Branding Agent",
  id: "6",
};

export const exampleTwo = Template.bind({});
exampleTwo.args = {
  createdAt: "2022-04-24T22:33:02.106Z",
  name: "Owen Raynor",
  country: "Saudi Arabia",
  email: "Abraham82@yahoo.com",
  experience: 4,
  jobTitle: "Direct Accountability Designer",
  id: "1",
};

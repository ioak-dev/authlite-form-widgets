import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Login, { LoginProps } from ".";
import LoginWrapper from "./LoginWrapper";

export default {
  title: "Form elements/Login",
  component: Login,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<LoginProps> = (args: LoginProps) => <LoginWrapper {...args} />;

// Reuse that template for creating different stories
export const Demo = Template.bind({});
Demo.args = {
};

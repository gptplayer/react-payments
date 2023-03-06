import React from "react";
import { Story } from "@storybook/react";
import CardExpirationDateInput from "../../components/CardExpirationDateInput";

export default {
  title: "Components/CardExpirationDateInput.stories",
  component: CardExpirationDateInput,
};

const Template: Story = (args) => <CardExpirationDateInput {...args} />;

export const Default = Template.bind({});
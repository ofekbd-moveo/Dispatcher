import { Meta, Story } from "@storybook/react";
import CardList from "../Card/CardList";
import { ICard } from "../types";
// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: CardList,
  title: "Components/CardList",
} as Meta;

// args in TS way
const Template: Story<{ cards: ICard[] }> = (args) => <CardList />;

export const DEFAULT = Template.bind({});

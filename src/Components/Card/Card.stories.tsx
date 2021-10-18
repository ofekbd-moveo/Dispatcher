import { Meta, Story } from "@storybook/react";
import Card, { ICard } from "../Card/Card";
// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

// args in TS way
const Template: Story<ICard> = (args) => <Card {...args} />;

export const DEFAULT = Template.bind({});
const tagsMock: string[] = ["#Covid-19", "Israel", "+2"];

DEFAULT.args = {
  title: "Porsche Now Sells Two Taycans For Every Model S That Tesla Ships",
  imageUrl:
    "https://imgix.gizmodo.com.au/content/uploads/sites/2/2021/10/15/a07fb9b8c6eb9270972699a5bdd26dc0.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
  description:
    "There was a time when the Tesla Model S was the pinnacle of the electric car market. It was fast,...\nThe post Porsche Now Sells Two Taycans For Every Model S That Tesla Ships appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>Tesla Is Rolling Out…",
  publishedAt: "2021-10-18T06:49:25Z",
  tags: tagsMock,
  source: "Gizmodo Australia",
  dispacherLink: "https://www.gizmodo.com.au/2021/10/porsche-now-sells-two-taycans-for-every-model-s-that-tesla-ships/",
};

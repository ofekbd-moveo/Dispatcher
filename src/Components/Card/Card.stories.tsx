import { Meta, Story } from "@storybook/react";
import Card from "../Card/Card";
import { ICard } from "../types";
// Note 1: title must be unique.
// Note 2 : 'as Meta' for TS

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

// args in TS way
const Template: Story<ICard> = (args) => <Card {...args} />;

export const DEFAULT = Template.bind({});

DEFAULT.args = {
  source: {
    id: "engadget",
    name: "Engadget",
  },
  author: "Kris Holt",
  title: "Square makes its Cash App available for teen use",
  description: "But they'll need parental permission to use it and there's no bitcoin trading allowed.",
  url: "https://www.engadget.com/square-cash-app-teenagers-bitcoin-195033391.html",
  urlToImage:
    "https://s.yimg.com/ny/api/res/1.2/lhnwkUeae1YFDZXCKANfJQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-03/071c0b50-8b13-11eb-9cff-c7fab8e31c16",
  publishedAt: "2021-11-04T19:50:33Z",
  content:
    "Square is now allowing all teenagers\r\n to use Cash App\r\n, after restricting it to adults until now. Those aged 13 to 17 will need permission from a parent or guardian to use the app, however.\r\nUsers … [+1356 chars]",
};

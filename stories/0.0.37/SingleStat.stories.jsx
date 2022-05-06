import React from "react";
import { SingleStat } from "@vizzly/components-0.0.37";

export default {
  title: "0.0.37/SingleStat",
  component: SingleStat,
};

const Template = (args) => <SingleStat {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  componentId: "cmp_a741f290f5494335a815b7bbc94c4fed",
  dimension: {
    field: "Region",
    interval: null,
  },
  filters: [
    {
      field: "Region",
      operator: "=",
      value: "Islay",
    },
  ],
  groupBy: [],
  host: "https://app.vizzly.co",
  metrics: [
    {
      aggregate: null,
      field: "Price",
    },
  ],
  sortBy: [
    {
      direction: "asc",
      field: "Price",
    },
  ],
  text: "The most expensive whiskey bottle from Islay is {{Price}}.",
};

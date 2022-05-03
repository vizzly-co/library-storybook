import React from "react";
import { BarChart } from "@vizzly/components-0.0.33";

export default {
  title: "0.0.33/BarChart",
  component: BarChart,
};

const Template = (args) => <BarChart {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  barStyles: {
    Price: {
      barColour: "#b155c3",
      decimalPlaces: 0,
    },
  },
  componentId: "cmp_32e31c453023447385ebcfc5b0fd5ed5",
  dimension: {
    field: "Region",
    interval: null,
  },
  displaySubject: "By Region",
  displayTitle: "Whiskey Prices",
  fieldNaming: {
    Price: "Price",
  },
  filters: [],
  groupBy: [
    {
      field: "Region",
    },
  ],
  host: "https://app.vizzly.co",
  metrics: [
    {
      aggregate: "mean",
      field: "Price",
    },
  ],
  sortBy: [
    {
      direction: "asc",
      field: "Region",
    },
  ],
};

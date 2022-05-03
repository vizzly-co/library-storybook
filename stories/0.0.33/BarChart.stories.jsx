import React from "react";
import { BarChart } from "@vizzly/components-0.0.33";

export default {
  title: "0.0.33/BarChart",
  component: BarChart,
  argTypes: {},
};

const Template = (args) => (
  <>
    <BarChart {...args} />
  </>
);

export const Basic = Template.bind({});

Basic.args = {
  barStyles: {
    Price: {
      barColour: "#ab7ac2",
      decimalPlaces: 0,
    },
  },
  componentId: "cmp_76731b06abf94714a414c81d01f753e2",
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

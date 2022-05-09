import React from "react";
import { LineChart } from "@vizzly/components-0.0.37";

export default {
  title: "0.0.37/LineChart",
  component: LineChart,
};

const Template = (args) => <LineChart {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  componentId: "cmp_a58a6a74504a4ad899e9345fc9fb546b",
  defaultLineStyle: {
    connectNulls: false,
    lineColour: "#77d198",
    showDots: false,
    strokeWidth: 5,
  },
  dimension: {
    field: "date",
    interval: null,
  },
  displaySubject: "London",
  displayTitle: "Temperature",
  fieldNaming: {},
  filters: [
    {
      field: "city",
      operator: "=",
      value: "London",
    },
  ],
  groupBy: [],
  host: "https://api.vizzly.co",
  lineStyles: {
    high: {
      connectNulls: false,
      lineColour: "#d076b8",
      showDots: true,
      strokeWidth: 5,
    },
    low: {
      connectNulls: false,
      lineColour: "#a4ccea",
      showDots: true,
      strokeWidth: 5,
    },
  },
  metrics: [
    {
      aggregate: null,
      field: "high",
    },
    {
      aggregate: null,
      field: "low",
    },
  ],
  sortBy: [
    {
      direction: "asc",
      field: "date",
    },
  ],
};

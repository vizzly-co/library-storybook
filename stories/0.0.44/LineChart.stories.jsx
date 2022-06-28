import React from "react";
import { LineChart } from "@vizzly/components-0.0.44";

export default {
  title: "LineChart",
  component: LineChart,
};

const Template = (args) => <LineChart {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  axisFontSize: 8,
  axisTickLengthX: 19,
  axisTickLengthY: 21,
  axisWidthX: 16,
  axisWidthY: 17,
  componentId: "cmp_887a70a0b0b64935936cddc6edfc272e",
  dimension: [
    'funding_type'
  ],
  displayTitle: "Investors by round",
  fieldNaming: {
    number_of_investors_mean: '# Of investors (mean)',
  },
  filter: [],
  fontFamily: "Arial Black",
  host: "https://api.vizzly.co",
  lineStyles: {
    number_of_investors_mean: {
      connectNulls: false,
      lineColour: '#f07ae6',
      showDots: true,
      strokeWidth: 5
    },
    number_of_investors_sum: {
      connectNulls: false,
      lineColour: '#4c7bc8',
      showDots: true,
      strokeWidth: 5
    }
  },
  measure: [
    {
      aggregate: 'mean',
      field: 'number_of_investors'
    }
  ],
  order: [
    {
      aggregate: 'mean',
      direction: 'asc',
      field: 'number_of_investors'
    }
  ]
};

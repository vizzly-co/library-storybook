import React from "react";
import { BarChart } from "@vizzly/components-0.0.44";

export default {
  title: "BarChart",
  component: BarChart,
};

const Template = (args) => <BarChart {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  axisAngleX: -26,
  axisFontSize: 11,
  axisLineWidthX: 1,
  axisLineWidthY: 1,
  axisTickLengthX: 32,
  axisWidthX: 36,
  axisWidthY: 90,
  barStyles: {
    money_raised_usd_mean: {
      barColour: '#12fd16',
      decimalPlaces: 0
    }
  },
  componentId: "cmp_85887116395f48e4b07fe30ce3d71110",
  dimension: [
    'name'
  ],
  displayTitle: "Funds raised",
  displaySubject: "Mean",
  filter: [],
  fontFamily: "Arial Black",
  host: "https://api.vizzly.co",
  measure: [
    {
      aggregate: 'mean',
      field: 'money_raised_usd'
    }
  ],
  showGrid: true
};

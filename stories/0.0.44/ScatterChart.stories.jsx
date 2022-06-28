import React from "react";
import { ScatterChart } from "@vizzly/components-0.0.44";

export default {
  title: "ScatterChart",
  component: ScatterChart,
};

const Template = (args) => <ScatterChart {...args} />;

export const Football = Template.bind({});
export const Pay = Template.bind({});

Football.args = {
  axisFontSize: 12,
  axisWidthX: 26,
  componentId: "cmp_1f01441ba3314bdd9fd066f98db831d9",
  dimension: [
    'position'
  ],
  displaySubject: "Split between left & right foot.",
  displayTitle: "Goals scored by position",
  fieldNaming: {
    left_foot_sum: 'Left Foot',
    right_foot_sum: 'Right Foot'
  },
  filter: [],
  fontFamily: "Georgia",
  host: "https://api.vizzly.co",
  pointStyles:{
    right_foot_sum: {
      fillColour: '#ffea00'
    }
  },
  showAxisLineX: false,
  showAxisLineY: false,
  showAxisTickX: true,
  showAxisTickY: true,
  xMeasure: {
    aggregate: 'sum',
    field: 'right_foot'
  },
  yMeasure:{
    aggregate: 'sum',
    field: 'left_foot'
  }
};

Pay.args = {
  axisFontSize: 10,
  axisUnitX: " $ ",
  axisWidthX: 14,
  componentId: "cmp_91b3242d670e400f818c00a7540a2705",
  dimension: [
    'job_title'
  ],
  displaySubject: "Measured against seniority",
  displayTitle: "Sector pay",
  fieldNaming: {
    base_pay_mean: 'Base Pay (mean)',
    seniority_mean: 'Seniority (mean)'
  },
  filter: [],
  fontFamily: "Georgia",
  host: "https://api.vizzly.co",
  showAxisLineX: false,
  showAxisLineY: false,
  showGrid: true,
  xMeasure: {
    aggregate: 'mean',
    field: 'base_pay'
  },
  yMeasure: {
    aggregate: 'mean',
    field: 'seniority'
  }
}
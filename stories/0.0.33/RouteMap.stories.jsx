import React from "react";
import { RouteMap } from "@vizzly/components-0.0.33";

export default {
  title: "0.0.33/RouteMap",
  component: RouteMap,
};

const Template = (args) => <RouteMap {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  componentId: "cmp_a827c58f4a6a48628e14d432e15b9257",
  destination: "destination_airport",
  filters: [
    {
      field: "source_airport",
      operator: "=",
      value: "LGW",
    },
  ],
  host: "https://api.vizzly.co",
  origin: "source_airport",
  showGraticule: false,
};

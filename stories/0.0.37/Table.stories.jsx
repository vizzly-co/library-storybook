import React from "react";
import { Table } from "@vizzly/components-0.0.37";

export default {
  title: "0.0.37/Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  componentId: "cmp_5363be6938f040f9b398538be49bb874",
  fieldNaming: {
    age: "Age",
    "house price": "House Price",
    salary: "Salary",
    "sign up": "Sign Up",
  },
  fields: ["sign up", "age", "salary", "house price"],
  filters: [],
  host: "https://api.vizzly.co",
  sortBy: [
    {
      direction: "desc",
      field: "age",
    },
  ],
};

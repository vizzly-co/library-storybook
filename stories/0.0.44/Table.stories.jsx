import React from "react";
import { Table } from "@vizzly/components-0.0.44";

export default {
  title: "Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  componentId: "cmp_80f2cc8c0f36438cafcb59e2e9a20dfc",
  contentBackground: "#f9ecec",
  fieldNaming: {
    flight_number: 'Flight Number',
    launch_date: 'Launch Date',
    launch_site: 'Launch Site',
    launch_time: 'Launch Time',
    payload_name: 'Payload Name',
    vehicle_type: 'Vehicle Type'
  },
  fields: [
    'payload_name',
    'flight_number',
    'launch_date',
    'launch_time',
    'launch_site',
    'vehicle_type'
  ],
  filter: [],
  fontFamily: "Courier",
  headerBackground: "#db9f9f",
  host: "https://api.vizzly.co",
  order: [
    {
      aggregate: 'none',
      direction: 'asc',
      field: 'payload_name'
    }
  ],
  viewBackground: "#000000"
};
import React from "react";
import { Views } from "@vizzly/components-0.0.50";

export default {
  title: "LineChart",
  component: Views.LineChartView,
};

const Template = (args) => <Views.LineChartView {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    componentId: "cmp_ad507e85b91e4cadb9d0a15aaf158ba0",
    axisUnitY: "",
    dateTimeFormat: "DD-MM-YYYY",
    animationEasing: "easeInOutQuad",
    axisAngleY: 0,
    fieldNaming: {},
    showAxisValueY: true,
    query: {
      dimension: ["city"],
      filter: [],
      measure: [
        {aggregate: "sum", field: "number_of_investors"},
        {aggregate: "sum", field: "number_of_rounds"}
      ],
      order: [
        {
          aggregate: "none",
          direction: "asc",
          field: "announced_on"
        }
      ],
      timeDimension: {field: "announced_on", truncate: "day"}
    },
    showAxisY: true,
    dimension: ["city"],
    lineStyles: [
      {
        backgroundColor: "#81d6ff",
        borderCapStyle: "round",
        borderColor: "#81d6ff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "round",
        borderWidth: 3,
        connectNulls: false,
        label: "Number of Investments",
        lineColour: "#77d198",
        lineTension: 0.4,
        pointBackgroundColor: "#81d6ff",
        pointBorderColor: "#81d6ff",
        pointBorderWidth: 1,
        pointHitRadius: 30,
        pointHoverBackgroundColor: "#81d6ff",
        pointHoverBorderColor: "#81d6ff",
        pointHoverBorderWidth: 30,
        pointHoverRadius: 4,
        pointRadius: 3,
        pointRotation: 0,
        pointStyle: "circle",
        showDots: true,
        showLine: true,
        steppedLine: false,
        strokeWidth: 5
      },
      {
        backgroundColor: "#d874ff",
        borderCapStyle: "round",
        borderColor: "#d874ff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        label: "Number of Rounds",
        lineTension: 0.4,
        pointBackgroundColor: "rgba(0, 0, 0, 0.1)",
        pointBorderColor: "#d874ff",
        pointBorderWidth: 1,
        pointHitRadius: 30,
        pointHoverBorderColor: "#d874ff",
        pointHoverBorderWidth: 30,
        pointHoverRadius: 4,
        pointRadius: 3,
        pointRotation: 0,
        pointStyle: "circle",
        showLine: true,
        steppedLine: false
      }
    ],
    zoom: 1,
    showGrid: false,
    displaySubject: "Data Source: Kaggle",
    axisWidthX: 1,
    axisTickLengthY: 22,
    tooltipKeyShape: "circle",
    showAxisX: true,
    showAxisTickY: false,
    axisFontSize: 6,
    showAxisValueX: true,
    host: "https://app.vizzly.co",
    order: [
      {aggregate: "none", direction: "asc", field: "announced_on"}
    ],
    filter: [],
    axisUnitX: "",
    yAxis: {
      display: true,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 10,
      fontStyle: "normal",
      lineHeight: 1.2,
      padding: 8,
      position: "left",
      reverse: false,
      suggestedMax: 50,
      suggestedMin: 0,
      title: "Count",
      unitPostfix: "",
      unitPrefix: "",
      z: 0
    },
    result: {
      content: [
        ["2014-03-25T00:00:00.000Z", 6, 1, null],
        ["2014-08-19T00:00:00.000Z", 4, 5, null],
        ["2014-12-01T00:00:00.000Z", 14, 5, null],
        ["2015-08-18T00:00:00.000Z", 4, 2, null],
        ["2015-09-01T00:00:00.000Z", 8, 5, null],
        ["2016-03-22T00:00:00.000Z", 42, 15, null],
        ["2016-06-01T00:00:00.000Z", 3, 3, null],
        ["2016-12-14T00:00:00.000Z", 16, 3, null],
        ["2017-01-01T00:00:00.000Z", 10, 2, null],
        ["2017-02-23T00:00:00.000Z", 7, 2, null]
      ],
      fields: [
        {dataType: "date_time", title: "announced_on"},
        {dataType: "number", title: "number_of_investors_sum"},
        {dataType: "number", title: "number_of_rounds_sum"},
        {dataType: "unknown", title: "city"}
      ]
    },
    tooltipDateTimeFormat: "dddd DD MMMM YYYY, hh:mm",
    showAxisLineY: true,
    showAxisTickX: false,
    showAxisLineX: true,
    legendKeyShape: "circle",
    axisWidthY: 1,
    defaultLineStyle: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderCapStyle: "round",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      connectNulls: false,
      lineColour: "#77d198",
      lineTension: 0.4,
      pointBackgroundColor: "rgba(0, 0, 0, 0.1)",
      pointBorderColor: "rgba(0, 0, 0, 0.1)",
      pointBorderWidth: 1,
      pointHitRadius: 1,
      pointHoverBorderWidth: 1,
      pointHoverRadius: 4,
      pointRadius: 3,
      pointRotation: 0,
      pointStyle: "circle",
      showDots: true,
      showLine: true,
      steppedLine: false,
      strokeWidth: 5
    },
    fontFamily: "Verdana",
    timeDimension: {field: "announced_on", truncate: "day"},
    measure: [
      {aggregate: "sum", field: "number_of_investors"},
      {aggregate: "sum", field: "number_of_rounds"}
    ],
    axisTickLengthX: 38,
    xGridLine: {
      borderDash: [],
      borderDashOffset: 0,
      color: "#e3e3e3",
      display: false,
      drawBorder: true,
      drawTicks: true,
      lineWidth: 1,
      offsetGridLines: false,
      z: 0
    },
    axisDateTimeFormat: "MM-DD-YYYY",
    xAxis: {
      display: true,
      fontColor: "#616161",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 10,
      fontStyle: "normal",
      lineHeight: 1.2,
      padding: 10,
      position: "bottom",
      reverse: false,
      suggestedMax: null,
      suggestedMin: null,
      title: "Timeline",
      unitPostfix: "",
      unitPrefix: "",
      z: 0
    },
    displayTitle: "Y-Combinator Investments",
    animationDuration: 1000,
    axisAngleX: -20,
    yGridLine: {
      borderDash: [],
      borderDashOffset: null,
      color: "#ebebeb",
      display: true,
      drawBorder: false,
      drawTicks: true,
      lineWidth: 1,
      offsetGridLines: false,
      z: 0
    }
  }
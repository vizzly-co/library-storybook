import React from "react";
import { Views } from "@vizzly/components-0.0.50";

export default {
  title: "BarChart",
  component: Views.BarChartView,
};

const Template = (args) => <Views.BarChartView {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    animationDuration: 1000,
    animationEasing: "easeInCubic",
    barStyles: [
      {
        backgroundColor: "#81d6ff",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
        borderSkipped: false,
        borderWidth: {bottom: 0, left: 0, right: 0, top: 0},
        hoverBackgroundColor: "rgba(0, 0, 0, 0.1)",
        hoverBorderColor: "rgba(0, 0, 0, 0.1)",
        hoverBorderWidth: 0,
        label: "High Temp"
      },
      {
        backgroundColor: "#d874ff",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 10,
        borderSkipped: false,
        borderWidth: {bottom: 0, left: 0, right: 0, top: 0},
        hoverBackgroundColor: "rgba(0, 0, 0, 0.1)",
        hoverBorderColor: "rgba(0, 0, 0, 0.1)",
        hoverBorderWidth: 0,
        label: "Low Temp"
      }
    ],
    componentId: "cmp_6ce6a5a588234e6e98eefa3f41af629c",
    dateTimeFormat: "DD-MM-YYYY",
    defaultBarStyle: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderRadius: 0,
      borderSkipped: false,
      borderWidth: {bottom: 0, left: 0, right: 0, top: 0},
      hoverBackgroundColor: "rgba(0, 0, 0, 0.1)",
      hoverBorderColor: "rgba(0, 0, 0, 0.1)",
      hoverBorderWidth: 0
    },
    dimension: ["city"],
    displaySubject: "Data Source: Weather.com",
    displayTitle: "Weather Forecast",
    filter: [],
    host: "https://app.vizzly.co",
    measure: [
      {aggregate: "mean", field: "high_temperature"},
      {aggregate: "mean", field: "low_temperature"}
    ],
    order: [
      {aggregate: "none", direction: "asc", field: "recorded_at"}
    ],
    query: {
      dimension: ["city"],
      filter: [],
      measure: [
        {aggregate: "mean", field: "high_temperature"},
        {aggregate: "mean", field: "low_temperature"}
      ],
      order: [
        {aggregate: "none", direction: "asc", field: "recorded_at"}
      ],
      timeDimension: {field: "recorded_at", truncate: "month"}
    },
    result: {
      content: [
        ["London", "2022-01-01T00:00:00.000Z", 7, 2],
        ["London", "2022-02-01T00:00:00.000Z", 8, 2],
        ["London", "2022-03-01T00:00:00.000Z", 10, 3],
        ["London", "2022-04-01T00:00:00.000Z", 13, 5],
        ["London", "2022-05-01T00:00:00.000Z", 17, 8],
        ["London", "2022-06-01T00:00:00.000Z", 20, 11],
        ["London", "2022-07-01T00:00:00.000Z", 22, 13],
        ["London", "2022-08-01T00:00:00.000Z", 22, 13],
        ["London", "2022-09-01T00:00:00.000Z", 19, 11],
        ["London", "2022-10-01T00:00:00.000Z", 15, 8],
        ["London", "2022-11-01T00:00:00.000Z", 10, 4],
        ["London", "2022-12-01T00:00:00.000Z", 8, 2]
      ],
      fields: [
        {dataType: "string", title: "city"},
        {dataType: "date_time", title: "recorded_at"},
        {dataType: "number", title: "high_temperature_mean"},
        {dataType: "number", title: "low_temperature_mean"}
      ]
    },
    timeDimension: {field: "recorded_at", truncate: "month"},
    xAxis: {
      display: true,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      lineHeight: 10,
      padding: 15,
      position: "bottom",
      reverse: false,
      suggestedMax: null,
      suggestedMin: null,
      title: "Date Range",
      unitPostfix: "",
      unitPrefix: "",
      z: 0
    },
    xGridLine: {
      borderDash: [],
      borderDashOffset: 0,
      color: "rgba(0, 0, 0, 0.1)",
      display: true,
      drawBorder: false,
      drawTicks: false,
      lineWidth: null,
      offsetGridLines: false,
      z: 0
    },
    yAxis: {
      display: true,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      lineHeight: 1.2,
      padding: 12,
      position: "left",
      reverse: false,
      suggestedMax: null,
      suggestedMin: null,
      title: "Weather",
      unitPostfix: " (C)",
      unitPrefix: "",
      z: 0
    },
    yGridLine: {
      borderDash: [2],
      borderDashOffset: 0,
      color: "rgba(0, 0, 0, 0.1)",
      display: true,
      drawBorder: false,
      drawTicks: false,
      lineWidth: 1,
      offsetGridLines: false,
      z: 0
    }
  }
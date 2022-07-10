import React from "react";
import {Views} from "@vizzly/components-0.0.50";

export default {
  title: "AreaChart",
  component: Views.AreaChartView,
};

const Template = (args) => <Views.AreaChartView {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    animationDuration: 1000,
    animationEasing: "linear",
    areaStyles: [
      {
        backgroundColor: "#a1e5f2",
        borderCapStyle: "round",
        borderColor: "#85d6d5",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        fill: {
          above: "rgba(0, 0, 0, 0.1)",
          below: "#b8faff",
          target: "origin"
        },
        label: "High Temp",
        lineTension: 0.4,
        pointBackgroundColor: "rgba(0, 0, 0, 0.1)",
        pointBorderColor: "rgba(0, 0, 0, 0.1)",
        pointBorderWidth: 0,
        pointHitRadius: 1,
        pointHoverBorderWidth: 1,
        pointHoverRadius: 4,
        pointRadius: 0,
        pointRotation: 0,
        pointStyle: "circle",
        showLine: true,
        steppedLine: false
      },
      {
        backgroundColor: "#ffc2ec",
        borderCapStyle: "round",
        borderColor: "#f185ff",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        fill: {
          above: "rgba(0, 0, 0, 0.1)",
          below: "#ecb8ff",
          target: "origin"
        },
        label: "Low Temp",
        lineTension: 0.4,
        pointBackgroundColor: "rgba(0, 0, 0, 0.1)",
        pointBorderColor: "rgba(0, 0, 0, 0.1)",
        pointBorderWidth: 0,
        pointHitRadius: 1,
        pointHoverBorderWidth: 1,
        pointHoverRadius: 4,
        pointRadius: 0,
        pointRotation: 0,
        pointStyle: "circle",
        showLine: true,
        steppedLine: false
      }
    ],
    componentId: "cmp_ef7deec1bc374c71a19b1a7abc598c81",
    dateTimeFormat: "DD-MM-YYYY",
    defaultAreaStyle: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderCapStyle: "round",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      fill: {
        above: "rgba(0, 0, 0, 0.1)",
        below: "rgba(0, 0, 0, 0.1)",
        target: "origin"
      },
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
      showLine: true,
      steppedLine: false
    },
    dimension: [],
    displaySubject: "Data Source: Kaggle",
    displayTitle: "Temperature by Planet",
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
      dimension: [],
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
        ["2022-01-01T00:00:00.000Z", -170, -190],
        ["2022-02-01T00:00:00.000Z", -90, -120],
        ["2022-03-01T00:00:00.000Z", -70, -290],
        ["2022-04-01T00:00:00.000Z", -110, -330],
        ["2022-05-01T00:00:00.000Z", -130, -290],
        ["2022-06-01T00:00:00.000Z", -175, -210],
        ["2022-07-01T00:00:00.000Z", -120, -195],
        ["2022-08-01T00:00:00.000Z", -177, -187],
        ["2022-09-01T00:00:00.000Z", -167, -301],
        ["2022-10-01T00:00:00.000Z", -170, -190],
        ["2022-11-01T00:00:00.000Z", -120, -409],
        ["2022-12-01T00:00:00.000Z", -130, -290]
      ],
      fields: [
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
      lineHeight: 1.2,
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
      drawBorder: true,
      drawTicks: false,
      lineWidth: 1,
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
      padding: 14,
      position: "left",
      reverse: false,
      suggestedMax: null,
      suggestedMin: null,
      title: "Temperature (F)",
      unitPostfix: "",
      unitPrefix: "",
      z: 0
    },
    yGridLine: {
      borderDash: [],
      borderDashOffset: 0,
      color: "rgba(0, 0, 0, 0.1)",
      display: true,
      drawBorder: true,
      drawTicks: false,
      lineWidth: 1,
      offsetGridLines: false,
      z: 0
    }
  }
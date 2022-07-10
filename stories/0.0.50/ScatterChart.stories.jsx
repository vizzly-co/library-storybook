import React from "react";
import { Views } from "@vizzly/components-0.0.50";

export default {
  title: "ScatterChart",
  component: Views.ScatterChartView,
};

const Template = (args) => <Views.ScatterChartView {...args} />;

export const Basic = Template.bind({});

Basic.args = {
    animationDuration: 0,
    animationEasing: "linear",
    componentId: "cmp_fbd583b32d3a4982a8d8bd1856d75c6d",
    dateTimeFormat: "DD/MM/YYYY",
    defaultPointStyle: {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      borderColor: "rgba(0, 0, 0, 0.1)",
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: "circle",
      radius: 3,
      rotation: 0
    },
    dimension: ["age"],
    displaySubject: "Data Source: Kaggle",
    displayTitle: "Salary by Gender",
    filter: [],
    host: "https://app.vizzly.co",
    order: [],
    pointStyles: [
      {
        backgroundColor: "#d6d6d6",
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
      }
    ],
    query: {
      dimension: ["age"],
      filter: [],
      measure: [
        {aggregate: "mean", field: "performance_evaluation"},
        {aggregate: "mean", field: "base_pay"}
      ],
      order: [],
      timeDimension: null
    },
    result: {
      content: [
        [3.235294117647059, 93244.94117647059, 38],
        [3.347826086956522, 76538.60869565218, 26],
        [2.933333333333333, 106359.73333333334, 43],
        [2.769230769230769, 105194.80769230769, 55],
        [3.0476190476190474, 104027.85714285714, 48],
        [2.6666666666666665, 98648.38095238095, 47],
        [3.25, 76013.2, 27],
        [2.8181818181818183, 118818.04545454546, 65],
        [2.5, 110045.38888888889, 61],
        [2.7777777777777777, 93492.11111111111, 44],
        [3.227272727272727, 76439.04545454546, 31],
        [2.64, 96861.72, 45],
        [2.875, 95691.75, 50],
        [2.5384615384615383, 105933.38461538461, 54],
        [3.5, 91200.57142857143, 46],
        [3.35, 77944.85, 19],
        [3.1, 87959.25, 21],
        [3, 114703.5, 62],
        [3.5, 116292.95454545454, 63],
        [2.88, 110079.68, 57],
        [2.8125, 88949.25, 37],
        [3.357142857142857, 96289.92857142857, 52],
        [2.923076923076923, 73497.88461538461, 20],
        [3.310344827586207, 68486.24137931035, 18],
        [2.739130434782609, 115749.04347826086, 59],
        [3.0384615384615383, 119075.46153846153, 58],
        [3.6470588235294117, 92913.29411764706, 39],
        [2.625, 105972.625, 42],
        [3.5, 81395.81818181818, 29],
        [3.05, 80061.8, 34],
        [2.9047619047619047, 90987.28571428571, 41],
        [3.607142857142857, 99960.89285714286, 49],
        [2.6666666666666665, 126080.27777777778, 60],
        [3.0526315789473686, 83582.57894736843, 28],
        [3.4444444444444446, 90248.38888888889, 35],
        [3.1923076923076925, 78139.26923076923, 33],
        [3.2, 92871.25, 40],
        [2.5714285714285716, 82765.35714285714, 25],
        [3, 88717.76470588235, 32],
        [2.8181818181818183, 77994.95454545454, 23],
        [3.1052631578947367, 86648.63157894737, 30],
        [3.125, 73976.70833333333, 24],
        [3.076923076923077, 73072.73076923077, 22],
        [2.7777777777777777, 91690, 36],
        [2.5714285714285716, 105582.33333333333, 56],
        [3.0476190476190474, 113648.33333333333, 64],
        [3.111111111111111, 100949.94444444444, 51],
        [3.1923076923076925, 109186.73076923077, 53]
      ],
      fields: [
        {dataType: "number", title: "performance_evaluation_mean"},
        {dataType: "number", title: "base_pay_mean"},
        {dataType: "number", title: "age"}
      ]
    },
    timeDimension: null,
    xAxis: {
      display: true,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 10,
      fontStyle: "normal",
      lineHeight: 1.2,
      padding: 10,
      position: "bottom",
      reverse: false,
      suggestedMax: null,
      suggestedMin: null,
      title: "Performance Rating",
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
      lineWidth: 1,
      offsetGridLines: false,
      z: 0
    },
    xMeasure: {aggregate: "mean", field: "performance_evaluation"},
    yAxis: {
      display: true,
      fontColor: "#666",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: 10,
      fontStyle: "normal",
      lineHeight: 2,
      padding: 10,
      position: "left",
      reverse: false,
      suggestedMax: 150000,
      suggestedMin: 25000,
      title: "Base Salary",
      unitPostfix: "",
      unitPrefix: "$ ",
      z: 0
    },
    yGridLine: {
      borderDash: [],
      borderDashOffset: 0,
      color: "rgba(0, 0, 0, 0.1)",
      display: true,
      drawBorder: false,
      drawTicks: false,
      lineWidth: 1,
      offsetGridLines: false,
      z: 0
    },
    yMeasure: {aggregate: "mean", field: "base_pay"}
  };
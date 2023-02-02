import React from "react";
import { useState, useEffect } from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryZoomContainer,
} from "victory";

const PerpetualGraph = () => {
  const [victoryArray, setVictoryArray] = useState([]);
  const [victoryArray2, setVictoryArray2] = useState([]);

  const hours = [
    "01/01",
    "15:00",
    "02/01",
    "03:00",
    "03/01",
    "15:00",
    "04/01",
    "15:00",
    "05/01",
    "15:00",
    "06/01",
    "15:00",
    "07/01",
    "15:00",
    "08/01",
    "15:00",
    "09/01",
    "15:00",
    "10/01",
    "15:00",
    "11/01",
    "15:00",
    "12/01",
    "15:00",
    "13/01",
    "15:00",
    "14/01",
    "15:00",
    "15/01",
    "15:00",
    "16/01",
    "15:00",
    "17/01",
    "15:00",
    "18/01",
    "15:00",
    "19/01",
    "15:00",
    "20/01",
    "15:00",
    "21/01",
    "15:00",
    "22/01",
    "15:00",
    "23/01",
    "15:00",
    "24/01",
    "15:00",
    "25/01",
    "15:00",
    "26/01",
    "15:00",
    "27/01",
    "15:00",
    "28/01",
    "15:00",
    "29/01",
    "15:00",
    "30/01",
    "15:00",
    "31/01",
    "15:00",
    "01/02",
  ];

  const values = [20800, 21200, 21600, 22000, 22400, 22813, 23200, 23600];

  let dataArray = [];
  let dataArray2 = [];
  let dataArray3 = [];
  useEffect(() => {
    for (let i = 1; i < 41; i++) {
      const dataObj = {
        x: i,
        y: Math.random() * 2530 + 20750,
      };
      dataArray.push(dataObj);
    }
    for (let i = 1; i < 41; i++) {
      const dataObj = {
        x: i,
        y: Math.random() * 2330 + 20250,
      };
      dataArray2.push(dataObj);
    }

    setVictoryArray(dataArray);
    setVictoryArray2(dataArray2);
  }, []);

  return (
    <div>
      {" "}
      <VictoryChart
        theme={VictoryTheme.material}
        width={800}
        height={650}
        style={{ labels: { fontSize: 200 } }}
        containerComponent={
          <VictoryZoomContainer zoomDomain={{ x: [5, 35], y: [0, 100] }} />
        }
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          // tickValues={[1, 2, 3, 4]}
          tickFormat={hours}
          style={{
            grid: { stroke: "grey" },
            labels: { fontSize: 12 },
          }}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          style={{
            tickLabels: { angle: 0 },
            grid: { stroke: "grey" },
          }}
          tickFormat={values}
        />

        <VictoryLine
          interpolation={"basis"}
          style={{
            data: { stroke: "#ed4b9e" },
            parent: { border: "1px solid #ccc" },
          }}
          data={victoryArray}
        />

        <VictoryLine
          interpolation={"basis"}
          style={{
            data: { stroke: "#31d0aa" },
            parent: { border: "1px solid #ccc" },
          }}
          data={victoryArray2}
        />
      </VictoryChart>
    </div>
  );
};

export default PerpetualGraph;

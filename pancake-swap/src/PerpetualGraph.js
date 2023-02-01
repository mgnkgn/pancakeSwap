import React from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryStack,
  VictoryAxis,
  VictoryZoomContainer,
} from "victory";

const PerpetualGraph = () => {
  const hours = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
  ];
  return (
    <div>
      {" "}
      <VictoryChart
        theme={VictoryTheme.material}
        width={500}
        height={200}
        containerComponent={
          <VictoryZoomContainer zoomDomain={{ x: [5, 35], y: [0, 100] }} />
        }
      >
        {/* <VictoryStack> */}
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={hours}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />

        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 14 },
            { x: 2, y: 18 },
            { x: 3, y: 24 },
            { x: 4, y: 30 },
            { x: 5, y: 31 },
          ]}
        />

        {/* <VictoryLine
          style={{
            data: { stroke: "yellow" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 15 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: "#000" },
            parent: { border: "1px solid #ccc" },
          }}
          data={[
            { x: 1, y: 20 },
            { x: 2, y: 25 },
            { x: 3, y: 27 },
            { x: 4, y: 29 },
            { x: 5, y: 35 },
          ]}
        /> */}
        {/* </VictoryStack> */}
      </VictoryChart>
    </div>
  );
};

export default PerpetualGraph;

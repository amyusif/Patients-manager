import React from "react";
import { ResponsiveLine } from "@nivo/line";

const Line = ({lineData}) => {
  return (
    <div style={{ height: "100%", width: '100%'}}>
      <ResponsiveLine
        data={lineData}
        margin={{ top: 10, right: 1, bottom: 0, left: 1 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "0",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        pointSize={9}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        useMesh={true}
        enableGridX={false}
        enableGridY={false}
        enableSlices='x'
        areaOpacity='0.5'
        colors={{ datum: 'color' }}
      />
    </div>
  );
};

export default Line;

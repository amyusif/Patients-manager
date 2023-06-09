import React from "react";
import GlobalPage from "../../components/GlobalPage/GlobalPage";
import "./Dashboard.scss";
import Bar from "../../components/Barchart/Bar";
import Card from "../../components/Card/Card";
import {
  LineData,
  Checkout,
  Daily,
  Weekly,
  GridData
} from "../../Data/SidebarData";
import Line from "../../components/LineChart/Line";
import GridTable from "../../components/DataGrid/GridTable";

const Dashboard = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "DAYS", flex: 1 },
    {
      field: "value",
      headerName: "PATIENTS",
      type: "number",
      headerAlign: "left",
    },
  ];
  return (
    <div className="wrapper">
      <GlobalPage
        name="DASHBOARD"
        subtitle="Hello Yusif, Welcome to the Dashboard"
      />
      <div className="dash-grid">
        <div className=" check-in">
          <Card
            title="Check-In Visitors"
            figure="200"
            chart={<Line lineData={LineData} />}
          />
        </div>
        <div className="check-out">
          <Card
            title="Check-Out Visitors"
            figure="700"
            chart={<Line lineData={Checkout} value="25" />}
          />
        </div>
        <div className="daily-average">
          <Card
            title="Daily Average Attendance"
            figure="500"
            chart={<Line lineData={Daily} />}
          />
        </div>
        <div className="weekly-average">
          <Card
            title="Weekly Average Attendance"
            figure="1500"
            chart={<Line lineData={Weekly} />}
          />
        </div>
        <div className="bar">
          <Bar />
        </div>
        <div className="busiest-day">
          <div className="header-day">
            <h4 className="busiest-day-header">Busiest Days</h4>
          </div>
          <GridTable column={columns} row={GridData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

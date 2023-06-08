import React from "react";
import GlobalPage from "../../components/GlobalPage/GlobalPage";
import "./Dashboard.scss";
import Bar from "../../components/Barchart/Bar";
import Card from "../../components/Card/Card";
import { LineData, Checkout, Daily, Weekly } from "../../Data/SidebarData";
import Line from "../../components/LineChart/Line";

const Dashboard = () => {
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
          <Card title="Check-Out Visitors" figure="700" 
          chart={<Line lineData={Checkout} />}
          />
        </div>
        <div className="daily-average">
          <Card title="Daily Average Attendance" figure="500" 
          chart={<Line lineData={Daily} />}
          />
        </div>
        <div className="weekly-average">
          <Card title="Weekly Average Attendance" figure="1500" 
          chart={<Line lineData={Weekly} />}
          />
        </div>
        <div className="bar">
          <Bar />
        </div>
        <div className="grid-items busiest-day">hey</div>
      </div>
    </div>
  );
};

export default Dashboard;

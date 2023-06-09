import React from "react";
import "./app.scss";
import SidebarNav from "./components/Global/Sidebar/Sidebars";
import Topbar from "./components/Global/Topbar/Topbar";
import SetRoutes from "./Routes/SetRoutes";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <SidebarNav />
      </div>
      <div className="right">
        <div className="topbar">
          <Topbar />
        </div>
        <div className="pages">
        <SetRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;

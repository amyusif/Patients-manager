import React from "react";
import GlobalPage from "../../components/GlobalPage/GlobalPage";
import GridTable from "../../components/DataGrid/GridTable";

import { VisitorsData } from "../../Data/AppData";

const VisitorsLog = () => {
  const columns = [
    { field: "id", headerName: "ID", flex: 0 },
    { field: "name", headerName: "PATIENT NAME", flex: 1 },
    {
      field: "phone",
      headerName: "PHONE",
      flex: 1,
    },
    { field: "date", headerName: "DATE OF VISIT", flex: 1 },
    { field: "status", headerName: "STATUS" },
    {
      field: "email",
      headerName: "EMAIL ADDRESS",
      flex: 1,
      textAlign: "center",
    },
    { field: "company", headerName: "COMPANY" },
    { field: "country", headerName: "COUNTRY", flex: 1 },
    {
      field: "host",
      headerName: "HOST",
      flex: 1,
    },
    { field: "department", headerName: "DEPARTMENT", flex: 1 },
    { field: "checkin", headerName: "CHECK-IN" },
    {
      field: "checkout",
      headerName: "CHECK-OUT",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <GlobalPage name="VISITORS LOG" subtitle="" />
        <button
          style={{
            padding: "5px 20px",
            backgroundColor: "#819096",
            marginRight: "30px",
            fontFamily: "Roboto",
            borderRadius: "3px",
          }}
        >
          ADD PATIENT
        </button>
      </div>
      <GridTable column={columns} row={VisitorsData} />
    </div>
  );
};

export default VisitorsLog;

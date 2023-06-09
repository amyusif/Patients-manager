import React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { GridData } from "../../Data/SidebarData";
import { Box } from "@mui/material";

const GridTable = ({row, column}) => {
  

  return (
    <Box
      height="820px"
      m="10px"
      sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#19A7CE",
        },
      }}
    >
      <DataGrid rows={row} columns={column} checkboxSelection/>
    </Box>
  );
};

export default GridTable;

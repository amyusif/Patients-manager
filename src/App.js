import React from "react";
import "./app.scss";
import SidebarNav from "./components/Global/Sidebar/Sidebars";
import Topbar from "./components/Global/Topbar/Topbar";
import SetRoutes from "./Routes/SetRoutes";
import { AppContainer, Box } from "./Styled/GlobalStyles";

function App() {
  return (
    <AppContainer>
      <SidebarNav />
      <Box w={85} fd="column" g={10}>
        <Topbar />
        <SetRoutes />
      </Box>
    </AppContainer>
  );
}

export default App;

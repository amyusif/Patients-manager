import React from "react";
import "./Notification.scss";
import { Box } from "../../Styled/GlobalStyles";
import { VariantH5 } from "../../Styled/SIdebar";

const Notification = () => {
  return (
    <Box>
      <VariantH5>
        You have no notifications. It will appear here
      </VariantH5>
    </Box>
  );
};

export default Notification;

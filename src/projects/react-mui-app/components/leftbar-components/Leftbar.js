import { Box, List } from "@mui/material";
import React from "react";
import LeftMenuItem from "./LeftMenuItem";
import leftMenuItemNames from "../../data/menu_items";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          {leftMenuItemNames.map((item) => {
            return <LeftMenuItem {...item} mode={mode} setMode={setMode} />;
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

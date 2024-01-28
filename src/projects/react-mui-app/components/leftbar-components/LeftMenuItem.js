import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const LeftMenuItem = ({ component, href, primary, mode, setMode }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>{component}</ListItemIcon>
        {href === "#thememode" ? (
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
        ) : (
          <ListItemText primary={primary} />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default LeftMenuItem;

import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";
import { menus } from "../data/menu";

const Feed = () => {
  //   return <Box bgcolor="pink">Feed</Box>;
  //   return <Box sx={{ backgroundColor: "pink" }}>Feed</Box>;
  //   return (
  //     <Box sx={{ backgroundColor: "pink" }} width="50%">
  //       Feed
  //     </Box>
  //   );
  return (
    // <Box sx={{ backgroundColor: "pink" }} flex={4} p={2}>
    <Box flex={4} p={2}>
      {menus.map((m, index) => {
        return <Post key={index} {...m} />;
      })}
    </Box>
  );
};

export default Feed;

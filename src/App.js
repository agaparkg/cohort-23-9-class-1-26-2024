// import Button from "@mui/material/Button";

import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AddNewPost from "./components/AddNewPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  // const [mode, setMode] = useState("dark");

  // Toggling Dark theme mode to Light theme mode
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Leftbar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddNewPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;

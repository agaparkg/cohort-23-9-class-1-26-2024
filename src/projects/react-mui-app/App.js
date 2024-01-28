// import Button from "@mui/material/Button";

import { Box, Stack } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

function App() {
  // const styles = { backgroundColor: "skyblue", color: "white" };

  return (
    <Box bgcolor="skyblue">
      {/* // <Box sx={styles}> */}
      {/* // <Box> */}
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;

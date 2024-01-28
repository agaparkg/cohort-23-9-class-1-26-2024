// import { Add } from "@mui/icons-material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const AddNewPost = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  //   Default Modal Styling
  //   const style = {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)",
  //     width: 400,
  //     bgcolor: "background.paper",
  //     border: "2px solid #000",
  //     boxShadow: 24,
  //     p: 4,
  //   };

  //   Custom styled Modal and Styling
  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  //   Custom UserBox and Styling
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    padding: 5,
  });

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "47%",
            md: 30,
          },
        }}
      >
        <Tooltip onClick={toggle} title="Delete">
          <Fab color="primary" aria-label="add">
            {/* <Add /> */}
            <AddIcon />
          </Fab>
        </Tooltip>
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "inline-block",
            },
          }}
          ml={2}
          fontWeight={500}
          variant="span"
        >
          New Post
        </Typography>
      </Box>
      <StyledModal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Default Modal Box */}
        {/* <Box sx={style}> */}

        {/* Custom Modal Box */}
        <Box
          width={{
            xs: 250,
            md: 400,
          }}
          height={280}
          color={"text.primary"}
          bgcolor={"background.default"}
          p={3}
          borderRadius={5}
        >
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Typography variant="h6" color="grey" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/226.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            // label="Type your post here..."
            multiline
            rows={3}
            // defaultValue="What's on your mind?"
            placeholder="What's on your mind?"
            variant="standard"
          />
          {/* <Stack direction="row" gap={1} marginY={2}> */}
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={toggle}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddNewPost;

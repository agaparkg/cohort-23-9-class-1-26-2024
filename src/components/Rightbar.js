import styled from "@emotion/styled";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  ImageList,
  ImageListItem,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import { users } from "../data/users";
import { images } from "../data/images";
import Conversation from "./rightbar-components/Conversation";
import convos from "../data/convos";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px lightgray`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Rightbar = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
      flex={2}
      p={2}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          {/* max={7} --> 7 is exclusive */}
          {users.map((user, index) => {
            return (
              <StyledBadge
                key={index}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={user.alt} src={user.src} />
              </StyledBadge>
            );
          })}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={3}>
          {images.map((image, index) => {
            return (
              <ImageListItem key={index}>
                <img src={image.img} alt="" />
              </ImageListItem>
            );
          })}
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {convos.map((conv) => {
            return <Conversation {...conv} />;
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;

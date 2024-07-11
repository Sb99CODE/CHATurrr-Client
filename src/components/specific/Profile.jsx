import { Avatar, Box, Stack, Typography } from "@mui/material";
import {CalendarMonth as CalendarIcon,PermIdentityOutlined as FaceIcon,AlternateEmail as UserNameIcon,} from "@mui/icons-material";
import moment from "moment";
import React from "react";
import { transformImage } from "../../lib/features";

const Profile = ({ user }) => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src={transformImage(user?.avatar?.url)}
        sx={{
          width: 150,
          height: 150,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "7px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={user?.bio} />
      <ProfileCard heading={"Name"} text={user?.name} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment(user?.createdAt).fromNow()}
        Icon={<CalendarIcon />}
      />
      <ProfileCard
        heading={"Username"}
        text={user?.username}
        Icon={<UserNameIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Box
    display={"flex"}
    flexDirection={"row"}
    justifyContent={"center"}
    sx={{
      padding: "0.2rem",
      borderRadius: "10px",
      background: "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
    }}
  >
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}

      <Stack>
        <Typography variant="body1" sx={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>{text}</Typography>
        <Typography color={"lightgray"} variant="caption" >
          {heading}
        </Typography>
      </Stack>
    </Stack>
  </Box>
);

export default Profile;

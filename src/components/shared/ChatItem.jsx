import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import AvatarCard from "./AvatarCard";
import { motion } from "framer-motion";
import { clicked, grayColor } from "../../constants/color";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <Link
      sx={{
        padding: "0",
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          background: sameSender ? "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)" : grayColor,
          color: sameSender ? "white" : "unset",
          position: "relative",
          padding: "0.2rem",
          borderRadius: "10px",
          // boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          width: '100%',
          maxWidth: '500px',
          margin: '3px auto',
        }}
      >
        <AvatarCard avatar={avatar} />

        <Stack>
          <Typography sx={{fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default memo(ChatItem);

import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Box  height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
       {/* <i> Select a friend from menu</i> */}
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);

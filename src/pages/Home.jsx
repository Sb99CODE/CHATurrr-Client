import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIos, InfoTwoTone, Menu, Search } from "@mui/icons-material";

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Playwrite+PE:wght@100..400&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
// const Home = () => {
//   return (
//     <Box  height={"100%"} >
//       <Typography p={"2rem"} variant="h5" textAlign={"center"}>


//       </Typography>
//     </Box>
//   );
// };

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <Box
      height="calc(100vh - 4rem)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: "white",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          background: "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)",
          borderRadius: "1rem",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.3)",
          padding: "2rem",
          textAlign: "center",
          width: "calc(100% - 2rem)"
        }}
      >
        <Typography p="1.5rem" variant="h5" gutterBottom sx={{ color: "white", fontFamily: 'Playwrite PE, Arial, sans-serif', }}>
          Welcome to Chatur
        </Typography>
        <Typography variant="h6" px="2rem" mb="2rem" sx={{ color: "white", }}>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}>
            <IconButton sx={{ padding: 0 }}>
              <ArrowForwardIos fontSize="small" />
            </IconButton>
            <Typography variant="body1" sx={{ fontFamily: "Georgia, 'Times New Roman', Times, serif",}}>
              Select friends from <Menu fontSize="small" sx={{ verticalAlign: "middle", marginLeft: "0.2rem", }} /> icon to chat
            </Typography>
          </Box>

          <br />

          <Box sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}>
            <IconButton sx={{ padding: 0 }}>
              <ArrowForwardIos fontSize="small" />
            </IconButton>
            <Typography variant="body1" sx={{ fontFamily: "Georgia, 'Times New Roman', Times, serif",}}>
              Click on <Search fontSize="small" sx={{ verticalAlign: "middle", marginLeft: "0.2rem", }} /> icon to search friends
            </Typography>
          </Box>

        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleButtonClick}
          sx={{
            background: "#2d2d2d",
            "&:hover": {
              background: "#292929",
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.4)",
            },
          }}
          startIcon={<InfoTwoTone />}
        >
          About Creator
        </Button>
      </Container>
    </Box>
  );
};

export default AppLayout()(Home);

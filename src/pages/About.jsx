import React from 'react';
import { Box, Container, Typography, IconButton, Button, Avatar, Link, Tooltip } from '@mui/material';
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const showText = keyframes`
  0% {
    visibility: hidden;
  }
  0.1% {
    visibility: visible;
  }
  100% {
    visibility: visible;
  }
`;

export const AboutSection = () => {
  const navigate = useNavigate()

  const navigateBack = () => { navigate("/") }

  return (
    <Container sx={{ bgcolor: "lightgray", animation: `${fadeIn} 1s ease-in-out` }}>
      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.8)",
              animation: `${pulse} 0.6s infinite`,
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        sx={{ animation: `${slideIn} 1s ease-in-out` }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)",
            borderRadius: "50%",
            border: "6px solid transparent",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
            padding: "2px",
            animation: `${pulse} 1.5s infinite`,
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="https://res.cloudinary.com/dvdmuhsum/image/upload/v1720645374/profileImage_aimdor.jpg"
            sx={{ width: 150, height: 150 }}
          />
        </Box>

        <br />
         <Box sx={{
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          animation: `${typing} 6s steps(30, end), ${blink} 2s step-end infinite`,
         }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Playwrite PE, Arial, sans-serif' }}>
          Sujal Bhati
        </Typography>
        </Box>
        <br />
        <Box sx={{ 
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          animation: `${showText} 0s 6s forwards, ${typing} 2s steps(30, end) 6s forwards, ${blink} 0.75s step-end infinite 8s`,
          visibility: 'hidden',
          fontFamily: 'Playwrite PE, Arial, sans-serif'
        }}>
          <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'Playwrite PE, Arial, sans-serif' }}>
            Enthusiastic Programmer
          </Typography>
        </Box>
        <br />

        <Typography variant="body1" paragraph sx={{ fontFamily: 'Playwrite PE, Arial, sans-serif' }}>
          I am passionate about web development and solving complex problems. With skills in React, Node.js, and SQL, I strive to build scalable and user-friendly applications that make a positive impact. In addition, I excel in competitive programming, consistently honing my problem-solving abilities and algorithmic skills.
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/Sb99CODE"
            target="_blank"
            sx={{ m: 1, background: "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)" }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/sujal-bhati-92135b226"
            target="_blank"
            sx={{ m: 1, background: "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)" }}
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            href="your-resume-url.pdf"
            download
            sx={{ m: 1, background: "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)" }}
          >
            Download my Resume
          </Button>
        </Box>
      </Box>
    </Container>
  );
};


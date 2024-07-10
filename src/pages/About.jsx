import React from 'react';
import { Box, Container, Typography, IconButton, Button, Avatar, Link, Tooltip } from '@mui/material';
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';

export const AboutSection = () => {
    const navigate = useNavigate()

    const navigateBack = () => { navigate("/") }

    return (
        <Container  sx={{ bgcolor: "lightgray"}}>
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
                    }}
                >
                <Avatar
                    alt="Profile Picture"
                    src="https://res.cloudinary.com/dvdmuhsum/image/upload/v1720645374/profileImage_aimdor.jpg"
                    sx={{ width: 150, height: 150}}
                />
                </Box>
                 
                 <br />

                <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'Playwrite PE, Arial, sans-serif' }}>
                    Sujal  Bhati
                </Typography>
                <br />
                <Typography variant="h6" component="h2" gutterBottom sx={{ fontFamily: 'Playwrite PE, Arial, sans-serif' }}>
                    Enthusiastic programmer
                </Typography>
                <br />
                <Typography variant="body1" paragraph sx={{ fontFamily: 'Playwrite PE, Arial, sans-serif' }}>
                    A brief bio or description about yourself. Mention your interests, skills, and what you are passionate about.
                </Typography>
                <Box mt={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/your-github-username"
                        target="_blank"
                        sx={{ m: 1, background: "radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%)" }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<LinkedInIcon />}
                        href="https://linkedin.com/in/your-linkedin-username"
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
                        Download  my Resume
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};


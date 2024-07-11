import { Stack } from "@mui/material";
import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { BouncingSkeleton } from "../styles/StyledComponents";

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Playwrite+PE:wght@100..400&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-image: radial-gradient(circle farthest-corner at 10% 20%, rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2%);
    background-size: 100%;
    overflow: hidden;
    margin: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const LoadingContainer = styled.div`
  width: 100%;
  max-width: 520px;
  text-align: center;
  color: #fff;
  position: relative;
  margin: 0 32px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    animation: ${keyframes`
      0% { opacity: 0; width: 0; }
      33.3%, 66% { opacity: 0.8; width: 100%; }
      85% { width: 0; left: initial; right: 0; opacity: 1; }
      100% { opacity: 0; width: 0; }
    `} 2.4s infinite ease-in-out;
  }
`;

const moveLetters = keyframes`
  0% { transform: translateX(-15vw); opacity: 0; }
  33.3%, 66% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(15vw); opacity: 0; }
`;

const LoadingText = styled.div`
  font-family: Playwrite PE, Arial, sans-serif;
  font-size: 6vw;
  line-height: 64px;
  letter-spacing: 10px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-evenly;

  span {
    animation: ${moveLetters} 2.4s infinite ease-in-out;
    transform: translatex(0);
    position: relative;
    display: inline-block;
    opacity: 0;
    text-shadow: 0px 2px 10px rgba(46, 74, 81, 0.3);
  }

  span:nth-child(1) { animation-delay: 0.1s; }
  span:nth-child(2) { animation-delay: 0.2s; }
  span:nth-child(3) { animation-delay: 0.3s; }
  span:nth-child(4) { animation-delay: 0.4s; }
  span:nth-child(5) { animation-delay: 0.5s; }
  span:nth-child(6) { animation-delay: 0.6s; }
  span:nth-child(7) { animation-delay: 0.7s; }
`;

const LayoutLoader = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LoadingContainer>
          <LoadingText>
            <span>C</span>
            <span>h</span>
            <span>a</span>
            <span>t</span>
            <span>u</span>
            <span>r</span>
          </LoadingText>
        </LoadingContainer>
      </Container>
    </>
  );
};


const TypingLoader = () => {
  return (
    <Stack
      spacing={"0.5rem"}
      direction={"row"}
      padding={"0.5rem"}
      justifyContent={"center"}
    >
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.1s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.2s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.4s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.6s",
        }}
      />
    </Stack>
  );
};

export { LayoutLoader, TypingLoader };


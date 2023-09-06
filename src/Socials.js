import React from "react";
import Sidebar from "./Sidebar";
import Tiktok from "./Tiktok.json";
import Instagram from "./Instagram.json";
import { styled } from "styled-components";
import Lottie from "lottie-react";

const Socials = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <ContentDiv>
          <ContentText>Social media</ContentText>
          <SocialsDiv>
            <IconDiv>
              <IconLink
                href="https://www.tiktok.com/@laurentmartel_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lottie loop={true} animationData={Tiktok} />
              </IconLink>
            </IconDiv>
            <IconDiv>
              <IconLink
                href="https://www.instagram.com/laurentmartel_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lottie loop={true} animationData={Instagram} />
              </IconLink>
            </IconDiv>
          </SocialsDiv>
        </ContentDiv>
      </Wrapper>
    </>
  );
};

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; /* Center content vertically */
  flex-grow: 1;
`;
const SocialsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; /* Center content vertically */
  flex-grow: 1;
`;
const ContentText = styled.p`
  color: black;
  margin-top: 100px;
  font-size: 70px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
`;

const IconLink = styled.a`
  margin-top: 10px;
`;

const IconDiv = styled.div`
  max-width: 150px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
`;
export default Socials;

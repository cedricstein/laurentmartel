import React from "react";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";
import { Header } from "@mantine/core";
const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <LaurentBanner>
        <ContentText>Laurent Martel</ContentText>
        <Description> Gallery and Custom art shop</Description>
      </LaurentBanner>
      <ContentDiv>
        <ContentText></ContentText>
      </ContentDiv>
    </Wrapper>
  );
};
const LaurentBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center content vertically */
  height: 250px;
  background-color: navy;
  color: white;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center content vertically */
  flex-grow: 1;
`;

const ContentText = styled.p`
  color: white;
  margin-top: 100px;
  font-size: 70px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;
`;
const Description = styled.p`
  color: white;
  margin-top: 0px;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
`;

export default Home;

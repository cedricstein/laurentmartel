import React from "react";
import { Button } from "@mantine/core";
import { styled } from "styled-components";
import Car from "./Car.json";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
const Sidebar = () => {
  return (
    <SidebarDiv>
      <LeftSection>
        <Blacktext>LM Drawings</Blacktext>
        <CarDiv style={{ width: "150px" }}>
          <Lottie loop={true} animationData={Car} />
        </CarDiv>
        <ButtonDiv>
          <Button variant="subtle" color="dark">
            <StyledLink to={`/`}>Home</StyledLink>
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button variant="subtle" color="dark">
            Portfolio
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button variant="subtle" color="dark">
            <StyledLink to={`/order`}>Place an order</StyledLink>
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button variant="subtle" color="dark">
            Contact
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <StyledLink to={`/socials`}>Socials</StyledLink>
        </ButtonDiv>
      </LeftSection>
    </SidebarDiv>
  );
};

const Blacktext = styled.h2`
  color: black;
  margin-left: 10px;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 1rem;
  position: relative;
  font-family: "Poppins", sans-serif;
  border: none;
  margin-top: 20px;
  border-radius: 20px;
  padding: 10px;
  font-size: 15px;
`;
const ButtonDiv = styled.div`
  margin: 15px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CarDiv = styled.div`
  margin-top: 10px;
`;

const SidebarDiv = styled.div`
  background-color: pink;
  height: 81px;
  color: white;
  display: flex;
  position: fixed;
  flex-direction: row;
  width: 100%;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  z-index: 1;
`;

export default Sidebar;

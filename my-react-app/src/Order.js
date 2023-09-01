import React from "react";
import { styled } from "styled-components";
import Sidebar from "./Sidebar";
import { PricingCard } from "./ArticlePage";
import { ArticlesCardsGrid } from "./ArticlesCardsGrid";
const Order = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <ContentDiv>
          <CardWrapper>
            <ArticlesCardsGrid />
          </CardWrapper>
        </ContentDiv>
      </Wrapper>
    </>
  );
};

const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center content vertically */
  flex-grow: 1;
`;

const ContentText = styled.div`
  color: black; /* Set text color to white so it's visible on black background */
`;

const CardWrapper = styled.div`
  margin-top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100vh;
`;

export default Order;

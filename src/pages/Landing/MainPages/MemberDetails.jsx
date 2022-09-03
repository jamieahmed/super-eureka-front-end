import React from "react";
import styled from "styled-components";
import Recommendation from "../../../components/MainPages/Recommendation";

const GeneralContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  background-color: #f3e6e8;
  -webkit-box-shadow: 5px 5px 15px 5px #ffffff;
  box-shadow: 5px 5px 15px 5px #ffffff;
`;

const Container = styled.div`
  display: flex;
  background-color: #f3e6e8;
  gap: 10px;
  margin: 10px;
`;

const PhotoContainer = styled.div`
  padding: 20px;
  flex: 3;
  height: 400px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
`;
const OverviewContainer = styled.div`
  padding: 20px;
  flex: 4;
  height: 400px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
`;
const MoreaboutmeContainer = styled.div`
  padding: 20px;
  gap: 0px;
  flex: 7;
  height: 400px;
  background-color: #f3e6e8;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  margin: 10px;
  border-top: 2px solid white;
`;
const RecommendationContainer = styled.div`
  padding: 20px;
  gap: 0px;
  flex: 7;
  height: 400px;
  background-color: #f3e6e8;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  margin: 10px;
  border-top: 2px solid white;
`;

const MemberDetails = () => {
  return (
    <>
      <GeneralContainer>
        <Container>
          <PhotoContainer>Photo</PhotoContainer>
          <OverviewContainer>Overview</OverviewContainer>
        </Container>
        <MoreaboutmeContainer>More about me</MoreaboutmeContainer>
        <RecommendationContainer>
          <Recommendation />
        </RecommendationContainer>
      </GeneralContainer>
    </>
  );
};

export default MemberDetails;

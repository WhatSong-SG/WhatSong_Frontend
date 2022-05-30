import styled from "@emotion/styled";

export const CarousalContainer = styled.div`
  height: 100vh;
  width: calc(100vw - 120px);
  background-color: #000;
`;

export const CarousalInfoTitleBox = styled.div`
  width: fit-content;
  display: flex;
  margin: 0 auto;
  margin-top: 128px;
  color: white;
  font-size: 36px;
  position: relative;

  img {
    position: absolute;
    right: -10px;
    width: 24px;
    height: 24px;
  }
`;

export const CarousalBox = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 84px;
  padding: 32px 0;
  overflow: hidden;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;

  img {
    z-index: 10;
    cursor: pointer;
  }

  #nextButton {
    right: 0;
    position: absolute;
  }

  #prevButton {
    left: 0;
    position: absolute;
  }
`;

export const Carousal = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  left: 50%;
  transition: 1s;
`;

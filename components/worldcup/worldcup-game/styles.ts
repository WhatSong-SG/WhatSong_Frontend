import styled from "@emotion/styled";

export const DisplayFlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitleWrapper = styled.section`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  align-self: flex-start;

  & > h1 {
    margin: 27px;
    font-size: 2.5rem;
    font-weight: bold;
  }
  @media screen and (max-width: 1409px) {
    justify-content: center;
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    & > h1 {
      font-size: 1.875rem;
      font-weight: bold;
      margin: 0 7px 0 0;
    }
  }
  @media screen and (max-width: 370px) {
    & > h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 7px 0 0;
    }
  }
`;

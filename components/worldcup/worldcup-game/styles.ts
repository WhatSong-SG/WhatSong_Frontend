import styled from "@emotion/styled";

export const DisplayFlexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitleWrapper = styled.section`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  align-self: flex-start;

  & > h1 {
    margin: 0 27px 0 120px;
    font-size: 2.5rem;
    font-weight: bold;
  }

  @media screen and (max-width: 1409px) {
    justify-content: center;
    align-self: center;
    height: 9.25rem;

    & > h1 {
      margin: 27px;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-self: center;
    height: 9.25rem;
    & > h1 {
      font-size: 1.875rem;
      font-weight: bold;
      margin: 0 7px 0 60px;
    }
  }

  @media screen and (max-width: 370px) {
    & > h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

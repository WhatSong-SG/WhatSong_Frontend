import styled from "@emotion/styled";

export const WorldCupMainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  @media screen and (max-width: 768px) {
    height: calc(100vh - 54px);
  }
`;

export const GenreArticle = styled.article`
  width: 76%;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 1409px) {
    margin-top: 60px;
    width: 85%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 60px;
    width: 100%;
    align-items: flex-start;
  }
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

export const GenreListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  gap: 48px 127px;

  @media screen and (max-width: 1894px) {
    justify-content: space-around;
    margin-top: 80px;
  }

  @media screen and (max-width: 1400px) {
    justify-content: center;
    margin-top: 60px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 43px;
    gap: 0;
    justify-content: space-between;
  }

  @media screen and (max-width: 720px) {
    margin-top: 43px;
    gap: 0;
    justify-content: space-around;
  }
`;

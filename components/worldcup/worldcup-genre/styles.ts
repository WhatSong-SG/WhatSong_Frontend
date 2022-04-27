import styled from "@emotion/styled";

export const WorldCupMainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  min-height: 680px;
`;

export const GenreArticle = styled.article`
  width: 76%;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const HeaderTitleWrapper = styled.section`
  width: 470px;
  height: 60px;
  display: flex;
  align-items: center;
  align-self: flex-start;

  & > h1 {
    margin: 27px;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const GenreListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  gap: 48px 97px;
  justify-content: space-between;
`;

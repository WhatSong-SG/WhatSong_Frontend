import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 54px);
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin: 0;
    font-size: 2.1rem;
    color: #ffffff;
    padding: 45px 0;
  }
`;

export const MiddleFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 95%;

  @media screen and (max-width: 1700px) {
    flex-direction: column;
    align-items: center;
  }

  & > .finalImageWrapper {
    position: relative;
    margin-left: 54px;
  }

  & > .finalImageWrapper > img {
    width: 46rem;
    height: 46rem;
  }

  & > .finalImageWrapper > .music-title-artist-center {
    position: absolute;
    left: 50%;
    bottom: 6.2rem;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
      color: #ffffff;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      font-size: 2.75rem;
      margin: 0;
    }

    & > p {
      color: #ffffff;
      font-weight: 100;
      font-family: "Poppins", sans-serif;
      font-size: 2.25rem;
      margin: 0;
    }
  }
`;

export const ListWrapper = styled.div`
  width: 47.5rem;
  height: 732px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  overflow-x: hidden;

  & > div {
    grid-template-columns: 5% 16% 28% 30% 10% 10% !important;

    & > div > button {
      background: transparent;
    }
    & > * {
      color: white !important;
    }
    & > div > * {
      color: white !important;
    }
    & > div:last-child {
      align-items: center;
      & > div:nth-of-type(2) {
        text-align: center !important;
      }
    }
  }
`;

export const ListBody = styled.div`
  width: 100%;
  margin-top: 20px;
  display: inline-grid;
  grid-template-columns: 5% 8% 25% 40% 10% 10%;
  @media screen and (max-width: 1400px) {
    grid-template-columns: 5% 15% 21% 39% 8% 8%;
  }
`;

export const ListNumber = styled.div`
  width: 10px;
  height: 30px;
  margin-top: 15px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #1e1e1e;
`;

export const MusicImage = styled.div`
  width: 84px;
  height: 80px;
  border-radius: 5px;
`;

export const MusicInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const MusicTitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #1e1e1e;
`;

export const Singer = styled.div`
  margin-top: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 275;
  font-size: 16px;
  line-height: 24px;
  color: #1e1e1e;
`;

export const Date = styled.div`
  margin-top: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #6f6f6f;
`;

export const Share = styled.div`
  display: flex;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
`;

export const Like = styled.div`
  height: 102px;
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

export const Cursor = styled.div`
  cursor: pointer;
`;

export const LikeCount = styled.div`
  width: 30px;
  height: 35px;
  margin: 5px 0 5px -4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  color: #6f6f6f;
`;

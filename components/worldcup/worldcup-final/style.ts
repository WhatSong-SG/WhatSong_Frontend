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
  width: 100%;

  & > .finalImageWrapper {
    position: relative;
    margin-left: 54px;
  }

  & > .finalImageWrapper > img {
    width: 47.5rem;
    height: 47.5rem;
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

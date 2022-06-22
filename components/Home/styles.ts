import styled from "@emotion/styled";
import Image from "next/image";

export const HomeWrapper = styled.div`
  position: relative;
  padding-top: 150px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: calc(100vw - 120px);
  width: calc(100vw - 120px);
  min-height: 100vh;

  @media only screen and (max-width: 1279px) {
    padding-top: 30px;
    width: 100%;
  }
`;

export const Subtitle = styled.div`
  font-size: 32px;
  font-weight: 400;
  z-index: 10;
  padding-left: 10%;

  @media only screen and (max-width: 1279px) {
    margin: 0 auto;
    font-size: 28px;
    padding: 0;
  }
`;

export const SongInfoContainer = styled.div`
  display: flex;
  gap: 85px;
  padding-top: 80px;
  padding-left: 10%;
  z-index: 10;

  @media only screen and (max-width: 1279px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
    padding-top: 40px;
    gap: 45px;
  }
`;

export const SongCoverContainer = styled.div`
  display: flex;
`;

export const SongCover = styled.img`
  width: 400px;
  height: 400px;
  object-fit: fill;
  border-radius: 3px;

  @media only screen and (max-width: 1279px) {
    width: 350px;
    height: 350px;
  }
`;

export const SongNumber = styled.div`
  font-size: 80px;
  font-weight: 800;
`;

export const SongDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SongDataHeader = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 50px;

  .songData {
    display: flex;
    flex-direction: column;
  }
`;

export const SongTitle = styled.div`
  font-size: 28px;
  font-weight: 600;

  @media only screen and (max-width: 1023px) {
    font-size: 24px;
  }
`;

export const SongArtist = styled.div`
  font-size: 24px;
  font-weight: 275;

  @media only screen and (max-width: 1023px) {
    font-size: 16px;
  }
`;

export const NumberOneText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-size: 90px;
  font-weight: 700;

  @media only screen and (max-width: 1023px) {
    font-size: 72px;
  }
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #dfdfdf;
  margin: 30px 0;
`;

export const SongDataBody = styled.div`
  display: flex;
  flex-direction: column;

  .navigationBox {
    display: flex;
    gap: 36px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .navigationText {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const NavigationIcons = styled.div`
  display: flex;
  gap: 10px;

  .navigationIcon {
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  .navigationName {
    font-size: 12px;
    font-weight: 500;
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

export const CopyContainer = styled.div`
  margin-top: 32px;
  font-size: 16px;
  font-weight: 600;
`;

export const CopyBox = styled.div`
  width: clamp(100px, 70%, 450px);
  position: relative;
  margin-top: 10px;

  #copyInput {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    height: 32px;
    padding: 4px 30px 4px 10px;
    background-color: #ffffff;
  }

  img {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const BackgroundImage = styled.img<{ display: string }>`
  z-index: 1;
  position: absolute;
  bottom: 0;
  width: calc(100vw - 120px);
  display: ${(props) => props.display};

  @media only screen and (max-width: 1023px) {
    width: 100vw;
  }
`;

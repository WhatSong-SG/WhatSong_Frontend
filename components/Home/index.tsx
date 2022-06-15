import React, { FC, useRef } from "react";
import * as S from "./styles";
import testAlbumCover from "/public/assets/testAlbumCover.png";
import {
  copyIcon,
  backgroundBlack,
  grayAppleMusic,
  grayFacebook,
  grayTwitter,
  grayInstagram,
  graySpotify,
  grayYoutube,
} from "../../public/assets";
import { useRecoilValue } from "recoil";
import { WindowWidth } from "../../state/atoms/Global";

const Home: FC = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const windowWidth = useRecoilValue(WindowWidth);

  const copyLink = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <S.HomeWrapper>
      <S.Subtitle>
        Recommendation for <strong>TODAY</strong>
      </S.Subtitle>
      <S.SongInfoContainer>
        <S.SongCoverContainer>
          <S.SongCover src={testAlbumCover.src} />
        </S.SongCoverContainer>
        <S.SongDataContainer>
          <S.SongDataHeader>
            <S.NumberOneText>1</S.NumberOneText>
            <div className="songData">
              <S.SongTitle>Starboy</S.SongTitle>
              <S.SongArtist>The Weeknd</S.SongArtist>
            </div>
          </S.SongDataHeader>
          <S.DivideLine />
          <S.SongDataBody>
            <div className="navigationBox">
              <S.Navigation>
                <div className="navigationText">Listen On</div>
                <S.NavigationIcons>
                  <div className="navigationIcon">
                    <img src={grayYoutube.src} />
                    <div className="navigationName">Youtube</div>
                  </div>
                  <div className="navigationIcon">
                    <img src={graySpotify.src} />
                    <div className="navigationName">Spotify</div>
                  </div>
                  <div className="navigationIcon">
                    <img src={grayAppleMusic.src} />
                    <div className="navigationName">Apple Music</div>
                  </div>
                </S.NavigationIcons>
              </S.Navigation>
              <S.Navigation>
                <div className="navigationText">Share</div>
                <S.NavigationIcons>
                  <div className="navigationIcon">
                    <img src={grayTwitter.src} />
                    <div className="navigationName">Twitter</div>
                  </div>
                  <div className="navigationIcon">
                    <img src={grayFacebook.src} />
                    <div className="navigationName">Facebook</div>
                  </div>
                  <div className="navigationIcon">
                    <img src={grayInstagram.src} />
                    <div className="navigationName">Instagram</div>
                  </div>
                </S.NavigationIcons>
              </S.Navigation>
            </div>
            <S.CopyContainer>
              <div>Page Link</div>
              <S.CopyBox>
                <input
                  id="copyInput"
                  value={"https://stackoverflow.com/questions/45089866"}
                  ref={inputRef}
                  disabled
                />
                <img
                  src={copyIcon.src}
                  alt="copyIcon"
                  onClick={() => {
                    if (inputRef.current) {
                      copyLink(inputRef.current.value);
                    }
                  }}
                />
              </S.CopyBox>
            </S.CopyContainer>
          </S.SongDataBody>
        </S.SongDataContainer>
      </S.SongInfoContainer>
      <S.BackgroundImage src={backgroundBlack.src} display={windowWidth < 1023 ? "none" : "flex"} />
    </S.HomeWrapper>
  );
};

export default Home;

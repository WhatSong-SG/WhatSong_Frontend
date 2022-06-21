import React, { FC, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import {
  copyIcon,
  backgroundBlack,
  AppleMusic,
  Facebook,
  Twitter,
  Spotify,
  Youtube,
} from "../../public/assets";
import { useRecoilValue } from "recoil";
import { WindowWidth } from "../../state/atoms/Global";
import { DailySongType } from "../../interface/Home";

interface Props {
  dailySong: DailySongType;
}

const Home: FC<Props> = ({ dailySong }): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const windowWidth = useRecoilValue(WindowWidth);
  const [currentLink, setCurrentLink] = useState("");

  const copyLink = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    setCurrentLink(window.location.href);
  }, []);

  return (
    <S.HomeWrapper>
      <S.Subtitle>
        Recommendation for <strong>TODAY</strong>
      </S.Subtitle>
      <S.SongInfoContainer>
        <S.SongCoverContainer>
          <S.SongCover src={dailySong?.cover ?? ""} alt="album-cover" />
        </S.SongCoverContainer>
        <S.SongDataContainer>
          <S.SongDataHeader>
            <S.NumberOneText>1</S.NumberOneText>
            <div className="songData">
              <S.SongTitle>{dailySong?.track_name}</S.SongTitle>
              <S.SongArtist>{dailySong?.artist}</S.SongArtist>
            </div>
          </S.SongDataHeader>
          <S.DivideLine />
          <S.SongDataBody>
            <div className="navigationBox">
              <S.Navigation>
                <div className="navigationText">Listen On</div>
                <S.NavigationIcons>
                  <Youtube
                    color="#FF0000"
                    link={dailySong?.link.youtube_music ?? "https://music.youtube.com"}
                  />
                  <Spotify color="#1ED760" link={dailySong?.link.spotify ?? ""} />
                  <AppleMusic color="#E75D6A" link={dailySong?.link.apple_music ?? ""} />
                </S.NavigationIcons>
              </S.Navigation>
              <S.Navigation>
                <div className="navigationText">Share</div>
                <S.NavigationIcons>
                  <Twitter color="#469CE9" />
                  <Facebook color="#3275E2" />
                </S.NavigationIcons>
              </S.Navigation>
            </div>
            <S.CopyContainer>
              <div>Page Link</div>
              <S.CopyBox>
                <input id="copyInput" value={currentLink} ref={inputRef} disabled />
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
      <S.BackgroundImage src={backgroundBlack.src} display={windowWidth < 1279 ? "none" : "flex"} />
    </S.HomeWrapper>
  );
};

export default Home;

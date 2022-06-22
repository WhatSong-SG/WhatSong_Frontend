/* eslint-disable @next/next/no-img-element */
import { FC, useState, useCallback, useEffect } from "react";
import * as S from "./styles";
import ShareIcon from "../../public/icon/ShareIcon";
import Modal from "./LinkModal";
import {
  copyIcon,
  AppleMusic,
  Facebook,
  Twitter,
  Spotify,
  Youtube,
} from "../../public/assets";
import { getMusicInfo } from "../../utils/api/Worldcup";
import { MusicInfoType } from "../../interface/WorldCup";

interface Props {
  musicId: number;
}

const PopSite: FC<Props> = ({ musicId }): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [musicInfo, setMusicInfo] = useState<MusicInfoType>();

  useEffect(() => {
    if (isOpenModal === true) {
      getMusicInfo(musicId)
        .then((res) => {
          console.log(res);
          setMusicInfo(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isOpenModal, musicId]);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <S.Share>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <S.LMuiscImage>
              <img
                src={musicInfo?.cover}
                alt="musicImage"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </S.LMuiscImage>
            <S.LinkDiv>
              <S.Listen>Listen On</S.Listen>
              <S.LinkSite>
                <S.Tie>
                  <Youtube
                    color="#FF0000"
                    link={musicInfo?.link.youtube_music ?? ""}
                  />
                </S.Tie>
                <S.Tie>
                  <Spotify
                    color="#1ED760"
                    link={musicInfo?.link.spotify ?? ""}
                  />
                </S.Tie>
                <S.Tie>
                  <AppleMusic
                    color="#E75D6A"
                    link={musicInfo?.link.apple_music ?? ""}
                  />
                </S.Tie>
              </S.LinkSite>
              <S.share>Share</S.share>
              <S.LinkSite>
                <S.Tie>
                  <Twitter color="#469CE9" />
                </S.Tie>
                <S.Tie>
                  <Facebook color="#3275E2" />
                </S.Tie>
              </S.LinkSite>
              <S.PageLink>PageLink</S.PageLink>
              <S.LinkAddress>
                <S.Address>https:</S.Address>
              </S.LinkAddress>
            </S.LinkDiv>
          </Modal>
        )}
        <S.DialogButton onClick={onClickToggleModal}>
          <ShareIcon />
        </S.DialogButton>
      </S.Share>
    </>
  );
};

export default PopSite;

import { FC, useState, useCallback } from "react";
import * as S from "./styles";
import ShareIcon from "../../public/icon/ShareIcon";
import LMusicImage from "../../public/icon/LMusicImage";
import Modal from "./LinkModal";
import Youtube from "../../public/icon/Youtube";
import Spotify from "../../public/icon/Spotify";
import Apple from "../../public/icon/Apple";
import Twitter from "../../public/icon/Twitter";
import FaceBook from "../../public/icon/FaceBook";
import Instagram from "../../public/icon/Instagram";
import Copy from "../../public/icon/Copy";

const PopSite: FC = (): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <S.Share>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <S.LMuiscImage>
              <LMusicImage />
            </S.LMuiscImage>
            <S.LinkDiv>
              <S.Listen>Listen On</S.Listen>
              <S.LinkSite>
                <S.Tie>
                  <S.YouCircle>
                    <Youtube />
                    <S.LinkName>Youtube</S.LinkName>
                  </S.YouCircle>
                </S.Tie>
                <S.Tie>
                  <S.Circle>
                    <Spotify />
                    <S.LinkNames>Spotify</S.LinkNames>
                  </S.Circle>
                </S.Tie>
                <S.Tie>
                  <S.Circle>
                    <Apple />
                    <S.LinkNames>Apple Music</S.LinkNames>
                  </S.Circle>
                </S.Tie>
              </S.LinkSite>
              <S.share>Share</S.share>
              <S.LinkSite>
                <S.Tie>
                  <S.YouCircle>
                    <Twitter />
                    <S.LinkName>Twitter</S.LinkName>
                  </S.YouCircle>
                </S.Tie>
                <S.Tie>
                  <S.Circle>
                    <FaceBook />
                    <S.LinkNames2>Facebook</S.LinkNames2>
                  </S.Circle>
                </S.Tie>
                <S.Tie>
                  <S.Circle>
                    <Instagram />
                    <S.LinkNames2>Instagram</S.LinkNames2>
                  </S.Circle>
                </S.Tie>
              </S.LinkSite>
              <S.PageLink>PageLink</S.PageLink>
              <S.LinkAddress>
                <S.Address>https:</S.Address>
                <Copy />
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

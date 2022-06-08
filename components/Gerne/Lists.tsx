import { FC, useState, useCallback } from "react";
import * as S from "./styles";
import MusicImage from "../../public/icon/MusicImage";
import UpIcon from "../../public/icon/UpIcon";
import DownIcon from "../../public/icon/DownIcon";
import PopSite from "./PopSite";

const Lists: FC = (): JSX.Element => {
  return (
    <>
      <S.ListBody>
        <S.ListNumber>1</S.ListNumber>
        <S.MusicImage>
          <MusicImage />
        </S.MusicImage>
        <S.MusicInfo>
          <S.MusicTitle>Starboy</S.MusicTitle>
          <S.Singer>The Weekend</S.Singer>
        </S.MusicInfo>
        <S.Date>3 days ago</S.Date>
        <PopSite />
        <S.Like>
          <S.Cursor>
            <UpIcon />
          </S.Cursor>
          <S.LikeCount>60</S.LikeCount>
          <S.Cursor>
            <DownIcon />
          </S.Cursor>
        </S.Like>
      </S.ListBody>
    </>
  );
};

export default Lists;

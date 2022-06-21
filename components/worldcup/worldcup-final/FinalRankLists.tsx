/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import * as S from "./style";
import UpIcon from "../../../public/icon/UpIcon";
import DownIcon from "../../../public/icon/DownIcon";
import PopSite from "../../../components/Gerne/PopSite";
import { FinalRankListType } from "../../../interface/WorldCup";

interface Props {
  data: FinalRankListType;
  rank: number;
}

const FinalRankLists: FC<Props> = ({ data, rank }): JSX.Element => {
  return (
    <>
      <S.ListBody>
        <S.ListNumber>{rank}</S.ListNumber>
        <S.MusicImage>
          <img
            src={data.cover}
            alt="FinalImage"
            style={{ width: "100%", height: "100%" }}
          />
        </S.MusicImage>
        <S.MusicInfo>
          <S.MusicTitle>{data.track_name}</S.MusicTitle>
          <S.Singer>{data.artist}</S.Singer>
        </S.MusicInfo>
        <S.Date>{data.date.substr(0, 10)}</S.Date>
        <PopSite />
        <S.Like>
          <S.Cursor>
            <UpIcon />
          </S.Cursor>
          <S.LikeCount>{data.up}</S.LikeCount>
          <S.Cursor>
            <DownIcon />
          </S.Cursor>
        </S.Like>
      </S.ListBody>
    </>
  );
};

export default FinalRankLists;

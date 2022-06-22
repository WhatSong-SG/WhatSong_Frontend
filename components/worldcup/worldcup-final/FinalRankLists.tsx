/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import * as S from "./style";
import UpIcon from "../../../public/icon/UpIcon";
import DownIcon from "../../../public/icon/DownIcon";
import PopSite from "../../../components/Gerne/PopSite";
import { FinalRankListType } from "../../../interface/WorldCup";
import { musicUp } from "../../../utils/api/Worldcup";

interface Props {
  data: FinalRankListType;
  rank: number;
}

const FinalRankLists: FC<Props> = ({ data, rank }): JSX.Element => {
  const [addNumber, setAddNumber] = useState(0);
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
        <PopSite musicId={data.id} />
        <S.Like>
          <S.Cursor
            onClick={() => {
              setAddNumber(addNumber + 1);
              musicUp(data.id)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            }}
          >
            <UpIcon />
          </S.Cursor>
          <S.LikeCount>{data.up + addNumber}</S.LikeCount>
          <S.Cursor>
            <DownIcon />
          </S.Cursor>
        </S.Like>
      </S.ListBody>
    </>
  );
};

export default FinalRankLists;

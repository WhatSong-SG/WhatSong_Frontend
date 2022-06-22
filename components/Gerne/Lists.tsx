import { FC, useState, useEffect } from "react";
import * as S from "./styles";
import UpIcon from "../../public/icon/UpIcon";
import DownIcon from "../../public/icon/DownIcon";
import PopSite from "./PopSite";
import { MusicListObject } from "../../interface/MusicList";
import { MusicLists } from "../../utils/api/MusicLists";

interface Props {
  el: {
    artist: string;
    cover: string;
    date: string;
    id: number;
    track_name: string;
    up: number;
  };
  index: number;
}

const Lists: FC<Props> = ({ el, index }): JSX.Element => {
  const [addNumber, setAddNumber] = useState(0);

  return (
    <>
      <S.ListBody>
        <S.ListNumber>{index}</S.ListNumber>
        <S.MusicImage>
          <img
            src={el.cover}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </S.MusicImage>
        <S.MusicInfo>
          <S.MusicTitle>{el.track_name}</S.MusicTitle>
          <S.Singer>{el.artist}</S.Singer>
        </S.MusicInfo>
        <S.Date>3 days ago</S.Date>
        <PopSite musicId={el.id} />
        <S.Like>
          <S.Cursor
            onClick={() => {
              setAddNumber(addNumber + 1);
              MusicLists(el.id);
            }}
          >
            <UpIcon />
          </S.Cursor>
          <S.LikeCount>{el.up + addNumber}</S.LikeCount>
          <S.Cursor
            onClick={() => {
              setAddNumber(addNumber - 1);
              MusicLists(el.id);
            }}
          >
            <DownIcon />
          </S.Cursor>
        </S.Like>
      </S.ListBody>
    </>
  );
};

export default Lists;

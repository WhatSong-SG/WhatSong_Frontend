import { FC, useEffect, useState } from "react";
import * as S from "./styles";
import Lists from "./Lists";
import { MusicListObject } from "../../interface/MusicList";
import { MusicLists } from "../../utils/api/MusicLists";

const MusicList: FC = (): JSX.Element => {
  const [Music, setMusic] = useState<MusicListObject[]>([]);

  useEffect(() => {
    try {
      MusicLists().then((response) => {
        console.log(response);
        setMusic(response);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <S.MusicList>
        <S.ListHeader>
          <S.ListName>#</S.ListName>
          <S.ListName>Title & Singer</S.ListName>
          <S.ListName>Date</S.ListName>
          <S.ListName>Move To</S.ListName>
          <S.ListName>Like</S.ListName>
        </S.ListHeader>
        <S.Divide />
        {Music.map((el, index) => {
          return <Lists key={index} index={index + 1} el={el}></Lists>;
        })}
      </S.MusicList>
    </>
  );
};

export default MusicList;

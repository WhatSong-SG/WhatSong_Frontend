import { FC } from "react";
import * as S from "./styles";
import MusicImage from "../../public/icon/MusicImage";
import ShareIcon from "../../public/icon/ShareIcon";
import UpIcon from "../../public/icon/UpIcon";
import DownIcon from "../../public/icon/DownIcon";
import Lists from "./Lists";

const MusicList: FC = (): JSX.Element => {
  const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {List.map((el, index) => (
          <Lists key={index}>{el}</Lists>
        ))}
      </S.MusicList>
    </>
  );
};

export default MusicList;

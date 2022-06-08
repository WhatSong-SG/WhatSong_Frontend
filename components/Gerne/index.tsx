import { FC, useState, useCallback } from "react";
import * as S from "./styles";
import LeftArrow from "../../public/icon/LeftArrow";
import RightArrow from "../../public/icon/RightArrow";
import MusicList from "./MusicList";
import PlusModal from "./PlusModal";

const Genre: FC = (): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <S.Wrapper>
      <S.GenreArticle>
        <S.Header>
          <S.Title>Genre</S.Title>
          <S.Kinds>
            <S.ArrowDiv>
              <LeftArrow />
            </S.ArrowDiv>
            <S.Kpop>KPOP</S.Kpop>
            <S.Pop>POP</S.Pop>
            <S.Hiphop>HIPHOP</S.Hiphop>
            <S.Electronic>ELECTRONIC</S.Electronic>
            <S.Classical>CLASSICAL</S.Classical>
            <S.ArrowDiv>
              <RightArrow />
            </S.ArrowDiv>
          </S.Kinds>
          {isOpenModal && (
            <PlusModal onClickToggleModal={onClickToggleModal}>
              <S.Recommend>Recommend a new song</S.Recommend>
              <S.SmallTitle>Title</S.SmallTitle>
              <S.Input placeholder="Title" />
              <S.SmallTitle>Artist</S.SmallTitle>
              <S.Input placeholder="Artist" />
              <S.Confirm>confirm</S.Confirm>
            </PlusModal>
          )}
          <S.DialogButton onClick={onClickToggleModal}>
            <S.Add>+</S.Add>
          </S.DialogButton>
        </S.Header>
        <MusicList />
      </S.GenreArticle>
    </S.Wrapper>
  );
};

export default Genre;

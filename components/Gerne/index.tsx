import { FC, useState, useCallback, useRef, useEffect } from "react";
import * as S from "./styles";
import LeftArrow from "../../public/icon/LeftArrow";
import RightArrow from "../../public/icon/RightArrow";
import MusicList from "./MusicList";
import PlusModal from "./PlusModal";
import { getGenreList } from "../../utils/api/GenreList";
import { GenreList } from "../../interface/GenreList";

const Genre: FC = (): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [GenreListIndex, setGenreListIndex] = useState(0);
  const carousalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [carousalData, setCarousalData] = useState<GenreList[]>([]);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const next = () => {
    setGenreListIndex((prev) => {
      return prev + 1;
    });
  };

  const prev = () => {
    setGenreListIndex((prev) => {
      return prev - 1;
    });
  };

  useEffect(() => {
    try {
      getGenreList().then((response) => {
        console.log(response);
        setCarousalData(response);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <S.Wrapper>
      <S.GenreArticle>
        <S.Header>
          <S.Title>Genre</S.Title>
          <S.Kinds ref={carousalRef}>
            <S.ArrowDiv>
              <LeftArrow />
            </S.ArrowDiv>
            {carousalData.map((value, index) => {
              return <S.Kpop key={index}>{value.name}</S.Kpop>;
            })}
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

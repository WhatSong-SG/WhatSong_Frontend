import { FC, useState, useCallback, useRef, useEffect } from "react";
import * as S from "./styles";
import LeftArrow from "../../public/icon/LeftArrow";
import RightArrow from "../../public/icon/RightArrow";
import MusicList from "./MusicList";
import PlusModal from "./PlusModal";
import { getGenreList } from "../../utils/api/GenreList";
import { GenreList } from "../../interface/GenreList";
import { GenreListIndexAtom } from "../../state/atoms/GenreData";
import { useRecoilState } from "recoil";

const Genre: FC = (): JSX.Element => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [GenreListIndex, setGenreListIndex] =
    useRecoilState(GenreListIndexAtom);
  const carousalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [carousalData, setCarousalData] = useState<GenreList[]>([]);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const next = () => {
    setGenreListIndex((prev) => {
      if (prev !== 7) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prev = () => {
    setGenreListIndex((prev) => {
      if (prev !== 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const genreOnClick = (id: number) => {
    setGenreListIndex(id);
  };

  useEffect(() => {
    try {
      getGenreList().then((response) => {
        setCarousalData(response);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {}, [GenreListIndex]);

  return (
    <S.Wrapper>
      <S.GenreArticle>
        <S.Header>
          <S.Title>Genre</S.Title>
          <S.Kinds ref={carousalRef}>
            <S.ArrowDiv onClick={prev}>
              <LeftArrow />
            </S.ArrowDiv>
            {carousalData.map((value, index) => {
              return (
                <S.Kpop
                  key={index}
                  onClick={() => genreOnClick(index + 1)}
                  fontWeight={index + 1 === GenreListIndex ? 700 : 400}
                >
                  {value.name}
                </S.Kpop>
              );
            })}
            <S.ArrowDiv
              onClick={next}
              display={GenreListIndex === 0 ? "block" : "block"}
            >
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

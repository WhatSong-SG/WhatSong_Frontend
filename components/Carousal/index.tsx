import * as S from "./styles";
import { prevButton, nextButton, starIcon } from "../../public/assets";
import { FC, useEffect, useRef, useState } from "react";
import Card from "../Card";
import { Top10SongsType } from "../../interface/Home";

interface Props {
  top10Songs: Top10SongsType;
}

const Carousal: FC<Props> = ({ top10Songs }): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setCurrentIndex((prev) => {
      return prev + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      return prev - 1;
    });
  };

  const selectCard = (id: number) => {
    setCurrentIndex(id);
  };

  useEffect(() => {
    if (carousalRef.current) {
      carousalRef.current.style.transform = `translateX(-${currentIndex * 350 + 175}px)`;
    }
  }, [currentIndex]);

  return (
    <S.CarousalContainer>
      <S.CarousalInfoTitleBox>
        <div>
          TOP <strong>10</strong>
        </div>
        <img src={starIcon.src} />
      </S.CarousalInfoTitleBox>
      <S.CarousalBox>
        <S.MoveImg
          id="prevButton"
          src={prevButton.src}
          onClick={prev}
          display={currentIndex === 0 ? "none" : "block"}
        />
        <S.Carousal ref={carousalRef}>
          {top10Songs.music.map((value, index) => {
            return (
              <Card
                ref={cardRef}
                img_src={value.cover}
                title={value.track_name}
                artist={value.artist}
                isCurrent={index === currentIndex}
                key={index}
                onClick={() => selectCard(index)}
              />
            );
          })}
        </S.Carousal>
        <S.MoveImg
          id="nextButton"
          src={nextButton.src}
          onClick={next}
          display={currentIndex === 9 ? "none" : "block"}
        />
      </S.CarousalBox>
    </S.CarousalContainer>
  );
};

export default Carousal;

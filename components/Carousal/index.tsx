import * as S from "./styles";
import { prevButton, nextButton, starIcon } from "../../public/assets";
import { FC, useEffect, useRef, useState } from "react";
import Card from "./Card";
import testAlbumCover from "/public/assets/testAlbumCover.png";
import starBoy from "/public/assets/starboy.png";

const Carousal: FC = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const testObject = [
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: testAlbumCover.src,
    },
    {
      title: "Good Day Mate",
      artist: "박효신",
      image_src: starBoy.src,
    },
  ];
  const [testData, setTestData] = useState(testObject);

  const next = () => {
    if (currentIndex % 10 === 7) {
      setTestData((prev) => {
        return [...prev, ...testObject];
      });
    }

    setCurrentIndex((prev) => {
      return prev + 1;
    });
  };

  const prev = () => {
    if (currentIndex === 0) return;

    setCurrentIndex((prev) => {
      return prev - 1;
    });
  };

  const selectCard = (id: number) => {
    if (currentIndex % 10 === 7) {
      setTestData((prev) => {
        return [...prev, ...testObject];
      });
    }

    setCurrentIndex(id);
  };

  useEffect(() => {
    if (carousalRef.current) {
      carousalRef.current.style.transform = `translateX(-${currentIndex * 400 + 200}px)`;
    }
  }, [currentIndex]);

  useEffect(() => {
    console.log(testData);
  }, [testData])

  return (
    <S.CarousalContainer>
      <S.CarousalInfoTitleBox>
        <div>
          TOP <strong>10</strong>
        </div>
        <img src={starIcon.src} />
      </S.CarousalInfoTitleBox>
      <S.CarousalBox>
        <img id="prevButton" src={prevButton.src} onClick={prev} />
        <S.Carousal ref={carousalRef}>
          {testData.map((value, index) => {
            return (
              <Card
                img_src={value.image_src}
                title={value.title}
                artist={value.artist}
                ref={cardRef}
                isCurrent={index === currentIndex}
                key={index}
                onClick={() => selectCard(index)}
              />
            );
          })}
        </S.Carousal>
        <img id="nextButton" src={nextButton.src} onClick={next} />
      </S.CarousalBox>
    </S.CarousalContainer>
  );
};

export default Carousal;

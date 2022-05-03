import { FC } from "react";
import styled from "@emotion/styled";
import KPop from "../../../public/icon/Kpop.png";
import Image from "next/image";

interface Props {
  genre: string;
  size: string;
}

const GenreListItem: FC<Props> = ({ genre, size }) => {
  return (
    <GenreListItemWrapper size={size}>
      <div className="GenreImageWrapper">
        <Image
          quality={100}
          width={`${size}px`}
          height={`${size}px`}
          objectFit="cover"
          src={KPop}
          alt="GenreImage"
        />
        <div id="round" />
      </div>
      <h2>{genre}</h2>
    </GenreListItemWrapper>
  );
};

const GenreListItemWrapper = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (Number(props.size) <= 140 ? "200px" : "240px")};
  align-items: center;
  cursor: pointer;
  .GenreImageWrapper {
    width: 100%;
    height: 15.0275rem;
    position: relative;
    & > span {
      position: absolute;
      border-radius: 5px;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    #round {
      position: absolute;
      width: ${(props) => `${Number(props.size) + 30}px`};
      height: ${(props) => `${Number(props.size) + 30}px`};
      background: #e1e1e1;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
      border-radius: 150px;
      z-index: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  & > h2 {
    font-weight: bold;
    font-size: 24px;
    color: #000000;
  }
`;

export default GenreListItem;

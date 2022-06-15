/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import styled from "@emotion/styled";
import { Trophy2 } from "../../../public/icon";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { TotalRound } from "../../../module/atom/worldcup/worldcup";
import { createWorldCupGame } from "../../../utils/api/Worldcup";

interface Props {
  genre: string;
  setIsRoundModalOpen: (value: boolean) => void;
}

const WorldCupModal: FC<Props> = ({ genre, setIsRoundModalOpen }) => {
  const [round, setRound] = useState(64);
  const setTotalRound = useSetRecoilState(TotalRound);
  return (
    <Container>
      <Background />
      <ModalContainer>
        <div className="ModalHeader">
          <img src={Trophy2.src} alt="트로피 사진" />
          <h1>{genre} World Cup</h1>
        </div>
        <div className="ModalBody">
          <b>Select a Total of Round</b>
          <select
            onChange={(e) => {
              setRound(parseInt(e.target.value));
            }}
          >
            <option value="64">64강</option>
            <option value="32">32강</option>
            <option value="16">16강</option>
            <option value="8">8강</option>
            <option value="4">4강</option>
          </select>
        </div>
        <button
          onClick={() => {
            setIsRoundModalOpen(false);
            setTotalRound(round);
            createWorldCupGame(round)
              .then((res) => {
                console.log(res);
              })
              .catch((e) => {
                console.log(e);
              });
          }}
        >
          Start
        </button>
        <Link href="/tournament" passHref>
          <button>Select Genre</button>
        </Link>
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 50;
`;

const ModalContainer = styled.div`
  width: 600px;
  height: 320px;
  z-index: 200;
  background-color: white;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  margin: 60px auto;

  button {
    border: 0;
    outline: none;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10px;
    cursor: pointer;
  }

  button:nth-of-type(1) {
    background-color: #000000;
    border-color: #000000;
    color: #fff;
    font-size: 14px;
    padding: 6px 12px;
    text-align: center;
    width: 66.66666667%;
  }
  button:nth-of-type(2) {
    color: inherit;
    background: #fff;
    border: 1px solid #e7eaec;
    font-size: 14px;
    padding: 6px 12px;
    text-align: center;
    width: 25%;
  }

  .ModalBody {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e5e5e5;
    margin-top: 15px;
    gap: 5px;
    padding: 0 0 20px 10px;

    & > select {
      width: 98%;
      padding: 6px 12px;
      transition: border-color 0.15s ease-in-out 0s,
        box-shadow 0.15s ease-in-out 0s;
      border: 1px solid #e5e6e7;
      &:focus {
        border: 1px solid #1ab394;
      }
    }
  }

  .ModalHeader {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-bottom: 1px solid #e5e5e5;

    & > img {
      width: 97px;
      height: 86px;
    }
    & > h1 {
      color: #676a6c;
      font-size: 1.625rem;
      margin: 0;
    }
  }
`;

export default WorldCupModal;

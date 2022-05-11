import { FC } from "react";
import styled from "@emotion/styled";

interface Props {}

const WorldCupTitleData: FC<Props> = () => {
  return (
    <WorldCupTitleWrapper>
      <b>KPOP</b>
      <span>32 round</span>
      <span>1/16</span>
    </WorldCupTitleWrapper>
  );
};

const WorldCupTitleWrapper = styled.div`
  display: flex;
  width: 28rem;
  height: 84px;
  color: white;
  font-size: 1.9rem;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;

  & > span {
    color: #bbbbbb;
  }

  @media screen and (max-width: 1409px) {
    width: 30rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 765px) {
    width: 25rem;
    font-size: 1.7rem;
  }
`;

export default WorldCupTitleData;

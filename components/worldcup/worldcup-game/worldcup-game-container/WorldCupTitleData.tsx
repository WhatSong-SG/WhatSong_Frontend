import { FC } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface Props {}

const WorldCupTitleData: FC<Props> = () => {
  const router = useRouter();
  console.log(router.query.gener);
  return (
    <WorldCupTitleWrapper>
      <b>{router.query.gener}</b>
      <span>32 round</span>
      <span>1/16</span>
    </WorldCupTitleWrapper>
  );
};

const WorldCupTitleWrapper = styled.div`
  display: flex;
  width: 36rem;
  height: 125px;
  color: white;
  font-size: 2.1rem;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s;

  & > span {
    color: #bbbbbb;
  }

  @media screen and (max-width: 1409px) {
    width: 28rem;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 765px) {
    width: 23rem;
    font-size: 1.7rem;
  }
`;

export default WorldCupTitleData;

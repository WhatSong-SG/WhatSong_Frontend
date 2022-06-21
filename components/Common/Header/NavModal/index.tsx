import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";

interface Props {
  display: string;
  closeNavModal: () => void;
}

const NavModal: FC<Props> = ({ display, closeNavModal }): JSX.Element => {
  return (
    <NavModalContainer display={display} onMouseLeave={closeNavModal}>
      <Link href={"/home"}>
        <a onClick={closeNavModal}>home</a>
      </Link>
      <Link href={"/genre"}>
        <a onClick={closeNavModal}>genre</a>
      </Link>
      <Link href={"/tournament"}>
        <a onClick={closeNavModal}>tournament</a>
      </Link>
    </NavModalContainer>
  );
};

export default NavModal;

const NavModalContainer = styled.div<{ display: string }>`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  display: ${(props) => props.display};
  flex-direction: column;
  gap: 18px;
  z-index: 99;
  background-color: #1e1e1e;
  padding: 16px 20px;

  a {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    text-align: center;

    &:hover {
      background-color: #3c3c3c;
    }
  }
`;

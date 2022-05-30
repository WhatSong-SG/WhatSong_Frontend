import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Hamburger from "../../../public/icon/Hamburger";
import * as S from "./styles";

const Header: FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => removeEventListener("resize", () => {});
  }, []);

  return (
    <>
      {windowWidth <= 1023 ? (
        <S.TabletHeaderContainer>
          <S.TabletHeaderTitle>WhatSong</S.TabletHeaderTitle>
          <S.TabletMenu>
            <Hamburger />
          </S.TabletMenu>
        </S.TabletHeaderContainer>
      ) : (
        <S.PCHeaderContainer>
          <Link href="/home">
            <S.PCHeaderTitle>WhatSong</S.PCHeaderTitle>
          </Link>
          <S.PCHeaderBox>
            <Link href="/home">
              <S.PCHeaderNavigation
                decorationType={router.pathname === "/home" ? "underline" : "none"}
              >
                Home
              </S.PCHeaderNavigation>
            </Link>
            <Link href="/genre">
              <S.PCHeaderNavigation
                decorationType={router.pathname === "/genre" ? "underline" : "none"}
              >
                Genre
              </S.PCHeaderNavigation>
            </Link>
            <Link href="/tournament">
              <S.PCHeaderNavigation
                decorationType={router.pathname === "/tournament" ? "underline" : "none"}
              >
                Tournament
              </S.PCHeaderNavigation>
            </Link>
          </S.PCHeaderBox>
        </S.PCHeaderContainer>
      )}
    </>
  );
};

export default Header;

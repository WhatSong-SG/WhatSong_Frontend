import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Hamburger from "../../../public/icon/Hamburger";
import * as S from "./styles";
import { WindowWidth } from "../../../state/atoms/Global";
import { useRecoilState } from "recoil";
import NavModal from "./NavModal";

const Header: FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useRecoilState(WindowWidth);
  const [navModalOpen, setNavModalOpen] = useState(false);
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
          <S.TabletMenu onMouseLeave={() => setNavModalOpen(false)}>
            <div onMouseEnter={() => setNavModalOpen(true)} style={{ cursor: "pointer" }}>
              <Hamburger />
            </div>
            <NavModal
              display={navModalOpen ? "flex" : "none"}
              closeNavModal={() => setNavModalOpen(false)}
            />
          </S.TabletMenu>
        </S.TabletHeaderContainer>
      ) : (
        <S.PCHeaderContainer>
          <Link href="/home" passHref>
            <S.PCHeaderTitle>WhatSong</S.PCHeaderTitle>
          </Link>
          <S.PCHeaderBox>
            <Link href="/home" passHref>
              <S.PCHeaderNavigation
                border={router.pathname === "/home" ? "2px solid white" : "none"}
              >
                Home
              </S.PCHeaderNavigation>
            </Link>
            <Link href="/genre" passHref>
              <S.PCHeaderNavigation
                border={router.pathname === "/genre" ? "2px solid white" : "none"}
              >
                Genre
              </S.PCHeaderNavigation>
            </Link>
            <Link href="/tournament" passHref>
              <S.PCHeaderNavigation
                border={
                  router.pathname.includes("/tournament") === true ? "2px solid white" : "none"
                }
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

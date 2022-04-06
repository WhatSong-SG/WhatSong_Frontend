import { FC } from "react";
import * as S from "./styles";

const Header: FC = (): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>WhatSong</S.HeaderTitle>
      <S.HeaderBox>
        <S.HeaderNavigation>Home</S.HeaderNavigation>
        <S.HeaderNavigation>Genre</S.HeaderNavigation>
        <S.HeaderNavigation>World Cup</S.HeaderNavigation>
      </S.HeaderBox>
    </S.HeaderContainer>
  );
};

export default Header;

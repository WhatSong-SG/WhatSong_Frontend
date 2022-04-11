import { FC } from "react";
import Header from "../Header";
import * as S from "./styles";
const Layout: FC = ({ children }): JSX.Element => {
  return (
    <S.LayoutContainer>
      <Header />
      {children}
    </S.LayoutContainer>
  );
};

export default Layout;

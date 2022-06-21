import { FC } from "react";
import * as S from "./styles";
import dynamic from "next/dynamic";

const HeaderWithNoSSR = dynamic(() => import("../Header"), { ssr: false });

const Layout: FC = ({ children }): JSX.Element => {
  return (
    <S.LayoutContainer>
      <HeaderWithNoSSR />
      {children}
    </S.LayoutContainer>
  );
};

export default Layout;

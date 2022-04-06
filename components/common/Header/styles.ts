import styled from "@emotion/styled";
import { color } from "../../../styles/color";

export const HeaderContainer = styled.div`
  width: 120px;
  min-height: 100vh;
  background: ${color.black000};
  box-sizing: border-box;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

export const HeaderTitle = styled.div`
  font-size: 36px;
  color: ${color.white000};
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  margin: 0 auto;
  font-weight: 700;
`;

export const HeaderNavigation = styled.div`
  font-size: 24px;
  color: ${color.white000};
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

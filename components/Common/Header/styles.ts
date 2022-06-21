import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const PCHeaderContainer = styled.div`
  width: 120px;
  height: 100vh;
  box-sizing: border-box;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 70px;
  background-color: ${theme.colors.black000};
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const PCHeaderTitle = styled.div`
  font-size: 36px;
  color: ${theme.colors.white000};
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  margin: 0 auto;
  font-weight: 700;
  cursor: pointer;
`;

export const PCHeaderNavigation = styled.div<{ border: string }>`
  font-size: 24px;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  color: ${theme.colors.white000};
  cursor: pointer;
  border-left: ${(props) => props.border};
  width: 32px;
  display: flex;
  align-items: center;
`;

export const PCHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

export const TabletHeaderContainer = styled.div`
  height: 54px;
  background-color: ${theme.colors.black000};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const TabletHeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  color: ${theme.colors.white000};
  cursor: pointer;
  position: relative;
`;

export const TabletMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

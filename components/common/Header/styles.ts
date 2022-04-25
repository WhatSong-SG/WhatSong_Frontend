import styled from "@emotion/styled";
import theme from "../../../styles/theme";

export const PCHeaderContainer = styled.div`
  width: 120px;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 70px;
  background-color: ${theme.colors.black000};
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

export const PCHeaderNavigation = styled.div<{ decorationType: string }>`
  font-size: 24px;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  color: ${theme.colors.white000};
  text-decoration: ${(props) => props.decorationType};
  cursor: pointer;
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
  min-width: 100vw;
  background-color: ${theme.colors.black000};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

export const TabletHeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  color: ${theme.colors.white000};
  cursor: pointer;
`;

export const TabletMenu = styled.div`
  cursor: pointer;
`;

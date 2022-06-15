import styled from "@emotion/styled";

export const CardContainer = styled.div<{ opacity: number }>`
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => props.opacity};
  transition: 1s;
`;

export const CardImage = styled.img<{ width: string }>`
  width: ${(props) => props.width};
  aspect-ratio: 1/1;
  border-radius: 10px;
  transition: 1s;
  cursor: pointer;
`;

export const CardTitle = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  margin-top: 16px;
`;

export const CardArtist = styled.div`
  color: #ffffff;
  font-weight: 200;
`;

import styled from "@emotion/styled";

export const MainContainer = styled.div`
  height: fit-content;
  width: 90%;
  display: flex;
  justify-content: center;
  position: relative;
  gap: 4px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }

  b {
    font-family: "Rakkas";
    font-size: 8rem;
    position: absolute;
    color: #e4e4e4;
    z-index: 10;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }
`;

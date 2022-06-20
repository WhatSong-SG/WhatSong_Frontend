import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1023px) {
    display: flex;
    flex-direction: row;
  }
`;

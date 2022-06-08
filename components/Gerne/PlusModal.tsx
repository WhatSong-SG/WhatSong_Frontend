import React, { PropsWithChildren } from "react";
import * as S from "./styles";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function PlusModal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <S.Div>
      <S.PlusDialogBox>{children}</S.PlusDialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.Div>
  );
}

export default PlusModal;

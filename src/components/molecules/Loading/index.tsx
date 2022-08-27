import { SpinnerIcon } from "~/components/atoms/SpinnerIcon";
import * as S from "./styles";

export const Loading: React.FC<{}> = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingText>Carregando</S.LoadingText>
      <SpinnerIcon />
    </S.LoadingContainer>
  );
};

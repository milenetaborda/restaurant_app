import Image from "next/image";
import { InputSearch } from "~/components/atoms/InputSearch";
import { useHeaderHomeScreen } from "./hooks";
import * as S from "./styles";

export const HeaderHomeScreen = () => {
  const { handleBackToHome, isSearch } = useHeaderHomeScreen();

  return (
    <S.HeaderContainer isHeightVariant={isSearch}>
      <S.HeaderContent>
        <S.Section>
          <S.LogoImage onClick={handleBackToHome}>
            <Image src="/assets/logo.svg" alt="Logo" height={34} width={87} />
          </S.LogoImage>

          <S.TextContainer isVisibilityHidden={isSearch}>
            <S.HeaderTitle>Descubra novos sabores</S.HeaderTitle>
            <S.HeaderSubtitle>
              Aqui eu converso com você sobre nossa proposta
            </S.HeaderSubtitle>
          </S.TextContainer>
        </S.Section>

        <S.SearchContainer>
          <InputSearch placeholder="Encontre um restaurante" />
        </S.SearchContainer>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

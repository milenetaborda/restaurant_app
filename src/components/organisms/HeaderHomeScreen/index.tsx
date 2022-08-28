import Image from "next/image";
import { InputSearchRestaurant } from "~/components/molecules/InputSearchRestaurant";
import { useHeaderHomeScreen } from "./hooks";
import * as S from "./styles";

export const HeaderHomeScreen = () => {
  const { handleBackToHome, isTextWasSearched } = useHeaderHomeScreen();

  return (
    <S.HeaderContainer isHeightVariant={isTextWasSearched}>
      <S.HeaderContent>
        <S.Section>
          <S.LogoImage onClick={handleBackToHome}>
            <Image src="/assets/logo.svg" alt="Logo" height={34} width={87} />
          </S.LogoImage>

          <S.TextContainer isVisibilityHidden={isTextWasSearched}>
            <S.HeaderTitle>Descubra novos sabores</S.HeaderTitle>
            <S.HeaderSubtitle>
              Aqui eu converso com você sobre nossa proposta
            </S.HeaderSubtitle>
          </S.TextContainer>
        </S.Section>

        <InputSearchRestaurant isInputInHeader={true} />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

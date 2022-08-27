import Link from "next/link";
import { ChevronLeftIcon } from "../ChevronLeftIcon";
import * as S from "./styles";

interface IBreadcrumbs extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  hrefUrl: string;
  themeColor?: string;
  onClick?: () => void;
}

export const Breadcrumbs = ({
  text,
  hrefUrl,
  themeColor = "white",
  onClick,
}: IBreadcrumbs) => {
  return (
    <Link href={hrefUrl}>
      <S.BreadcrumbsContainer onClick={onClick}>
        <ChevronLeftIcon themeColor={themeColor} />
        <S.BreadcrumbText>{text}</S.BreadcrumbText>
      </S.BreadcrumbsContainer>
    </Link>
  );
};
